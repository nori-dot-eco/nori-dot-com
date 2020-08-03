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
 * ! topics to discuss with partners in a specification review
 * * even if current data platforms cant provide exports in this format for whatever reason, but can in v1, then we should consider taking requests that v2 was intended to solve and instead implement them into the current v1 importer
 * * include: conservis, granular, truterra (jamie)
 * * how realistic is it to expect partners to use enums for types
 *
 * ! specification
 * * extend event date?
 *
 * ! importer logic
 * * order events by date
 * * check implication of removing cropNumber
 * * if we remove the restriction of defining all of the crop events (i.e., harvests) based on the year they are defined in, we will need to account for this when uploading to the sheet
 *
 * ! validation library
 * * readme on how to build schema
 *
 * ! import file example changes
 * * drop quantity, quantity unit, area, areaUnit from liming
 * * dropped nullable for events, if null instead exclude
 * * merge yield numerator and denominator into one enum
 * * remove volumeUnits and depthUnits
 *
 * ! specification module
 * * independent versioning
 * * * enum for project.version
 * * pre-commit make docs
 * * rename file as project-specification
 *
 * ! misc
 * * change crop inputs to correct classification (i.e. alfalfa should be perennial)
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
 * Details surrounding how the field was managed before year 2000
 */
export interface HistoricLandManagement {
  // todo
  // * CRP
  // * CRPType
  // * Year1980-2000
  // * Year1980-2000_Tillage
  // * Pre-1980
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
  // todo guidance // todo min/max // todo default
  /**
   * The year that regenerative practices started
   */
  regenerativeStartYear: number;
  /**
   * Details surrounding how the field was managed before year 2000
   */
  historicLangManagement: HistoricLandManagement;
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
    AnnualCrop | OrchardOrVineyardCrop | PerennialCrop,
    (AnnualCrop | OrchardOrVineyardCrop | PerennialCrop)?,
    (AnnualCrop | OrchardOrVineyardCrop | PerennialCrop)?
  ];
}

/**
 * Crop properties relevant to planted crops
 */
export interface PlantedCrop {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  plantingDate: string; // todo if a crop is replanted, redfine the crop and also define the harvestorkill event
}

/**
 * Crop management details and events
 *
 * @example
 *
 * ```js
 * {
 *  "killEvents": [
 *    // ...
 *  ]
 *  "harvestEvents": [
 *    // ...
 *  ]
 *  "tillageEvents": [
 *    // ...
 *  ]
 *  "fertilizerEvents": [
 *    // ...
 *  ]
 *  "organicMatterEvents": [
 *    // ...
 *  ]
 *  "irrigationEvents": [
 *    // ...
 *  ]
 *  "limingEvents": [
 *    // ...
 *  ]
 *  "grazingEvents": [
 *    // ...
 *  ]
 *  "burningEvent": {
 *    // ...
 *  }
 * }
 * ```
 *
 */
