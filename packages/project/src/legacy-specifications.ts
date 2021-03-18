/* eslint-disable jsdoc/require-jsdoc */
import type { GeoJSON } from 'geojson';
import type { Input } from '@nori-dot-com/ggit';

export interface V2Data {
  fields: V2Field[];
  energyUse: any[];
}

export interface V2Field {
  fieldName: string;
  cropYears: V2CropYear[];
  area: number;
  areaUnit: string;
  geometry: GeoJSON;
  clus?: Clus[];
  srid: string;
}

export interface Clus {
  cluid: null;
  fsaProperties: {
    originalName: string;
    tractNum: string;
    cluNum: string;
    farmNum: string;
  };
}

export interface V2CropYear {
  plantingYear: number;
  crops: V2Crop[];
}

export interface V2HarvestOrKillEvent {
  date: string;
  yield: number;
  yieldNumeratorUnit: string;
  yieldDenominatorUnit: string;
  grainFruitTuber: string;
  residueRemoved: number;
}

export interface V2Crop {
  cropName?: string;
  cropType?: string;
  continueFromPreviousYear?: string;
  datePlanted?: string;
  cropNumber?: Input.CropNumber;
  harvestOrKillEvents?: V2HarvestOrKillEvent[];
  tillageEvents?: V2TillageEvent[];
  fertilizerEvents?: V2FertilizerEvent[];
  organicMatterEvents?: V2OrganicMatterEvent[];
  irrigationEvents?: any[];
  limingEvents?: V2LimingEvent[];
  burningEvents?: any[];
  type?: string;
  classification?: string;
  plantingDate?: string;
}

export interface V2LimingEvent {
  date: string;
  productName: string;
  tonsPerAcre: number;
}

export interface V2OrganicMatterEvent {
  date: string;
  percentNitrogen: number;
  amountPerAcre: number;
  carbonNitrogenRatio?: any;
  percentMoisture?: any;
  productName?: string;
}

export interface V2FertilizerEvent {
  date: string;
  productName: string;
  lbsOfNPerAcre: number;
}

export interface V2TillageEvent {
  date: string;
  method: string;
}

type YesNoOrNotApplicable = 'yes' | 'no' | 'n/a';

export interface V1HarvestOrKillEvent {
  date: string;
  boundaryYield?: number;
  harvestedYield?: number;
  plantedYield?: number;
  yieldNumeratorUnit?: string;
  yieldDenominatorUnit?: string;
  grainFruitTuber?: YesNoOrNotApplicable; // doesn't exist in current granular exports
  percentRemoved?: number; // doesn't exist in current granular exports
  prune?: YesNoOrNotApplicable; // doesn't exist in current granular exports
  clearOrRenew?: YesNoOrNotApplicable; // doesn't exist in current granular exports
}

export interface V1LimingEvent {
  date: string;
  productName: string | Input.LimingMethod;
  manufacturerName?: string;
  taskName?: string;
  tonsPerAcre: number;
  quantity?: number;
  area?: number;
  areaUnit?: string;
  productDensity?: number;
  quantityUnit?: 'lb' | 'ton';
}

export interface V1BurningEvent {
  type: string;
}

export interface V1TillageEvent {
  date: string;
  type?: string;
  implement?: string;
  classification?: Input.TillageType;
}

export const V1_APPLICATION_METHODS = [
  'spray',
  'spread',
  'sidedress',
  'incorporate',
  'fertigation',
  'ariel application',
] as const;

export type V1FertilizerApplicationMethod = typeof V1_APPLICATION_METHODS[number];

export type V1FertilizerAmountAppliedUnits =
  | 'lbs/acre'
  | 'lbs'
  | 'tons/acre'
  | 'tons'
  | 'gal/acre'
  | 'gal'
  | '1000gal/acre'
  | '1000gal';

export interface V1FertilizerEvent {
  date: string;
  type?: string;
  classification?: Input.NApplicationType;
  productName?: string;
  manufacturerName?: string;
  taskName?: string;
  applicationMethod?: V1FertilizerApplicationMethod;
  lbsOfN?: number;
  NPK?: string;
  percentNitrogen?: number;
  percentAmmonium?: number;
  quantity?: number;
  quantityUnit?: V1FertilizerAmountAppliedUnits;
  area?: number;
  areaUnit?: string;
  productDensity?: string;
  density?: number;
  enhancedEfficiency?: Input.EEP; // doesn't exist in current granular exports
}

export interface V1OrganicMatterEvent {
  date: string;
  classification?: Input.OMADType;
  productName?: string;
  manufacturerName?: string;
  taskName?: string;
  applicationMethod?: string;
  tonsPerAcre: number;
  percentN?: number;
  percentC?: number;
  percentMoisture?: number;
  percentAmmoniumNitrogen?: number;
  carbonToNitrogenRatio?: number;
  quantity?: number;
  quantityUnit?: string;
  area?: number;
  areaUnit?: string;
  productDensity?: any;
  transportType?: V1TransportType;
  transportMiles?: number;
}

export type V1TransportType = 'small truck' | 'normal truck' | 'big truck';

export interface V1IrrigationEvent {
  date: string;
  startDate: string;
  endDate: string;
  volume: number;
  frequency: number;
  depth: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
  depth_units: string;
}

export type V1CropType =
  | 'annual crop'
  | 'annual cover'
  | 'perennial'
  | 'orchard'
  | 'vineyard'
  | 'other';

export interface V1Crop {
  version?: 1 | 2;
  cropName: string;
  classification?: Input.CropName;
  cropSubspeciesName?: string;
  type?: V1CropType;
  datePlanted?: string;
  cropNumber: Input.CropNumber;
  harvestOrKillEvents: V1HarvestOrKillEvent[];
  tillageEvents: V1TillageEvent[];
  fertilizerEvents: V1FertilizerEvent[];
  organicMatterEvents: V1OrganicMatterEvent[];
  irrigationEvents: V1IrrigationEvent[];
  limingEvents: V1LimingEvent[] | [];
  prune?: YesNoOrNotApplicable; // doesn't exist in current granular exports
  renewOrClear?: YesNoOrNotApplicable; // doesn't exist in current granular exports
  burningEvents?: V1BurningEvent[];
}

export interface V1CropYear {
  cropYear: number;
  crops: V1Crop[];
}

export interface V1FieldSet {
  fieldSetName: string;
  isSelected?: boolean; // only used in smart defaults
  geometry?: GeoJSON;
  area?: number;
  state?: string;
  clus?: {
    cluid: null;
    fsaProperties: {
      originalName: string;
      tractNum: string;
      cluNum: string;
      farmNum: string;
    };
  }[];
  srid?: string;
  cropYears: V1CropYear[];
}

export interface V1Project {
  owners?: string[];
  fieldSets: V1FieldSet[];
}

export interface V1Data {
  projects: V1Project[];
}
