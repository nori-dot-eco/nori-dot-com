import { add, divide, multiply, subtract } from '@nori-dot-com/math';

import {
  convertM2ToAcres,
  generateJsonData,
  parseYearlyMapUnitData,
} from './index';
import type { ModelRun, ParsedMapUnit } from './index';

const CURRENT_YEAR = new Date().getFullYear();
const MAXIMUM_GRANDFATHERABLE_YEARS = 5;
const ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C = divide(44, 12);

export interface MapUnitTotal {
  [year: number]: number;
}

export interface AnnualTotals {
  [year: string]: number;
}

export interface MapUnitYearSummary {
  [mapUnit: string]: {
    area: number;
    year: number;
    additionalTonnesOfCO2e: number;
  }[];
}

export interface ScenarioSummaries {
  baseline: Array<string[]>;
  future: Array<string[]>;
}

export interface AnnualSomscDifferencesForScenarioMapUnit {
  [scenario: string]: { [mapUnit: string]: MapUnitSummary };
}

export interface MapUnitSummary {
  area: number;
  socChanges: SocChange[];
}

export interface SocChange {
  year: number;
  amount: number;
}

export interface QuantificationSummary {
  tenYearProjectedTonnesTotalEstimate: number;
  tenYearProjectedTonnesPerYear: number;
  tenYearProjectedTonnesPerYearPerAcre: number;
  somscAverageTonnesTotalEstimate: number;
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: MapUnitTotal[];
  somscGrandfatherableTonnesPerYear: MapUnitTotal;
  grandfatherableYears: number[];
  grandfatheredTonnes: number;
  TODO_grandfatheredTonnes: AnnualTotals;
  grandfatheredTonnesPerYearPerAcre: number;
  grandfatheredTonnesPerYear: number;
  grandfatheringMethod: string;
  somscGrandfatherableTonnesPerYearAverage: number;
  switchYear: number;
  tenYearProjectedFutureTonnesPerYear: number;
  tenYearProjectedFutureTonnesPerYearPerAcre: number;
  tenYearProjectedBaselineTonnesPerYear: number;
  tenYearProjectedBaselineTonnesPerYearPerAcre: number;
  totalM2: number;
  totalAcres: number;
  grandfatheredYears: number;
}

