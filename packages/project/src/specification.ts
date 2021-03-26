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
 * You can find an example of a full implementation [here](../../src/example/example.json)
 *
 * ## Navigation
 *
 * Whilst it is likely easiest to navigate this document by starting at the highest level interface ["Project"](../interfaces/_specification_.project.md), you can also find definitions for all of the interfaces for a Nori project listed in the [index section](#index).
 *
 * ## Vocabulary
 *
 * Throughout this documentation you will come across some vocab that indicate to what extent some data needs to be defined. There are effectively three different terms used here:
 *
 * 1. `nullable` - This means that data can be explicitly specified as null in an import file. However, the implication for nullable values is that unless it is marked as optional (i.e., with the `?` symbol after the property name's definition), AND it does not have an associated `default` value for the property, then the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).
 *
 * 2. `?` (AKA optional) - Specifies that a data property can be entirely excluded
 *
 * 3. `default` - Specifies that when the data used for a property is specified as `null`, as an empty string, or excluded, it will be assigned the specified default value.
 *
 * @packageDocumentation
 */
import type { GeoJSON } from 'geojson';

export const annualCropTypes = [
  'barley',
  'broccoli-coast',
  'broccoli-desert',
  'carrots',
  'cauliflower',
  'corn',
  'corn silage',
  'cotton',
  'dry field beans',
  'dry field pea',
  'fallow',
  'grass-legume mix',
  'lettuce-head',
  'lettuce-leaf',
  'lettuce-romaine',
  'millet',
  'oats',
  'peanut',
  'potato',
  'rice - flooded',
  'rye',
  'sorghum',
  'sorghum',
  'sorghum silage',
  'soybean',
  'spring wheat',
  'strawberry',
  'sugar beets',
  'sunflower',
  'switchgrass',
  'tomatoes, fresh',
  'tomatoes, processing',
  'winter wheat',
] as const;

export const perennialCropTypes = ['alfalfa', 'clover', 'grass'] as const;

export const coverCropTypes = [
  'annual rye',
  'annual rye - legume',
  'annual rye - legume - radish',
  'austrian winter pea',
  'cereal rye',
  'forage radish',
  'oilseed radish',
  'vetch',
  'winter grain-other',
] as const;

export const slurryOmadTypes = [
  'beef slurry',
  'chicken - broiler slurry',
  'chicken - layer slurry',
  'dairy slurry',
  'swine manure, slurry',
] as const;

export const solidOmadTypes = [
  'alfalfa meal',
  'beef manure, solid',
  'blood, dried',
  'bone meal',
  'chicken - broiler (litter), solid',
  'chicken - layer, solid',
  'compost or composted manure, solid',
  'dairy manure, solid',
  'farmyard manure, solid',
  'feather meal',
  'fish emulsion',
  'fish scrap',
  'guano',
  'horse manure, solid',
  'other manure, solid',
  'sheep manure, solid',
  'soybean meal',
  'swine manure, solid',
] as const;

export const orchardOrVineyardCropTypes = [
  'almond',
  'avocados',
  'cherries',
  'english walnuts',
  'grape, raisin',
  'grape, table',
  'grape, wine (<1390 gdd)',
  'grape, wine (>1950 gdd)',
  'grape, wine (1391-1670 gdd)',
  'grape, wine (1671-1950 gdd)',
  'grapefruit',
  'lemons & limes',
  'olives',
  'oranges',
  'peaches and nectarines',
  'pistachios',
  'tangerines & mandarins',
] as const;

/**
 *
 * A supplier project entity which encapsulates a set of fields. This top-level interface defines all necessary properties for a supplier project created manually or via a data import file.
 *
 * @example <caption>A project that uses specification v 0.1.0 and contains a list of fields:</caption>
 * ```js
 * {
 *  "version": "0.1.0",
 *  "fields": [
 *    // define fields in this array
 *  ]
 * }
 * ```
 *
 * @errorMessage
 * {
 * "_": "projectDataError:projectUnknownError"
 * }
 *
 */
export interface Project {
  /**
   * The specification version. This information is used to determine the logic Nori uses to import a project
   *
   * @errorMessage
   * {
   * "type": "projectDataError:projectVersionTypeError",
   * "_": "projectDataError:projectVersionUnknownError"
   * }
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
   * @errorMessage
   * {
   * "minItems": "projectDataError:projectFieldsMinimumItemsError",
   * "maxItems": "projectDataError:projectFieldsMaximumItemsError",
   * "type": "projectDataError:projectFieldsTypeError",
   * "_": "projectDataError:projectFieldsUnknownError"
   * }
   *
   * @minItems 1
   * @maxItems 25
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
 *  "preYear1980": "irrigation"
 * }
 * ```
 *
 */
export interface HistoricLandManagement {
  /**
   * A description of how the land was managed before 1980.
   *
   * @example <caption>When the land was not upland (referring to any land that is not low or marsh-like) irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "upland non-irrigated"
   * ```
   *
   * @example <caption>When the land was irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "irrigation"
   * ```
   *
   * @example <caption>When the land was not lowland (referring to land that is low and subject to flooding) irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "lowland non-irrigated"
   * ```
   *
   * @example <caption>When the land employed livestock grazing before 1980:</caption>
   *
   * ```js
   * "preYear1980": "lowland non-irrigated"
   * ```
   *
   */
  preYear1980:
    | 'upland non-irrigated'
    | 'irrigation'
    | 'lowland non-irrigated'
    | 'livestock grazing';
}

/**
 * Land management details for when a field did not participate in CRP
 *
 * @example
 *
 * ```js
 * {
 *  "crp": "no",
 *  "preYear1980": "irrigation",
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
   *
   * ```js
   * "year1980To2000": "irrigated: annual crops in rotation"
   * ```
   *
   */
  year1980To2000:
    | 'irrigated: annual crops in rotation'
    | 'irrigated: annual crops with hay/pasture in rotation'
    | 'irrigated: continuous hay'
    | 'irrigated: orchard or vineyard'
    | 'non-irrigated: annual crops in rotation'
    | 'non-irrigated: continuous hay'
    | 'non-irrigated: livestock grazing'
    | 'non-irrigated: fallow-grain'
    | 'non-irrigated: annual crops with hay/pasture in rotation'
    | 'non-irrigated: orchard or vineyard';
}

/**
 * Details surrounding how the field was managed before year 2000
 *
 * Note that the state the field exists within restricts the allowed values per object property. To find applicable values per location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)
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
 *  "preYear1980": "irrigation"
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
   * The type of CRP the field participated in. Only applicable if [crp](#crp) is set to yes.
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
  crpType: '100% grass' | 'grass / legume mixture';
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
   * To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)
   *
   * @example
   *
   * ```js
   * "preCRPManagement": "irrigated: annual crops in rotation"
   * ```
   *
   */
  preCRPManagement:
    | 'irrigated: annual crops in rotation'
    | 'irrigated: annual crops with hay/pasture in rotation'
    | 'irrigated: continuous hay'
    | 'irrigated: orchard or vineyard'
    | 'non-irrigated: annual crops in rotation'
    | 'non-irrigated: continuous hay'
    | 'non-irrigated: livestock grazing'
    | 'non-irrigated: fallow-grain'
    | 'non-irrigated: orchard or vineyard';
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
  preCRPTillage: 'intensive tillage' | 'reduced tillage' | 'no till';
  /**
   * How was the field managed after CRP
   *
   * To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)
   *
   * @example
   *
   * ```js
   * "postCRPManagement": "non-irrigated: livestock grazing"
   * ```
   *
   */
  postCRPManagement:
    | 'irrigated: annual crops in rotation'
    | 'irrigated: annual crops with hay/pasture in rotation'
    | 'irrigated: continuous hay'
    | 'irrigated: orchard or vineyard'
    | 'non-irrigated: annual crops in rotation'
    | 'non-irrigated: continuous hay'
    | 'non-irrigated: livestock grazing'
    | 'non-irrigated: fallow-grain'
    | 'non-irrigated: orchard or vineyard';
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
  postCRPTillage: 'intensive tillage' | 'reduced tillage' | 'no till';
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
 * @errorMessage
 * {
 * "required": "projectDataError:fieldRequiredPropertyMissing",
 * "additionalProperties": "projectDataError:fieldUnknownAdditionalProperty",
 * "_": "projectDataError:fieldUnknownError"
 * }
 *
 */
export interface Field {
  /**
   * The year that you most recently adopted regenerative agricultural practices
   *
   * For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).
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
   * @nullable during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).
   *
   * @example <caption>When the field did not participate in CRP (HistoricNonCRPLandManagement):</caption>
   *
   * ```js
   * "historicLandManagement": {
   *  "crp": "no",
   *  "preYear1980": "irrigation",
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
   *  "preYear1980": "irrigation"
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
   * @errorMessage
   * {
   * "type": "projectDataError:fieldNameTypeError",
   * "_": "projectDataError:fieldNameUnknownError"
   * }
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
   * The planting year that the herein defined [crops](#crops) property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.
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
   * Due to a limitation at COMET farm, the maximum number of crops per [plantingYear](#plantingYear) is 3. If there are more than 3 crops for a planting year reach out to [Nori support](mailto:support@nori.com)
   *
   * @maxItems 3
   * @minItems 1
   *
   * @example <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>
   *
   * ```js
   * "crops": [
   *  {
   *    "type": "corn",
   *    "classification": "annual crop",
   *    "plantingDate": "01/01/2000"
   *    // ...CropEvents
   *  },
   *  {
   *    "type": "annual rye",
   *    "classification": "perennial",
   *    "plantingDate": "01/01/2000"
   *    // ...CropEvents
   *  },
   *  {
   *    "classification": "orchard",
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
    AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop,
    (AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop)?,
    (AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop)?
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
   * The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   *
   * @example
   *
   * ```js
   * "name": "Joe's corn"
   * ```
   *
   */
  name?: string;
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
 * @example <caption>When a crop has associated management events:</caption>
 *
 * ```js
 * {
 *  "soilOrCropDisturbanceEvents": [
 *    // ... SoilOrCropDisturbanceEvents
 *  ],
 *  "fertilizerEvents": [
 *    // ... FertilizerEvents
 *  ],
 *  "organicMatterEvents": [
 *    // ... (SolidOrganicMatterEvent | SlurryOrganicMatterEvent)[]
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
   *    "name": "Joe's fertilizer",
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
   * @nullable during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)
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
   *    "percentMoisture": 0,
   *  }
   *  // ... other organic matter or manure events
   * ]
   * ```
   *
   */
  organicMatterEvents?: (SolidOrganicMatterEvent | SlurryOrganicMatterEvent)[];
  /**
   * A list of irrigation events, if applicable.
   *
   * @example <caption>When some irrigation events occurred:</caption>
   *
   * ```js
   * "irrigationEvents": [
   *  {
   *    "volume": 1,
   *    "date": "01/01/2000",
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
   * @nullable during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)
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
   * A list of grazing events, if applicable
   *
   * @nullable during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)
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
   * @nullable if no burning ever occurred, explicitly specify `burningEvent` as `null`
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
   * @example <caption>When no burning occurred:</caption>
   *
   * ```js
   * "burningEvent": null
   * ```
   *
   */
  burningEvent?: BurningEvent;
}

/**
 * Crop management details and events for orchard and vineyard crops.
 *
 * @example <caption>A crop definition for an orchard that was pruned and renewed or cleared:</caption>
 *
 * ```js
 * {
 *  "type": "oranges",
 *  "classification": "orchard",
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
   * The COMET equivalent type of the orchard or vineyard crop.
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example <caption>When the crop planted is "oranges":</caption>
   *
   * ```js
   * "type": "oranges"
   * ```
   *
   */
  type: typeof orchardOrVineyardCropTypes[number];
  /**
   * The crop classification.
   *
   * You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).
   *
   * Note: if a crop ever changes classifications during the lifetime of the field (i.e. From an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.
   *
   * @example <caption>When the crop is an orchard:</caption>
   *
   * ```js
   * "classification": "orchard"
   * ```
   *
   * @example <caption>When the crop is a vineyard:</caption>
   *
   * ```js
   * "classification": "vineyard"
   * ```
   *
   */
  classification: 'orchard' | 'vineyard';
  /**
   * Indicates if the crop was pruned.
   *
   *
   * @example <caption>When the crop was pruned:</caption>
   *
   * ```js
   * "prune": "yes"
   * ```
   *
   * @example <caption>When the crop was not pruned:</caption>
   *
   * ```js
   * "prune": "no"
   * ```
   *
   */
  prune: 'yes' | 'no';
  /**
   * Indicates if the crop was renewed or cleared.
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
 * @example <caption>A crop definition for alfalfa managed as a perennial:</caption>
 *
 * ```js
 * {
 *  "type": "alfalfa",
 *  "classification": "perennial",
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
  /**
   * The COMET equivalent type of the perennial crop
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example <caption>When the perennial crop planted was alfalfa:</caption>
   *
   * ```js
   * "type": "alfalfa"
   * ```
   *
   */
  type: typeof perennialCropTypes[number];
  /**
   * The crop classification.
   *
   * You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "perennial"
   *
   * @example
   *
   * ```js
   * "classification": "perennial"
   * ```
   *
   */
  classification: 'perennial';
}

/**
 * Crop management details and events for cover crops.
 *
 * @example <caption>A crop definition for a cover crop planted in year 2000:</caption>
 *
 * ```js
 * {
 *  "type": "annual rye",
 *  "classification": "annual cover",
 *  "plantingDate": "01/01/2000"
 *  // ...CropEvents
 * }
 * ```
 *
 */
export interface CoverCrop extends CropEvents, PlantedCrop {
  /**
   * The COMET equivalent type of the crop.
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @example <caption>When the cover crop was annual rye:</caption>
   *
   * ```js
   * "type": "annual rye"
   * ```
   *
   */
  type: typeof coverCropTypes[number];
  /**
   * The crop classification.
   *
   * You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "annual cover"
   *
   * @example
   *
   * ```js
   * "classification": "annual cover"
   * ```
   *
   */
  classification: 'annual cover';
}

/**
 * Crop management details and events for annual crops.
 *
 * @example <caption>An crop definition for an annual crop planted in year 2000:</caption>
 *
 * ```js
 * {
 *  "name": "Joe's corn",
 *  "type": "corn",
 *  "classification": "annual crop",
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
   * The COMET equivalent type of the crop
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @errorMessage must specify one of the allowed crop types if you are specifying an annual crop
   *
   * @example <caption>When the annual crop is corn:</caption>
   *
   * ```js
   * "type": "corn"
   * ```
   *
   */
  type: typeof annualCropTypes[number];
  /**
   * The crop classification.
   *
   * You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "annual crop"
   *
   * @example
   *
   * ```js
   * "classification": "annual crop"
   * ```
   *
   */
  classification: 'annual crop';
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
   * @nullable during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).
   *
   * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
   *
   * @example <caption>When the crop event occurred on January 1st of 2000:</caption>
   *
   * ```js
   * "date": "01/01/2000"
   * ```
   * @validationRules ["cropEventDateIsOnOrAfterContainingCropYear"]
   *
   * @errorMessage
   * {
   * "type": "projectDataError:cropEventDateTypeError",
   * "validationRules": "projectDataError:cropEventDateValidationRuleViolation"
   * }
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
 * Crop management event details.
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
   * @nullable during import (specify null if you are unsure)
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

