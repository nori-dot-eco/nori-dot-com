/**
 * ## About
 *
 * Nori croplands project import file format.
 *
 * Version: 4.2.1
 *
 * Provides the definitions for Nori croplands project data import using typescript interfaces.
 *
 * ## Usage
 *
 * This croplands project data import specification defines Nori's requirements for receipt of project import data.
 *
 * Nori requires complete data as follows:
 * * Historical best practices from 2000 to three years prior to the switch year.
 * * Detailed management practices from three years prior to the switch year to the present.
 * * Ten years of projected future practices.
 *
 * #### Example
 *
 * You can find an example of a full implementation [here](../../src/example/v4-example.json)
 *
 * ## Navigation
 *
 * [Project](../interfaces/v4_specification.Project.md) is the top level entrypoint of the file format.
 * You can find definitions for all of the interfaces in Nori croplands project from the [index](#index).
 *
 * @packageDocumentation
 */
import type { GeoJSON } from 'geojson';

export const annualCropTypes = [
  'alfalfa',
  'austrian winter pea',
  'barley',
  'barley-bin run wheat mix',
  'black beans',
  'broccoli',
  'broccoli-coast',
  'broccoli-desert',
  'buckwheat',
  'cabbage',
  'camelina',
  'canola',
  'cantaloupes', // not currently supported
  'carrots',
  'cauliflower',
  'celery', // not currently supported
  'chick peas',
  'clover',
  'corn',
  'corn silage',
  'cotton',
  'cucumbers', // not currently supported
  'dry beans',
  'dry field beans',
  'dry field pea',
  'durum wheat',
  'eggplants', // not currently supported
  'fallow',
  'flaxseed',
  'garbanzo beans',
  'garlic', // not currently supported
  'gourds', // not currently supported
  'greens',
  'hemp (for fiber)',
  'hemp (for flowers)',
  'hemp (for seed)',
  'herbs', // not currently supported
  'honeydew melons', // not currently supported
  'lentils',
  'lettuce',
  'lettuce-head',
  'lettuce-leaf',
  'lettuce-romaine',
  'millet',
  'misc vegs & fruits',
  'mustard',
  'navy beans',
  'oats',
  'onions', // not currently supported
  'other small grains',
  'peanuts',
  'peas',
  'peppers', // not currently supported
  'pinto beans',
  'pop or om corn',
  'potatoes',
  'pumpkins', // not currently supported
  'radishes',
  'rapeseed',
  'rice', // not currently supported
  'rice - flooded', // not currently supported
  'rye',
  'safflower',
  'sorghum',
  'sorghum silage',
  'soybeans',
  'speltz',
  'spring wheat',
  'squash', // not currently supported
  'strawberries',
  'sugarbeets',
  'sunflower',
  'sweet corn',
  'sweet potatoes',
  'switchgrass',
  'tobacco',
  'tomatoes',
  'tomatoes, fresh',
  'tomatoes, processing',
  'triticale',
  'turnips',
  'watermelons', // not currently supported
  'wheat',
  'winter barley',
  'winter grain-other',
  'winter oats',
  'winter wheat',
] as const;

export const coverCropTypes = [
  'alfalfa',
  'annual rye',
  'annual rye - legume',
  'annual rye - legume - radish',
  'barley-radish mix',
  'buckwheat',
  'cereal rye',
  'cereal rye-crimson clover mix',
  'clover/wildflowers',
  'dry field pea',
  'forage radish',
  'grass-legume mix',
  'oats',
  'oilseed radish',
  'radish-crimson clover-barley-dwarf rape mix',
  'sugar beets',
  'triticale',
  'vetch',
  'winter clover',
  'winter grain-other',
  'winter wheat',
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
  'almonds',
  'apples', // not currently supported
  'apricots',
  'avocados',
  'blueberries', // not currently supported
  'caneberries', // not currently supported
  'cherries',
  'citrus',
  'cranberries', // not currently supported
  'english walnuts',
  'grape, raisin',
  'grape, table',
  'grape, wine (<1390 gdd)',
  'grape, wine (>1950 gdd)',
  'grape, wine (1391-1670 gdd)',
  'grape, wine (1671-1950 gdd)',
  'grapefruit',
  'grapes',
  'hazelnuts',
  'lemons',
  'lemons & limes',
  'limes',
  'nectarines',
  'olives',
  'oranges',
  'peaches',
  'peaches and nectarines',
  'pears', // not currently supported
  'pecans',
  'pistachios',
  'plums',
  'pomegranates', // not currently supported
  'prunes',
  'tangerines & mandarins',
  'walnuts',
] as const;

export const perennialCropTypes = [
  'alfalfa',
  'asparagus', // not currently supported
  'clover',
  'clover/wildflowers',
  'grass',
  'grass-legume mix',
  'grassland herbaceous', // not currently supported
  'herbaceous wetlands',
  'hops', // not currently supported
  'mint', // not currently supported
  'other hay/non alfalfa',
  'pasture/grass',
  'pasture/hay',
  'sod/grass seed',
  'strawberry',
  'sugarcane', // not currently supported
  'vetch',
] as const;

