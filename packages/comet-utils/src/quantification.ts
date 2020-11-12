import { add, divide, multiply, subtract } from '@nori-dot-com/math';

import {
  convertM2ToAcres,
  generateJsonData,
  parseYearlyMapUnitData,
} from './index';
import type { ModelRun, ParsedMapUnit, Scenario } from './index';

const CURRENT_YEAR = new Date().getFullYear();
const MAXIMUM_GRANDFATHERABLE_YEARS = 5;
const ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C = divide(44, 12);

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

export interface AnnualSomscDifferencesForMapUnit {
  [mapUnit: string]: MapUnitSummary;
}

export interface SomscAnnualDifferencesForPolygon {
  [scenario: string]: AnnualSomscDifferencesForMapUnit;
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
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals[];
  somscGrandfatherableTonnesPerYear: AnnualTotals;
  grandfatherableYears: number[];
  grandfatheredTonnes: number;
  grandfatheredTonnesPerYear: AnnualTotals;
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

const calculateSomscAnnualDifferencesForScenarioMapUnits = ({
  mapUnits,
}: {
  mapUnits: ParsedMapUnit[];
}): {
  differencesForMapUnits: AnnualSomscDifferencesForMapUnit;
} => {
  const differencesForMapUnits = mapUnits.reduce((difference, mapUnit) => {
    const {
      $: { id: mapUnitId, area },
      somsc,
    } = mapUnit;
    difference[mapUnitId] = {
      area: Number(area),
      socChanges: Object.entries(somsc)
        .slice(0, -1) // we can neither calculate nor give credit for the most recent year so we ignore the last entry
        .map(([year, amount]) => {
          return {
            year: Number(year),
            amount: subtract(somsc[add(Number(year), 1)], amount), // find the somsc difference between the future year and the current year
          };
        }),
    };
    return difference;
  }, {} as AnnualSomscDifferencesForMapUnit);
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
  const differencesForPolygon = scenarioResults.reduce((acc, scenario) => {
    const {
      $: { name: scenarioName },
      MapUnit: mapUnits,
    } = scenario;
    const {
      differencesForMapUnits,
    } = calculateSomscAnnualDifferencesForScenarioMapUnits({ mapUnits });
    acc[scenarioName] = differencesForMapUnits;
    return acc;
  }, {} as SomscAnnualDifferencesForPolygon);
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
    ({ Scenario: s }) => {
      const {
        differencesForPolygon,
      } = calculateSomscAnnualDifferencesForScenarioPolygons({
        scenarios: s,
      });
      return differencesForPolygon;
    }
  );
  return { somscAnnualDifferencesForScenarios };
};

const getSomscAnnualDifferencesBetweenFutureAndBaselineScenarios = ({
  futureScenarioName,
  baselineScenarioName,
  somscAnnualDifferencesForScenarios,
}: {
  futureScenarioName: string;
  baselineScenarioName: string;
  somscAnnualDifferencesForScenarios: SomscAnnualDifferencesForPolygon[];
}): {
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals[];
} => {
  const somscAnnualDifferencesBetweenFutureAndBaselineScenarios: AnnualTotals[] = [];
  // todo reduce function
  somscAnnualDifferencesForScenarios.forEach((polygonSummary) => {
    const comparison: MapUnitYearSummary = {};
    const totalsForPolygon: AnnualTotals = {};
    Object.entries(
      polygonSummary[`${futureScenarioName} : FILE RESULTS`]
    ).forEach(([key, mapUnit]) => {
      const mapUnitAreaInM2 = Number(
        polygonSummary[`${baselineScenarioName} : FILE RESULTS`][key].area
      );
      comparison[key] = [];
      mapUnit.socChanges
        .slice(-10) // only look at the last 10 years
        .forEach((future, j) => {
          const baselineAmount =
            polygonSummary[`${baselineScenarioName} : FILE RESULTS`][key]
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
          if (totalsForPolygon[future.year]) {
            totalsForPolygon[future.year] = add(
              totalsForPolygon[future.year],
              additionalTonnesOfCO2eForMapUnit
            );
          } else {
            totalsForPolygon[future.year] = additionalTonnesOfCO2eForMapUnit;
          }
        });
    });
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios.push(
      totalsForPolygon
    );
  });
  return {
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  };
};

