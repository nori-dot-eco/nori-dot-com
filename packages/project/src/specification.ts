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
 * You can find an example of a full implementation [here](../../example/example2.json)
 *
 * ## Navigation
 *
 * Whilst it is likely easiest to navigate this document by starting at the highest level interface ["Project"](../interfaces/_specification_.project.md), you can also find definitions for all of the interfaces for a Nori project listed in the [index section](#index).
 *
 * @packageDocumentation
 */
import type { GeoJSON } from 'geojson';

/*
 * Todo
 * ! Topics to discuss with partners in a specification review
 * * even if current data platforms cant provide exports in this format for whatever reason, but can in v1, then we should consider taking requests that v2 was intended to solve and instead implement them into the current v1 importer
 * * include: conservis, granular, truterra (jamie)
 * * how realistic is it to expect partners to use enums for types
 * * lbsOfNPerAcre realistic?
 *
 * ! Importer logic
 * * order events by date
 *
 * ! Validation library
 * * readme on how to build schema.
 *
 * ! Import file example changes
 * * drop quantity, quantity unit, area, areaUnit from liming
 * * dropped nullable for events, if null instead exclude
 * * merge yield numerator and denominator into one enum
 * * remove volumeUnits and depthUnits.
 *
 * ! Specification module
 * * independent versioning
 * * * enum for project.version
 * * pre-commit make docs
 * * rename file as project-specification.
 *
 * ! Misc
 * ? Jaycen
 * * re-use or reference examples https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types
 * ? Need from rebekah:
 * * * change crop inputs to correct classification (i.e. Alfalfa should be perennial)
 * * * * this allows me to add guidance on things like how to find crop type (i.e. When a crop is a valid orchard/vineyard)
 * * * solid v slurry manure types.
 *
 */

/**
 *
 * A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.
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
   * The specification version. This information is used to determine the logic Nori uses to import a project
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
   * An array of fields defining annual crop management practices.
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

/**
 * @example
 *
 * ```js
 * {
 *  "preYear1980": "irrigation (pre 1980s)"
 * }
 * ```
 *
 */
export interface HistoricLandManagement {
  /**
   * A description of how the land was managed before 1980.
   *
   * @example <caption>When the land was not irrigated upland before 1980:</caption>
   *
   * ```js
   * "preYear1980": "upland non-irrigated (pre 1980s)"
   * ```
   *
   * @example <caption>When the land was irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "irrigation (pre 1980s)"
   * ```
   *
   * @example <caption>When the land was not irrigated lowland before 1980:</caption>
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
}

/**
 * Land management details for when a field did not participate in CRP
 *
 * @example
 *
 * ```js
 * {
 *  "crp": "no",
 *  "preYear1980": "irrigation (pre 1980s)",
 *  "tillageForYears1980To2000": "intensive tillage",
 *  "year1980To2000": "irrigated: annual crops in rotation",
 * }
 * ```
 *
 */
export interface HistoricNonCRPLandManagement extends HistoricLandManagement {
  /**
   * Whether the field participated in CRP or not.
   *
   * @default "no"
   *
   * @example <caption>When the field did not participate in CRP:</caption>
   *
   * ```js
   * "crp": "no"
   * ```
   *
   */
  crp: 'no';
  /**
   * The type of soil or crop disturbance events used on the field between 1980 and 2000.
   *
   * @example <caption>When the land used intensive tillage from years 1980-2000:</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "intensive tillage"
   * ```
   *
   * @example <caption>When the land used reduced tillage from years 1980-2000:</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "reduced tillage"
   * ```
   *
   * @example <caption>When the land used no till from years 1980-2000:</caption>
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
   * A description of how the land was managed between 1980 and 2000.
   *
   * @example
   */
  year1980To2000:
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

// todo add a go link that shows which options are allowed per state (this exists in the data template options tab but not go/inputs for some reason)
/**
 * Details surrounding how the field was managed before year 2000
 *
 * Note that the state the field exists within restricts the allowed values per object property.
 *
 * @example
 *
 * ```js
 * {
 *  // HistoricCRPLandManagement:
 *  "crp": "yes",
 *  "crpType": "100% grass",
 *  "crpStartYear": 1980,
 *  "crpEndYear": 2000,
 *  "preCRPManagement": "irrigated: annual crops in rotation",
 *  "preCRPTillage": "intensive tillage",
 *  "postCRPManagement": "livestock grazing",
 *  "postCRPTillage": "intensive tillage",
 *  // HistoricLandManagement:
 *  "preYear1980": "irrigation (pre 1980s)"
 * }
 * ```
 *
 */
export interface HistoricCRPLandManagement extends HistoricLandManagement {
  /**
   * Whether the field participated in CRP or not.
   *
   * @default "yes"
   *
   * @example <caption>When the field participated in CRP:</caption>
   *
   * ```js
   * "crp": "yes"
   * ```
   *
   */
  crp: 'yes';
  /**
   * The type of CRP the field participated in. Only applicable if `crp` is set to yes.
   *
   * @example <caption>When the field participated in 100% grass CRP:</caption>
   *
   * ```js
   * "crpType": "100% grass"
   * ```
   *
   * @example <caption>When the field participated in grass/legume mixture CRP:</caption>
   *
   * ```js
   * "crpType": "grass / legume mixture"
   * ```
   *
   */
  crpType: '100% grass' | 'grass / legume mixture'; // todo what does "100% grass mean" // todo what about grass/legume mixture?
  /**
   * The CRP start year
   *
   * @minimum 1980
   * @maximum 2000
   *
   * @example <caption>When CRP enrollment started in 1980:</caption>
   *
   * ```js
   * "crpStartYear": 1980
   * ```
   *
   */
  crpStartYear: number;
  /**
   * The CRP end year
   *
   * @minimum 1980
   * @maximum 2000
   *
   * @example <caption>When CRP enrollment ended in 2000:</caption>
   *
   * ```js
   * "crpEndYear": 2000
   * ```
   *
   */
  crpEndYear: number;
  /**
   * How was the field managed before the field entered into CRP
   *
   * @example
   *
   * ```js
   * "preCRPManagement": "irrigated: annual crops in rotation"
   * ```
   *
   */
  preCRPManagement: string; // todo enum
  /**
   * How was the field tilled before the field entered into CRP
   *
   * @example
   *
   * ```js
   * "preCRPTillage": "intensive tillage"
   * ```
   *
   */
  preCRPTillage: string; // todo enum
  /**
   * How was the field managed after CRP
   *
   * @example
   *
   * ```js
   * "postCRPManagement": "livestock grazing"
   * ```
   *
   */
  postCRPManagement: string; // todo enum
  /**
   * How was the field managed after tillage
   *
   * @example
   *
   * ```js
   * "postCRPTillage": "intensive tillage"
   * ```
   *
   */
  postCRPTillage: string; // todo enum
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
 *  ],
 *  "historicLandManagement": {
 *    // ...HistoricNonCRPLandManagement or HistoricCRPLandManagement
 *  }
 * }
 * ```
 *
 */
export interface Field {
  // todo rebekah and jaycen to talk about regen start year
  /**
   * Year of practice switch - there can be more than one. We tend to use the earliest one that is after 2010 and meets our verification requirements.
   *
   * For more information on how to select a start year see [here](https://go.nori.com/years).
   *
   * @minimum 2010
   *
   * @example <caption>When regenerative practices started in year 2015:</caption>
   *
   * ```js
   * "regenerativeStartYear": 2015
   * ```
   *
   */
  regenerativeStartYear: number;
  /**
   * Details surrounding how the field was managed before year 2000.
   *
   * @example <caption>When the field did not participate in CRP (HistoricNonCRPLandManagement):</caption>
   *
   * ```js
   * "historicLandManagement": {
   *  "crp": "no",
   *  "preYear1980": "irrigation (pre 1980s)",
   *  "tillageForYears1980To2000": "intensive tillage",
   *  "year1980To2000": "irrigated: annual crops in rotation",
   * }
   * ```
   *
   * @example <caption>When the field did participate in CRP (HistoricCRPLandManagement):</caption>
   *
   * ```js
   * "historicLandManagement":  {
   *  "crp": "yes",
   *  "crpType": "100% grass",
   *  "crpStartYear": 1980,
   *  "crpEndYear": 2000,
   *  "preCRPManagement": "irrigated: annual crops in rotation",
   *  "preCRPTillage": "intensive tillage",
   *  "postCRPManagement": "livestock grazing",
   *  "postCRPTillage": "intensive tillage",
   *  "preYear1980": "irrigation (pre 1980s)"
   * }
   * ```
   *
   */
  historicLandManagement:
    | HistoricNonCRPLandManagement
    | HistoricCRPLandManagement;
  /**
   * The name of the field.
   *
   * @example <caption>When a field is named "Pumpkin Pines":</caption>
   *
   * ```js
   * "fieldName": "Pumpkin Pines"
   * ```
   *
   */
  fieldName: string;
  /**
   * The number of acres that use the herein defined crop management practices (via [cropYears](#cropYears)).
   *
   * @nullable during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)
   *
   * @example <caption>When the field's legal area is 100 acres:</caption>
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
   * For additional guidance and limitation of boundary files, [refer to the FAQ here](https://docs.google.com/document/d/1vnJKwFzU6drCjTD-eVXUK_59togcmROliyOU1y8Ne1U/edit?ts=5ed8f2d1#heading=h.fbiiknhrzhg8)
   *
   * @example <caption>When a field boundary is defined as a simple polygon:</caption>
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
  geojson: GeoJSON;
  /**
   * A list of crop management details grouped by the crop planting year.
   *
   * @example <caption>When a field has management information for planting year 2000:</caption>
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

// todo remove limit fo 3 crops per planting year to allow for the ability for users to define crop type switches (i.e. annual to perennial)
// todo add guidance for this ^ (rebekah and jaycen to discuss options here)
/**
 * Crop management details grouped by a planting year.
 *
 * @example <caption>For crop management practices in 2000:</caption>
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
   * @example <caption>When the herein defined crops were planted in year 2000:</caption>
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
   * @example <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>
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
 * Crop properties relevant to planted crops.
 *
 * @example
 *
 * ```js
 * {
 *  "plantingDate": "01/01/2000";
 * }
 * ```
 *
 */
export interface PlantedCrop {
  /**
   * The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).
   *
   * If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the crop was planted on January 1st of year 2000:</caption>
   *
   * ```js
   * "plantingDate": "01/01/2000"
   * ```
   *
   */
  plantingDate: string;
}

/**
 * Crop harvest events.
 *
 * @example <caption>When an annual crop had a harvest event:</caption>
 *
 * ```js
 *  "harvestEvents": [
 *    {
 *      "date": "10/01/2000",
 *      "yield": 100,
 *      "yieldUnit": "bu/ac",
 *      "grainFruitTuber": "n/a",
 *    }
 *  ]
 * ```
 *
 */
export interface HarvestableCropEvents {
  /**
   * A list of harvest events, if applicable.
   *
   * Straw / Stover harvest exception: If the hay or stover was removed
   * separately after grain / fruit / tuber harvest, do NOT add this as
   * a second harvest. Instead, enter the percent of the remaining residue
   * that was removed on the grain harvest, regardless of removal date.
   *
   * @example <caption>When crop had at least one harvest event:</caption>
   *
   * ```js
   *  "harvestEvents": [
   *    // ...list of AnnualCropHarvestEvents or CropManagementEvents
   *  ]
   * ```
   *
   */
  harvestEvents?: (AnnualCropHarvestEvent | CropManagementEvent)[];
}

/**
 * Crop management details and events.
 *
 * @example <caption>When a crop has associated management events</caption>
 *
 * ```js
 * {
 *  "killEvent": {
 *    // ... KillEvent
 *  },
 *  "soilOrCropDisturbanceEvents": [
 *    // ... SoilOrCropDisturbanceEvents
 *  ],
 *  "fertilizerEvents": [
 *    // ... FertilizerEvents
 *  ],
 *  "organicMatterEvents": [
 *    // ... OrganicMatterEvents
 *  ],
 *  "irrigationEvents": [
 *    // ... IrrigationEvents
 *  ],
 *  "limingEvents": [
 *    // ... LimingEvents
 *  ],
 *  "grazingEvents": [
 *    // ... GrazingEvents
 *  ],
 *  "burningEvent": {
 *    // ... BurningEvent
 *  },
 * }
 * ```
 *
 */
export interface CropEvents {
  /**
   * A kill event, if applicable. When it is not applicable it can be excluded.
   *
   * @example <caption>When the crop was killed on October 1st of 2000:</caption>
   *
   * ```js
   * "killEvent": {
   *  "date": "10/01/2000",
   *  // "residueRemoved": 5, // todo will it ever be anything other than 0%?
   * }
   * ```
   */
  killEvent?: KillEvent;
  /**
   * A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).
   *
   * All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.
   *
   * @example <caption>When some soil or crop disturbance events occurred:</caption>
   *
   * ```js
   * "soilOrCropDisturbanceEvents": [
   *  {
   *    "date": "10/01/2000",
   *    "type": "mow",
   *  }
   *  // ... other soul and crop disturbance events
   * ]
   * ```
   *
   */
  soilOrCropDisturbanceEvents: SoilOrCropDisturbanceEvent[];
  /**
   * A list of fertilizer events, if applicable.
   *
   * @example <caption>When some fertilizer events occurred:</caption>
   *
   * ```js
   * "fertilizerEvents": [
   *  {
   *    "date": "10/01/2000",
   *    "productName": "Joe's fertilizer",
   *    "type": "mixed blends",
   *    "lbsOfNPerAcre": 10
   *  }
   *  // ... other fertilizer events
   * ]
   * ```
   *
   */
  fertilizerEvents?: FertilizerEvent[];
  /**
   * A list of organic matter and manure application events, if applicable.
   *
   * @example <caption>When some organic matter was applied:</caption>
   *
   * ```js
   * "organicMatterEvents": [
   *  {
   *    "date": "10/01/2000",
   *    "type": "alfalfa meal",
   *    "amountPerAcre": 2, // tons
   *    "percentNitrogen": 9,
   *    "carbonNitrogenRatio": 30,
   *  }
   *  // ... other organic matter or manure events
   * ]
   * ```
   *
   */
  organicMatterEvents?: OrganicMatterEvent[];
  /**
   * A list of irrigation events, if applicable.
   *
   * @example <caption>When some irrigation events occurred:</caption>
   *
   * ```js
   * "irrigationEvents": [
   *  {
   *    "volume": 1,
   *    "depth": 100,
   *    "frequency": 7,
   *    "startDate": "01/01/2000",
   *    "endDate": "12/31/2000"
   *  }
   *  // ... other irrigation events
   * ]
   * ```
   *
   */
  irrigationEvents?: IrrigationEvent[];
  /**
   * A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.
   *
   * @example <caption>When some liming events occurred:</caption>
   *
   * ```js
   * "limingEvents": [
   *  {
   *    "date": "01/01/2000",
   *    "type": "crushed limestone",
   *    "tonsPerAcre": 10,
   *  }
   *  //...other liming events
   * ]
   * ```
   *
   */
  limingEvents?: LimingEvent[];
  /**
   * A list of grazing events, if applicable.
   *
   * @example <caption>When some grazing events occurred:</caption>
   *
   * ```js
   * "grazingEvents": [
   *  {
   *   "restPeriod": 0,
   *   "utilization": 20,
   *   "startDate": "01/01/2000",
   *   "endDate": "12/31/2000"
   *  }
   *  // .. additional grazing events
   * ]
   * ```
   *
   */
  grazingEvents?: GrazingEvent[];
  /**
   * A burning event, if applicable.
   *
   * @default { "type": "no burning" }
   *
   * @example <caption>When burning occurred after harvesting:</caption>
   *
   * ```js
   * "burningEvent": {
   *  "type": "after harvesting"
   * }
   * ```
   *
   */
  burningEvent?: BurningEvent;
}

/**
 * Crop management details and events for orchard and vineyard crops.
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
  // todo crop name enum (which crops can be defined as orchard/vineyard?)
  /**
   * The name of the orchard or vineyard crop.
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example
   */
  name: string;
  /**
   * The crop type.
   *
   * You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).
   *
   * Note: if a crop ever changes types during the lifetime of the field (i.e. From an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.
   *
   * @example <caption>When the crop is an orchard:</caption>
   *
   * ```js
   * "type": "orchard"
   * ```
   *
   * @example <caption>When the crop is a vineyard:</caption>
   *
   * ```js
   * "type": "vineyard"
   * ```
   *
   */
  type: 'orchard' | 'vineyard';
  /**
   * Indicates if the crop was pruned.
   *
   * @default "no"
   *
   * @example <caption>When the crop was pruned:</caption>
   *
   * ```js
   * "pruned": "yes"
   * ```
   *
   * @example <caption>When the crop was not pruned:</caption>
   *
   * ```js
   * "pruned": "no"
   * ```
   *
   */
  prune: 'yes' | 'no';
  /**
   * Indicates if the crop was renewed or cleared.
   *
   * @default "no"
   *
   * @example <caption>When the crop was renewed:</caption>
   *
   * ```js
   * "renewOrClear": "yes"
   * ```
   *
   * @example <caption>When the crop was not renewed:</caption>
   *
   * ```js
   * "renewOrClear": "no"
   * ```
   *
   */
  renewOrClear: 'yes' | 'no';
}

/**
 * Perennial crop details.
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
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example
   */
  name: string;
  /**
   * The crop type.
   *
   * You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "perennial"
   * @example
   *
   * ```js
   * "type": "perennial"
   * ```
   *
   */
  type: 'perennial';
}

/**
 * Crop management details and events for cover crops.
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
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example <caption>When the cover crop was alfalfa:</caption>
   *
   * ```js
   * "type": "alfalfa"
   * ```
   *
   */
  name: string; // todo enum
  /**
   * The crop type.
   *
   * You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "annual cover"
   *
   * @example
   *
   * ```js
   * "type": "annual cover"
   * ```
   *
   */
  type: 'annual cover';
}

/**
 * Crop management details and events for annual crops.
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
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example <caption>When the annual crop is corn:</caption>
   *
   * ```js
   * "type": "corn"
   * ```
   *
   */
  name: string; // todo enum
  /**
   * The crop type.
   *
   * You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "annual crop"
   *
   * @example
   *
   * ```js
   * "type": "annual crop"
   * ```
   *
   */
  type: 'annual crop';
}

/**
 * A crop event that happened on a particular date.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "01/01/2000"
 * }
 * ```
 *
 */
export interface CropEvent {
  /**
   * The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the crop event occurred on January 1st of 2000:</caption>
   *
   * ```js
   * "date": "01/01/2000"
   * ```
   *
   */
  date: string;
}

/**
 * A crop event that has a start and end date.
 *
 * @example
 *
 * ```js
 * {
 *  "startDate": "01/01/2000",
 *  "endDate": "12/31/2000"
 * }
 * ```
 *
 */
export interface CropEventRange {
  /**
   * The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the start date of the event range was on January 1st of 2000:</caption>
   *
   * ```js
   * "startDate": "01/01/2000"
   * ```
   *
   */
  startDate: string;
  /**
   * The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the end date of the event range was on December 31st of 2000:</caption>
   *
   * ```js
   * "endDate": "12/31/2000"
   * ```
   *
   */
  endDate: string;
}

/**
 * Harvest event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": 0,
 * }
 * ```
 *
 */
export interface CropManagementEvent extends CropEvent {
  /**
   * Whether the crop was harvest for grain, fruit or tuber.
   *
   * @example <caption>Select “yes” if the crop was harvested for grain, fruit, or tuber:</caption>
   *
   * ```js
   * "grainFruitTuber": "yes"
   * ```
   *
   * @example <caption>Select “no” if the crop was harvested before maturity for silage or haylage:</caption>
   *
   * ```js
   * "grainFruitTuber": "no"
   * ```
   *
   */
  grainFruitTuber: 'yes' | 'no';
  /**
   * Crop residue removed.
   *
   * @default 0
   *
   * @minimum 0
   * @maximum 100
   *
   * @example <caption>Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:</caption>
   *
   * ```js
   * "residueRemoved": 0
   * ```
   *
   * @example <caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:</caption>
   *
   * ```js
   * "residueRemoved": 5
   * ```
   *
   * @example <caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:</caption>
   *
   * ```js
   * "residueRemoved": 10
   * ```
   *
   */
  residueRemoved?: number;
}

// todo if yield is optional, a supplier will need guidance on the up/downside of supplying that information
/**
 * An annual crop's harvest event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "yield": 100,
 *  "yieldUnit": "bu/ac",
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": 0,
 * }
 * ```
 *
 */
export interface AnnualCropHarvestEvent extends CropManagementEvent {
  /**
   * The crop yield.
   *
   * The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.
   *
   * @default 0
   *
   * @example <caption>When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:</caption>
   *
   * ```js
   * "yield": 100
   * ```
   *
   */
  yield?: number;
  /**
   * The crop yield units.
   *
   * The current version of quantification does not consider yield when producing estimates.
   *
   * @default 0
   *
   * @example <caption>When the unit of the yield is submitted in lbs per acre:</caption>
   *
   * ```js
   * "yieldUnit": "lbs/ac"
   * ```
   *
   */
  yieldUnit?: 'bu/ac' | 'cwt/ac' | 'tons/ac' | 'lbs/ac';
}

/**
 *
 * Details surrounding the crop "kill" event.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  // "residueRemoved": 5, // todo will it ever be anything other than 0%?
 * }
 * ```
 *
 */
export interface KillEvent extends CropEvent {} // todo is there any way to kill a crop using something other than what's defined in soil or crop disturbance types? If not, then delete kill event entirely
// todo if removing killevent, does residue removed need to be defined instead in soil or crop disturbances

/**
 * Soil or crop disturbance event event details.
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
   *
   * @example <caption>When the name of the soil or crop disturbance used on the crop was known to the supplier as "Joe's tillage method":</caption>
   *
   * ```js
   * "productName": "Joe's tillage method"
   * ```
   *
   */
  name?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * The soil or crop disturbance events classification type.
   *
   * You can find a list of common equivalents [here](https://go.nori.com/inputs).
   *
   * @example <caption>Little to no crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "intensive tillage"
   * ```
   *
   * @example <caption>15-30% of crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "reduced tillage"
   * ```
   *
   * @example <caption>30% or more of crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "mulch tillage"
   * ```
   *
   * @example <caption>30% or more of crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "ridge tillage"
   * ```
   *
   * @example <caption>75% or more of crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "strip tillage"
   * ```
   *
   * @example <caption>75% or more of crop residue remains on the surface after tillage.:</caption>
   *
   * ```js
   * "type": "no tillage"
   * ```
   *
   * @example <caption>Weeds are killed and turned into the soil surface layer.:</caption>
   *
   * ```js
   * "type": "growing season cultivation"
   * ```
   *
   * @example <caption>50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing.:</caption>
   *
   * ```js
   * "type": "mow"
   * ```
   *
   * @example <caption>100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process.:</caption>
   *
   * ```js
   * "type": "crimp"
   * ```
   *
   * @example <caption>Cover crop died in winter:</caption>
   *
   * ```js
   * "type": "winter killed"
   * ```
   *
   * @example <caption>100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds.:</caption>
   *
   * ```js
   * "type": "broad-spectrum herbicide"
   * ```
   *
   */
  type:
    | 'intensive tillage'
    | 'reduced tillage'
    | 'mulch tillage'
    | 'ridge tillage'
    | 'strip tillage'
    | 'no tillage'
    | 'growing season cultivation'
    | 'mow'
    | 'crimp'
    | 'winter killed'
    | 'broad-spectrum herbicide'; // todo default? if we say no till, can we default to the planting date
}

/**
 * Fertilizer event details.
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
   *
   * @example <caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>
   *
   * ```js
   * "productName": "Joe's fertilizer"
   * ```
   *
   */
  productName?: string;
  /**
   * The fertilizer classification type.
   *
   * Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled.
   *
   * @default "mixed blends"
   * @example <caption>When the fertilizer type can be classified as mixed blends:</caption>
   *
   * ```js
   * "type": "mixed blends",
   * ```
   *
   */
  type?: string;
  /**
   * Amount of nitrogen applied in lbs/ac.
   *
   * @example <caption>When 10 lbs of Nitrogen per acre was applied:</caption>
   *
   * ```js
   * "lbsOfNPerAcre": 10
   * ```
   */
  lbsOfNPerAcre: number;
}

// todo rebekah says there are properties missing
// todo the unit is sometimes gallons per acre, sometimes tons (depends on solid v slurry)
/**
 * Organic matter (OMAD) and manure event details.
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
   *
   * @example <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>
   *
   * ```js
   * "name": "Joe's manure"
   * ```
   *
   */
  name?: string; // todo deprecate when sheet is gone (just an alias)
  /**
   * The organic matter or manure classification type.
   *
   * @example <caption>When the amount of organic matter or manure type used was alfalfa meal:</caption>
   *
   * ```js
   * "type": "alfalfa meal"
   * ```
   *
   */
  type:
    | 'alfalfa meal'
    | 'beef manure, solid'
    | 'beef slurry'
    | 'blood, dried'
    | 'bone meal'
    | 'chicken - broiler (litter), solid'
    | 'chicken - broiler slurry'
    | 'chicken - layer slurry'
    | 'chicken - layer, solid'
    | 'compost or composted manure, solid'
    | 'dairy manure, solid'
    | 'dairy slurry'
    | 'farmyard manure, solid'
    | 'feather meal'
    | 'fish emulsion'
    | 'fish scrap'
    | 'guano'
    | 'horse manure, solid'
    | 'other manure, solid'
    | 'sheep manure, solid'
    | 'soybean meal'
    | 'swine manure, slurry'
    | 'swine manure, solid';
  /**
   * Amount of organic matter or manure applied per acre.
   *
   * @minimum 0
   * @maximum 200 // todo confirm max
   *
   * @example <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons:</caption>
   *
   * ```js
   * "percentNitrogen": 2
   * ```
   *
   */
  amountPerAcre: number;
  /**
   * The nitrogen percent makeup in the organic matter or manure.
   *
   * You can find a list of default values per `type` [here](https://go.nori.com/inputs).
   *
   * @minimum 0
   * @maximum 100
   *
   * @nullable during import (when defined as null, a default value will be assigned)
   *
   * @example <caption>When the organic matter or manure contains 9% nitrogen:</caption>
   *
   * ```js
   * "percentNitrogen": 9
   * ```
   *
   */
  percentNitrogen: number;
  /**
   * The carbon to nitrogen ratio in the organic matter or manure.
   *
   * You can find a list of default values per `type` [here](https://go.nori.com/inputs).
   *
   * @nullable during import (when defined as null, a default value will be assigned)
   * @minimum 0
   *
   * @example <caption>When the carbon to nitrogen ration of the organic matter or manure was 30:</caption>
   *
   * ```js
   * "carbonNitrogenRatio": 30
   * ```
   *
   */
  carbonNitrogenRatio: number;
}

// todo SHOULD WE ALLOW USERS TO DEFINE NON-FREQUENCY BASED IRRIGATION? guidance on what to do when the user has 2 known specific dates that irrigation happened (NOT frequency based).
// todo is irrigation crop specific? or is it better thought of on the field level?
/**
 * Irrigation event details.
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
   * The irrigation volume in inches. If volume is 0, simply do not define an irrigation event.
   *
   * @minimum 0
   *
   * @example <caption>When 1 inch of volume was applied:</caption>
   *
   * ```js
   * "volume": 1,
   * ```
   */
  volume: number;
  /**
   * The irrigation depth in inches. This should be set to 0 if it was applied at the surface.
   *
   * @minimum 0
   *
   * @example <caption>When irrigation depth was 100 inches:</caption>
   *
   * ```js
   * "depth": 100,
   * ```
   *
   */
  depth: number; // todo is this used currently? potentially in flux at comet
  /**
   * The frequency that irrigation occurred. For example, if irrigation was applied once per week, then frequency would be set to 7.
   *
   * @minimum 1
   * @maximum 365
   *
   * @example <caption>When irrigation was applied every week (every 7 days):</caption>
   *
   * ```js
   * "frequency": 7,
   * ```
   *
   */
  frequency?: number;
}

/**
 * Liming event details.
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
   * The liming type.
   *
   * @example <caption>When crushed limestone was the liming type that was used:</caption>
   *
   * ```js
   * "type": "crushed limestone"
   * ```
   *
   */
  type:
    | 'crushed limestone'
    | 'calcitic limestone'
    | 'dolomitic limestone'
    | 'other';
  /**
   * The liming amount (in tons per acre).
   *
   * @minimum 0
   *
   * @example <caption>When 100 tons were user per acre:</caption>
   *
   * ```js
   * "tonsPerAcre": 100
   * ```
   *
   */
  tonsPerAcre: number; // todo maximum
  /**
   * The date that the liming occurred. Currently, liming dates do not impact quantification. As such, we will default to a reasonable date when this property is left out.
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When liming occurred on January 1st of 2000:</caption>
   *
   * ```js
   * "date": "01/01/2000"
   * ```
   *
   */
  date?: string; // todo since date doesn't impact the outcome, can we just ask for a singular aggregated liming event, or is it best to ask for a list and aggregate for them?
}

/**
 * Grazing event details.
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
   * The grazing rest period in days.
   *
   * @minimum 0
   * @maximum 365
   *
   * @example <caption>When burning occurred before planting:</caption>
   *
   * ```js
   * "restPeriod": 0
   * ```
   *
   */
  restPeriod: number;
  /**
   * The percentage of forage consumed by the animals.
   *
   * @minimum 0
   * @maximum 100
   *
   * @example <caption>When burning occurred before planting:</caption>
   *
   * ```js
   * "utilization": 20
   * ```
   *
   */
  utilization: number;
}

/**
 * Burning event details.
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
   *
   * @example <caption>When burning occurred before planting:</caption>
   *
   * ```js
   * "type": "before planting"
   * ```
   *
   * @example <caption>When burning occurred after harvesting:</caption>
   *
   * ```js
   * "type": "after harvesting"
   * ```
   *
   */
  type: 'before planting' | 'after harvesting';
}