export const fertilizerTypes = [
  'ammonium nitrate (34-0-0)',
  'ammonium nitrate phosphate (23-23-00)',
  'ammonium nitrate phosphate (27-14-00)',
  'ammonium phosphate sulphate (16-20-00)',
  'ammonium polyphosphate solution (10-34-00)',
  'ammonium sulphate (21-00-00)',
  'ammonium thiosulphate solution (12-00-00)',
  'anhydrous ammonia (gas) (82-00-00)',
  'calcium ammonium nitrate',
  'calcium nitrate',
  'diammonium phosphate (18-46-00)',
  'element-n (n)',
  'element-p (p)',
  'mixed blends',
  'monoammonium phosphate (11-55-00)',
  'monoammonium phosphate (12-51-00)',
  'phosphate (00-32-00)',
  'potash (00-00-60)',
  'potassium nitrate',
  'urea (46-00-00)',
  'urea ammonium nitrate (30-00-00)',
  'urea ammonium phosphate (27-27-00)',
  'urea ammonium phosphate (34-17-00)',
] as const;

export const soilOrCropDisturbanceTypes = [
  'bedder/hipper',
  'chisel plow',
  'crimp',
  'cultipacker',
  'cultivator',
  'cultivator - field',
  'cultivator - row',
  'disk',
  'finisher',
  'harrow',
  'herbicide burn down',
  'hipper bedder',
  'intensive tillage',
  'landstar',
  'minimum tillage',
  'moldboard plow',
  'mow',
  'mulch tillage',
  'mulcher',
  'no-till planting',
  'reduced tillage',
  'residue tillage',
  'ridge tillage',
  'ripper - disk',
  'ripper - inline',
  'roller',
  'speed till',
  'strip till',
  'strip tillage',
  'tandem disk',
  'vertical',
  'zone till',
  'winter kill',
  'broad-spectrum herbicide',
] as const;

export const limingTypes = [
  'crushed limestone',
  'calcitic limestone',
  'dolomitic limestone',
  'other',
] as const;

/**
 * A project encapsulates a set of fields. This is the top-level interface of Nori's Croplands Data Import format.
 *
 * A project may represent either a complete farming operation for a single operator or a batch
 * of fields from a data aggregator.
 *
 * @$id https://schema.nori.com/soil/4-2-0
 * @example <caption>A project that uses specification v4.2.1 and contains a list of fields:</caption>
 *
 * ```js
 * {
 *  "version": "4.2.1",
 *  "fields": [
 *    ...fields
 *  ]
 * }
 * ```
 * @errorMessage
 * {
 * "_": "projectDataError:projectUnknownError"
 * }
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
   * @example
   *
   * ```js
   * "version": "4.2.1"
   * ```
   */
  version: string;
  /**
   * primaryContact Contact info for the operator or data aggregator preparing this file.
   *
   * This will be the primary point of contract for verifiers.
   *
   * @example
   */
  primaryContact: ContactInfo;
  /**
   * farmAddress Mailing address for the farm in question if the file represents a single operation.
   *
   * @nullable if import file represents a batch rather than an entire project for a single farm.
   * @example
   */
  farmAddress?: Address;
  /**
   * totalFarmAcres
   *
   * @nullable if import file represents a batch rather than an entire project for a single farm.
   * @example
   *
   * ```js
   * "totalFarmAcres": 3490
   * ```
   */
  totalFarmAcres?: number;
  /**
   * totalCroppedAcres
   *
   * @nullable if import file represents a batch rather than an entire project for a single farm.
   * @example
   *
   * ```js
   * "totalCroppedAcres": 2456
   * ```
   */
  totalCroppedAcres?: number;
  /**
   * Project identifier from external system.
   *
   * Used to correlate data back to the originating system and to synchronize repeated imports.
   *
   * @nullable
   * @example
   *
   * ```js
   * "externalId": "blue-hill-201"
   * ```
   */
  externalId?: string;
  /**
   * Nori's internal project identifier.
   *
   * Used to synchronize repeated imports.
   *
   * @nullable External systems pass null or omit the property for new projects.
   * @example
   *
   * ```js
   * "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
   * ```
   */
  id?: string;
  /**
   * Nori's internal supplier identifier.
   *
   * Used to correlate projects / batches to a supplier.
   *
   * @nullable External systems leave this null.
   * @example
   *
   * ```js
   * "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
   * ```
   */
  supplierId?: string;
  /**
   * The name for the project to be created.
   *
   * @nullable External systems leave this null.
   * @example
   */
  projectName?: string;
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
   * @minItems 1
   * @maxItems 200
   * @example
   *
   * ```js
   * "fields": [
   *  // ...Field
   * ]
   * ```
   */
  fields: Field[];
}

/**
 * @example
 *
 * ```js
 * {
 *  "name": "Lonny Long",
 *  "phone": "999 555-1212",
 *  "email": "lon@long.com"
 * }
 * ```
 */
export interface ContactInfo {
  /**
   * The project's primary contract person.  Provided to the verified.
   *
   * @nullable
   * @example
   */
  name?: string;
  /**
   * phone
   *
   * @nullable
   * @example
   */
  phone?: string;
  /**
   * email
   *
   * @nullable
   * @example
   */
  email?: string;
}

/**
 * @example
 *
 * ```js
 * {
 *  "line1": "123 Cherry Lane",
 *  "line2": "#99",
 *  "city": "Bushing",
 *  "admin1": "MA",
 *  "country": "US"
 * }
 * ```
 */
