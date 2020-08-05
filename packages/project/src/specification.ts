/* eslint-disable @typescript-eslint/no-empty-interface, jsdoc/check-tag-names */
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
 * ? jaycen
 * * re-use or reference examples https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types
 * * jsdoc lint
 * ? need from rebekah:
 * * * change crop inputs to correct classification (i.e. alfalfa should be perennial)
 * * * * this allows me to add guidance on things like how to find crop type (i.e. when a crop is a valid orchard/vineyard)
 * * * solid v slurry manure types
 */

/**
 *
 * A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import
 *
 * @example
 * ```js
 * {
 *  "version": "0.1.0",
 *  "fields": [
 *    // define fields in this array
 *  ]
 * }
 * ```
 *
 */
export interface Project {
  /**
   * The specification version. This information is used to determine the logic Nori uses to import a project.
   *
   * @example
   *
   * ```js
   * "version": "0.1.0"
   * ```
   *
   */
  version: string;
  /**
   * An array of fields defining annual crop management practices
   *
   * @example
   *
   * ```js
   * "fields": [
   *  // ...Field
   * ]
   * ```
   *
   */
  fields: Field[];
}

// todo how to handle allowed type selection (based on LRR on the sheet)
// todo defaults
// todo when is each field applicable?
/**
 * Details surrounding how the field was managed before year 2000
 *
 * @example
 *
 * ```js
 * {
 *  // todo example
 * }
 * ```
 *
 */
export interface HistoricLandManagement {
  /**
   * Whether the field participated in CRP or not
   *
   * @example <caption>When the field participated in CRP</caption>
   *
   * ```js
   * "crp": "yes"
   * ```
   *
   * @example <caption>When the field did not participate in CRP</caption>
   *
   * ```js
   * "crp": "no"
   * ```
   *
   */
  crp: 'yes' | 'no';
  /**
   * The type of CRP the field participated in. Only applicable if `crp` is set to yes // todo maybe separate interfaces, or if not, make the property optional, default to no
   *
   * // todo what does "100% grass mean"
   *
   * @example <caption>When the field participated in 100% grass CRP</caption>
   *
   * ```js
   * "crpType": "100% grass"
   * ```
   *
   * @example <caption>When the field participated in grass/legume mixture CRP</caption>
   *
   * ```js
   * "crpType": "grass / legume mixture"
   * ```
   *
   */
  crpType: '100% grass' | 'grass / legume mixture'; // todo what does "100% grass mean" // todo what about grass/legume mixture?
  /**
   * A description of how the land was managed before 1980
   *
   * @example <caption>When the land was not irrigated upland before 1980</caption>
   *
   * ```js
   * "preYear1980": "upland non-irrigated (pre 1980s)"
   * ```
   *
   * @example <caption>When the land was irrigated before 1980</caption>
   *
   * ```js
   * "preYear1980": "irrigation (pre 1980s)"
   * ```
   *
   * @example <caption>When the land was not irrigated lowland before 1980</caption>
   *
   * ```js
   * "preYear1980": "lowland non-irrigated (pre 1980s)"
   * ```
   *
   */
  preYear1980:
    | 'upland non-irrigated (pre 1980s)'
    | 'irrigation (pre 1980s)'
    | 'lowland non-irrigated (pre 1980s)'; // todo are these the best descriptions?
  /**
   * The type of soil or crop disturbance events used on the field between 1980 and 2000
   *
   * @example <caption>When the land used intensive tillage from years 1980-2000</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "intensive tillage"
   * ```
   *
   * @example <caption>When the land used reduced tillage from years 1980-2000</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "reduced tillage"
   * ```
   *
   * @example <caption>When the land used no till from years 1980-2000</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "no till"
   * ```
   *
   */
  tillageForYears1980To2000:
    | 'intensive tillage'
    | 'reduced tillage'
    | 'no till';
  /**
   * A description of how the land was managed between 1980 and 2000
   *
   */
  year1980To2000:
    | 'none' // todo when can this be "none"
    | 'irrigated: annual crops in rotation'
    | 'irrigated: continuous hay'
    | 'non-irrigated: annual crops with hay/pasture in rotation'
    | 'non-irrigated: continuous hay'
    | 'non-irrigated: livestock grazing'
    | 'irrigated: annual crops with hay/pasture in rotation'
    | 'non-irrigated: annual crops in rotation'
    | 'non-irrigated: fallow-grain'
    | 'irrigated: orchard or vineyard'; // todo better description of each of these options
}

