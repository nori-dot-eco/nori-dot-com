import { add, divide, multiply, subtract } from '@nori-dot-com/math';
import type { Output } from '@nori-dot-com/ggit';
import { ContextualError } from '@nori-dot-com/errors';

import { CURRENT_YEAR, METHODOLOGY_VERSION } from './constants';
import { validateParsedModelRunsData } from './validations';

import { convertM2ToAcres, parseYearlyMapUnitData } from './index';

export * from './constants';
export const ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C = divide(44, 12);

export type AnnualTotals = Record<string, number>;

/**
 * Meant to be used in place of `AnnualTotals`, this interface is preferable
 * to allow for better type inference with graphql.
 *
 */
export interface AnnualTotalItem {
  year: string;
  value: number;
}

export type UnadjustedGrandfatheredTotals = Record<
  string,
  {
    amount: number;
    method: 'projection' | 'somsc';
    averagePerAcre: number;
    totalAcres: number;
  }
>;

export type MapUnitAnnualTotals = Record<string, AnnualTotals>;

export interface ScenarioSummaries {
  baseline: string[][];
  future: string[][];
}

export type AnnualSomscDifferencesForMapUnit = Record<string, MapUnitSummary>;

export type SomscAnnualDifferencesForPolygon = Record<
  string,
  AnnualSomscDifferencesForMapUnit
>;

export interface MapUnitSummary {
  area: number;
  socChanges: Record<string, number>;
}

export interface UnadjustedQuantificationSummary {
  tenYearProjectedTonnesTotalEstimate: number;
  tenYearProjectedTonnesPerYear: number;
  tenYearProjectedTonnesPerYearPerAcre: number;
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: AnnualTotals[];
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals;
  grandfatherableYears: number[];
  grandfatheredTonnes: number;
  unadjustedGrandfatheredTonnesPerYear: UnadjustedGrandfatheredTotals;
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: number;
  switchYear: number;
  totalM2: number;
  totalAcres: number;
  numberOfGrandfatheredYears: number;
  modeledYears: number[];
  grandfatheredTonnesPerYearPerAcreAverage: number;
  methodologyVersion: string;
  /**
   * The net carbon removed by year, calculated by the algorithm in
   * [net-quantification.ts](./net-quantification.ts)
   *
   */
  netRemovalsByYear?: AnnualTotalItem[];
}

/**
 * Summing the annual differences from the grandfatherable years
 *
 */
