import { add, divide, multiply, subtract } from '@nori-dot-com/math';
import type { Output } from '@nori-dot-com/ggit';

import { CURRENT_YEAR, METHODOLOGY_VERSION } from './constants';

import { convertM2ToAcres, parseYearlyMapUnitData } from './index';

export * from './constants';
export const ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C = divide(44, 12);

export interface AnnualTotals {
  [year: string]: number;
}

/**
 * Meant to be used in place of `AnnualTotals`, this interface is preferable
 * to allow for better type inference with graphql.
 */
export interface AnnualTotalItem {
  year: string;
  value: number;
}

export interface UnadjustedGrandfatheredTotals {
  [year: string]: {
    amount: number;
    method: 'projection' | 'somsc';
    averagePerAcre: number;
    totalAcres: number;
  };
}

export interface MapUnitAnnualTotals {
  [mapUnit: string]: AnnualTotals;
}

export interface ScenarioSummaries {
  baseline: Array<string[]>;
  future: Array<string[]>;
}

export interface AnnualSomscDifferencesForMapUnit {
  [mapUnit: string]: MapUnitSummary;
}

export interface SomscAnnualDifferencesForPolygon {
  [scenario: string]: AnnualSomscDifferencesForMapUnit;
}

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
  tenYearProjectedFutureTonnesPerYear: number;
  tenYearProjectedFutureTonnesPerYearPerAcre: number;
  tenYearProjectedBaselineTonnesPerYear: number;
  tenYearProjectedBaselineTonnesPerYearPerAcre: number;
  totalM2: number;
  totalAcres: number;
  numberOfGrandfatheredYears: number;
  modeledYears: number[];
  grandfatheredTonnesPerYearPerAcreAverage: number;
  methodologyVersion: string;
  /**
   * The net carbon removed by year, calculated by the algorithm in
   * [net-quantification.ts](./net-quantification.ts)
   */
  netRemovalsByYear?: AnnualTotalItem[];
}

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

