/**
 * ## About
 *
 * Provides the definitions for [Nori project](../interfaces/_specification_.project.md) data using typescript interfaces.
 *
 * ## Usage
 *
 * ### Nori [project](../interfaces/_specification_.project.md) import JSON files
 *
 * The [project specification](../interfaces/_specification_.project.md) interfaces can be used as a guide to create project imports.
 * For example, the highest level interface of the specification is the Project interface. Using the properties and types of the project interface, one can begin to define a JSON object that represents a set of supplier fields.
 *
 * #### Example
 *
 * You can find an example of a full implementation [here](../../example/example2.json).
 *
 * ## Navigation
 *
 * Whilst it is likely easiest to navigate this document by starting at the highest level interface ["Project"](../interfaces/_specification_.project.md), you can also find definitions for all of the interfaces for a Nori project listed in the [index section](#index)
 *
 * @packageDocumentation
 */
import type { GeoJSON } from 'geojson';

// todo spec
// * who external should we include in a spec review?
// * why did we include clus?
// * why did granular provide quantity and quantity unit for omad? these numbers are just amountPerAcre * area
// * why did granular provide liming quantity + quantity unit alongside tonsPerAcre
// * how realistic is it to expect partners to use enums for types
// * use n/a instead of null as the default?
// * historic practices (per county, technically) -- regenerative start year as well
// * null crop names: work with rebekah to build an input file that has no crop name defined in the comet XML file
// * is liming and burning more appropriate at the field level?
// * even if current data platforms cant provide exports in this format for whatever reason, but can in v1, then we should consider taking requests that v2 was intended to solve and instead implement them into the current v1 importer

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
// * rename file as project-specification

/**
 *
 * A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import
 * @example
 * ```js
 * {
 *  "version": "0.1.0",
 *  "fields": [
 *    // define fields in this array
 *  ]
 * }
 * ```
 */
export interface Project {
  /**
   * The specification version. This information is used to determine the logic Nori uses to import a project.
   */
  version: string; // todo enum
  /**
   * An array of fields defining annual crop management practices
   */
  fields: Field[];
}

/**
 * A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.
 * @example
 * ```js
 * {
 *  "fieldName": "Pumpkin Pines",
 *  "acres": 100,
 *  "geojson": {},
 *  "cropYears": [] // a list of annual crop management practices
 * }
 * ```
 */
export interface Field {
  /**
   * The name of the field
   * @example
   * ```js
   * "fieldName": "PumpkinPines"
   * ```
   */
  fieldName: string;
  /**
   * @nullable
   * The number of acres that use the herein defined crop management practices (via `cropYears`).
   * When acres is defined as null in an import file it will instead be inferred from the geojson.
   */
  acres: number;
  /**
   * The geographic boundaries (defined as GeoJSON) associated with crop management practices.
   */
  geojson: GeoJSON;
  /**
   * A list of crop management details grouped by the crop planting year.
   */
  cropYears: CropYear[];
}

// todo should we allow them to define all events for a crop (specifically perennials) even if they fall outside of the planting year?
/**
 * Crop management details grouped by a planting year.
 */
export interface CropYear {
  /**
   * The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.
   * @minimum 2000
   */
  plantingYear: number;
  /**
   * A list of crops (maximum 3) for a given planting year.
   * @items.maximum 3
   */
  crops: Crop[]; // todo perennial guidance
}

/**
 * Crop management details and events
 */
export interface Crop {
  // todo crop name enum
  /**
   * The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string | null; // todo why can this be null
  /**
   * The crop type
   */
  type:
    | 'annual crop'
    | 'annual cover'
    | 'perennial'
    | 'orchard'
    | 'vineyard'
    | 'n/a'; // todo guidance on how to find this
  /**
   * The date the crop was planted (formatted as MM/DD/YYYY)
   */
  plantingDate: string; // todo pattern
  /**
   * Indicates if the crop was pruned. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'
   */
  prune: 'yes' | 'no' | 'n/a';
  /**
   * Indicates if the crop was renewed or cleared. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'
   */
  renewOrClear: 'yes' | 'no' | 'n/a'; // can only be yes if orchard/vineyard, otherwise n/a. explicitly require to n/a
  /**
   * @nullable
   * A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.
   */
  harvestOrKillEvents: HarvestOrKillEvent[];
  /**
   * @nullable
   * A list of tillage events, if applicable. When it is not applicable it can be defined as null.
   */
  tillageEvents: TillageEvent[]; // todo is tillage associated with a crop? if not, can we define it some other way?
  /**
   * @nullable
   * A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.
   */
  fertilizerEvents: FertilizerEvent[];
  /**
   * @nullable
   * A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.
   */
  organicMatterEvents: OrganicMatterEvent[];
  /**
   * @nullable
   * A list of irrigation events, if applicable. When it is not applicable it can be defined as null.
   */
  irrigationEvents: IrrigationEvent[];
  /**
   * @nullable
   * A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.
   */
  limingEvents: LimingEvent[];
  /**
   * @nullable
   * A list of grazing events, if applicable. When it is not applicable it can be defined as null.
   */
  grazingEvents: GrazingEvent[];
  /**
   * @nullable
   * A burning event, if applicable. When it is not applicable it can be defined as null.
   */
  burningEvent: BurningEvent;
}