/**
 * An annual crop's harvest event details.
 *
 * @example <caption>An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:</caption>
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
   * @default "lbs/ac"
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
   * When defaulting to "no tillage", a default value will also be used for the event data equal to the planting date of the crop.
   *
   * @todo this property will be deprecated in the future
   *
   * @default "no tillage"
   *
   * @example <caption>When the name of the soil or crop disturbance used on the crop was known to the supplier as "Joe's tillage method":</caption>
   *
   * ```js
   * "name": "Joe's tillage method"
   * ```
   *
   */
  name?: string;
  /**
   * The soil or crop disturbance events classification type.
   *
   * You can find a list of common equivalents [here](https://go.nori.com/inputs).
   *
   * @example <caption>Little to no crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "intensive tillage"
   * ```
   *
   * @example <caption>15-30% of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "reduced tillage"
   * ```
   *
   * @example <caption>30% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "mulch tillage"
   * ```
   *
   * @example <caption>30% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "ridge tillage"
   * ```
   *
   * @example <caption>75% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "strip tillage"
   * ```
   *
   * @example <caption>75% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "no tillage"
   * ```
   *
   * @example <caption>Weeds are killed and turned into the soil surface layer:</caption>
   *
   * ```js
   * "type": "growing season cultivation"
   * ```
   *
   * @example <caption>50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing:</caption>
   *
   * ```js
   * "type": "mow"
   * ```
   *
   * @example <caption>100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process:</caption>
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
   * @example <caption>100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:</caption>
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
    | 'broad-spectrum herbicide';
}

/**
 * Fertilizer event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "name": "Joe's fertilizer",
 *  "type": "mixed blends",
 *  "lbsOfNPerAcre": 150
 * }
 * ```
 *
 */