/**
 * A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.
 *
 * @example
 *
 * ```js
 * {
 *  "regenerativeStartYear": 2015,
 *  "fieldName": "Pumpkin Pines",
 *  "acres": 100,
 *  "geojson": {
 *    // exmaple GeoJSON:
 *    "type": "Polygon",
 *     "coordinates": [
 *         [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
 *     ]
 *  },
 *  "cropYears": [
 *    // a list of annual crop management practices
 *  ]
 *  "historicLangManagement": {
 *    // ...HistoricLandManagement
 *  }
 * }
 * ```
 *
 */
export interface Field {
  // todo guidance
  /**
   * The year that regenerative practices started
   *
   * @minimum 2010
   *
   * @example <caption>When regenerative practices started in year 2015</caption>
   *
   * ```js
   * "regenerativeStartYear": 2015
   * ```
   *
   */
  regenerativeStartYear: number;
  /**
   * Details surrounding how the field was managed before year 2000
   *
   * @example
   *
   * ```js
   * "historicLangManagement": {
   *  // ...HistoricLandManagement
   * }
   * ```
   *
   */
  historicLangManagement: HistoricLandManagement;
  /**
   * The name of the field
   *
   * @example <caption>When a field is named "Pumpkin Pines"</caption>
   *
   * ```js
   * "fieldName": "Pumpkin Pines"
   * ```
   *
   */
  fieldName: string;
  /**
   * The number of acres that use the herein defined crop management practices (via `cropYears`).
   *
   * @nullable during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)
   *
   * @example <caption>When the field's legal area is 100 acres</caption>
   *
   * ```js
   * "acres": 100
   * ```
   *
   */
  acres: number;
  /**
   * The geographic boundaries (defined as GeoJSON) associated with crop management practices.
   *
   * @example <caption>When a field boundary is defined as a simple polygon</caption>
   *
   * ```js
   * "geojson": {
   *  "type": "Polygon", "coordinates": [
   *    [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
   *  ]
   * }
   * ```
   *
   */
  geojson: GeoJSON; // todo guidance on geojson
  /**
   * A list of crop management details grouped by the crop planting year.
   *
   * @example <caption>When a field has management information for planting year 2000</caption>
   *
   * ```js
   * "cropYears": [
   *  {
   *    "plantingYear": 2000,
   *    "crops": [
   *      // ...(AnnualCrop | OrchardOrVineyardCrop | PerennialCrop)[] (crops that were planted in year 2000)
   *    ],
   *  }
   * ]
   * ```
   *
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
 * }
 * ```
 *
 */
export interface CropYear {
  /**
   * The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.
   *
   * @minimum 2000
   * @maximum 2099
   *
   * @example <caption>When the herein defined crops were planted in year 2000</caption>
   *
   * ```js
   * "plantingYear": 2000
   * ```
   *
   */
  plantingYear: number;
  /**
   * A list of crops for a given planting year.
   *
   * @items.maximum 3
   * @items.minimum 1
   *
   * @example <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000</caption>
   *
   * ```js
   * "crops": [
   *  {
   *    "name": "corn",
   *    "type": "annual crop",
   *    "plantingDate": "01/01/2000"
   *    // ...CropEvents
   *  },
   *  {
   *    "name": "annual rye",
   *    "type": "perennial",
   *    "plantingDate": "01/01/2000"
   *    // ...CropEvents
   *  },
   *  {
   *    "type": "orchard",
   *    "prune": "yes",
   *    "renewOrClear": "yes",
   *    "plantingDate": "01/01/2000"
   *    // ...CropEvents
   *  }
   * ]
   * ```
   *
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
   * The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   *
   * If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the crop was planted on January 1st of year 2000</caption>
   *
   * ```js
   * "plantingDate": "01/01/2000"
   * ```
   *
   */
  plantingDate: string;
}

/**
 * Crop harvest events
 */
export interface HarvestableCropEvents {
  /**
   * A list of harvest events, if applicable. When it is not applicable it can be defined as null.
   *
   * Straw / Stover harvest exception: If the hay or stover was removed
   * separately after grain / fruit / tuber harvest, do NOT add this as
   * a second harvest. Instead, enter the percent of the remaining residue
   * that was removed on the grain harvest, regardless of removal date.
   *
   * @example <caption>When an annual crop had a harvest event</caption>
   *
   * ```js
   *  "harvestEvents": [
   *    {
   *      "date": "10/01/2000",
   *      "yield": 100,
   *      "yieldUnit": "bu/ac",
   *      "grainFruitTuber": "n/a",
   *      "residueRemoved": "n/a",
   *    }
   *  ]
   * ```
   *
   * @example <caption>When an annual crop had a harvest event</caption>
   *
   * ```js
   *  "harvestEvents": [
   *    {
   *      "date": "10/01/2000",
   *      "yield": 100,
   *      "yieldUnit": "bu/ac",
   *      "grainFruitTuber": "n/a",
   *      "residueRemoved": "n/a",
   *    }
   *  ]
   * ```
   *
   */
  harvestEvents?: (AnnualCropHarvestEvent | CropManagementEvent)[];
}

/**
 * Crop management details and events
 *
 * @example
 *
 * ```js
 * {
 *  "killEvent": {
 *    // ...
 *  },
 *  "soilOrCropDisturbanceEvents": [
 *    // ...
 *  ],
 *  "fertilizerEvents": [
 *    // ...
 *  ],
 *  "organicMatterEvents": [
 *    // ...
 *  ],
 *  "irrigationEvents": [
 *    // ...
 *  ],
 *  "limingEvents": [
 *    // ...
 *  ],
 *  "grazingEvents": [
 *    // ...
 *  ],
 *  "burningEvent": {
 *    // ...
 *  },
 * }
 * ```
 *
 */
export interface CropEvents {
  /**
   * A kill event, if applicable. When it is not applicable it can be excluded
   */
  killEvent?: KillEvent;
  /**
   * A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.
   *
   * All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`
   *
   */
  soilOrCropDisturbanceEvents: SoilOrCropDisturbanceEvent[];
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
   * A burning event, if applicable. When it is not applicable it can be defined as null.
   *
   * @default { "type": "no burning" }
   *
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
export interface OrchardOrVineyardCrop
  extends CropEvents,
    HarvestableCropEvents,
    PlantedCrop {
  /**
   * The crop type
   *
   * You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)
   *
   * Note: if a crop ever changes types during the lifetime of the field (i.e. from an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.
   *
   * @example <caption>When the crop is an orchard</caption>
   *
   * ```js
   * "type": "orchard"
   * ```
   *
   * @example <caption>When the crop is a vineyard</caption>
   *
   * ```js
   * "type": "vineyard"
   * ```
   *
   */
  type: 'orchard' | 'vineyard';
  /**
   * Indicates if the crop was pruned
   *
   * @default "no"
   *
   * @example <caption>When the crop was pruned</caption>
   *
   * ```js
   * "pruned": "yes"
   * ```
   *
   * @example <caption>When the crop was not pruned</caption>
   *
   * ```js
   * "pruned": "no"
   * ```
   *
   */
  prune: 'yes' | 'no';
  /**
   * Indicates if the crop was renewed or cleared
   *
   * @default "no"
   *
   * @example <caption>When the crop was renewed</caption>
   *
   * ```js
   * "renewOrClear": "yes"
   * ```
   *
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
 *
 * @example
 *
 * ```js
 * {
 *  "name": "annual rye",
 *  "type": "perennial",
 *  "plantingDate": "01/01/2000"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface PerennialCrop
  extends CropEvents,
    HarvestableCropEvents,
    PlantedCrop {
  // todo crop name enum (which crops can be defined as perennial?)
  /**
   * The name of the crop.
   *
   * You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string;
  /**
   * The crop type
   *
   * You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)
   *
   * @default "perennial"
   *
   */
  type: 'perennial';
}

/**
 * Crop management details and events for cover crops
 *
 * @example
 *
 * ```js
 * {
 *  "name": "corn",
 *  "type": "annual cover",
 *  "plantingDate": "01/01/2000"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface CoverCrop extends CropEvents, PlantedCrop {
  /**
   * The name of the crop.
   *
   * You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string; // todo enum
  /**
   * The crop type
   *
   * You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)
   *
   * @default "annual cover"
   *
   */
  type: 'annual cover';
}

/**
 * Crop management details and events for annual crops
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
export interface AnnualCrop
  extends CropEvents,
    HarvestableCropEvents,
    PlantedCrop {
  /**
   * The name of the crop.
   *
   * You can find a list of accepted crops [here](go.nori.com/inputs)
   */
  name: string; // todo enum
  /**
   * The crop type
   *
   * You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)
   *
   * @default "annual crop"
   *
   */
  type: 'annual crop';
}

