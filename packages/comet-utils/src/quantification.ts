import { Parser } from 'xml2js';

export interface OutputJSON {
  Day: Daycent;
}
export interface Daycent {
  $: DaycentMetaData;
  Cropland: Cropland[];
  Animal: string[];
  Agroforestry: Agroforestry[];
  Forestry: Forestry[];
}

export interface DaycentMetaData {
  cometEmailId: string;
}

export interface Cropland {
  ModelRun: ModelRun[];
}

export interface ModelRun {
  $: ModelRunMetaData;
  Scenario: Scenario[];
}

export interface ModelRunMetaData {
  name: string;
}

export interface Scenario {
  $: ScenarioMetaData;
  MapUnit?: MapUnit[];
  Carbon?: Carbon[];
  CO2?: Co2[];
  N2O?: N2O[];
  CH4?: Ch4[];
}

export interface ScenarioMetaData {
  name: string;
}

export interface MapUnit {
  $: MapUnitMetaData;
  Year: string[];
  InputCrop: string[];
  Irrigated: string[];
  agcprd: string[];
  abgdefac: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  accrste_1_: string[];
  crpval: string[];
  rain: string[];
  cgrain: string[];
  cinput: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  eupacc_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  egracc_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  fertot_1_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  fertac_1_: string[];
  irrtot: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  metabe_1_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  metabe_2_1_: string[];
  nfixac: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  omadae_1_: string[];
  petann: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  stdede_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  struce_1_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  struce_2_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  tnetmn_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  tminrl_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  gromin_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  somse_1_: string[];
  somsc: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  strmac_2_: string[];
  volpac: string[];
  aagdefac: string[];
  accrst: string[];
  aglivc: string[];
  bgdefac: string[];
  bglivcm: string[];
  crmvst: string[];
  crootc: string[];
  fbrchc: string[];
  frootcm: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  metabc_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  metabc_2_: string[];
  omadac: string[];
  rlwodc: string[];
  stdedc: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  strmac_1_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  strmac_6_: string[];
  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
  strucc_1_: string[];
  n2oflux: string[];
  annppt: string[];
  noflux: string[];
}

export interface MapUnitMetaData {
  id: string;
  area: string;
}

export interface Carbon {
  SoilCarbon: string[];
  SoilCarbonUncertainty: string[];
  BiomassBurningCarbon: string[];
  BiomassBurningCarbonUncertainty: string[];
  SoilCarbonStock2000: string[];
  SoilCarbonStockBegin: string[];
  SoilCarbonStockEnd: string[];
}

export interface Co2 {
  LimingCO2: string[];
  LimingCO2Uncertainty: string[];
  UreaFertilizationCO2: string[];
  UreaFertilizationCO2Uncertainty: string[];
  DrainedOrganicSoilsCO2: string[];
  DrainedOrganicSoilsCO2Uncertainty: string[];
}

export interface N2O {
  SoilN2O: string[];
  SoilN2OUncertainty: string[];
  WetlandRiceCultivationN2O: string[];
  WetlandRiceCultivationN2OUncertainty: string[];
  BiomassBurningN2O: string[];
  BiomassBurningN2OUncertainty: string[];
  DrainedOrganicSoilsN2O: string[];
  DrainedOrganicSoilsN2OUncertainty: string[];
}

export interface Ch4 {
  SoilCH4: string[];
  SoilCH4Uncertainty: string[];
  WetlandRiceCultivationCH4: string[];
  WetlandRiceCultivationCH4Uncertainty: string[];
  BiomassBurningCH4: string[];
  BiomassBurningCH4Uncertainty: string[];
}

export interface Agroforestry {
  AFLiveTrees: string[];
  AFLiveTreesUncertainty: string[];
  AFDownedDeadWood: string[];
  AFDownedDeadWoodUncertainty: string[];
  AFForestFloor: string[];
  AFForestFloorUncertainty: string[];
  AFStandingDeadTrees: string[];
  AFStandingDeadTreesUncertainty: string[];
  AFUnderstory: string[];
  AFUnderstoryUncertainty: string[];
}