export interface Address {
  /**
   * First address line
   *
   * @nullable
   * @example 123 Cherry Lane
   * @example PO Box 56789
   */
  line1?: string;
  /**
   * Second address line
   *
   * @nullable
   * @example 123 Cherry Lane
   * @example Station 99
   */
  line2?: string;
  /**
   * city
   *
   * @nullable
   * @example Fargo
   */
  city?: string;
  /**
   * State or Province ISO3166-2 Code
   *
   * In the US see: https://en.wikipedia.org/wiki/ISO_3166-2:US
   *
   * @nullable
   * @example US-ND
   */
  admin1?: string;
  /**
   * County or second level subdivision
   *
   * In the US use FIPS code: https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=nrcs143_013697
   *
   * @nullable
   * @example 02130
   */
  admin2?: string;
  /**
   * ISO3166 Country code
   *
   * See: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   *
   * @nullable
   * @example US
   */
  country?: string;
}

/**
 * @example
 *
 * ```js
 * {
 *  "preYear1980": "irrigation"
 * }
 * ```
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
   * @example <caption>When the land was irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "irrigation"
   * ```
   * @example <caption>When the land was not lowland (referring to land that is low and subject to flooding) irrigated before 1980:</caption>
   *
   * ```js
   * "preYear1980": "lowland non-irrigated"
   * ```
   * @example <caption>When the land employed livestock grazing before 1980:</caption>
   *
   * ```js
   * "preYear1980": "lowland non-irrigated"
   * ```
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
 *  "crp": false,
 *  "preYear1980": "irrigation",
 *  "tillageForYears1980To2000": "intensive tillage",
 *  "year1980To2000": "irrigated: annual crops in rotation",
 * }
 * ```
 */