/**
 * A crop event that happened on a particular date
 */
export interface CropEvent {
  /**
   * The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   */
  date: string;
}

/**
 * A crop event that has a start and end date
 */
export interface CropEventRange {
  /**
   * The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   */
  startDate: string;
  /**
   * The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
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
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": "n/a",
 * }
 * ```
 *
 */
export interface CropManagementEvent extends CropEvent {
  /**
   * Whether the crop was harvest for grain, fruit or tuber
   *
   * @example <caption>Select “yes” if the crop was harvested for grain, fruit, or tuber</caption>
   *
   * ```js
   * "grainFruitTuber": "yes"
   * ```
   *
   * @example <caption>Select “no” if the crop was harvested before maturity for silage or haylage</caption>
   *
   * ```js
   * "grainFruitTuber": "no"
   * ```
   *
   */
  grainFruitTuber: 'yes' | 'no';
  // todo all of the following options are only applicable for harvest events (they do not apply to kill events)
  /**
   * Crop residue removed
   *
   * @minimum 0
   * @maximum 100
   *
   * @example <caption>Enter 0% if the crop was only harvested for grain / fruit / tuber</caption>
   *
   * ```js
   * "residueRemoved": 0
   * ```
   *
   * @example <caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest</caption>
   *
   * ```js
   * "residueRemoved": 5
   * ```
   *
   * @example <caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage</caption>
   *
   * ```js
   * "residueRemoved": 10
   * ```
   *
   * @example <caption>Enter 'n/a' if it does not apply</caption>
   *
   * ```js
   * "residueRemoved": "n/a"
   * ```
   *
   */
  residueRemoved: number | 'n/a'; // todo default? why/when would this not apply? can we move it elsewhere or handle it in a way that doesnt require it to be a number | string -- this depends on whether no vs n/a  impacts the model.
}

/**
 * An annual crop's harvest event details
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
export interface AnnualCropHarvestEvent extends CropManagementEvent {
  /**
   * The crop yield
   *
   * The current version of quantification does not consider yield when producing estimates.
   */
  yield?: number; // todo can we drop this since it doesnt impact quantification
  /**
   * The crop yield units
   *
   * The current version of quantification does not consider yield when producing estimates.
   */
  yieldUnit?: 'bu/ac' | 'cwt/ac' | 'tons/ac' | 'lbs/ac'; // todo can we drop this since it doesnt impact quantification
}