export interface Forestry {
  FORLiveTrees: string[];
  FORLiveTreesUncertainty: string[];
  FORStandingDeadTreesUncertainty: string[];
  FORUnderstory: string[];
  FORForestFloorUncertainty: string[];
  FORUnderstoryUncertainty: string[];
  FORDownedDeadWood: string[];
  FORDownedDeadWoodUncertainty: string[];
  FORSoilOrganicCarbon: string[];
  FORSoilOrganicCarbonUncertainty: string[];
  FORProductsInUse: string[];
  FORProductsInUseUncertainty: string[];
  FORInLandfills: string[];
  FORInLandfillsUncertainty: string[];
}

export interface MapUnitSummary {
  [scenario: string]: { [key: string]: FileResult };
}

export interface FileResult {
  area: string;
  data: string[];
  socChanges: SocChange[];
}

export interface SocChange {
  year: string;
  amount: number;
}

export interface MapUnitTotal {
  [year: string]: number;
}

export interface MapUnitYearSummary {
  [mapUnit: string]: {
    area: string;
    year: string;
    additional: number;
  }[];
}

export interface ScenarioSummaries {
  baseline: Array<string[]>;
  future: Array<string[]>;
}
export interface GrandfatherableSummary {
  totalsForMapUnits: MapUnitTotal[];
  somscAnnualsConsidered: MapUnitTotal;
  consideredYears: string[];
  grandfatheredTonnes: number;
  co2PerYearPerAcre: number;
  grandfatheredTonnesPerYear: number;
  totalType: string;
  somscAverage: number;
  tenYearSummaryTotal: number;
  futureTotal: number;
  switchYear: string;
  baselineTotal: number;
  totalM2: number;
  totalAcres: number;
  grandfatheredYears: number;
}
const CURRENT_YEAR = new Date().getFullYear();
const MAXIMUM_GRANDFATHERABLE_YEARS = 5;