export interface HistoricNonCRPLandManagement extends HistoricLandManagement {
  /**
   * Whether the field participated in CRP or not.
   *
   * @default false
   * @example <caption>When the field did not participate in CRP:</caption>
   *
   * ```js
   * "crp": false
   * ```
   */
  crp: false;
  /**
   * The type of soil or crop disturbance events used on the field between 1980 and 2000.
   *
   * @example <caption>When the land used intensive tillage from years 1980-2000:</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "intensive tillage"
   * ```
   * @example <caption>When the land used reduced tillage from years 1980-2000:</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "reduced tillage"
   * ```
   * @example <caption>When the land used no till from years 1980-2000:</caption>
   *
   * ```js
   * "tillageForYears1980To2000": "no till"
   * ```
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
 *  "crp": true,
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
 */
export interface HistoricCRPLandManagement extends HistoricLandManagement {
  /**
   * Whether the field participated in CRP or not.
   *
   * @default true
   * @example <caption>When the field participated in CRP:</caption>
   *
   * ```js
   * "crp": true
   * ```
   */
  crp: true;
  /**
   * The type of CRP the field participated in. Only applicable if [crp](#crp) is set to true.
   *
   * @example <caption>When the field participated in 100% grass CRP:</caption>
   *
   * ```js
   * "crpType": "100% grass"
   * ```
   * @example <caption>When the field participated in grass/legume mixture CRP:</caption>
   *
   * ```js
   * "crpType": "grass/legume mixture"
   * ```
   */
  crpType: '100% grass' | 'grass/legume mixture';
  /**
   * The CRP start year
   *
   * @minimum 1980
   * @maximum 2000
   * @example <caption>When CRP enrollment started in 1980:</caption>
   *
   * ```js
   * "crpStartYear": 1980
   * ```
   */
  crpStartYear: number;
  /**
   * The CRP end year
   *
   * @minimum 1980
   * @maximum 2000
   * @example <caption>When CRP enrollment ended in 2000:</caption>
   *
   * ```js
   * "crpEndYear": 2000
   * ```
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
   */
  postCRPTillage: 'intensive tillage' | 'reduced tillage' | 'no till';
}

/**
 * Please indicate for `true` for the *newly adopted* practices only.
 *
 * @example <caption>When the field participated in CRP:</caption>
 *
 * ```js
 * "coverCropping": true
 * ```
 */
export interface PracticeChangesAdopted {
  /**
   * Added cover cropping
   *
   * @default false
   * @example
   */
  coverCropping?: boolean;
  /**
   * Ceased tillage.
   *
   * @default false
   * @example
   */
  noTill?: boolean;
  /**
   * Switched to strip tillage.
   *
   * @default false
   * @example
   */
  stripTill?: boolean;
  /**
   * Other reduction in tillage.
   *
   * @default false
   * @example
   */
  reducedTillage?: boolean;
  /**
   * Added OMAD
   *
   * @default false
   * @example
   */
  addedOMAD?: boolean;
  /**
   * Reduced fallow in rotation
   *
   * @default false
   * @example
   */
  reducedFallow?: boolean;
  /**
   * Increased biodiversity of crop rotation
   *
   * @default false
   * @example
   */
  increasedBiodiversity?: boolean;
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
 *  "legalAcres": 100,
 *  "assignmentOfAuthority": true,
 *  "landOwners": [{
 *    "name": "Lonny Long",
 *    "phone": "999 555-1212",
 *    "email": "lon@long.com"
 *   }],
 *  "parcelNumber": "",
 *  "legalPropertyDescription": "15 83 40 N 17.70 A OF W 33.67 A SW SE",
 *  "geojson": {
 *    // example GeoJSON:
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
 *  },
 *  "externalId": "faec5e0b-8ce2-4161-93ff-4c9734f22334",
 *  "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
 * }
 * ```
 * @errorMessage
 * {
 * "required": "projectDataError:fieldRequiredPropertyMissing",
 * "additionalProperties": "projectDataError:fieldUnknownAdditionalProperty",
 * "_": "projectDataError:fieldUnknownError"
 * }
 */
export interface Field {
  /**
   * The year that you most recently adopted regenerative agricultural practices. aka Switch Year
   *
   * For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).
   *
   * @minimum 2012
   * @example <caption>When regenerative practices started in year 2015:</caption>
   *
   * ```js
   * "regenerativeStartYear": 2015
   * ```
   */
  regenerativeStartYear: number;
  /**
   * Earliest evidence is the first year a field has any digital or hard copy records of its practices
   * (instead of an external data set to infer practices) and is used to calculate the number of eligible years to issue NRTs.
   *
   * @example <caption>When earliest available detailed practice records date back to 2010:</caption>
   *
   * ```js
   * "earliestEvidenceYear": 2010
   * ```
   */
  earliestEvidenceYear: number;
  /**
   * Used to indicate that the available physical evidence does not corroborate the provided switch year.
   *
   * @example <caption>If the physical evidence of a switch to no-till was an undated photo of the no-till planter.</caption>
   * ```js
   * "physicalEvidenceDoesNotCorroborateSwitchYear": true
   * ````
   */
  physicalEvidenceDoesNotCorroborateSwitchYear?: boolean;
  /**
   * Details of new practice changes.
   *
   *
   * ```js
   * "practiceChangesAdopted": {
   *   "coverCropping": true
   * }
   * ```
   *
   * @example
   */
  practiceChangesAdopted: PracticeChangesAdopted;
  /**
   * Details surrounding how the field was managed before year 2000.
   *
   * @nullable during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).
   * @example <caption>When the field did not participate in CRP (HistoricNonCRPLandManagement):</caption>
   *
   * ```js
   * "historicLandManagement": {
   *  "crp": false,
   *  "preYear1980": "irrigation",
   *  "tillageForYears1980To2000": "intensive tillage",
   *  "year1980To2000": "irrigated: annual crops in rotation",
   * }
   * ```
   * @example <caption>When the field did participate in CRP (HistoricCRPLandManagement):</caption>
   *
   * ```js
   * "historicLandManagement":  {
   *  "crp": true,
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
   * @errorMessage
   * {
   * "type": "projectDataError:fieldNameTypeError",
   * "_": "projectDataError:fieldNameUnknownError"
   * }
   */
  fieldName: string;
  /**
   * legalAcres Number of acres in this parcel per your insurance policy if known.
   *
   * @nullable
   * @example 152.8
   */
  legalAcres?: number;
  /**
   * assignmentOfAuthority - Is there an assignment of authority in place?
   * i.e. Is the field leased land?
   *
   * @example <caption>When the operation is on leased land:</caption>
   *
   * ```js
   * "assignmentOfAuthority": true
   * ```
   * @example <caption>When the operator is the land owner:</caption>
   *
   * ```js
   * "assignmentOfAuthority": false
   * ```
   */
  assignmentOfAuthority: boolean;
  /**
   * landOwners (as shown on deed, MUST LIST ALL OWNERS)
   *
   * @nullable If this information will be communicated directly to the verifier.
   * @example
   */
  landOwners?: ContactInfo[];
  /**
   * operator (lessee as shown on lease if land is leased)
   *
   * @nullable if ownwer is operator or if this information will be communicated directly to the verifier.
   * @example
   */
  farmOperator?: ContactInfo;
  /**
   * mailingAddress Mailing Address (where your property tax notice for lands in question is mailed to)
   *
   * @nullable If this information will be communicated directly to the verifier.
   * @example
   */
  mailingAddress?: Address;
  /**
   * parcelNumber
   *
   * @nullable
   * @example
   */
  parcelNumber?: string;
  /**
   * legalPropertyDescription
   *
   * @nullable
   * @example 15 83 40 N 17.70 A OF W 33.67 A SW SE
   */
  legalPropertyDescription?: string;
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
   *    "crops": [],
   *  }
   * ]
   * ```
   */
  cropYears: CropYear[];

  /**
   * Field identifier from external system.
   *
   * Used to correlate data back to the originating system and to synchronize repeated imports.
   * This field must be unique within a project.
   *
   * @example
   *
   * ```js
   * "externalId": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
   * ```
   */
  externalId: string;
  /**
   * Nori's internal field identifier.
   *
   * Used to synchronize repeated imports.
   *
   * @nullable External systems pass null or omit the property for new projects.
   * @example
   *
   * ```js
   * "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
   * ```
   */
  id?: string;
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
 *  "dataSourceType": "grower reported",
 * }
 * ```
 */