/**
 *
 * Details surrounding the crop "kill" event
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  // "residueRemoved": 5, // todo potentially needs to be "n/a"
 * }
 * ```
 *
 */
export type KillEvent = CropEvent;

/**
 * Soil or crop disturbance event event details
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
export interface SoilOrCropDisturbanceEvent extends CropEvent {
  /**
   * The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.
   */
  name?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * The soil or crop disturbance events classification type
   *
   * You can find a list of common equivalents [here](go.nori.com/inputs)
   *
   */
  type:
    | 'Reduced Tillage'
    | 'Mulch Tillage'
    | 'Ridge Tillage'
    | 'Strip Tillage'
    | 'No Tillage'
    | 'Growing Season Cultivation'
    | 'Mow'
    | 'Crimp';
  termination: 'winter killed' | 'broad-spectrum herbicide';
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
   * The fertilizer classification type
   *
   * Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled
   *
   * @default "mixed blends"
   *
   */
  type?: string;
  /**
   * Amount of nitrogen applied in lbs/ac
   */
  lbsOfNPerAcre: number;
}

// todo the unit is sometimes gallons per acre, sometimes tons (depends on solid v slurry)
/**
 * Organic matter (OMAD) and manure event details
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "alfalfa meal",
 *  "amountPerAcre": 2, // tons
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 * }
 * ```
 *
 */