const getProjectionFromCometSummaries = ({
  scenarioSummaries,
}: {
  scenarioSummaries: ScenarioSummaries;
}): {
  tenYearProjectedBaselineTonnesPerYear: number;
  tenYearProjectedFutureTonnesPerYear: number;
  tenYearProjectedTonnesPerYear: number;
} => {
  const tenYearProjectedBaselineTonnesPerYear: number = multiply(
    scenarioSummaries.baseline.flat().reduce((accumulator, currentValue) => {
      return add(accumulator, Number.parseFloat(currentValue));
    }, 0),
    -1
  );
  const tenYearProjectedFutureTonnesPerYear: number = multiply(
    scenarioSummaries.future.flat().reduce((accumulator, currentValue) => {
      return add(accumulator, Number.parseFloat(currentValue));
    }, 0),
    -1
  );
  const tenYearProjectedTonnesPerYear = subtract(
    tenYearProjectedFutureTonnesPerYear,
    Math.max(tenYearProjectedBaselineTonnesPerYear, 0)
  );
  return {
    tenYearProjectedBaselineTonnesPerYear,
    tenYearProjectedFutureTonnesPerYear,
    tenYearProjectedTonnesPerYear,
  };
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

const getCometScenarioSummaries = ({
  futureScenarioName,
  baselineScenarioName,
  modelRuns,
}: {
  futureScenarioName: string;
  baselineScenarioName: string;
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
}): { scenarioSummaries: ScenarioSummaries } => {
  const scenarioSummaries = modelRuns.reduce(
    (aggregatedScenariosForModels, { Scenario: [...scenarios] }) => {
      scenarios.reduce(
        (
          aggregatedScenariosForModel,
          { '@name': scenarioName, Carbon: carbon }
        ) => {
          if (scenarioName === futureScenarioName) {
            aggregatedScenariosForModel.future.push(carbon.SoilCarbon);
          }
          if (scenarioName === baselineScenarioName) {
            aggregatedScenariosForModel.baseline.push(carbon.SoilCarbon);
          }
          return aggregatedScenariosForModel;
        },
        aggregatedScenariosForModels
      );
      return aggregatedScenariosForModels;
    },
    { baseline: [], future: [] }
  );
  return { scenarioSummaries };
};

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

const getGrandfatherableYears = ({
  modeledYears,
  maxNumberGrandfatheredYearsForProject,
  quantifyAsOfYear,
}: {
  modeledYears: number[];
  maxNumberGrandfatheredYearsForProject: number;
  quantifyAsOfYear?: number;
}): {
  grandfatherableYears: UnadjustedQuantificationSummary['grandfatherableYears'];
  numberOfGrandfatheredYears: UnadjustedQuantificationSummary['numberOfGrandfatheredYears'];
  firstGrandfatherableYear: UnadjustedQuantificationSummary['switchYear'];
} => {
  const effectiveCurrentYear = quantifyAsOfYear ?? CURRENT_YEAR;
  const startYearIndex = Math.max(
    modeledYears.findIndex(
      (e) =>
        e ===
        subtract(effectiveCurrentYear, maxNumberGrandfatheredYearsForProject)
    ),
    0
  );
  const grandfatherableYears = modeledYears.slice(
    startYearIndex,
    modeledYears.indexOf(effectiveCurrentYear)
  );
  const firstGrandfatherableYear =
    Number(grandfatherableYears[0]) || effectiveCurrentYear;
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

const getGrandfatheredTonneQuantities = ({
  modeledYears,
  totalAcres,
  tenYearProjectedTonnesPerYear,
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  maxNumberGrandfatheredYearsForProject,
  quantifyAsOfYear,
}: {
  modeledYears: number[];
  totalAcres: UnadjustedQuantificationSummary['totalAcres'];
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon'];
  tenYearProjectedTonnesPerYear: UnadjustedQuantificationSummary['tenYearProjectedTonnesPerYear'];
  maxNumberGrandfatheredYearsForProject: number;
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
    maxNumberGrandfatheredYearsForProject,
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

const createQuantificationSummary = ({
  modelRuns,
  futureScenarioName,
  baselineScenarioName,
  maxNumberGrandfatheredYearsForProject,
  quantifyAsOfYear,
}: {
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
  futureScenarioName: string;
  baselineScenarioName: string;
  maxNumberGrandfatheredYearsForProject: number;
  quantifyAsOfYear?: number;
}): UnadjustedQuantificationSummary => {
  const { somscAnnualDifferencesForScenarios } =
    calculateSomscAnnualDifferencesForScenarios({
      modelRuns,
    });

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

  const { scenarioSummaries } = getCometScenarioSummaries({
    baselineScenarioName,
    futureScenarioName,
    modelRuns,
  });

  const {
    tenYearProjectedBaselineTonnesPerYear,
    tenYearProjectedFutureTonnesPerYear,
    tenYearProjectedTonnesPerYear,
  } = getProjectionFromCometSummaries({ scenarioSummaries });

  const { totalM2 } = getTotalM2({
    somscAnnualDifferencesForScenarios,
    baselineScenarioName,
  });

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
    maxNumberGrandfatheredYearsForProject,
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
    tenYearProjectedFutureTonnesPerYear,
    tenYearProjectedFutureTonnesPerYearPerAcre: divide(
      tenYearProjectedFutureTonnesPerYear,
      totalAcres
    ),
    tenYearProjectedBaselineTonnesPerYear,
    tenYearProjectedBaselineTonnesPerYearPerAcre: divide(
      tenYearProjectedBaselineTonnesPerYear,
      totalAcres
    ),
    totalM2,
    totalAcres,
    numberOfGrandfatheredYears,
    switchYear: firstGrandfatherableYear,
    grandfatheredTonnesPerYearPerAcreAverage,
    methodologyVersion: METHODOLOGY_VERSION,
  };
};

export const getQuantificationSummary = async ({
  data,
  maxNumberGrandfatheredYearsForProject,
  futureScenarioName = 'Future',
  baselineScenarioName = 'Baseline',
  quantifyAsOfYear,
}: {
  data: Output.OutputFile<Output.MapUnit>;
  maxNumberGrandfatheredYearsForProject: number;
  futureScenarioName?: string;
  baselineScenarioName?: string;
  quantifyAsOfYear?: number;
}): Promise<UnadjustedQuantificationSummary> => {
  const { parsedJsonOutput } = await parseYearlyMapUnitData({
    rawJsonOutput: data,
  });
  const {
    Day: {
      Cropland: { ModelRun: modelRuns },
    },
  } = parsedJsonOutput;
  return createQuantificationSummary({
    modelRuns: Array.isArray(modelRuns) ? modelRuns : [modelRuns],
    futureScenarioName,
    baselineScenarioName,
    maxNumberGrandfatheredYearsForProject,
    quantifyAsOfYear,
  });
};