export interface CropYear {
  /**
   * The planting year that the herein defined [crops](#crops) property is associated with.
   * Note that a requirement to run quantification is that all crop management practices be
   * mapped to a particular planting year as early as year 2000. Specific crops planted in
   * 1999 and terminated in 2000 are also relevant to the quantification model.
   *
   * @minimum 1999
   * @maximum 2099
   * @example <caption>When the herein defined crops were planted in year 2000:</caption>
   *
   * ```js
   * "plantingYear": 2000
   * ```
   */
  plantingYear: number;
  /**
   * A list of crops for a given planting year.
   *
   * @minItems 1
   * @maxItems 3
   * @example <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>
   *
   * ```js
   * "crops": [
   *  {
   *    "type": "corn",
   *    "classification": "annual crop",
   *    // ...CropEvents
   *  },
   *  {
   *    "type": "annual rye",
   *    "classification": "perennial",
   *    // ...CropEvents
   *  },
   *  {
   *    "classification": "orchard",
   *    // ...CropEvents
   *  }
   * ]
   * ```
   */
  crops: Crop[];
  /**
   * Flag indicating whether data is historical data reported by the grower,
   * or a projection of future data.
   *
   * @default grower reported
   * @example <caption>When data is from a projection of anticipated future practice:</caption>
   *
   * ```js
   * "dataSourceType": "projected"
   * ```
   * @example <caption>When historical data is extrapolated back based on more recent practice data:</caption>
   *
   * ```js
   * "dataSourceType": "historical extrapolation"
   * ```
   */
  dataSourceType?: 'grower reported' | 'projected' | 'historical extrapolation';
}

/**
 * Crop properties relevant to planted crops.
 *
 * @example
 *
 * ```js
 * {
 *  "name": "Corn1",
 *  "externalId": "f1-corn1",
 *  "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
 * }
 * ```
 */
export interface Crop extends CropEvents {
  /**
   * The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   * @example
   *
   * ```js
   * "name": "Joe's corn"
   * ```
   */
  name?: string;

  /**
   * Crop identifier.  Free form external reference
   *
   * Used to correlate data back to the originating system and to synchronize repeated imports.
   *
   * @nullable
   * @example
   *
   * ```js
   * "externalId": "corn-456"
   * ```
   * @example
   *
   * ```js
   * "externalId": "corn-456-2019"
   * ```
   */
  externalId?: string;

  /**
   * Nori's internal crop identifier.
   *
   * Used to synchronize repeated imports
   *
   * @nullable External systems pass null or omit the property for new projects.
   * @example
   *
   * ```js
   *
   * "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
   * ```
   */
  id?: string;

  /**
   * Crop type name from Nori's known crop names.
   *
   * You can find a list of accepted crops [here](https://go.nori.com/inputs).
   *
   * @errorMessage must specify one of the allowed crop types=
   * @example <caption>When the crop is corn:</caption>
   *
   * ```js
   * "type": "corn"
   * ```
   */
  type:
    | (typeof annualCropTypes)[number]
    | (typeof perennialCropTypes)[number]
    | (typeof coverCropTypes)[number]
    | (typeof orchardOrVineyardCropTypes)[number];
  /**
   * The crop classification.
   *
   * You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).
   *
   * @default "annual crop"
   * @example
   *
   * ```js
   * "classification": "annual crop"
   * ```
   */
  classification:
    | 'annual crop'
    | 'perennial'
    | 'annual cover'
    | 'orchard'
    | 'vineyard';
}

/**
 * Crop management details and events.
 *
 * @example <caption>When a crop has associated management events:</caption>
 *
 * ```js
 * {
 *  "plantingEvents": [{
 *    // ...plantingEvent
 *  }],
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
 *  "burningEvents": [
 *    // ... BurningEvents
 *  ],
 *  "pruningEvents": [
 *    // ... PruningEvents
 *  ],
 *  "harvestEvents": [
 *    // ... HarvestEvents
 * ],
 * }
 * ```
 */
export interface CropEvents {
  /**
   * The planting event(s) if there were any for the current crop year otherwise empty array or omit property.
   *
   * This will contain a single event for annuals and none for perennials outside of the planting year.
   *
   * @default []
   * @minItems 0
   * @maxItems 1
   * @additionalItems false
   * @example <caption>Planting on 2018-03-20</caption>
   *
   * ```js
   * "plantingEvents": [{
   *  "date": "2018-03-20"
   * }]
   * ```
   * @example <caption>Perennial planted in a prior year.</caption>
   *
   * ```js
   * "plantingEvents": []
   * ```
   */
  plantingEvents?: PlantingEvent[];