export interface OrganicMatterEvent extends CropEvent {
  /**
   * The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.
   */
  name?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * The organic matter or manure classification type
   */
  type:
    | 'Alfalfa Meal'
    | 'Beef Manure, Solid'
    | 'Beef Slurry'
    | 'Blood, Dried'
    | 'Bone Meal'
    | 'Chicken - Broiler (litter), Solid'
    | 'Chicken - Broiler Slurry'
    | 'Chicken - Layer Slurry'
    | 'Chicken - Layer, Solid'
    | 'Compost or Composted Manure, Solid'
    | 'Dairy Manure, Solid'
    | 'Dairy Slurry'
    | 'Farmyard Manure, Solid'
    | 'Feather Meal'
    | 'Fish Emulsion'
    | 'Fish Scrap'
    | 'Guano'
    | 'Horse Manure, Solid'
    | 'Other Manure, Solid'
    | 'Sheep Manure, Solid'
    | 'Soybean Meal'
    | 'Swine Manure, Slurry'
    | 'Swine Manure, Solid';
  /**
   *
   * Amount of organic matter or manure applied per acre
   *
   * @minimum 0
   * @maximum 200 // todo confirm max
   *
   */
  amountPerAcre: number;
  /**
   * The nitrogen percent makeup in the organic matter or manure
   *
   * You can find a list of default values per `type` [here](go.nori.com/inputs)
   *
   * @minimum 0
   * @maximum 100
   *
   * @nullable during import (when defined as null, a default value will be assigned)
   *
   */
  percentNitrogen: number;
  /**
   * The carbon to nitrogen ratio in the organic matter or manure
   *
   * You can find a list of default values per `type` [here](go.nori.com/inputs)
   *
   * @nullable during import (when defined as null, a default value will be assigned)
   *
   * @minimum 0
   */
  carbonNitrogenRatio: number;
}

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
   * The irrigation volume in inches. If volume is 0, simply do not define an irrigation event
   *
   * @minimum 0
   *
   */
  volume: number;
  /**
   * The irrigation depth in inches. This should be set to 0 if it was applied at the surface.
   *
   * @minimum 0
   *
   */
  depth: number;
  /**
   * The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7.
   *
   * // todo guidance on what to do when the user has 2 known specific dates that irrigation happened (NOT frequency based)
   *
   * @minimum 1
   * @maximum 365
   */
  frequency?: number;
}
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
export interface LimingEvent {
  /**
   * The liming type
   */
  type:
    | 'none' // todo if none, can we exclude instead?
    | 'crushed limestone'
    | 'calcitic limestone'
    | 'dolomitic limestone'
    | 'other';
  /**
   * The liming amount (in tons per acre)
   */
  tonsPerAcre: number; // todo minimum, maximum
  /**
   * // todo guidance date doesnt matter, fi excluded, we will use an assigned date
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   */
  date?: string;
}

/**
 * Grazing event details
 *
 * @example
 *
 * ```js
 * {
 *  "restPeriod": 0,
 *  "utilization": 20,
 *  "startDate": "01/01/2000",
 *  "endDate": "12/31/2000"
 * }
 * ```
 *
 */
export interface GrazingEvent extends CropEventRange {
  /**
   * The grazing rest period in days
   *
   * @minimum 0
   * @maximum 365
   *
   */
  restPeriod: number;
  /**
   * The percentage of forage consumed by the animals
   *
   * @minimum 0
   * @maximum 100
   *
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