export interface FertilizerEvent extends CropEvent {
  /**
   * The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   *
   * @example <caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>
   *
   * ```js
   * "name": "Joe's fertilizer"
   * ```
   *
   */
  name?: string;
  /**
   * The fertilizer classification type.
   *
   * Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions. As such, we default the type to "mixed blends" when this property is excluded/nulled.
   *
   * @default "mixed blends"
   *
   * @example <caption>When the fertilizer type can be classified as mixed blends:</caption>
   *
   * ```js
   * "type": "mixed blends",
   * ```
   *
   */
  type?:
    | 'ammonium nitrate (34-0-0)'
    | 'ammonium nitrate phosphate (23-23-00)'
    | 'ammonium nitrate phosphate (27-14-00)'
    | 'ammonium phosphate sulphate (16-20-00)'
    | 'ammonium polyphosphate solution (10-34-00)'
    | 'ammonium sulphate (21-00-00)'
    | 'ammonium thiosulphate solution (12-00-00)'
    | 'anhydrous ammonia (gas) (82-00-00)'
    | 'calcium ammonium nitrate'
    | 'calcium nitrate'
    | 'diammonium phosphate (18-46-00)'
    | 'element-n (n)'
    | 'element-p (p)'
    | 'mixed blends'
    | 'monoammonium phosphate (11-55-00)'
    | 'monoammonium phosphate (12-51-00)'
    | 'potassium nitrate'
    | 'urea (46-00-00)'
    | 'urea ammonium nitrate (30-00-00)'
    | 'urea ammonium phosphate (27-27-00)'
    | 'urea ammonium phosphate (34-17-00)';
  /**
   * Amount of nitrogen applied in lbs/ac.
   *
   * @nullable during import (specify null if you are unsure)
   *
   * @example <caption>When 10 lbs of Nitrogen per acre was applied:</caption>
   *
   * ```js
   * "lbsOfNPerAcre": 150
   * ```
   *
   */
  lbsOfNPerAcre: number;
}