  /**
   * A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).
   *
   * All crops will need to define a soil or crop disturbance event <= the associated `PlantingEvent`.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some soil or crop disturbance events occurred:</caption>
   *
   * ```js
   * "soilOrCropDisturbanceEvents": [
   *  {
   *    "date": "2000-10-01",
   *    "type": "mow",
   *  }
   *  // ... other soul and crop disturbance events
   * ]
   * ```
   */
  soilOrCropDisturbanceEvents?: SoilOrCropDisturbanceEvent[];
  /**
   * A list of fertilizer events, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some fertilizer events occurred:</caption>
   *
   * ```js
   * "fertilizerEvents": [
   *  {
   *    "date": "2000-10-01",
   *    "name": "Joe's fertilizer",
   *    "type": "mixed blends",
   *    "lbsOfNPerAcre": 10
   *  }
   *  // ... other fertilizer events
   * ]
   * ```
   */
  fertilizerEvents?: FertilizerEvent[];
  /**
   * A list of organic matter and manure application events, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some organic matter was applied:</caption>
   *
   * ```js
   * "organicMatterEvents": [
   *  {
   *    "date": "2000-10-01",
   *    "type": "alfalfa meal",
   *    "amountPerAcre": 2, // tons
   *    "percentNitrogen": 9,
   *    "carbonNitrogenRatio": 30,
   *    "percentMoisture": 0,
   *  }
   *  // ... other organic matter or manure events
   * ]
   * ```
   */
  organicMatterEvents?: (SolidOrganicMatterEvent | SlurryOrganicMatterEvent)[];
  /**
   * A list of irrigation events, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some irrigation events occurred:</caption>
   *
   * ```js
   * "irrigationEvents": [
   *  {
   *    "volume": 1,
   *    "date": "2000-10-01",
   *  }
   *  // ... other irrigation events
   * ]
   * ```
   */
  irrigationEvents?: IrrigationEvent[];
  /**
   * A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some liming events occurred:</caption>
   *
   * ```js
   * "limingEvents": [
   *  {
   *    "date": "2000-01-01",
   *    "type": "crushed limestone",
   *    "tonsPerAcre": 10,
   *  }
   *  //...other liming events
   * ]
   * ```
   */
  limingEvents?: LimingEvent[];
  /**
   * A list of grazing events, if applicable
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When some grazing events occurred:</caption>
   *
   * ```js
   * "grazingEvents": [
   *  {
   *   "date": "2000-01-01",
   *   "daysGrazed": "10",
   *   "percentResidueRemoved": "50"
   *  }
   *  // .. additional grazing events
   * ]
   * ```
   */
  grazingEvents?: GrazingEvent[];
  /**
   * Burning events, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @default []
   * @example <caption>When burning occurred after harvesting:</caption>
   *
   * ```js
   * "burningEvents": [{
   *  "date": "2010-10-31"
   * }]
   * ```
   * @example <caption>When no burning occurred:</caption>
   *
   * ```js
   * "burningEvents": []
   * ```
   */
  burningEvents?: BurningEvent[];
  /**
   * Pruning events, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When pruning occurred after harvesting:</caption>
   *
   * ```js
   * "pruningEvents": [{
   *  "date": "2010-10-31"
   * }]
   * ```
   * @example <caption>When no pruning occurred:</caption>
   *
   * ```js
   * "pruningEvents": []
   * ```
   */
  pruningEvents?: PruningEvent[];
  /**
   * Clearing and renewal events for orchards and vineyards, if applicable.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When clearing occurred after harvesting:</caption>
   *
   * ```js
   * "clearingAndRenewalEvents": [{
   *  "date": "2010-10-31"
   * }]
   * ```
   * @example <caption>When no clearing or removal occurred:</caption>
   *
   * ```js
   * "clearingAndRenewalEvents": []
   * ```
   */
  clearingAndRenewalEvents?: ClearingAndRenewalEvent[];
  /**
   * A list of harvest events, if applicable.
   *
   * Straw / Stover harvest exception: If the hay or stover was removed
   * separately after grain / fruit / tuber harvest, do NOT add this as
   * a second harvest. Instead, enter the percent of the remaining residue
   * that was removed on the grain harvest, regardless of removal date.
   *
   * @default []
   * @minItems 0
   * @additionalItems false
   * @example <caption>When crop had at least one harvest event:</caption>
   *
   * ```js
   *  "harvestEvents": [
   *    // ...list of AnnualCropHarvestEvents or CropManagementEvents
   *  ]
   * ```
   */
  harvestEvents?: HarvestEvent[];
}

/**
 * Crop management details and events for orchard and vineyard crops.
 *
 * @example <caption>A crop definition for an orchard that was:</caption>
 *
 * ```js
 * {
 *  "type": "oranges",
 *  "classification": "orchard",
 *  // ...CropEvents
 * }
 * ```
 */

/**
 * A crop event that happened on a particular date.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-01-01",
 *  "externalId": "f1-corn1-1234",
 *  "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
 * }
 * ```
 */
export interface CropEvent {
  /**
   * The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).
   *
   * Dates for liming and burning can be approximate or the first day of the crop year.
   *
   * @example <caption>When the crop event occurred on January 1st of 2000:</caption>
   *
   * ```js
   * "date": "2000-01-01"
   *```
   * @validationRules ["cropEventDateIsOnOrAfterContainingCropYear"]
   * @format date
   * @errorMessage {
   * "type": "projectDataError:cropEventDateTypeError",
   * "validationRules": "projectDataError:cropEventDateValidationRuleViolation"
   * }
   */
  date: string;
  /**
   * External crop event identifier.
   *
   * Used to correlate data back to the originating system and to synchronize repeated imports.
   *
   * @nullable
   * @example
   *
   * ```js
   * "externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
   * ```
   */
  externalId?: string;
  /**
   * Nori's internal crop event identifier.
   *
   * Used to synchronize repeated imports.
   *
   * @nullable External systems pass null or omit the property for new projects.
   * @example
   *
   * ```js
   * "id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
   * ```
   */
  id?: string;
  /**
   * Source of the event
   *
   * Optional field to indicate what system this data point originated from.
   *
   * @nullable
   * @example
   *
   * ```js
   * "source": "CDL"
   * ```
   * @example
   *
   * ```js
   * "source": "FMS name"
   * ```
   */
  source?: string;
}