const getsomscAnnualDifferencesBetweenFutureAndBaselineScenarios = ({
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  grandfatherableYears,
}: {
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon'];
  grandfatherableYears: UnadjustedQuantificationSummary['grandfatherableYears'];
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals;
} => {
  const somscAnnualDifferencesBetweenFutureAndBaselineScenarios =
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon.reduce(
      (annualTotals: AnnualTotals, polygonAnnuals) => {
        const polygonTotal = Object.entries(polygonAnnuals).reduce(
          (polygonAnnualTotals, [year, value]) => {
            if (grandfatherableYears.includes(Number(year))) {
              polygonAnnualTotals[year] = add(
                polygonAnnualTotals[year] || 0,
                value
              );
            }
            return polygonAnnualTotals;
          },
          annualTotals
        );
        return polygonTotal;
      },
      {}
    );
  return { somscAnnualDifferencesBetweenFutureAndBaselineScenarios };
};

const getTotalM2 = ({
  somscAnnualDifferencesForScenarios,
  baselineScenarioName = 'Baseline',
}: {
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
  baselineScenarioName: string;
}): { totalM2: number } => {
  const baselineSummariesForAllPolygons =
    somscAnnualDifferencesForScenarios.flatMap((s) =>
      Object.values(s[`${baselineScenarioName} : FILE RESULTS`])
    );
  const totalM2 = baselineSummariesForAllPolygons.reduce(
    (total, baselineSummariesForPolygon) => {
      return add(baselineSummariesForPolygon.area, total);
    },
    0
  );
  return { totalM2 };
};

/**
 * Calculates the year-to-year change by taking the difference of next year's value minus
 * this year's value
 *
 */
const calculateSomscAnnualDifferencesForScenarioMapUnits = ({
  mapUnits,
}: {
  mapUnits: Output.ParsedMapUnit[];
}): {
  differencesForMapUnits: AnnualSomscDifferencesForMapUnit;
} => {
  const differencesForMapUnits = mapUnits.reduce(
    (
      difference: AnnualSomscDifferencesForMapUnit,
      { '@id': mapUnitId, '@area': area, somsc }
    ) => {
      difference[mapUnitId] = {
        area: Number(area),
        socChanges: Object.entries(somsc)
          .slice(0, -1) // we can neither calculate nor give credit for the most recent year so we ignore the last entry
          .reduce(
            (socChanges: MapUnitSummary['socChanges'], [year, amount]) => {
              socChanges[year] = subtract(somsc[add(Number(year), 1)], amount);
              return socChanges;
            },
            {}
          ),
      };
      return difference;
    },
    {}
  );
  return { differencesForMapUnits };
};

/**
 * Finds the current, baseline and future scenarios and iterates over each map unit/polygon
 * to calculate the difference between each year.
 *
 * Note: previous limitations in Soil Metrics required splitting each polygon in a parcel's
 * GeoJSON in to different map units. Map units and polygons can be considered synonymous here
 *
 */
const calculateSomscAnnualDifferencesForScenarioPolygons = ({
  scenarios,
}: {
  scenarios: Output.Scenario<Output.ParsedMapUnit>[];
}): {
  differencesForPolygon: SomscAnnualDifferencesForPolygon;
} => {
  const scenarioResults = scenarios.filter((s) => {
    return s['@name'].includes('FILE RESULTS');
  });
  const differencesForPolygon = scenarioResults.reduce(
    (
      accumulator: SomscAnnualDifferencesForPolygon,
      { '@name': scenarioName, MapUnit: mapUnits }
    ) => {
      const { differencesForMapUnits } =
        calculateSomscAnnualDifferencesForScenarioMapUnits({ mapUnits });
      accumulator[scenarioName] = differencesForMapUnits;
      return accumulator;
    },
    {}
  );
  return { differencesForPolygon };
};

/**
 * Iterates over each model run and pulls out the `Scenario` list to calculate the
 * differences between each year
 *
 */
const calculateSomscAnnualDifferencesForScenarios = ({
  modelRuns,
}: {
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
}): {
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
} => {
  const somscAnnualDifferencesForScenarios = modelRuns.map(
    ({ Scenario: [...scenarios] }) => {
      const { differencesForPolygon } =
        calculateSomscAnnualDifferencesForScenarioPolygons({
          scenarios,
        });
      return differencesForPolygon;
    }
  );
  return { somscAnnualDifferencesForScenarios };
};
/**
 * Uses the baseline and future scenarios to calculate difference over the baseline
 * tonnes of carbon in each polygon per year
 *
 * Note: Upstream services send two scenarios to Soil Metrics: one without practice changes
 * and one with. The difference between these two are used to estimate the carbon
 * sequestered.
 *
 */
const getsomscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon = ({
  modeledYears,
  futureScenarioName,
  baselineScenarioName,
  somscAnnualDifferencesForScenarios,
}: {
  modeledYears: number[];
  futureScenarioName: string;
  baselineScenarioName: string;
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: AnnualTotals[];
} => {
  const somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon =
    somscAnnualDifferencesForScenarios.map((polygonSummary) => {
      const futureAnnualSomscDifferences =
        polygonSummary[`${futureScenarioName} : FILE RESULTS`];
      const baselineAnnualSomscDifferences =
        polygonSummary[`${baselineScenarioName} : FILE RESULTS`];

      const mapUnitAnnualDifferences = Object.keys(
        futureAnnualSomscDifferences
      ).reduce((mapUnitTotals: MapUnitAnnualTotals, mapUnitId) => {
        const { socChanges: futureMapUnitSocChanges, area: mapUnitAreaInM2 } =
          futureAnnualSomscDifferences[mapUnitId];
        const baselineMapUnitSocChanges =
          baselineAnnualSomscDifferences[mapUnitId].socChanges;

        // todo extract to function
        mapUnitTotals[mapUnitId] = Object.keys(futureMapUnitSocChanges)
          .filter((annualTotals) => modeledYears.includes(Number(annualTotals)))
          .reduce((annualTotals: AnnualTotals, year) => {
            const additionalGramsOfCarbonPerM2 = subtract(
              futureMapUnitSocChanges[year],
              // If the baseline amount is < 0, that indicates there was net emissions prior to the practice switch.
              // Since we do not give credit for emission reductions, we need to do the following
              Math.max(0, baselineMapUnitSocChanges[year])
            );
            const additionalGramsOfCarbonForMapUnitInM2 = multiply(
              additionalGramsOfCarbonPerM2,
              mapUnitAreaInM2
            );
            const additionalTonnesOfCarbonForMapUnit = divide(
              additionalGramsOfCarbonForMapUnitInM2,
              1_000_000 // 1 million
            );
            const additionalTonnesOfCO2eForMapUnit = multiply(
              additionalTonnesOfCarbonForMapUnit,
              ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C
            );
            annualTotals[year] = additionalTonnesOfCO2eForMapUnit;
            return annualTotals;
          }, {});
        return mapUnitTotals;
      }, {});

      // todo extract to function
      const polygonAnnualDifferences = Object.values(
        mapUnitAnnualDifferences
      ).reduce((mapUnitDifferences: AnnualTotals, annualTotals) => {
        return Object.keys(annualTotals).reduce(
          (polygonTotals: AnnualTotals, year) => {
            polygonTotals[year] = add(
              mapUnitDifferences[year] ?? 0,
              annualTotals[year]
            );
            return polygonTotals;
          },
          {}
        );
      }, {});

      return polygonAnnualDifferences;
    });
  return {
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  };
};

/**
 * Each project sets its max number of grandfathered years and provides it as input. This helper function gets the list
 * of years that are grandfatherable based on that input.
 *
 * @param options.modeledYears The list of modeled years.
 * @param options.maxNumberOfGrandfatheredYears The maximum number of grandfathered years for the project.
 * @param options.quantifyAsOfYear The year to quantify as. If undefined, defaults to the current year.
 * @returns An object containing the grandfatherable years (extending from the switch year to the `quantifyAsOfYear` if
 * defined, otherwise to the current year), the number of grandfathered years, and the first grandfatherable year.
 */
export const getGrandfatherableYears = ({
  modeledYears,
  maxNumberOfGrandfatheredYears,
  quantifyAsOfYear,
}: {
  modeledYears: number[];
  maxNumberOfGrandfatheredYears: number;
  quantifyAsOfYear?: number;
}): {
  grandfatherableYears: UnadjustedQuantificationSummary['grandfatherableYears'];
  numberOfGrandfatheredYears: UnadjustedQuantificationSummary['numberOfGrandfatheredYears'];
  firstGrandfatherableYear: UnadjustedQuantificationSummary['switchYear'];
} => {
  const effectiveCurrentYear = quantifyAsOfYear ?? CURRENT_YEAR;
  const startYearIndex = Math.max(
    modeledYears.indexOf(
      subtract(effectiveCurrentYear, maxNumberOfGrandfatheredYears)
    ),
    0
  );
  const endYearIndex = modeledYears.indexOf(effectiveCurrentYear);
  const grandfatherableYears =
    endYearIndex === -1
      ? modeledYears.slice(startYearIndex)
      : modeledYears.slice(startYearIndex, endYearIndex);
  const firstGrandfatherableYear =
    grandfatherableYears[0] ?? effectiveCurrentYear;
  const numberOfGrandfatheredYears = subtract(
    effectiveCurrentYear,
    firstGrandfatherableYear
  );
  return {
    grandfatherableYears,
    numberOfGrandfatheredYears,
    firstGrandfatherableYear,
  };
};

/**
 * Creates an object that contains the amount of carbon sequestered, how that number
 * was derived, the average per acre, and the total number of acres for the parcel.
 *
 * The amount is the lesser of the ten-year projected tonnes average and the tonnes removed
 * in the field
 *
 */
export const getUnadjustedGrandfatheredTonnesPerYear = ({
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  tenYearProjectedTonnesPerYear,
  totalAcres,
}: {
  totalAcres: UnadjustedQuantificationSummary['totalAcres'];
  tenYearProjectedTonnesPerYear: UnadjustedQuantificationSummary['tenYearProjectedTonnesPerYear'];
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals;
}): {
  unadjustedGrandfatheredTonnesPerYear: UnadjustedQuantificationSummary['unadjustedGrandfatheredTonnesPerYear'];
} => {
  const unadjustedGrandfatheredTonnesPerYear = Object.entries(
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios
  ).reduce(
    (grandfatheredTotals: UnadjustedGrandfatheredTotals, [year, value]) => {
      const amount = Math.min(tenYearProjectedTonnesPerYear, value);
      grandfatheredTotals[year] = {
        amount,
        method: tenYearProjectedTonnesPerYear < value ? 'projection' : 'somsc',
        averagePerAcre: divide(Math.min(amount, value), totalAcres),
        totalAcres,
      };
      return grandfatheredTotals;
    },
    {}
  );
  return { unadjustedGrandfatheredTonnesPerYear };
};

/**
 * Returns data relevant to the grandfathered years
 *
 */
const getGrandfatheredTonneQuantities = ({
  modeledYears,
  totalAcres,
  tenYearProjectedTonnesPerYear,
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  maxNumberOfGrandfatheredYears,
  quantifyAsOfYear,
}: {
  modeledYears: number[];
  totalAcres: UnadjustedQuantificationSummary['totalAcres'];
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon'];
  tenYearProjectedTonnesPerYear: UnadjustedQuantificationSummary['tenYearProjectedTonnesPerYear'];
  maxNumberOfGrandfatheredYears: number;
  quantifyAsOfYear?: number;
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage'];
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenarios'];
  grandfatherableYears: UnadjustedQuantificationSummary['grandfatherableYears'];
  numberOfGrandfatheredYears: UnadjustedQuantificationSummary['numberOfGrandfatheredYears'];
  firstGrandfatherableYear: UnadjustedQuantificationSummary['switchYear'];
  unadjustedGrandfatheredTonnesPerYear: UnadjustedQuantificationSummary['unadjustedGrandfatheredTonnesPerYear'];
  grandfatheredTonnes: UnadjustedQuantificationSummary['grandfatheredTonnes'];
  grandfatheredTonnesPerYearPerAcreAverage: UnadjustedQuantificationSummary['grandfatheredTonnesPerYearPerAcreAverage'];
} => {
  const {
    grandfatherableYears,
    firstGrandfatherableYear,
    numberOfGrandfatheredYears,
  } = getGrandfatherableYears({
    modeledYears,
    maxNumberOfGrandfatheredYears,
    quantifyAsOfYear,
  });

  const { somscAnnualDifferencesBetweenFutureAndBaselineScenarios } =
    getsomscAnnualDifferencesBetweenFutureAndBaselineScenarios({
      grandfatherableYears,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
    });

  const somscGrandfatherableTonnesTotal = Object.values(
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios
  ).reduce((total, somscGrandfatherableTonnesForYear) => {
    return add(total, somscGrandfatherableTonnesForYear);
  }, 0);

  const somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage =
    divide(somscGrandfatherableTonnesTotal, grandfatherableYears.length) || 0;

  const { unadjustedGrandfatheredTonnesPerYear } =
    getUnadjustedGrandfatheredTonnesPerYear({
      tenYearProjectedTonnesPerYear,
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
      totalAcres,
    });

  const grandfatheredTonnes = Object.values(
    unadjustedGrandfatheredTonnesPerYear
  ).reduce((total, tonnesForYear) => {
    return add(total, tonnesForYear.amount);
  }, 0);

  const grandfatheredTonnesPerYearPerAcreAverage =
    divide(
      divide(grandfatheredTonnes, totalAcres),
      numberOfGrandfatheredYears
    ) || 0;

  return {
    grandfatheredTonnesPerYearPerAcreAverage,
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage,
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
    grandfatherableYears,
    numberOfGrandfatheredYears,
    firstGrandfatherableYear,
    grandfatheredTonnes,
    unadjustedGrandfatheredTonnesPerYear,
  };
};

/**
 * Takes the year-over-year difference in soil carbon content across multiple polygons,
 * sums the future and baseline values individually, then provides the average year-over-year
 * difference over the first 10 years.
 *
 * @returns The average year-over-year change for the first 10 years after the switch year
 */
const getTenYearProjectedTonnesPerYear = ({
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
}: {
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: AnnualTotals[];
}): number => {
  const sumOfEachPolygon =
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon.map(
      (annualDifferencesPerPolygon, annualDifferencesPerPolygonIndex) => {
        const years = Object.keys(annualDifferencesPerPolygon)
          .sort()
          .map((year) => annualDifferencesPerPolygon[year])
          .slice(0, 10)
          .filter((yearValue) => !Number.isNaN(yearValue));

        if (years.length < 10) {
          throw new ContextualError({
            errorKey: 'quantificationError:insufficientData',
            context: {
              message:
                `Expected somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon.` +
                `${annualDifferencesPerPolygonIndex} to have 10 values`,
            },
          });
        }

        return years.reduce((prevValue, curValue) => {
          return add(prevValue, curValue);
        }, 0);
      }
    );

  const sumOfAllPolygons = sumOfEachPolygon.reduce(
    (prevValue, curValue) => add(prevValue, curValue),
    0
  );

  return divide(sumOfAllPolygons, 10);
};

/**
 * Helper function that creates the quantification summary object by passing model run data
 * to helper functions
 *
 */
const createQuantificationSummary = ({
  modelRuns,
  futureScenarioName,
  baselineScenarioName,
  maxNumberOfGrandfatheredYears,
  quantifyAsOfYear,
}: {
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
  futureScenarioName: string;
  baselineScenarioName: string;
  maxNumberOfGrandfatheredYears: number;
  quantifyAsOfYear?: number;
}): UnadjustedQuantificationSummary => {
  validateParsedModelRunsData({
    baselineScenarioName,
    futureScenarioName,
    modelRuns,
  });
  const { somscAnnualDifferencesForScenarios } =
    calculateSomscAnnualDifferencesForScenarios({
      modelRuns,
    });

  /**
   * The `Future` data and modeled years is expected to be the project's switch year and after
   *
   */
  const modeledYears = modelRuns[0].Scenario.find(
    (s) => s['@name'] === 'Future : FILE RESULTS'
  ).MapUnit[0].Year.map(Number);

  const { somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon } =
    getsomscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon({
      futureScenarioName,
      baselineScenarioName,
      somscAnnualDifferencesForScenarios,
      modeledYears,
    });

  const tenYearProjectedTonnesPerYear = getTenYearProjectedTonnesPerYear({
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  });

  const { totalM2 } = getTotalM2({
    somscAnnualDifferencesForScenarios,
    baselineScenarioName,
  });

  // Converting meters^2 to acres
  const totalAcres = convertM2ToAcres({ m2: totalM2 });

  const {
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage,
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
    grandfatherableYears,
    numberOfGrandfatheredYears,
    firstGrandfatherableYear,
    grandfatheredTonnes,
    unadjustedGrandfatheredTonnesPerYear,
    grandfatheredTonnesPerYearPerAcreAverage,
  } = getGrandfatheredTonneQuantities({
    tenYearProjectedTonnesPerYear,
    modeledYears,
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
    totalAcres,
    maxNumberOfGrandfatheredYears,
    quantifyAsOfYear,
  });

  return {
    modeledYears,
    tenYearProjectedTonnesTotalEstimate: multiply(
      tenYearProjectedTonnesPerYear,
      modeledYears.length
    ),
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage,
    tenYearProjectedTonnesPerYear,
    tenYearProjectedTonnesPerYearPerAcre: divide(
      tenYearProjectedTonnesPerYear,
      totalAcres
    ),
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
    grandfatherableYears,
    grandfatheredTonnes,
    unadjustedGrandfatheredTonnesPerYear,
    totalM2,
    totalAcres,
    numberOfGrandfatheredYears,
    switchYear: firstGrandfatherableYear,
    grandfatheredTonnesPerYearPerAcreAverage,
    methodologyVersion: METHODOLOGY_VERSION,
  };
};

/**
 * This is the main entry point of this code. It uses several of the other functions in this file
 * to create calculated data for the various aspects of the Soil Metrics soil quantification
 *
 * Some things to note:
 *   * Each model run is a GeoJSON polygon. Previous limitations on Soil Metrics required
 *     us to split each polygon in a parcel in to separate model runs
 *
 * @returns A quantification summary
 */
export const getQuantificationSummary = ({
  parsedJsonOutput,
  maxNumberOfGrandfatheredYears,
  futureScenarioName = 'Future',
  baselineScenarioName = 'Baseline',
  quantifyAsOfYear,
}: {
  parsedJsonOutput: Output.OutputFile<Output.ParsedMapUnit>;
  maxNumberOfGrandfatheredYears: number;
  futureScenarioName?: string;
  baselineScenarioName?: string;
  quantifyAsOfYear?: number;
}): UnadjustedQuantificationSummary => {
  const {
    Day: {
      Cropland: { ModelRun: modelRuns },
    },
  } = parsedJsonOutput;
  return createQuantificationSummary({
    modelRuns: Array.isArray(modelRuns) ? modelRuns : [modelRuns],
    futureScenarioName,
    baselineScenarioName,
    maxNumberOfGrandfatheredYears,
    quantifyAsOfYear,
  });
};

/**
 * Create a quantification summary for each model run in a daycent response,
 * keyed by modelRun[@name].
 *
 * Note: unlike `getQuantificationSummary`, this assumes that there is a single
 * model run per field, which assumes that all model runs are separate polygons
 * which all make up a single parcel.
 *
 */
export const getQuantificationSummaries = ({
  parsedJsonOutput,
  maxNumberOfGrandfatheredYears,
  futureScenarioName = 'Future',
  baselineScenarioName = 'Baseline',
  quantifyAsOfYear,
}: {
  parsedJsonOutput: Output.OutputFile<Output.ParsedMapUnit>;
  maxNumberOfGrandfatheredYears: number;
  futureScenarioName?: string;
  baselineScenarioName?: string;
  quantifyAsOfYear?: number;
}): Record<string, UnadjustedQuantificationSummary> => {
  const {
    Day: {
      Cropland: { ModelRun: modelRuns },
    },
  } = parsedJsonOutput;
  const modelRunsArray = Array.isArray(modelRuns) ? modelRuns : [modelRuns];

  return Object.fromEntries(
    modelRunsArray.map((modelRun) => [
      modelRun['@name'],
      createQuantificationSummary({
        modelRuns: [modelRun],
        futureScenarioName,
        baselineScenarioName,
        maxNumberOfGrandfatheredYears,
        quantifyAsOfYear,
      }),
    ])
  );
};