const getSomscGrandfatherableTonnesPerYear = ({
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  grandfatherableYears,
}: {
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: QuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenarios'];
  grandfatherableYears: QuantificationSummary['grandfatherableYears'];
}): { somscGrandfatherableTonnesPerYear: AnnualTotals } => {
  const somscGrandfatherableTonnesPerYear: AnnualTotals = {};
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios.forEach(
    (totalForMapUnit) => {
      for (let i = 0; i < grandfatherableYears.length; i++) {
        if (grandfatherableYears[i]) {
          if (!somscGrandfatherableTonnesPerYear[grandfatherableYears[i]]) {
            somscGrandfatherableTonnesPerYear[grandfatherableYears[i]] =
              totalForMapUnit[grandfatherableYears[i]];
          } else {
            somscGrandfatherableTonnesPerYear[grandfatherableYears[i]] = add(
              somscGrandfatherableTonnesPerYear[grandfatherableYears[i]],
              totalForMapUnit[grandfatherableYears[i]]
            );
          }
        }
      }
    }
  );
  return { somscGrandfatherableTonnesPerYear };
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
  annualSomscDifferencesForScenarioMapUnits,
  baselineScenarioName = 'Baseline',
}: {
  annualSomscDifferencesForScenarioMapUnits: AnnualSomscDifferencesForScenarioMapUnit[];
  baselineScenarioName: string;
}): { totalM2: number } => {
  const baselineSummariesForMapUnits = annualSomscDifferencesForScenarioMapUnits
    .map((s) => Object.values(s[`${baselineScenarioName} : FILE RESULTS`]))
    .flat();
  const totalM2 = baselineSummariesForMapUnits.reduce(
    (total, baselineSummaryForMapUnit) => {
      return add(baselineSummaryForMapUnit.area, total);
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
  const scenarioSummaries: ScenarioSummaries = {
    baseline: [],
    future: [],
  };
  modelRuns.forEach(({ Scenario: [...scenarios] }) => {
    scenarios.forEach((scenario) => {
      const {
        $: { name: scenarioName },
      } = scenario;
      if ([futureScenarioName, baselineScenarioName].includes(scenarioName)) {
        if (scenarioName === futureScenarioName) {
          scenarioSummaries.future.push(scenario.Carbon[0].SoilCarbon);
        }
        if (scenarioName === baselineScenarioName) {
          scenarioSummaries.baseline.push(scenario.Carbon[0].SoilCarbon);
        }
      }
    });
  });
  return { scenarioSummaries };
};

const calculateSomscAnnualDifferencesForScenarios = ({
  modelRuns,
}: {
  modelRuns: ModelRun<ParsedMapUnit>[];
}): {
  annualSomscDifferencesForScenarioMapUnits: AnnualSomscDifferencesForScenarioMapUnit[];
} => {
  const annualSomscDifferencesForScenarioMapUnits: AnnualSomscDifferencesForScenarioMapUnit[] = [];

  // todo reduce function
  modelRuns.forEach(({ Scenario: [...scenarios] }) => {
    const annualSomscDifferencesForScenarioMapUnit: AnnualSomscDifferencesForScenarioMapUnit = {};
    scenarios.forEach((scenario) => {
      const {
        $: { name: scenarioName },
      } = scenario;
      if (scenarioName.includes('FILE RESULTS')) {
        if (
          !annualSomscDifferencesForScenarioMapUnit[scenarioName] ||
          (annualSomscDifferencesForScenarioMapUnit[scenarioName] &&
            !annualSomscDifferencesForScenarioMapUnit[scenarioName].length)
        ) {
          annualSomscDifferencesForScenarioMapUnit[scenarioName] = {};
        }
        scenario.MapUnit.forEach((mapUnit, i) => {
          annualSomscDifferencesForScenarioMapUnit[scenarioName][
            scenario.MapUnit[i].$.id
          ] = {
            area: Number(scenario.MapUnit[i].$.area),
            socChanges: Object.entries(mapUnit.somsc)
              .map(([year, amount]) => {
                return {
                  year: Number(year),
                  amount: mapUnit.somsc[Number(year) + 1]
                    ? subtract(mapUnit.somsc[Number(year) + 1], amount) // find the somsc difference between the future year and the current year
                    : undefined, // we can neither calculate nor give credit for the most recent year so we return undefined here and filter it out later
                };
              })
              .filter((e) => e.amount !== undefined),
          };
        });
      }
    });
    annualSomscDifferencesForScenarioMapUnits.push(
      annualSomscDifferencesForScenarioMapUnit
    );
  });

  return { annualSomscDifferencesForScenarioMapUnits };
};

const getSomscAnnualDifferencesBetweenFutureAndBaselineScenarios = ({
  futureScenarioName,
  baselineScenarioName,
  annualSomscDifferencesForScenarioMapUnits,
}: {
  futureScenarioName: string;
  baselineScenarioName: string;
  annualSomscDifferencesForScenarioMapUnits: AnnualSomscDifferencesForScenarioMapUnit[];
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: MapUnitTotal[];
} => {
  const somscAnnualDifferencesBetweenFutureAndBaselineScenarios: MapUnitTotal[] = [];
  // todo reduce function
  annualSomscDifferencesForScenarioMapUnits.forEach((mapUnitSummary) => {
    const comparison: MapUnitYearSummary = {};
    const totalsForMapUnit: MapUnitTotal = {};
    Object.entries(
      mapUnitSummary[`${futureScenarioName} : FILE RESULTS`]
    ).forEach(([key, mapUnit]) => {
      const mapUnitAreaInM2 = Number(
        mapUnitSummary[`${baselineScenarioName} : FILE RESULTS`][key].area
      );
      comparison[key] = [];
      mapUnit.socChanges
        .slice(-10) // only look at the last 10 years
        .forEach((future, j) => {
          const baselineAmount =
            mapUnitSummary[`${baselineScenarioName} : FILE RESULTS`][key]
              .socChanges[j].amount;
          const additionalGramsOfCarbonPerM2 = subtract(
            future.amount,
            // If the baseline amount is < 0, that indicates there was net emissions prior to the practice switch.
            // Since we do not give credit for emission reductions, we need to do the following
            Math.max(0, baselineAmount)
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
          if (totalsForMapUnit[future.year]) {
            totalsForMapUnit[future.year] = add(
              totalsForMapUnit[future.year],
              additionalTonnesOfCO2eForMapUnit
            );
          } else {
            totalsForMapUnit[future.year] = additionalTonnesOfCO2eForMapUnit;
          }
        });
    });
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios.push(
      totalsForMapUnit
    );
  });
  return {
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  };
};

const getGrandfatherableYears = ({
  years,
}: {
  years: number[];
}): {
  grandfatherableYears: QuantificationSummary['grandfatherableYears'];
  grandfatheredYears: QuantificationSummary['grandfatheredYears'];
  firstGrandfatherableYear: QuantificationSummary['switchYear'];
} => {
  const startYearIndex = Math.max(
    years.findIndex(
      (e) => e === subtract(CURRENT_YEAR, MAXIMUM_GRANDFATHERABLE_YEARS)
    ),
    0
  );
  const grandfatherableYears = years.slice(
    startYearIndex,
    years.findIndex((e) => e === CURRENT_YEAR)
  );
  const firstGrandfatherableYear =
    Number(grandfatherableYears[0]) || CURRENT_YEAR;
  const grandfatheredYears = subtract(CURRENT_YEAR, firstGrandfatherableYear);
  return { grandfatherableYears, grandfatheredYears, firstGrandfatherableYear };
};

export const getGrandfatheredTonnesPerYear = ({
  somscGrandfatherableTonnesPerYear,
  tenYearProjectedTonnesPerYear,
}: {
  tenYearProjectedTonnesPerYear: QuantificationSummary['tenYearProjectedTonnesPerYear'];
  somscGrandfatherableTonnesPerYear: AnnualTotals;
}): {
  grandfatheredTonnesPerYear: QuantificationSummary['TODO_grandfatheredTonnes'];
} => {
  const grandfatheredTonnesPerYear = Object.entries(
    somscGrandfatherableTonnesPerYear
  ).reduce((acc, [key, value]) => {
    acc[key] = Math.min(tenYearProjectedTonnesPerYear, value);
    return acc;
  }, {} as AnnualTotals);
  return { grandfatheredTonnesPerYear };
};

const createQuantificationSummary = async ({
  modelRuns,
  futureScenarioName,
  baselineScenarioName,
}: {
  modelRuns: ModelRun<ParsedMapUnit>[];
  futureScenarioName: string;
  baselineScenarioName: string;
}): Promise<QuantificationSummary> => {
  const {
    annualSomscDifferencesForScenarioMapUnits,
  } = calculateSomscAnnualDifferencesForScenarios({
    modelRuns,
  });

  const {
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  } = getSomscAnnualDifferencesBetweenFutureAndBaselineScenarios({
    futureScenarioName,
    baselineScenarioName,
    annualSomscDifferencesForScenarioMapUnits,
  });

  const years = Object.keys(
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios[0]
  ).map((k) => Number(k));

  const {
    grandfatherableYears,
    firstGrandfatherableYear,
    grandfatheredYears,
  } = getGrandfatherableYears({ years });

  const {
    somscGrandfatherableTonnesPerYear,
  } = getSomscGrandfatherableTonnesPerYear({
    grandfatherableYears,
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  });

  const somscGrandfatherableTonnesTotal = Object.values(
    somscGrandfatherableTonnesPerYear
  ).reduce((total, somscGrandfatherableTonnesForYear) => {
    return add(total, somscGrandfatherableTonnesForYear);
  }, 0);

  const somscGrandfatherableTonnesPerYearAverage =
    divide(somscGrandfatherableTonnesTotal, grandfatherableYears.length) || 0;

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

  // todo
  // const { grandfatheredTonnesPerYear } = getGrandfatheredTonnesPerYear({
  //   tenYearProjectedTonnesPerYear,
  //   somscGrandfatherableTonnesPerYear,
  // });

  const { totalM2 } = getTotalM2({
    annualSomscDifferencesForScenarioMapUnits,
    baselineScenarioName,
  });

  const totalAcres = convertM2ToAcres({ m2: totalM2 });

  const grandfatheringMethod =
    tenYearProjectedTonnesPerYear < somscGrandfatherableTonnesPerYearAverage
      ? 'Using value computed from 10 year summary'
      : 'Using value computed from somsc';

  const grandfatheredTonnesPerYear = Math.min(
    tenYearProjectedTonnesPerYear,
    somscGrandfatherableTonnesPerYearAverage
  );

  const grandfatheredTonnesPerYearPerAcre = divide(
    grandfatheredTonnesPerYear,
    totalAcres
  );

  const grandfatheredTonnes = multiply(
    grandfatheredTonnesPerYear,
    grandfatheredYears
  );

  return {
    tenYearProjectedTonnesTotalEstimate: multiply(
      tenYearProjectedTonnesPerYear,
      years.length
    ),
    somscAverageTonnesTotalEstimate: multiply(
      somscGrandfatherableTonnesPerYearAverage,
      years.length
    ),
    somscGrandfatherableTonnesPerYearAverage,
    tenYearProjectedTonnesPerYear,
    tenYearProjectedTonnesPerYearPerAcre: divide(
      tenYearProjectedTonnesPerYear,
      totalAcres
    ),
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
    somscGrandfatherableTonnesPerYear,
    grandfatherableYears,
    grandfatheredTonnes,
    grandfatheredTonnesPerYearPerAcre,
    grandfatheredTonnesPerYear,
    grandfatheringMethod,
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
    grandfatheredYears,
    switchYear: firstGrandfatherableYear,
    TODO_grandfatheredTonnes: null,
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
}): Promise<QuantificationSummary> => {
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