const createGrandfatherableSummary = async (
  jsonData: OutputJSON
): Promise<GrandfatherableSummary> => {
  const {
    Day: {
      Cropland: [{ ModelRun: runs }],
    },
  } = jsonData;
  const mapUnitObjects: MapUnitSummary[] = [];
  let totalM2 = 0;
  const summaryObject: ScenarioSummaries = {
    baseline: [],
    future: [],
  };
  runs.forEach(({ Scenario: [...scenarios] }) => {
    const mapUnitObject: MapUnitSummary = {};

    scenarios.forEach((scenario) => {
      const {
        $: { name },
      } = scenario;
      if (name === 'Future' || name === 'Baseline') {
        if (name === 'Future') {
          summaryObject.future.push(scenario.Carbon[0].SoilCarbon);
        }
        if (name === 'Baseline') {
          summaryObject.baseline.push(scenario.Carbon[0].SoilCarbon);
        }
      } else if (name.includes('FILE RESULTS')) {
        if (
          !mapUnitObject[name] ||
          (mapUnitObject[name] && !mapUnitObject[name].length)
        ) {
          mapUnitObject[name] = {};
        }
        scenario.MapUnit.forEach((mapUnit, i) => {
          Object.entries(mapUnit).forEach(([key]) => {
            if (key === 'somsc') {
              let data = scenario.MapUnit[i][key][0].split(',');
              const years = data.filter((d, j) => {
                return j % 2 === 0;
              });
              data.splice(0, 2);
              data = data.filter((d, j) => {
                return j % 2 !== 0;
              });
              const socChanges = data.map((yearResult, j) => {
                if (data[j + 1]) {
                  return {
                    year: years[j + 1],
                    amount: parseFloat(data[j + 1]) - parseFloat(yearResult),
                  };
                }
                return null;
              });
              socChanges.pop();
              const id = scenario.MapUnit[i].$.id;
              if (name === 'Baseline : FILE RESULTS')
                totalM2 += parseFloat(scenario.MapUnit[i].$.area);
              mapUnitObject[name][id] = {
                area: scenario.MapUnit[i].$.area,
                data,
                socChanges,
              };
            }
          });
        });
      }
    });
    mapUnitObjects.push(mapUnitObject);
  });
  const comparisons: MapUnitYearSummary[] = [];
  const totalsForMapUnits: MapUnitTotal[] = [];
  mapUnitObjects.forEach((mapUnitObject) => {
    const comparison: MapUnitYearSummary = {};
    const totalsForMapUnit: MapUnitTotal = {};
    Object.entries(mapUnitObject['Future : FILE RESULTS']).forEach(
      ([key, mapUnit]) => {
        comparison[key] = [];
        mapUnit.socChanges.forEach((socChange, j) => {
          const additional =
            (((socChange.amount -
              mapUnitObject['Baseline : FILE RESULTS'][key].socChanges[j]
                .amount) *
              Number(mapUnitObject['Baseline : FILE RESULTS'][key].area)) /
              1000000) *
            (44 / 12);
          if (totalsForMapUnit[socChange.year]) {
            totalsForMapUnit[socChange.year] += additional;
          } else {
            totalsForMapUnit[socChange.year] = additional;
          }
          comparison[key].push({
            area: mapUnitObject['Baseline : FILE RESULTS'][key].area,
            year: socChange.year,
            additional,
          });
        });
      }
    );
    comparisons.push(comparison);
    totalsForMapUnits.push(totalsForMapUnit);
  });

  const years = Object.keys(totalsForMapUnits[0]);
  const startYearIndex =
    years.findIndex(
      (e) => e === (CURRENT_YEAR - MAXIMUM_GRANDFATHERABLE_YEARS).toString()
    ) > 0
      ? years.findIndex(
          (e) => e === (CURRENT_YEAR - MAXIMUM_GRANDFATHERABLE_YEARS).toString()
        )
      : 0;

  const yearsToCheck = years.slice(
    startYearIndex,
    years.findIndex((e) => e === CURRENT_YEAR.toString())
  );
  const totalsForEachYear: MapUnitTotal = {};
  totalsForMapUnits.forEach((totalForMapUnit) => {
    for (let i = 0; i < yearsToCheck.length; i++) {
      if (yearsToCheck[i]) {
        if (!totalsForEachYear[yearsToCheck[i]]) {
          totalsForEachYear[yearsToCheck[i]] = totalForMapUnit[yearsToCheck[i]];
        } else {
          totalsForEachYear[yearsToCheck[i]] +=
            totalForMapUnit[yearsToCheck[i]];
        }
      }
    }
  });
  let totalForAllYears = 0;
  Object.values(totalsForEachYear).forEach((totalForYear) => {
    totalForAllYears += totalForYear;
  });
  const somscAverage = totalForAllYears / yearsToCheck.length;

  const baselineTotal: number = [...[].concat(summaryObject.baseline)].reduce(
    (accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue);
    },
    0
  );

  const futureTotal: number = [...[].concat(summaryObject.future)].reduce(
    (accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue);
    },
    0
  );

  const tenYearSummaryTotal =
    baselineTotal < 0 ? (futureTotal - baselineTotal) * -1 : futureTotal * -1;
  const totalAcres = totalM2 * 0.000247105;
  const grandfatheredYears = CURRENT_YEAR - Number(yearsToCheck[0]);

  const switchYear = yearsToCheck[0];
  const totalType =
    tenYearSummaryTotal < somscAverage
      ? 'Using value computed from 10 year summary'
      : 'Using value computed from somsc';
  const grandfatheredTonnesPerYear =
    tenYearSummaryTotal < somscAverage ? tenYearSummaryTotal : somscAverage;
  const co2PerYearPerAcre = grandfatheredTonnesPerYear / totalAcres;
  const grandfatheredTonnes = grandfatheredTonnesPerYear * grandfatheredYears;
  return {
    totalsForMapUnits,
    somscAnnualsConsidered: totalsForEachYear,
    consideredYears: yearsToCheck,
    grandfatheredTonnes,
    co2PerYearPerAcre,
    grandfatheredTonnesPerYear,
    totalType,
    somscAverage,
    tenYearSummaryTotal,
    futureTotal,
    baselineTotal,
    totalM2,
    totalAcres,
    grandfatheredYears,
    switchYear,
  };
};

const generateJsonData = async (xmlData: string): Promise<OutputJSON> => {
  const parser = new Parser();
  return parser.parseStringPromise(xmlData);
};

export const getGrandfatherableTonnes = async (
  xmlData: string
): Promise<GrandfatherableSummary> => {
  const jsonData = await generateJsonData(xmlData);
  return createGrandfatherableSummary(jsonData);
};
