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
  CRPStartYear: CRPStartYear;
  CRPEndYear: CRPEndYear;
  PreCRPManagement: PreCRPManagement;
  PreCRPTillage: PreCRPTillage;
  PostCRPManagement: PostCRPManagement;
  PostCRPTillage: PostCRPTillage;
  CropScenario: CropScenario[];
}

// todo de-duplicate in app
export type CrpManagementOption =
  | 'Irrigated: Annual Crops in Rotation'
  | 'Irrigated: Annual Crops with Hay/Pasture in Rotation'
  | 'Irrigated: Continuous Hay'
  | 'Irrigated: Orchard or Vineyard'
  | 'Non-Irrigated: Annual Crops in Rotation'
  | 'Non-Irrigated: Continuous Hay'
  | 'Non-Irrigated: Livestock Grazing'
  | 'Non-Irrigated: Fallow-Grain'
  | 'Non-Irrigated: Orchard or Vineyard';

// todo de-duplicate in app
// todo all lower case
export type CrpTillageOption =
  | 'Intensive Tillage'
  | 'Reduced Tillage'
  | 'No Till';

export type CRPStartYear = [string?]; // todo number?

export type CRPEndYear = [string?]; // todo number?

export type PreCRPManagement = [CrpManagementOption?];

export type PreCRPTillage = [CrpTillageOption?];

export type PostCRPManagement = [CrpManagementOption?];

export type PostCRPTillage = [CrpTillageOption?];

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
