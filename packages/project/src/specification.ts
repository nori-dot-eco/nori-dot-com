import type { GeoJSON } from 'geojson';

// todo spec
// * why did we include clus?
// * why did granular provide quantity and quantity unit for omad? these numbers are just amountPerAcre * area
// * why did granular provide liming quantity + quantity unit alongside tonsPerAcre
// * how realistic is it to expect partners to use enums for types
// * which properties inclusion are dependent on another values property? (or, which properties should be non-nullable and instead specify "n/a")
// * use n/a instead of null as the default?
// * historic practices (per county, technically) -- regenerative start year as well
// * null crop names: work with rebekah to build an input file that has no crop name defined in the comet XML file
// * is liming and burning more appropriate at the field level?

// todo importer
// * order events by date
// * check implication of removing cropNumber

// todo validation
// * readme on how to build schema

// todo import file changes
// * drop quantity, quantity unit, area, areaUnit from liming

// todo module
// * independent versioning
// * pre-commit make docs

export type YesOrNo = 'yes' | 'no' | null;
/**
 * Represents the document sent to the customer for payment.
 */
export interface Project {
  version: string; // todo enum
  fields: Field[];
}

export interface Field {
  fieldName: string;
  /** @nullable */
  acres?: number; // in acres // todo should we just infer from polygon?
  // todo required if area is specified
  /** @nullable */
  geojson: object; // todo geojson type
  // All management details are grouped by the crop planting year
  cropYears: CropYear[];
}

export interface CropYear {
  plantingYear: number; // YYYY >= 2000
  // Perennial crops: Enter the crop each year it was on the field.
  // You only need to provide the planting date for the initial planting.
  crops: Crop[];
}

export interface Crop {
  // todo why can name be null?
  // todo crop name enum
  name: string | null; // list of known crops at go.nori.com/inputs
  type:
    | 'annual crop'
    | 'annual cover'
    | 'perennial'
    | 'orchard'
    | 'vineyard'
    | null; // todo can be null only if name is null
  // todo if continueFromPreviousYear is only for perennial, we can just infer the value
  plantingDate: string | null; // mm/dd/yyyy
  // If an orchard or vineyard, did you prune, renew or clear?
  prune: YesOrNo; // can only be yes if orchard/vineyard, otherwise n/a. explicitly require to n/a
  renewOrClear: YesOrNo; // can only be yes if orchard/vineyard, otherwise n/a. explicitly require to n/a
  /** @nullable */
  harvestOrKillEvents: HarvestOrKillEvent[];
  /** @nullable */
  tillageEvents: TillageEvent[];
  /** @nullable */
  fertilizerEvents: FertilizerEvent[];
  /** @nullable */
  organicMatterEvents: OrganicMatterEvent[];
  /** @nullable */
  irrigationEvents: IrrigationEvent[];
  /** @nullable */
  limingEvents: LimingEvent[];
  /** @nullable */
  grazingEvents: GrazingEvent[];
  /** @nullable */
  burningEvent: BurningEvent;
}

export interface HarvestOrKillEvent {
  // todo think about this:
  // Straw / Stover harvest exception: If the hay or stover was removed
  // separately after grain / fruit / tuber harvest, do NOT add this as
  // a second harvest. Instead, enter the percent of the remaining residue
  // that was removed on the grain harvest, regardless of removal date.
  date: string; // mm/dd/yyyy, must be same year or year after plantingYear
  /** @nullable */
  yield?: number | null; // todo look into deprecating entirely as it doesnt currently have an impact on quantification
  yieldNumeratorUnit: string | null; // todo merge numerator and denominator into one enum // todo only needed when yield !== null
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
  // todo enum
  type: string; // list of known methods at go.nori.com/inputs
}

export interface FertilizerEvent {
  date: string; // mm/dd/yyyy
  /** @nullable */
  productName?: string; // todo deprecate when sheet is gone (just an alias)
  /** @nullable */
  type: string; // todo default to mixed blends
  // Amount of N applied in lbs/ac is preferred
  /** @nullable */
  lbsOfNPerAcre: number; // todo this is really the only useful information for quantification currently
}

export interface OrganicMatterEvent {
  date: string; // mm/dd/yyyy
  type: string; // List of known manures is here go.nori.com/inputs; doesn't have to be one of these
  // Amount of manure applied
  amountPerAcre: number;
  // Attributes of the manure
  percentNitrogen: number | null;
  carbonNitrogenRatio: number | null;
}

// todo which of these should be defaulted/required
// todo any reason to support cm? if not, remove units and assume inches
export interface IrrigationEvent {
  date: string; // mm/dd/yyyy
  /** @nullable */
  volume: number;
  /** @nullable */
  volumeUnits: 'in' | 'cm';
  /** @nullable */
  depth: number; // 0 if applied to surface
  /** @nullable */
  depthUnits: 'in' | 'cm';
  /** @nullable */
  endDate: string; // mm/dd/yyyy
  /** @nullable */
  frequency: number;
}

export interface LimingEvent {
  date: string; // mm/dd/yyyy
  type:
    | 'none'
    | 'crushed limestone'
    | 'calcitic limestone'
    | 'dolomitic limestone'
    | 'other';
  tonsPerAcre: number;
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
