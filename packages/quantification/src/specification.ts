/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
// todo move output types to /soil-metrics/specification

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

export interface OutputFile<M> {
  Day: Daycent<M>;
}

export interface OutputErrorFile {
  InputErrors: InputErrors;
}

interface InputErrors {
  InputValidationErrors: InputValidationErrors;
}

interface InputValidationErrors {
  ModelRun: ModelRunErrors;
}

interface ModelRunErrors {
  '@name': string;
  Error: Error[];
}

interface Error {
  '@index': string;
  '@message': string;
}

export interface Daycent<M> {
  '@cometEmailId': string;
  '@CFARMVersion': string;
  Cropland: Cropland<M>;
}

export interface Cropland<M> {
  ModelRun: ModelRun<M>;
}

export interface ModelRun<M> {
  '@name': string;
  Scenario: Scenario<M>[];
}

export interface Scenario<M = MapUnit> {
  '@name': string;
  MapUnit?: M[];
  Carbon?: Carbon;
  CO2?: CO2;
  N2O?: N2O;
  CH4?: CH4;
}

export interface CH4 {
  SoilCH4: string;
  WetlandRiceCultivationCH4: string;
  BiomassBurningCH4: string;
}

export interface N2O {
  SoilN2O: string;
  SoilN2O_Direct: string;
  SoilN2O_Indirect_Volatilization: string;
  SoilN2O_Indirect_Leaching: string;
  WetlandRiceCultivationN2O: string;
  BiomassBurningN2O: string;
  DrainedOrganicSoilsN2O: string;
}

export interface CO2 {
  LimingCO2: string;
  UreaFertilizationCO2: string;
  DrainedOrganicSoilsCO2: string;
}

export interface Carbon {
  SoilCarbon: string;
  BiomassBurningCarbon: string;
  SoilCarbonStock2000: string;
  SoilCarbonStockBegin: string;
  SoilCarbonStockEnd: string;
}

export interface MapUnit {
  '@id': string;
  '@area': string;
  Year: string;
  InputCrop: string;
  Irrigated: string;
  agcprd: string;
  abgdefac: string;
  accrste_1_: string;
  crpval: string;
  rain: string;
  cgrain: string;
  cinput: string;
  eupacc_1_: string;
  egracc_1_: string;
  fertot_1_1_: string;
  fertac_1_: string;
  irrtot: string;
  metabe_1_1_: string;
  metabe_2_1_: string;
  nfixac: string;
  omadae_1_: string;
  petann: string;
  stdede_1_: string;
  struce_1_1_: string;
  struce_2_1_: string;
  tnetmn_1_: string;
  tminrl_1_: string;
  gromin_1_: string;
  somse_1_: string;
  somsc: string;
  strmac_2_: string;
  volpac: string;
  aagdefac: string;
  accrst: string;
  aglivc: string;
  bgdefac: string;
  bglivcm: string;
  crmvst: string;
  crootc: string;
  fbrchc: string;
  frootcm: string;
  metabc_1_: string;
  metabc_2_: string;
  omadac: string;
  rlwodc: string;
  stdedc: string;
  strmac_1_: string;
  strmac_6_: string;
  strucc_1_: string;
  n2oflux: string;
  annppt: string;
  noflux: string;
}
export interface ParsedMapUnit {
  '@id': string;
  '@area': string;
  Year: number[];
  InputCrop: Record<string, any>;
  Irrigated: Record<string, any>;
  agcprd: Record<string, any>;
  abgdefac: Record<string, any>;
  accrste_1_: Record<string, any>;
  crpval: Record<string, any>;
  rain: Record<string, any>;
  cgrain: Record<string, any>;
  cinput: Record<string, any>;
  eupacc_1_: Record<string, any>;
  egracc_1_: Record<string, any>;
  fertot_1_1_: Record<string, any>;
  fertac_1_: Record<string, any>;
  irrtot: Record<string, any>;
  metabe_1_1_: Record<string, any>;
  metabe_2_1_: Record<string, any>;
  nfixac: Record<string, any>;
  omadae_1_: Record<string, any>;
  petann: Record<string, any>;
  stdede_1_: Record<string, any>;
  struce_1_1_: Record<string, any>;
  struce_2_1_: Record<string, any>;
  tnetmn_1_: Record<string, any>;
  tminrl_1_: Record<string, any>;
  gromin_1_: Record<string, any>;
  somse_1_: Record<string, any>;
  somsc: Record<string, any>;
  strmac_2_: Record<string, any>;
  volpac: Record<string, any>;
  aagdefac: Record<string, any>;
  accrst: Record<string, any>;
  aglivc: Record<string, any>;
  bgdefac: Record<string, any>;
  bglivcm: Record<string, any>;
  crmvst: Record<string, any>;
  crootc: Record<string, any>;
  fbrchc: Record<string, any>;
  frootcm: Record<string, any>;
  metabc_1_: Record<string, any>;
  metabc_2_: Record<string, any>;
  omadac: Record<string, any>;
  rlwodc: Record<string, any>;
  stdedc: Record<string, any>;
  strmac_1_: Record<string, any>;
  strmac_6_: Record<string, any>;
  strucc_1_: Record<string, any>;
  n2oflux: Record<string, any>;
  annppt: Record<string, any>;
  noflux: Record<string, any>;
}