export interface CropEvents {
  /**
   * A list of kill events, if applicable. When it is not applicable it can be defined as null.
   *
   */
  killEvents?: KillEvent[]; // todo multiple kill events allowed?
  /**
   * A list of harvest events, if applicable. When it is not applicable it can be defined as null.
   *
   * Straw / Stover harvest exception: If the hay or stover was removed
   * separately after grain / fruit / tuber harvest, do NOT add this as
   * a second harvest. Instead, enter the percent of the remaining residue
   * that was removed on the grain harvest, regardless of removal date.
   *
   */
  harvestEvents?: HarvestEvent[];
  /**
   * A list of tillage events, if applicable. When it is not applicable it can be defined as null.
   */
  tillageEvents?: TillageEvent[];
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
export interface OrchardOrVineyardCrop extends CropEvents, PlantedCrop {
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
  type: 'orchard' | 'vineyard'; // todo guidance on how to find this (look at go/inputs)
  // todo add guidance saying that if a crop changes types during the history of a field, then redefine the crop. limitation: likely only happens when the crop switches from annual -> perennial
  /**
   * @default "no"
   *
   * Indicates if the crop was pruned
   *
   * @example <caption>When the crop was pruned</caption>
   *
   * ```js
   * "pruned": "yes"
   * ```
   * @example <caption>When the crop was not pruned</caption>
   *
   * ```js
   * "pruned": "no"
   * ```
   *
   */
  prune: 'yes' | 'no';
  /**
   * @default "no"
   *
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
  renewOrClear: 'yes' | 'no';
}

/**
 * Perennial crop details
 */
export interface PerennialCrop extends CropEvents, PlantedCrop {
  // todo crop name enum
  /**
   * The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string;
  /**
   * The crop type
   */
  type: 'perennial';
}

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
export interface AnnualCrop extends CropEvents, PlantedCrop {
  /**
   * The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string; // todo enum
  /**
   * The crop type
   */
  type: 'annual crop' | 'annual cover'; // todo note about how to find this in the inputs tab
}

/**
 * A crop event that happened on a particular date
 */
export interface CropEvent {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  date: string;
}

/**
 * A crop event that has a start and end date
 */
export interface CropEventRange {
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  startDate: string;
  /**
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   */
  endDate: string;
}

/**
 * Harvest event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "yield": 100,
 *  "yieldUnit": "bu/ac",
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": "n/a",
 * }
 * ```
 *
 */
export interface HarvestEvent extends CropEvent {
  /**
   * The crop yield
   */
  yield: number;
  /**
   * The crop yield units
   */
  yieldUnit: 'bu/ac' | 'cwt/ac' | 'tons/ac' | 'lbs/ac';
  // todo use example tag
  /**
   * Whether the crop was harvest for grain, fruit or tuber
   * • Select “yes” if the crop was harvested for grain, fruit, or tuber
   * • Select “no” if the crop was harvested before maturity for silage or haylage
   * • Select "n/a" if this does not apply
   */
  grainFruitTuber: 'yes' | 'no';
  // todo use example tag
  /**
   * @minimum 0
   * @maximum 100
   *
   * Residue removed
   * • Enter 0% if the crop was only harvested for grain / fruit / tuber
   * • Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
   * • Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
   * • Enter 'n/a' if it does not apply
   */
  residueRemoved: number | 'n/a';
}

// todo reasonable example?
/**
 *
 * Kill event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "residueRemoved": 5,
 *  "yieldUnit": "bu/ac",
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": "n/a",
 * }
 * ```
 *
 */
export interface KillEvent extends CropEvent {
  // todo use example tag
  /**
   * @minimum 0
   * @maximum 100
   *
   * Residue removed
   * • Enter 0% if the crop was only harvested for grain / fruit / tuber
   * • Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
   * • Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
   * • Enter 'n/a' if it does not apply
   */
  residueRemoved: number | 'n/a'; // todo how to fix guidance talking about amounts harvested when this is about kill events
}

// todo harvest units are different depending on if it's annual vs cover (cover only allows tons/ac)
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
export interface TillageEvent extends CropEvent {
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
export interface FertilizerEvent extends CropEvent {
  /**
   * The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.
   */
  productName?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * @default "mixed blends"
   *
   * The fertilizer classification type
   */
  type?: null; // todo guidance on why it's optional  // todo think through how to exclude from the spec (we need it for comet, but not for imports)
  /**
   * Amount of nitrogen applied in lbs/ac
   */
  lbsOfNPerAcre: number;
}

// todo the unit is sometimes gallons per acre, sometimes tons
/**
 * Organic matter (OMAD) and manure event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "surface broadcast", // todo get string from spreadsheet
 *  "amountPerAcre": 2, // tons
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 * }
 * ```
 *
 */
export interface OrganicMatterEvent extends CropEvent {
  /**
   * The organic matter or manure classification type
   */
  type: string; // todo List of known manures is here go.nori.com/inputs; doesn't have to be one of these
  /**
   * @minimum 0
   * @maximum 200 // todo confirm max
   * Amount of organic matter or manure applied per acre
   */
  amountPerAcre: number;
  // todo guidance on defaults
  /**
   * @minimum 0
   * @maximum 100
   * The nitrogen percent makeup in the organic matter or manure
   *
   */
  percentNitrogen: number;
  // todo guidance on defaults
  /**
   * The carbon to nitrogen ratio in the organic matter or manure
   */
  carbonNitrogenRatio: number;
}

// todo reasonable example?
/**
 * Irrigation event details
 *
 * @example
 *
 * ```js
 * {
 *  "volume": 1,
 *  "depth": 100,
 *  "frequency": 7,
 *  "startDate": "01/01/2000",
 *  "endDate": "12/31/2000"
 * }
 * ```
 *
 */
export interface IrrigationEvent extends CropEventRange {
  /**
   * The irrigation volume in inches
   */
  volume: number; // todo min/max?
  /**
   * The irrigation depth in inches. This should be set to 0 if it was applied at the surface.
   */
  depth: number; // 0 if applied to surface // todo min/max?
  /**
   * The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7
   */
  frequency: number; // todo min/max?
}

// todo why did granular provide liming quantity + quantity unit alongside tonsPerAcre
/**
 * Liming event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "01/01/2000",
 *  "type": "crushed limestone",
 *  "tonsPerAcre": 10,
 * }
 * ```
 *
 */
export interface LimingEvent extends CropEvent {
  // todo is date required? since comet only allows one, and we end up aggregating them when it's not, does the date actually matter?
  // todo if date is NOT required, then we should not extend CropEvent
  /**
   * The liming type
   */
  type:
    | 'none' // todo if none, can we exclude instead?
    | 'crushed limestone'
    | 'calcitic limestone'
    | 'dolomitic limestone'
    | 'other'; // todo type guidance
  /**
   * The liming amount (in tons per acre)
   */
  tonsPerAcre: number; // todo minimum, maximum
}

// todo reasonable example?
/**
 * Grazing event details
 *
 * @example
 *
 * ```js
 * {
 *  "restPeriod": 0,
 *  "utilization": 100,
 *  "startDate": "01/01/2000",
 *  "endDate": "12/31/2000"
 * }
 * ```
 *
 */
export interface GrazingEvent extends CropEventRange {
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

/**
 * Burning event details
 *
 * @example
 *
 * ```js
 * {
 *  "type": "before planting"
 * }
 * ```
 *
 */
export interface BurningEvent {
  /**
   * The type of burning, if applicable.
   */
  type: 'before planting' | 'after harvesting';
}
