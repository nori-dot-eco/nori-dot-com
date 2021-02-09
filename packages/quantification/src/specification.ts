/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */

export interface OutputFile<M> {
  Day: Daycent<M>;
}

export interface Daycent<M> {
  $: DaycentMetaData;
  Cropland: Cropland<M>[];
  Animal: string[];
  Agroforestry: Agroforestry[];
  Forestry: Forestry[];
}

export interface DaycentMetaData {
  cometEmailId: string;
}

export interface Cropland<M> {
  ModelRun: ModelRun<M>[];
}

export interface ModelRun<M> {
  $: ModelRunMetaData;
  Scenario: Scenario<M>[];
}

export interface ModelRunMetaData {
  name: string;
}

export interface Scenario<M = MapUnit> {
  $: ScenarioMetaData;
  MapUnit?: M[];
  Carbon?: Carbon[];
  CO2?: Co2[];
  N2O?: N2O[];
  CH4?: Ch4[];
}

export interface ScenarioMetaData {
  name: string;
}

export interface ParsedMapUnit {
  $: { id: number; area: number };
  Year: number[];
  InputCrop: Record<string, string>;
  Irrigated: Record<string, number>;
  agcprd: Record<string, number>;
  abgdefac: Record<string, number>;
  accrste_1_: Record<string, number>;
  crpval: Record<string, number>;
  rain: Record<string, number>;
  cgrain: Record<string, number>;
  cinput: Record<string, number>;
  eupacc_1_: Record<string, number>;
  egracc_1_: Record<string, number>;
  fertot_1_1_: Record<string, number>;
  fertac_1_: Record<string, number>;
  irrtot: Record<string, number>;
  metabe_1_1_: Record<string, number>;
  metabe_2_1_: Record<string, number>;
  nfixac: Record<string, number>;
  omadae_1_: Record<string, number>;
  petann: Record<string, number>;
  stdede_1_: Record<string, number>;
  struce_1_1_: Record<string, number>;
  struce_2_1_: Record<string, number>;
  tnetmn_1_: Record<string, number>;
  tminrl_1_: Record<string, number>;
  gromin_1_: Record<string, number>;
  somse_1_: Record<string, number>;
  somsc: Record<number, number>;
  strmac_2_: Record<string, number>;
  volpac: Record<string, number>;
  aagdefac: Record<string, number>;
  accrst: Record<string, number>;
  aglivc: Record<string, number>;
  bgdefac: Record<string, number>;
  bglivcm: Record<string, number>;
  crmvst: Record<string, number>;
  crootc: Record<string, number>;
  fbrchc: Record<string, number>;
  frootcm: Record<string, number>;
  metabc_1_: Record<string, number>;
  metabc_2_: Record<string, number>;
  omadac: Record<string, number>;
  rlwodc: Record<string, number>;
  stdedc: Record<string, number>;
  strmac_1_: Record<string, number>;
  strmac_6_: Record<string, number>;
  strucc_1_: Record<string, number>;
  n2oflux: Record<string, number>;
  annppt: Record<string, number>;
  noflux: Record<string, number>;
}

export interface MapUnit {
  $: MapUnitMetaData;
  Year: string[];
  InputCrop: string[];
  Irrigated: string[];
  agcprd: string[];
  abgdefac: string[];
  accrste_1_: string[];
  crpval: string[];
  rain: string[];
  cgrain: string[];
  cinput: string[];
  eupacc_1_: string[];
  egracc_1_: string[];
  fertot_1_1_: string[];
  fertac_1_: string[];
  irrtot: string[];
  metabe_1_1_: string[];
  metabe_2_1_: string[];
  nfixac: string[];
  omadae_1_: string[];
  petann: string[];
  stdede_1_: string[];
  struce_1_1_: string[];
  struce_2_1_: string[];
  tnetmn_1_: string[];
  tminrl_1_: string[];
  gromin_1_: string[];
  somse_1_: string[];
  somsc: string[];
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
  metabc_1_: string[];
  metabc_2_: string[];
  omadac: string[];
  rlwodc: string[];
  stdedc: string[];
  strmac_1_: string[];
  strmac_6_: string[];
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
