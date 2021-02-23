export interface InputData {
  '@cometEmailId': string;
  Cropland: Cropland[];
}

export interface Cropland {
  '@Name': string;
  GEOM: GEOM;
  'Pre-1980': string;
  CRP: string;
  CRPType: string;
  'Year1980-2000': string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Year1980-2000_Tillage': string;
  CRPStartYear: any[];
  CRPEndYear: any[];
  PreCRPManagement: any[];
  PreCRPTillage: any[];
  PostCRPManagement: any[];
  PostCRPTillage: any[];
  CropScenario: CropScenario[];
}

export interface CropScenario {
  '@Name': string;
  CropYear: CropYear[];
}

export interface CropYear {
  '@Year': string;
  Crop: Crop[];
}

export interface Crop {
  '@CropNumber': string;
  CropName: string;
  PlantingDate: string;
  ContinueFromPreviousYear: string;
  HarvestList: HarvestList | [];
  TillageList: TillageList | [];
  NApplicationList: NApplicationList | [];
  OMADApplicationList: OMADApplicationList | [];
  IrrigationList: IrrigationList | [];
  BurnEvent: BurnEvent | [];
  LimingEvent: LimingEvent | [];
  GrazingList: GrazingList | [];
  Prune: string;
  Renew: string;
}

export interface GrazingEvent {
  GrazingStartDate: string;
  GrazingEndDate: string;
  RestPeriod: string;
  UtilizationPct: string;
}

export interface GrazingList {
  GrazingEvent: GrazingEvent[];
}

export interface IrrigationList {
  IrrigationEvent: IrrigationEvent[];
}

export interface IrrigationEvent {
  IrrigationDate: string;
  IrrigationInches: string;
}

export interface LimingEvent {
  LimingDate: string;
  LimingMethod: string;
  LimingRate: string;
}

export interface OMADApplicationList {
  OMADApplicationEvent: OMADApplicationEvent[];
}

export interface OMADApplicationEvent {
  OMADApplicationDate: string;
  OMADType: string;
  OMADAmount: string;
  OMADPercentN: string;
  OMADCNRatio: string;
}

export interface BurnEvent {
  BurnTime: string;
}

export interface NApplicationList {
  NApplicationEvent: NApplicationEvent[];
}

export interface NApplicationEvent {
  NApplicationDate: string;
  NApplicationType: string;
  NApplicationAmount: string;
  NApplicationMethod: string;
  EEP: string;
}

export interface TillageList {
  TillageEvent: TillageEvent[];
}

export interface TillageEvent {
  TillageDate: string;
  TillageType: string;
}

export interface HarvestList {
  HarvestEvent: HarvestEvent[];
}

export interface HarvestEvent {
  HarvestDate: string;
  Grain: string;
  yield: string;
  StrawStoverHayRemoval: string;
}

export interface GEOM {
  '@SRID': string;
  '@AREA': string;
  '#text': string;
}