/**
 * Solid/dry organic matter (OMAD) and manure event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "alfalfa meal",
 *  "amountPerAcre": 2, // in tons
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
 *
 */
export interface SolidOrganicMatterEvent extends OrganicMatterEvent {
  /**
   * The solid/dry organic matter or manure classification type.
   *
   * @example <caption>When the amount of organic matter or manure type used was alfalfa meal:</caption>
   *
   * ```js
   * "type": "alfalfa meal"
   * ```
   *
   */
  type: typeof solidOmadTypes[number];
}

/**
 * Slurry organic matter (OMAD) and manure event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "type": "beef slurry",
 *  "amountPerAcre": 2, //  in gallons
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
 *
 */
export interface SlurryOrganicMatterEvent extends OrganicMatterEvent {
  /**
   * The organic matter or manure classification type.
   *
   * @example <caption>When the amount of organic matter or manure type used was beef slurry:</caption>
   *
   * ```js
   * "type": "beef slurry"
   * ```
   *
   */
  type: typeof slurryOmadTypes[number];
}

// todo confirm amountPerAcre max
/**
 * Organic matter (OMAD) and manure event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "10/01/2000",
 *  "amountPerAcre": 2,
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
 *
 */
export interface OrganicMatterEvent extends CropEvent {
  /**
   * The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   *
   * @example <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>
   *
   * ```js
   * "name": "Joe's manure"
   * ```
   *
   */
  name?: string;
  /**
   * Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).
   *
   * @minimum 0
   * @maximum 200
   *
   * @example <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>
   *
   * ```js
   * "amountPerAcre": 2
   * ```
   *
   */
  amountPerAcre: number;
  /**
   * The nitrogen percent makeup in the organic matter or manure.
   *
   * You can find a list of default values per `type` [here](https://go.nori.com/inputs).
   *
   * @todo In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)
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
   * @todo In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)
   *
   * @nullable during import
   *
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
  /**
   * The percent moisture of the organic matter or manure
   *
   * @todo In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)
   *
   * @nullable during import (explicitly specify null if you are unsure what the value is)
   *
   * @minimum 0
   * @maximum 100
   *
   * @example <caption>When the percent moisture is 15:</caption>
   *
   * ```js
   * "percentMoisture": 15
   * ```
   *
   */
  percentMoisture: number;
}

/**
 * Irrigation event details.
 *
 * @example
 *
 * ```js
 * {
 *  "volume": 1,
 *  "date": "01/01/2000",
 * }
 * ```
 *
 */
export interface IrrigationEvent extends CropEvent {
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
   *
   */
  volume: number;
}

// todo liming tonsPerAcre max
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
  tonsPerAcre: number;
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
  date?: string;
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
