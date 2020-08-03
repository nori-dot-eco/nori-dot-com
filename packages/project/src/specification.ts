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

/** todo
 * ! specification
 * * who external should we include in a spec review?
 * * why did we initially include clus?
 * * how realistic is it to expect partners to use enums for types
 * * historic practices (per county, technically) -- regenerative start year as well
 * * is liming and burning more appropriate at the field level?
 * * even if current data platforms cant provide exports in this format for whatever reason, but can in v1, then we should consider taking requests that v2 was intended to solve and instead implement them into the current v1 importer
 * * extend planting date?
 * * extend event date?
 * ! importer logic
 * * order events by date
 * * check implication of removing cropNumber
 * * if we remove the restriction of defining all of the crop events (i.e., harvests) based on the year they are defined in, we will need to account for this when uploading to the sheet
 * ! validation library
 * * readme on how to build schema
 * ! import file example changes
 * * drop quantity, quantity unit, area, areaUnit from liming
 * * dropped nullable for events, if null instead exclude
 * * merge yield numerator and denominator into one enum
 * ! specification module
 * * independent versioning
 * * * enum for project.version
 * * pre-commit make docs
 * * rename file as project-specification
 */

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
   * "fieldName": "Pumpkin Pines"
   * ```
   */
  fieldName: string;
  /**
   * @nullable during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)
   *
   * The number of acres that use the herein defined crop management practices (via `cropYears`).
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
 *
 * @example <caption>For crop management practices in 2000</caption>
 *
 * ```js
 * {
 *  "plantingYear": 2000,
 *  "crops": [
 *    // ... crops that were planted in year 2000
 *  ],
 *  "renewOrClear": "yes"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface CropYear {
  /**
   * @minimum 2000
   *
   * The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.
   */
  plantingYear: number;
  /**
   * @items.maximum 3
   * @items.minimum 1
   *
   * A list of crops for a given planting year.
   */
  crops: [
    AnnualCrop | OrchardOrVineyardCrop, // todo is the minimum really 1?
    (AnnualCrop | OrchardOrVineyardCrop)?,
    (AnnualCrop | OrchardOrVineyardCrop)?
  ];
}

// todo any min/maxes?
// todo guidance on when event arrays can be excluded
// todo why did granular provide quantity and quantity unit for omad? these numbers are just amountPerAcre * area
/**
 * Crop management details and events
 *
 * @example
 *
 * ```js
 * {
 *  harvestOrKillEvents": [
 *    // ...
 *  ]
 *  tillageEvents": [
 *    // ...
 *  ]
 *  fertilizerEvents": [
 *    // ...
 *  ]
 *  organicMatterEvents": [
 *    // ...
 *  ]
 *  irrigationEvents": [
 *    // ...
 *  ]
 *  limingEvents": [
 *    // ...
 *  ]
 *  grazingEvents": [
 *    // ...
 *  ]
 *  burningEvent": {
 *    // ...
 *  }
 * }
 * ```
 *
 */
export interface CropEvents {
  /**
   * A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.
   */
  harvestOrKillEvents?: HarvestOrKillEvent[];
  /**
   * A list of tillage events, if applicable. When it is not applicable it can be defined as null.
   */
  tillageEvents?: TillageEvent[]; // todo is tillage associated with a crop? if not, can we define it some other way?
  /**
   * A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.
   */
  fertilizerEvents?: FertilizerEvent[];
  /**
   * A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.
   */
  organicMatterEvents?: OrganicMatterEvent[];
  /**
   * A list of irrigation events, if applicable. When it is not applicable it can be defined as null.
   */
  irrigationEvents?: IrrigationEvent[];
  /**
   * A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.
   */
  limingEvents?: LimingEvent[];
  /**
   * A list of grazing events, if applicable. When it is not applicable it can be defined as null.
   */
  grazingEvents?: GrazingEvent[];
  /**
   * @default
   *
   * {
   *  "type": "no burning"
   * }
   *
   * A burning event, if applicable. When it is not applicable it can be defined as null.
   */
  burningEvent?: BurningEvent;
}

// todo does example make sense? can both prune and renewOrClear be yes?
// todo does it make sense to group together orchard vineyard or should it be separated out?
/**
 * Crop management details and events for orchard and vineyard crops
 *
 * @example
 *
 * ```js
 * {
 *  "type": "orchard",
 *  "prune": "yes",
 *  "renewOrClear": "yes",
 *  "plantingDate": "01/01/2000"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface OrchardOrVineyardCrop extends CropEvents {
  /**
   * The crop type
   *
   * @example <caption>When the crop is an orchard</caption>
   *
   * ```js
   * "type": "orchard"
   * ```
   * @example <caption>When the crop is a vineyard</caption>
   *
   * ```js
   * "type": "vineyard"
   * ```
   *
   */
  type: 'orchard' | 'vineyard'; // todo guidance on how to find this // todo can crops have multiple types?
  /**
   * Indicates if the crop was pruned
   *
   * @example <caption>When the crop was renewed</caption>
   *
   * ```js
   * "renewOrClear": "yes"
   * ```
   * @example <caption>When the crop was not renewed</caption>
   *
   * ```js
   * "renewOrClear": "no"
   * ```
   *
   */
  prune: 'yes' | 'no'; // todo is it always yes if orchard/vine? // todo can this ever be something other than no/yes for orchard/vineyard?
  /**
   * Indicates if the crop was renewed or cleared
   *
   * @example <caption>When the crop was renewed</caption>
   *
   * ```js
   * "renewOrClear": "yes"
   * ```
   * @example <caption>When the crop was not renewed</caption>
   *
   * ```js
   * "renewOrClear": "no"
   * ```
   *
   */
  renewOrClear: 'yes' | 'no'; // todo is it always yes if orchard/vine?  // todo can this ever be something other than no/yes for orchard/vineyard?
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  plantingDate: string; // todo clarity on when a crop is "replanted" in a year outside the parent plantingYear
}

