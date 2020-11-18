import { add, divide, multiply, subtract } from '@nori-dot-com/math';

import {
  convertM2ToAcres,
  generateJsonData,
  parseYearlyMapUnitData,
} from './index';
import type { ModelRun, ParsedMapUnit, Scenario } from './index';

// todo
// * by hand, take at least 3 output files (start with a multipolygon one), calculate quantification and make sure the output matches the code

const CURRENT_YEAR = new Date().getFullYear();
const MAXIMUM_GRANDFATHERABLE_YEARS = 5;
const ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C = divide(44, 12);
export const METHODOLOGY_VERSION = '1.0.0';

interface NegativeAndPositiveAnnualTotals {
  positiveAnnualTotals: {
    [year: string]: { amount: number; vintageCount: number };
  };
  negativeAnnualTotals: {
    [year: string]: { amount: number; vintageCount: number };
  };
}
export interface AnnualTotals {
  [year: string]: number;
}

export interface GrandfatheredTotals {
  [year: string]: {
    amount: number;
    method: 'projection' | 'somsc';
    averagePerAcre: number;
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
  unadjustedGrandfatheredTonnesPerYear: GrandfatheredTotals;
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
}

export interface AdjustedQuantificationSummary
  extends UnadjustedQuantificationSummary {
  adjustedGrandfatheredTonnesPerYear: GrandfatheredTotals;
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
  const somscAnnualDifferencesBetweenFutureAndBaselineScenarios = somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon.reduce(
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
      return add(accumulator, parseFloat(currentValue));
    }, 0),
    -1
  );
  const tenYearProjectedFutureTonnesPerYear: number = multiply(
    scenarioSummaries.future.flat().reduce((accumulator, currentValue) => {
      return add(accumulator, parseFloat(currentValue));
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
  const baselineSummariesForAllPolygons = somscAnnualDifferencesForScenarios
    .map((s) => Object.values(s[`${baselineScenarioName} : FILE RESULTS`]))
    .flat();
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
  modelRuns: ModelRun<ParsedMapUnit>[];
}): { scenarioSummaries: ScenarioSummaries } => {
  const scenarioSummaries = modelRuns.reduce(
    (aggregatedScenariosForModels, { Scenario: [...scenarios] }) => {
      scenarios.reduce(
        (
          aggregatedScenariosForModel,
          { $: { name: scenarioName }, Carbon: carbon }
        ) => {
          if (scenarioName === futureScenarioName) {
            aggregatedScenariosForModel.future.push(carbon[0].SoilCarbon);
          }
          if (scenarioName === baselineScenarioName) {
            aggregatedScenariosForModel.baseline.push(carbon[0].SoilCarbon);
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
  mapUnits: ParsedMapUnit[];
}): {
  differencesForMapUnits: AnnualSomscDifferencesForMapUnit;
} => {
  const differencesForMapUnits = mapUnits.reduce(
    (
      difference: AnnualSomscDifferencesForMapUnit,
      { $: { id: mapUnitId, area }, somsc }
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
  scenarios: Scenario<ParsedMapUnit>[];
}): {
  differencesForPolygon: SomscAnnualDifferencesForPolygon;
} => {
  const scenarioResults = scenarios.filter((s) => {
    return s.$.name.includes('FILE RESULTS');
  });
  const differencesForPolygon = scenarioResults.reduce(
    (
      acc: SomscAnnualDifferencesForPolygon,
      { $: { name: scenarioName }, MapUnit: mapUnits }
    ) => {
      const {
        differencesForMapUnits,
      } = calculateSomscAnnualDifferencesForScenarioMapUnits({ mapUnits });
      acc[scenarioName] = differencesForMapUnits;
      return acc;
    },
    {}
  );
  return { differencesForPolygon };
};

const calculateSomscAnnualDifferencesForScenarios = ({
  modelRuns,
}: {
  modelRuns: ModelRun<ParsedMapUnit>[];
}): {
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
} => {
  const somscAnnualDifferencesForScenarios = modelRuns.map(
    ({ Scenario: [...scenarios] }) => {
      const {
        differencesForPolygon,
      } = calculateSomscAnnualDifferencesForScenarioPolygons({
        scenarios,
      });
      return differencesForPolygon;
    }
  );
  return { somscAnnualDifferencesForScenarios };
};

const getsomscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon = ({
  futureScenarioName,
  baselineScenarioName,
  somscAnnualDifferencesForScenarios,
}: {
  futureScenarioName: string;
  baselineScenarioName: string;
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: AnnualTotals[];
} => {
  const somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon = somscAnnualDifferencesForScenarios.map(
    (polygonSummary) => {
      const futureAnnualSomscDifferences =
        polygonSummary[`${futureScenarioName} : FILE RESULTS`];
      const baselineAnnualSomscDifferences =
        polygonSummary[`${baselineScenarioName} : FILE RESULTS`];

      const mapUnitAnnualDifferences = Object.keys(
        futureAnnualSomscDifferences
      ).reduce((mapUnitTotals: MapUnitAnnualTotals, mapUnitId) => {
        const {
          socChanges: futureMapUnitSocChanges,
          area: mapUnitAreaInM2,
        } = futureAnnualSomscDifferences[mapUnitId];
        const baselineMapUnitSocChanges =
          baselineAnnualSomscDifferences[mapUnitId].socChanges;

        // todo extract to function
        mapUnitTotals[mapUnitId] = Object.keys(futureMapUnitSocChanges)
          .slice(-10) // only look at the last 10 years
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
              1000000 // 1 million
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
    }
  );
  return {
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  };
};

const getGrandfatherableYears = ({
  modeledYears,
}: {
  modeledYears: number[];
}): {
  grandfatherableYears: UnadjustedQuantificationSummary['grandfatherableYears'];
  numberOfGrandfatheredYears: UnadjustedQuantificationSummary['numberOfGrandfatheredYears'];
  firstGrandfatherableYear: UnadjustedQuantificationSummary['switchYear'];
} => {
  const startYearIndex = Math.max(
    modeledYears.findIndex(
      (e) => e === subtract(CURRENT_YEAR, MAXIMUM_GRANDFATHERABLE_YEARS)
    ),
    0
  );
  const grandfatherableYears = modeledYears.slice(
    startYearIndex,
    modeledYears.findIndex((e) => e === CURRENT_YEAR)
  );
  const firstGrandfatherableYear =
    Number(grandfatherableYears[0]) || CURRENT_YEAR;
  const numberOfGrandfatheredYears = subtract(
    CURRENT_YEAR,
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
  ).reduce((grandfatheredTotals: GrandfatheredTotals, [year, value]) => {
    const amount = Math.min(tenYearProjectedTonnesPerYear, value);
    grandfatheredTotals[year] = {
      amount,
      method: tenYearProjectedTonnesPerYear < value ? 'projection' : 'somsc',
      averagePerAcre: divide(Math.min(amount, value), totalAcres),
    };
    return grandfatheredTotals;
  }, {});
  return { unadjustedGrandfatheredTonnesPerYear };
};

export const getAdjustedGrandfatheredTonnesPerYear = ({
  unadjustedGrandfatheredTonnesPerYearForProject,
}: {
  unadjustedGrandfatheredTonnesPerYearForProject: UnadjustedQuantificationSummary['unadjustedGrandfatheredTonnesPerYear'][];
}): {
  adjustedGrandfatheredTonnesPerYear: AdjustedQuantificationSummary['adjustedGrandfatheredTonnesPerYear'][];
} => {
  const projectVintageTotals = unadjustedGrandfatheredTonnesPerYearForProject.reduce(
    (total: NegativeAndPositiveAnnualTotals, fieldVintageTotals) => {
      return Object.entries(fieldVintageTotals).reduce(
        (fieldTotal, [year, vintage]) => {
          if (vintage.amount > 0) {
            fieldTotal.positiveAnnualTotals[year] = {
              amount: add(
                vintage.amount,
                fieldTotal.positiveAnnualTotals?.[year]?.amount ?? 0
              ),
              vintageCount: add(
                fieldTotal.positiveAnnualTotals?.[year]?.vintageCount ?? 0,
                1
              ),
            };
          } else if (vintage.amount < 0) {
            fieldTotal.negativeAnnualTotals[year] = {
              amount: add(
                vintage.amount,
                fieldTotal.negativeAnnualTotals?.[year]?.amount ?? 0
              ),
              vintageCount: add(
                fieldTotal.negativeAnnualTotals?.[year]?.vintageCount ?? 0,
                1
              ),
            };
          }
          return fieldTotal;
        },
        total
      );
    },
    { negativeAnnualTotals: {}, positiveAnnualTotals: {} }
  );

  const negativeTonneDistribution = Object.entries(
    projectVintageTotals.negativeAnnualTotals
  ).reduce(
    (
      negativeAnnualTotals: AnnualTotals,
      [year, { amount: negativeVintageAmount }]
    ) => {
      const positiveVintageCount =
        projectVintageTotals.positiveAnnualTotals[year].vintageCount;
      negativeAnnualTotals[year] = divide(
        negativeVintageAmount,
        positiveVintageCount
      );
      return negativeAnnualTotals;
    },
    {}
  );

  const adjustedGrandfatheredTonnesPerYear = unadjustedGrandfatheredTonnesPerYearForProject.reduce(
    (adjustedProject: GrandfatheredTotals[], unadjustedFieldAnnuals) => {
      const adjusted = Object.entries(unadjustedFieldAnnuals).reduce(
        (adjustedField: GrandfatheredTotals, [year, { amount }]) => {
          adjustedField[year] = {
            ...unadjustedFieldAnnuals[year],
            amount:
              amount > 0
                ? add(amount, negativeTonneDistribution[year] ?? 0)
                : 0,
          };
          return adjustedField;
        },
        {}
      );
      adjustedProject.push(adjusted);
      return adjustedProject;
    },
    []
  );
  return {
    adjustedGrandfatheredTonnesPerYear,
  };
};

const getGrandfatheredTonneQuantities = ({
  modeledYears,
  totalAcres,
  tenYearProjectedTonnesPerYear,
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
}: {
  modeledYears: number[];
  totalAcres: UnadjustedQuantificationSummary['totalAcres'];
  somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: UnadjustedQuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon'];
  tenYearProjectedTonnesPerYear: UnadjustedQuantificationSummary['tenYearProjectedTonnesPerYear'];
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
  } = getGrandfatherableYears({ modeledYears });

  const {
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  } = getsomscAnnualDifferencesBetweenFutureAndBaselineScenarios({
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

  const {
    unadjustedGrandfatheredTonnesPerYear,
  } = getUnadjustedGrandfatheredTonnesPerYear({
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

const createQuantificationSummary = async ({
  modelRuns,
  futureScenarioName,
  baselineScenarioName,
}: {
  modelRuns: ModelRun<ParsedMapUnit>[];
  futureScenarioName: string;
  baselineScenarioName: string;
}): Promise<UnadjustedQuantificationSummary> => {
  const {
    somscAnnualDifferencesForScenarios,
  } = calculateSomscAnnualDifferencesForScenarios({
    modelRuns,
  });

  const {
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon,
  } = getsomscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon({
    futureScenarioName,
    baselineScenarioName,
    somscAnnualDifferencesForScenarios,
  });

  const modeledYears = Object.keys(
    somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon[0]
  ).map((k) => Number(k));

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
  xmlData,
  futureScenarioName = 'Future',
  baselineScenarioName = 'Baseline',
}: {
  xmlData: string;
  futureScenarioName?: string;
  baselineScenarioName?: string;
}): Promise<UnadjustedQuantificationSummary> => {
  const { rawJsonOutput } = await generateJsonData({ xmlData });
  const { parsedJsonOutput } = await parseYearlyMapUnitData({ rawJsonOutput });
  const {
    Day: {
      Cropland: [{ ModelRun: modelRuns }],
    },
  } = parsedJsonOutput;
  return createQuantificationSummary({
    modelRuns,
    futureScenarioName,
    baselineScenarioName,
  });
};