/**
 * Harvest/kill event details
 * Straw / Stover harvest exception: If the hay or stover was removed
 * separately after grain / fruit / tuber harvest, do NOT add this as
 * a second harvest. Instead, enter the percent of the remaining residue
 * that was removed on the grain harvest, regardless of removal date.
 */
export interface HarvestOrKillEvent {
  /**
   * The date the harvest or kill event happened (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern // todo ? must be same year or year after plantingYear
  /**
   * @nullable
   * The crop yield
   */
  yield?: number | null; // todo look into deprecating entirely as it doesnt currently have an impact on quantification // todo n/a?
  /**
   * @nullable
   * The crop yield units
   */
  yieldUnit?: string | null; // todo merge numerator and denominator into one enum // todo only needed when yield !== null // todo n/a?
  /**
   * Whether the crop was harvest for grain, fruit or tuber
   * • Select “yes” if the crop was harvested for grain, fruit, or tuber
   * • Select “no” if the crop was harvested before maturity for silage or haylage
   * • Select "n/a" if this does not apply
   */
  grainFruitTuber: 'yes' | 'no' | 'n/a'; // todo default n/a?
  /**
   * Residue removed
   * • Enter 0% if the crop was only harvested for grain / fruit / tuber
   * • Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
   * • Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
   * • Enter 'n/a' if it does not apply
   */
  residueRemoved: number | 'n/a'; // todo min/max?
}

/**
 * Tillage event details
 */
export interface TillageEvent {
  /**
   * The date the tillage event happened (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern
  // todo enum
  /**
   * The tillage classification type
   */
  type: string; // todo enum // todo list of known methods at go.nori.com/inputs
}

/**
 * Fertilizer event details
 */
export interface FertilizerEvent {
  /**
   * The date the fertilizer application happened (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern
  /**
   * @nullable
   * The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.
   */
  productName?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * @nullable
   * The fertilizer classification type
   */
  type: string; // todo default to mixed blends
  /**
   * @nullable
   * Amount of nitrogen applied in lbs/ac
   */
  lbsOfNPerAcre: number; // todo this is really the only useful information for quantification currently
}

/**
 * Organic matter (OMAD) and manure event details
 */
export interface OrganicMatterEvent {
  /**
   * The date the organic matter or manure application happened (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern
  /**
   * The organic matter or manure classification type
   */
  type: string; // todo List of known manures is here go.nori.com/inputs; doesn't have to be one of these
  /**
   * Amount of organic matter or manure applied per acre
   */
  amountPerAcre: number; // todo min/max?
  /**
   * The nitrogen percent makeup in the organic matter or manure
   */
  percentNitrogen: number | null; // todo min/max? // todo why null
  /**
   * The carbon to nitrogen ratio in the organic matter or manure
   */
  carbonNitrogenRatio: number | null; // min/max //todo why null
}

// todo is irrigation applicable just to a crop or would this be better defined at the field level?
/**
 * Irrigation event details
 */
export interface IrrigationEvent {
  /**
   * The date that irrigation began (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern
  /**
   * The irrigation volume in inches
   */
  volume: number;
  // volumeUnits: 'in' | 'cm'; // todo remove this from example file
  /**
   * The irrigation depth in inches. This should be set to 0 if it was applied at the surface.
   */
  depth: number; // 0 if applied to surface // todo min/max?
  // depthUnits: 'in' | 'cm'; // todo remove this from example file
  /**
   * The date that irrigation ended (formatted as MM/DD/YYYY)
   */
  endDate: string; // todo pattern
  /**
   * The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7
   */
  frequency: number;
}

/**
 * Liming event details
 */
export interface LimingEvent {
  /**
   * The date the liming event occurred (formatted as MM/DD/YYYY)
   */
  date: string; // todo pattern // todo is this required? since comet only allows one, and we end up aggregating them when it's not, does the date actually matter?
  /**
   * The liming type
   */
  type:
    | 'none'
    | 'crushed limestone'
    | 'calcitic limestone'
    | 'dolomitic limestone'
    | 'other'; // todo type guidance
  /**
   * The liming amount (in tons per acre)
   */
  tonsPerAcre: number; // todo minimum, maximum
}

// todo look at comet spec, would this be better as a list of events instead of a start/end date and frequency?
/**
 * Grazing event details
 */
export interface GrazingEvent {
  /**
   * The first date that grazing occurred (formatted as MM/DD/YYYY)
   */
  startDate: string; // todo pattern
  /**
   * The last date that grazing occurred (formatted as MM/DD/YYYY)
   */
  endDate: string; // todo pattern
  /**
   * The grazing rest period in days
   * @minimum 0
   * @maximum 365
   */
  restPeriod: number;
  /**
   * The grazing utilization percentage
   * @minimum 0
   * @maximum 100
   */
  utilization: number;
}

/**
 * Burning event details
 */
export interface BurningEvent {
  /**
   * The type of burning, if applicable.
   */
  type: 'no burning' | 'yes, before planting' | 'yes, after harvesting'; // todo default no?
}