/**
 * Planting event details.
 *
 * (formatted as ISO8601 date format (YYYY-MM-DD) with YYYY > 2000 and YYYY < 2100).
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-03-02",
 * }
 * ```
 */
export type PlantingEvent = CropEvent;

/**
 * An annual crop's harvest event details.
 *
 * @example <caption>An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:</caption>
 *
 * ```js
 * {
 *  "date": "2000-10-01",
 *  "yield": 100,
 *  "yieldUnit": "bu/ac",
 *  "grainFruitTuber": "n/a",
 *  "residueRemoved": 0,
 * }
 * ```
 */
export interface HarvestEvent extends CropEvent {
  /**
   * The crop yield.
   *
   * The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.
   *
   * @default 0
   * @example <caption>When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:</caption>
   *
   * ```js
   * "yield": 100
   * ```
   */
  yield?: number;
  /**
   * The crop yield units.
   *
   * The current version of quantification does not consider yield when producing estimates.
   *
   * @default "lbs/ac"
   * @example <caption>When the unit of the yield is submitted in lbs per acre:</caption>
   *
   * ```js
   * "yieldUnit": "lbs/ac"
   * ```
   */
  yieldUnit?: 'bu/ac' | 'cwt/ac' | 'tons/ac' | 'lbs/ac';
  /**
   * Whether the crop was harvest for grain, fruit or tuber.
   *
   * @nullable during import (specify null if you are unsure)
   * @default no
   * @example <caption>Select true if the crop was harvested for grain, fruit, or tuber:</caption>
   *
   * ```js
   * "grainFruitTuber": true
   * ```
   * @example <caption>Select false if the crop was harvested before maturity for silage or haylage:</caption>
   *
   * ```js
   * "grainFruitTuber": false
   * ```
   */
  grainFruitTuber?: boolean;
  /**
   * Crop residue removed.
   *
   * @default 0
   * @minimum 0
   * @maximum 100
   * @example <caption>Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:</caption>
   *
   * ```js
   * "residueRemoved": 0
   * ```
   * @example <caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:</caption>
   *
   * ```js
   * "residueRemoved": 5
   * ```
   * @example <caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:</caption>
   *
   * ```js
   * "residueRemoved": 10
   * ```
   */
  residueRemoved?: number;
}

/**
 * Soil or crop disturbance event event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-10-01",
 *  "type": "mow",
 * }
 * ```
 */
export interface SoilOrCropDisturbanceEvent extends CropEvent {
  /**
   * The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @example <caption>When the name of the soil or crop disturbance used on the crop was known to the supplier as "Orange Tiller":</caption>
   *
   * ```js
   * "name": "Orange Tiller"
   * ```
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
   * @example <caption>15-30% of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "reduced tillage"
   * ```
   * @example <caption>30% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "mulch tillage"
   * ```
   * @example <caption>30% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "ridge tillage"
   * ```
   * @example <caption>75% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "strip tillage"
   * ```
   * @example <caption>75% or more of crop residue remains on the surface after tillage:</caption>
   *
   * ```js
   * "type": "no-till planting"
   * ```
   * @example <caption>50-60% of standing live and dead plant biomass is cut and left lying as surface residue. The standing live plant is left alive to continue growing:</caption>
   *
   * ```js
   * "type": "mow"
   * ```
   * @example <caption>100% of standing live and dead plants are cut, chopped and incorporated into surface residue. The standing live plant is killed in the process:</caption>
   *
   * ```js
   * "type": "crimp"
   * ```
   * @example <caption>Cover crop died in winter:</caption>
   *
   * ```js
   * "type": "winter kill"
   * ```
   * @example <caption>100% of all plants are killed, including both growing crops (e.g. corn, soy, alfalfa) and weeds:</caption>
   *
   * ```js
   * "type": "broad-spectrum herbicide"
   * ```
   */
  type: (typeof soilOrCropDisturbanceTypes)[number];
}

/**
 * Fertilizer event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-10-01",
 *  "name": "Joe's fertilizer",
 *  "type": "mixed blends",
 *  "lbsOfNPerAcre": 10
 * }
 * ```
 */
export interface FertilizerEvent extends CropEvent {
  /**
   * The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   * @example <caption>When the name of the fertilizer used on the crop was known to the supplier as "Joe's fertilizer":</caption>
   *
   * ```js
   * "name": "Joe's fertilizer"
   * ```
   */
  name?: string;
  /**
   * The fertilizer classification type.
   *
   * Note that the fertilizer type does not currently impact quantification as it only impacts n2o emissions.
   * As such, we default the type to "mixed blends" when this property is excluded/nulled.
   *
   * @default "mixed blends"
   * @example <caption>Potash applied:</caption>
   *
   * ```js
   * "type": "potash (00-00-60)",
   * ```
   */
  type?: (typeof fertilizerTypes)[number];
  /**
   * Amount of nitrogen applied in lbs/ac.
   *
   * @default 0
   * @example <caption>When 10 lbs of Nitrogen per acre was applied:</caption>
   *
   * ```js
   * "lbsOfNPerAcre": 10
   * ```
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
 *  "date": "2000-10-01",
 *  "type": "alfalfa meal",
 *  "tonsPerAcre": 2,
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
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
   */
  type: (typeof solidOmadTypes)[number];
  /**
   * Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).
   *
   * @minimum 0
   * @example <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>
   *
   * ```js
   * "tonsPerAcre": 2
   * ```
   */
  tonsPerAcre: number;
}

