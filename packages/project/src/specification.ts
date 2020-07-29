import type { GeoJSON } from 'geojson';

// todo
// * why did we include clus?
// * readme on how to build schema
// * why did granular provide quantity and quantity unit for omad? these numbers are just amountPerAcre * area
// * address semantic inconsistency between amount and quantity
// * drop quantity, quantity unit, area, areaUnit from liming
// * rename productName to type in liming
// * document srid = 4326
export type YesOrNo = 'yes' | 'no' | null;

export interface Project {
  /** @nullable */
  accountName?: string; // todo consider removing
  /** @nullable */
  projectName?: string; // todo consider removing
  fields: Field[];
  energyUse?: any | null;
}

export interface Field {
  fieldName: string;
  owners: string[]; // todo will we use this
  // Field location and boundary
  /** @nullable */
  state?: any;
  /** @nullable */
  county?: any;
  area: number;
  areaUnit: string;
  srid: string;
  geometry: GeoJSON;
  clus: any[];
  // All management details are grouped by the crop planting year
  cropYears: CropYear[];
  rotation?: any;
}

export interface CropYear {
  plantingYear: number; // YYYY >= 2000
  // Perennial crops: Enter the crop each year it was on the field.
  // You only need to provide the planting date for the initial planting.
  crops: Crop[];
}

export interface Crop {
  // todo when null: should this instead be the crop name of the crop the events happened to?
  cropName: string | null; // list of known crops at go.nori.com/inputs
  cropType:
    | 'annual crop'
    | 'annual cover'
    | 'perennial'
    | 'orchard'
    | 'vineyard'
    | null;
  continueFromPreviousYear: YesOrNo; // Only set to be "Yes" for perennials
  datePlanted: string | null; // mm/dd/yyyy, must be same year as plantingYear
  // Order crops in order they were planted from oldest to most recent
  cropNumber: 1 | 2 | 3;
  // If an orchard or vineyard, did you prune, renew or clear?
  prune: YesOrNo;
  /** @nullable */
  renewOrClear?: YesOrNo;
  // • None of the following events should have dates in previous years
  //   or dates prior to the last harvest date of previous crops.
  // • All inputs should be ordered oldest to most recent
  harvestOrKillEvents: HarvestOrKillEvent[] | null;
  tillageEvents: TillageEvent[] | null;
  fertilizerEvents: FertilizerEvent[] | null;
  organicMatterEvents: OrganicMatterEvent[] | null;
  irrigationEvents: IrrigationEvent[] | null;
  limingEvents: LimingEvent[] | null;
  grazingEvents: GrazingEvent[] | null;
  burningEvents: BurningEvent[] | null;
}

export interface HarvestOrKillEvent {
  // Straw / Stover harvest exception: If the hay or stover was removed
  // separately after grain / fruit / tuber harvest, do NOT add this as
  // a second harvest. Instead, enter the percent of the remaining residue
  // that was removed on the grain harvest, regardless of removal date.
  date: string; // mm/dd/yyyy, must be same year or year after plantingYear
  yield: number | null;
  yieldNumeratorUnit: string | null;
  yieldDenominatorUnit: string | null;
  // Grain / fruit / tuber:
  // • Select “Yes” if the crop was harvested for grain, fruit, or tuber
  // • Select “No” if the crop was harvested before maturity for silage or haylage
  grainFruitTuber: YesOrNo;
  // Residue removed:
  // • Enter 0% if the crop was only harvested for grain / fruit / tuber
  // • Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
  // • Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
  residueRemoved: number | null; // 0-100%
}

export interface TillageEvent {
  date: string; // mm/dd/yyyy
  type: string; // list of known methods at go.nori.com/inputs
}

export interface FertilizerEvent {
  date: string; // mm/dd/yyyy
  productName: string;
  applicationMethod:
    | 'planting' // todo what is this application method type (added by jaycen because it existed in granular export example2.json)
    | 'aerial'
    | 'fertigation'
    | 'incorporate'
    | 'inject'
    | 'sidedress'
    | 'spray'
    | 'spread'
    | 'surface band'
    | null;
  enhancedEfficiency:
    | 'None'
    | 'Slow release'
    | 'Nitrification Inhibitor'
    | null;
  // Amount of N applied in lbs/ac is preferred
  /** @nullable */
  lbsOfNPerAcre: number;
  // If unable to compute Lbs of N / acre, provide as much of the following as you can
  /** @nullable */
  NPK?: string;
  /** @nullable */
  quantity?: number;
  /** @nullable */
  quantityUnit?:
    | 'lb/acre'
    | 'ton/acre'
    | 'gal/acre'
    | '1000gal/acre'
    | 'lb'
    | 'ton'
    | 'gal'
    | '1000gal';
  /** @nullable */
  productDensity?: string; // in lbs / gal
  /** @nullable */
  area?: number;
  /** @nullable */
  areaUnit?: string;
}

export interface OrganicMatterEvent {
  date: string; // mm/dd/yyyy
  productName: string; // List of known manures is here go.nori.com/inputs; doesn't have to be one of these
  // Amount of manure applied (ton/acre is preferred)
  amountPerAcre: number;
  amountUnit:
    | 'ton'
    | 'lb'
    | 'gal'
    | '1000gal'
    | 'ton/acre'
    | 'lb/acre'
    | 'gal/acre'
    | '1000gal/acre';
  productDensity?: any;
  // Attributes of the manure
  percentN?: number;
  cnRatio?: any;
  quantity: number;
  quantityUnit: string;
  area: number;
  areaUnit: string;
  applicationMethod: string;
}

export interface IrrigationEvent {
  date: string; // mm/dd/yyyy
  /** @nullable */
  volume?: number;
  /** @nullable */
  volumeUnits?: 'in' | 'cm';
  /** @nullable */
  depth?: number; // 0 if applied to surface
  /** @nullable */
  depthUnits?: 'in' | 'cm';
  /** @nullable */
  endDate?: string; // mm/dd/yyyy
  /** @nullable */
  frequency?: number;
}

export interface LimingEvent {
  date: string; // mm/dd/yyyy
  productName: string;
  tonsPerAcre: number;
  quantity: number;
  quantityUnit: string;
  area: number;
  areaUnit: string;
}

export interface GrazingEvent {
  startDate: string; // mm/dd/yyyy
  endDate: string; // mm/dd/yyyy
  restPeriod: number; // 0-365 days
  utilization: number; // 0-100%
}

export interface BurningEvent {
  type: 'no burning' | 'yes, before planting' | 'yes, after harvesting';
}