// todo perennial crop type?
// todo does it make sense to group together annual crop and annual cover and perennial, or should they be separated out
// todo null crop names: when is this possible? work with rebekah to build an input file that has no crop name defined in the comet XML file
/**
 * Crop management details and events for annual and cover crops
 *
 * @example
 *
 * ```js
 * {
 *  "name": "corn",
 *  "type": "annual crop",
 *  "plantingDate": "01/01/2000"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface AnnualCrop extends CropEvents {
  // todo crop name enum
  /**
   * The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string | null; // todo if it can be null, use n/a instead
  /**
   * The crop type
   */
  type: 'annual crop' | 'annual cover' | 'perennial'; // todo guidance on how to find this
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  plantingDate: string; // todo clarity on when a crop is "replanted" in a year outside the parent plantingYear
}

// todo can we force a yield unit or is there a reason to support different units other than convenience?
/**
 * Harvest/kill event details
 *
 * Straw / Stover harvest exception: If the hay or stover was removed
 * separately after grain / fruit / tuber harvest, do NOT add this as
 * a second harvest. Instead, enter the percent of the remaining residue
 * that was removed on the grain harvest, regardless of removal date.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "yield": 100,
 *  "yieldUnit": "bu/ac", // todo confirm yield unit is allowed
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": "n/a",
 * }
 * ```
 *
 */
export interface HarvestOrKillEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the harvest or kill event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string;
  /**
   * The crop yield
   */
  yield?: number; // todo look into deprecating entirely as it doesnt currently have an impact on quantification // todo n/a? // todo why would there be a harvest/kil event if there was no yield
  /**
   * The crop yield units
   */
  yieldUnit?: string; // todo only needed when yield !== null // todo n/a?  // todo why would there be a harvest/kil event if there was no yield
  // todo use example tag
  /**
   * Whether the crop was harvest for grain, fruit or tuber
   * • Select “yes” if the crop was harvested for grain, fruit, or tuber
   * • Select “no” if the crop was harvested before maturity for silage or haylage
   * • Select "n/a" if this does not apply
   */
  grainFruitTuber: 'yes' | 'no' | 'n/a'; // todo default n/a? // todo when is this property applicable? is it based on crop name or crop type?
  // todo use example tag
  /**
   * Residue removed
   * • Enter 0% if the crop was only harvested for grain / fruit / tuber
   * • Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
   * • Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
   * • Enter 'n/a' if it does not apply
   */
  residueRemoved: number | 'n/a'; // todo min/max?  // todo when is this property applicable? is it based on crop name or crop type?
}

/**
 * Tillage event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "mow",
 * }
 * ```
 *
 */
export interface TillageEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the tillage event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string;
  // todo enum
  /**
   * The tillage classification type
   */
  type: string; // todo enum // todo list of known methods at go.nori.com/inputs
}

/**
 * Fertilizer event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "productName": "Joe's fertilizer",
 *  "type": "mixed blends",
 *  "lbsOfNPerAcre": 10
 * }
 * ```
 *
 */
export interface FertilizerEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the fertilizer application happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string;
  /**
   * The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.
   */
  productName?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * @default "mixed blends"
   * The fertilizer classification type
   */
  type: string; // todo default to mixed blends
  /**
   * Amount of nitrogen applied in lbs/ac
   */
  lbsOfNPerAcre: number; // todo this is really the only useful information for quantification currently
}

/**
 * Organic matter (OMAD) and manure event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "surface broadcast", // todo use example allowed type
 *  "amountPerAcre": 100, // todo reasonable example
 *  "percentNitrogen": 1, // todo reasonable example
 *  "carbonNitrogenRatio": 1, // todo reasonable example
 * }
 * ```
 *
 */
export interface OrganicMatterEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the organic matter or manure application happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string;
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
  percentNitrogen: number | null; // todo min/max? // todo why null? // todo if null is actually allowed use n/a
  /**
   * The carbon to nitrogen ratio in the organic matter or manure
   */
  carbonNitrogenRatio: number | null; // min/max //todo why null // todo if null is actually allowed use n/a
}

// todo example
// todo is irrigation applicable just to a crop or would this be better defined at the field level?
/**
 * Irrigation event details
 */
export interface IrrigationEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date that irrigation began (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  startDate: string;
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
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date that irrigation ended (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  endDate: string;
  /**
   * The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7
   */
  frequency: number;
}

// todo example
// todo why did granular provide liming quantity + quantity unit alongside tonsPerAcre
/**
 * Liming event details
 */
export interface LimingEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the liming event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string; // todo is this required? since comet only allows one, and we end up aggregating them when it's not, does the date actually matter?
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

// todo example
// todo look at comet spec, would this be better as a list of events instead of a start/end date and frequency?
/**
 * Grazing event details
 */
export interface GrazingEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The first date that grazing occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  startDate: string;
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The last date that grazing occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  endDate: string;
  /**
   * @minimum 0
   * @maximum 365
   *
   * The grazing rest period in days
   */
  restPeriod: number;
  /**
   * @minimum 0
   * @maximum 100
   *
   * The grazing utilization percentage
   */
  utilization: number;
}

// todo example
/**
 * Burning event details
 */
export interface BurningEvent {
  /**
   * The type of burning, if applicable.
   */
  type: 'before planting' | 'after harvesting';
}