/**
 * Slurry organic matter (OMAD) and manure event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-10-01",
 *  "type": "beef slurry",
 *  "gallonsPerAcre": 2,
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
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
   */
  type: (typeof slurryOmadTypes)[number];
  /**
   * Amount of organic matter applied per acre (gallons per acre).
   *
   * @minimum 0
   * @maximum 200
   * @example <caption>When the amount of organic matter or manure applied to the crop per acre was 10 gals/acre:</caption>
   *
   * ```js
   * "gallonsPerAcre": 10
   * ```
   */
  gallonsPerAcre: number;
}

// todo confirm amountPerAcre max
/**
 * Organic matter (OMAD) and manure event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-10-01",
 *  "tonsPerAcre": 2,
 *  "percentNitrogen": 9,
 *  "carbonNitrogenRatio": 30,
 *  "percentMoisture": 0,
 * }
 * ```
 */
export interface OrganicMatterEvent extends CropEvent {
  /**
   * The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.
   *
   * @todo this property will be deprecated in the future
   * @example <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>
   *
   * ```js
   * "name": "Joe's manure"
   * ```
   */
  name?: string;
  /**
   * The nitrogen percent makeup in the organic matter or manure.
   *
   * @minimum 0
   * @maximum 100
   * @nullable A default based on the selected type will be used if not specified here.
   * @example <caption>When the organic matter or manure contains 9% nitrogen:</caption>
   *
   * ```js
   * "percentNitrogen": 9
   * ```
   */
  percentNitrogen?: number;
  /**
   * The carbon to nitrogen ratio in the organic matter or manure.
   *
   * @nullable A default based on the selected type will be used if not specified here.
   * @minimum 0
   * @example <caption>When the C:N ratio was 18.6:</caption>
   *
   * ```js
   * "carbonNitrogenRatio": 18.6
   * ```
   */
  carbonNitrogenRatio?: number;
  /**
   * The percent moisture of the organic matter or manure
   *
   * @nullable A default based on the selected type will be used if not specified here.
   * @minimum 0
   * @maximum 100
   * @example <caption>When the percent moisture is 15:</caption>
   *
   * ```js
   * "percentMoisture": 15
   * ```
   */
  percentMoisture?: number;
}

/**
 * Irrigation event details.
 *
 * @example
 *
 * ```js
 * {
 *  "volume": 1,
 *  "date": "2000-10-01",
 * }
 * ```
 */
export interface IrrigationEvent extends CropEvent {
  /**
   * The irrigation volume in inches. If volume is 0, simply do not define an irrigation event.
   *
   * @minimum 0
   * @example <caption>When 1 inch of volume was applied:</caption>
   *
   * ```js
   * "volume": 1,
   * ```
   */
  volume: number;
}

// todo liming tonsPerAcre max
/**
 * Liming event details.
 *
 * NOTE: The date that the liming occurred. Currently, liming dates do not impact quantification.
 * As such, we will default to a reasonable date when this property is left out.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-01-01",
 *  "type": "crushed limestone",
 *  "tonsPerAcre": 10,
 * }
 * ```
 */
export interface LimingEvent extends CropEvent {
  /**
   * The liming type.
   *
   * @example <caption>When crushed limestone was the liming type that was used:</caption>
   *
   * ```js
   * "type": "crushed limestone"
   * ```
   */
  type: (typeof limingTypes)[number];
  /**
   * The liming amount (in tons per acre).
   *
   * @minimum 0
   * @example <caption>When 100 tons were user per acre:</caption>
   *
   * ```js
   * "tonsPerAcre": 100
   * ```
   */
  tonsPerAcre: number;
}

/**
 * Grazing event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2000-01-01",
 *  "daysGrazed": 3,
 *  "percentResidueRemoved": 50
 * }
 * ```
 */
export interface GrazingEvent extends CropEvent {
  /**
   * Number of days actively grazed from `CropEvent.date`
   *
   * @minimum 1
   * @maximum 365
   * @example <caption>When animals are on the field 3 days:</caption>
   *
   * ```js
   * "daysGrazed": 3
   * ```
   */
  daysGrazed: number;
  /**
   * Percent of residue removed if known.
   *
   * @minimum 0
   * @maximum 100
   * @example <caption>When 50% of residue was removed:</caption>
   *
   * ```js
   * "percentResidueRemoved": 50
   * ```
   */
  percentResidueRemoved: number;
}

/**
 * Pruning Event.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2008-10-31"
 * }
 * ```
 */
export type PruningEvent = CropEvent;

/**
 * Clearing and renewal event for orchards / vinyards.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2008-10-31",
 *   "percentRenewed": 50
 * }
 * ```
 */
export interface ClearingAndRenewalEvent extends CropEvent {
  /**
   * Percentage or orchard or vinyard that was cleared and renewed.
   *
   * @minimum 1
   * @maximum 100
   * @example <caption>When 50% of the orchard was renewed:</caption>
   *
   * ```js
   * "percentRenewed": 50
   * ```
   */
  percentRenewed: number;
}

/**
 * Burning event details.
 *
 * @example
 *
 * ```js
 * {
 *  "date": "2008-10-31"
 * }
 * ```
 */
export type BurningEvent = CropEvent;