const getGrandfatherableYears = ({
  modeledYears,
}: {
  modeledYears: number[];
}): {
  grandfatherableYears: QuantificationSummary['grandfatherableYears'];
  grandfatheredYears: QuantificationSummary['grandfatheredYears'];
  firstGrandfatherableYear: QuantificationSummary['switchYear'];
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
  grandfatheredTonnesPerYear: QuantificationSummary['grandfatheredTonnesPerYear'];
} => {
  const grandfatheredTonnesPerYear = Object.entries(
    somscGrandfatherableTonnesPerYear
  ).reduce((acc, [key, value]) => {
    acc[key] = Math.min(tenYearProjectedTonnesPerYear, value);
    return acc;
  }, {} as AnnualTotals);
  return { grandfatheredTonnesPerYear };
};

const getGrandfatheredTonneQuantities = ({
  tenYearProjectedTonnesPerYear,
  modeledYears,
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
}: {
  modeledYears: number[];
  somscAnnualDifferencesBetweenFutureAndBaselineScenarios: QuantificationSummary['somscAnnualDifferencesBetweenFutureAndBaselineScenarios'];
  tenYearProjectedTonnesPerYear: QuantificationSummary['tenYearProjectedTonnesPerYear'];
}): {
  somscGrandfatherableTonnesPerYearAverage: QuantificationSummary['somscGrandfatherableTonnesPerYearAverage'];
  somscGrandfatherableTonnesPerYear: QuantificationSummary['somscGrandfatherableTonnesPerYear'];
  grandfatherableYears: QuantificationSummary['grandfatherableYears'];
  grandfatheredYears: QuantificationSummary['grandfatheredYears'];
  firstGrandfatherableYear: QuantificationSummary['switchYear'];
  grandfatheredTonnesPerYear: QuantificationSummary['grandfatheredTonnesPerYear'];
  grandfatheredTonnes: QuantificationSummary['grandfatheredTonnes'];
} => {
  const {
    grandfatherableYears,
    firstGrandfatherableYear,
    grandfatheredYears,
  } = getGrandfatherableYears({ modeledYears });

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

  const { grandfatheredTonnesPerYear } = getGrandfatheredTonnesPerYear({
    tenYearProjectedTonnesPerYear,
    somscGrandfatherableTonnesPerYear,
  });

  const grandfatheredTonnes = Object.values(grandfatheredTonnesPerYear).reduce(
    (total, tonnesForYear) => {
      return add(total, tonnesForYear);
    },
    0
  );

  // todo add to somscGrandfatherableTonnesPerYear entries
  // const grandfatheringMethod =
  //   tenYearProjectedTonnesPerYear < somscGrandfatherableTonnesPerYearAverage
  //     ? 'Using value computed from 10 year summary'
  //     : 'Using value computed from somsc';

  return {
    somscGrandfatherableTonnesPerYearAverage,
    somscGrandfatherableTonnesPerYear,
    grandfatherableYears,
    grandfatheredYears,
    firstGrandfatherableYear,
    // grandfatheringMethod,
    // grandfatheredTonnesPerYearPerAcre, // todo ? would need to add to grandfatheredTonnesPerYear object
    grandfatheredTonnes,
    grandfatheredTonnesPerYear,
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
}): Promise<QuantificationSummary> => {
  const {
    somscAnnualDifferencesForScenarios,
  } = calculateSomscAnnualDifferencesForScenarios({
    modelRuns,
  });

  const {
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  } = getSomscAnnualDifferencesBetweenFutureAndBaselineScenarios({
    futureScenarioName,
    baselineScenarioName,
    somscAnnualDifferencesForScenarios,
  });

  const modeledYears = Object.keys(
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios[0]
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
    somscGrandfatherableTonnesPerYearAverage,
    somscGrandfatherableTonnesPerYear,
    grandfatherableYears,
    grandfatheredYears,
    firstGrandfatherableYear,
    grandfatheredTonnes,
    grandfatheredTonnesPerYear,
  } = getGrandfatheredTonneQuantities({
    tenYearProjectedTonnesPerYear,
    modeledYears,
    somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
  });

  return {
    // modeledYears, // todo
    tenYearProjectedTonnesTotalEstimate: multiply(
      tenYearProjectedTonnesPerYear,
      modeledYears.length
    ),
    somscAverageTonnesTotalEstimate: multiply(
      somscGrandfatherableTonnesPerYearAverage,
      modeledYears.length
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
    grandfatheredTonnesPerYear,
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
