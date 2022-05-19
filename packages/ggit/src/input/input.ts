/* eslint-disable jsdoc/require-example, jsdoc/check-tag-names */
import type {
  CURRENT_SCENARIO_NAME,
  FUTURE_SCENARIO_NAME,
  WORLD_GEODETIC_SYSTEM_1984,
} from './constants';

/**
 * daycentcrv1 input schema
 *
 * @errorMessage
 * {
 * "_": "ggitInputError:ggitInputDataUnknownError"
 * }
 *
 */
export interface InputData {
  '@cometEmailId': CometEmailId;
  Cropland: Cropland[];
}

/**
 * Soil Metrics API email address or GGIT email address.
 */
export type CometEmailId = string; // todo template literal string

/**
 * Cropland data
 *
 */
export interface Cropland {
  '@Name': Name;
  GEOM: GEOM;
  'Pre-1980': Pre1980;
  CRP: CRP;
  CRPType: CRPType;
  'Year1980-2000'?: Year1980To2000; // todo CRP/Non-CRP types

  'Year1980-2000_Tillage'?: Year1980To2000Tillage;
  CRPStartYear: CRPStartYear;
  CRPEndYear: CRPEndYear;
  PreCRPManagement: PreCRPManagement;
  PreCRPTillage: PreCRPTillage;
  PostCRPManagement: PostCRPManagement;
  PostCRPTillage: PostCRPTillage;
  CropScenario: CropScenario[];
}

/**
 * Name of this field.
 */
export type Name = string;

/**
 * Historic management between 1980 - 2000. Check GGIT_API_File_Specification.xlsx for complete list.
 */
export type Year1980To2000 = CrpManagementOption;

/**
 * Tillage from 1980 - 2000.
 */
export type Year1980To2000Tillage = CrpTillageOption;

/**
 * Historic management data input. Pre-1980. See GGIT_API_File_Specification.xlsx Pre-1980 history by LRR tab.
 */
export type Pre1980 =
  | 'upland non-irrigated (pre 1980s)' // todo string template literal project spec pre 1980 + (pre1980s)
  | 'irrigation (pre 1980s)'
  | 'lowland non-irrigated (pre 1980s)'
  | 'livestock grazing';

/**
 * CRP.
 */
export type CRP = 'no' | 'yes';

/**
 * CRP Type. Dependant on CRP.
 */
export type CRPType = 'none' | '100% grass' | 'grass/legume mixture';

// todo de-duplicate in app
export type CrpManagementOption =
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

// todo de-duplicate in app
// todo all lower case
export type CrpTillageOption =
  | 'intensive tillage'
  | 'reduced tillage'
  | 'no till';

/**
 * CRP start year. Must be YYYY.
 */
export type CRPStartYear = [string?]; // todo number?

/**
 * CRP end year. Must be YYYY.
 */
export type CRPEndYear = [string?]; // todo number?

/**
 * Pre-CRP management.
 */
export type PreCRPManagement = [CrpManagementOption?];

/**
 * Pre-CRP tillage.
 */
export type PreCRPTillage = [CrpTillageOption?];

/**
 * Post CRP management.
 */
export type PostCRPManagement = [CrpManagementOption?];

/**
 * Post-CRP tillage.
 */
export type PostCRPTillage = [CrpTillageOption?];

/**
 * Cropland management scenario.
 */
export interface CropScenario {
  '@Name': CropScenarioName;
  CropYear: CropYear[];
}

/**
 * Name of this crop scenario.
 */
export type CropScenarioName =
  | typeof CURRENT_SCENARIO_NAME
  | typeof FUTURE_SCENARIO_NAME;

/**
 * Crop event year.
 */
export interface CropYear<
  CropType extends ContinuedCrop | NewCrop = ContinuedCrop | NewCrop
> {
  '@Year': Year;
  Crop: CropType[];
}

/**
 * Year for this crop event.
 */
export type Year = number; // todo number range

type EmptyObject = Record<string, never>;

/**
 * Crop event
 */
export interface BaseCrop {
  '@CropNumber': CropNumber;
  CropName: CropName;
  /**
   * @default {}
   */
  HarvestList: HarvestList | EmptyObject;
  /**
   * @default {}
   */
  TillageList: TillageList | EmptyObject;
  /**
   * @default {}
   */
  NApplicationList: NApplicationList | EmptyObject;
  /**
   * @default  {}
   */
  OMADApplicationList: OMADApplicationList | EmptyObject;
  /**
   * @default  {}
   */
  IrrigationList: IrrigationList | EmptyObject;
  /**
   * @default {}
   */
  BurnEvent: BurnEvent | EmptyObject;
  /**
   * @default  {}
   */
  LimingEvent: LimingEvent | EmptyObject;
  /**
   * @default  {}
   */
  GrazingList: GrazingList | EmptyObject;
  Prune?: Prune;
  Renew?: Renew;
}

export type Crop<T extends ContinuedCrop | NewCrop = ContinuedCrop | NewCrop> =
  T extends ContinuedCrop ? ContinuedCrop : NewCrop;

/**
 *
 */
export interface ContinuedCrop extends BaseCrop {
  /**
   * Was this crop planted in the previous year.
   * Yes = continue crop growth for non-woody perennial crops
   * (like alfalfa, perennial grass hay or pasture) from
   * previous year without re-planting.
   */
  ContinueFromPreviousYear: 'y';
}

/**
 *
 */
export interface NewCrop extends BaseCrop {
  /**
   * Planting Date should be omitted when ContinueFromPreviousYear is set to 'y'
   */
  PlantingDate: PlantingDate;
  /**
   * Was this crop planted in the previous year.
   * Yes = continue crop growth for non-woody perennial crops
   * (like alfalfa, perennial grass hay or pasture) from
   * previous year without re-planting.
   */
  ContinueFromPreviousYear: 'n';
}

/**
 * Crop number for this crop event. Can have up to 3 crops for one crop year
 */
export type CropNumber = 1 | 2 | 3;

/**
 * Prune. Yes = woody perennial crops are pruned.
 */
export type Prune = 'yes' | 'no';

/**
 * Renew. Yes = remove and replant orchard. All coarse and fine branches
 * and all coarse roots are removed, soil is plowed, and new saplings
 * assumed to be 2 yrs old are planted.
 */
export type Renew = 'yes' | 'no';

/**
 * Name of crop. Check GGIT_API_File_Specification.xlsx tab CropName for complete list
 */
export type CropName =
  | 'alfalfa'
  | 'almond'
  | 'annual rye'
  | 'annual rye - legume'
  | 'annual rye - legume - radish'
  | 'austrian winter pea'
  | 'avocados'
  | 'barley'
  | 'broccoli-coast'
  | 'broccoli-desert'
  | 'carrots'
  | 'cauliflower'
  | 'cereal rye'
  | 'cherries'
  | 'clover'
  | 'corn'
  | 'corn silage'
  | 'cotton'
  | 'dry field beans'
  | 'dry field pea'
  | 'english walnuts'
  | 'fallow'
  | 'forage radish'
  | 'grape, raisin'
  | 'grape, table'
  | 'grape, wine (<1390 gdd)'
  | 'grape, wine (>1950 gdd)'
  | 'grape, wine (1391-1670 gdd)'
  | 'grape, wine (1671-1950 gdd)'
  | 'grapefruit'
  | 'grass'
  | 'grass-legume mix'
  | 'lemons & limes'
  | 'lettuce-head'
  | 'lettuce-leaf'
  | 'lettuce-romaine'
  | 'millet'
  | 'oats'
  | 'oilseed radish'
  | 'olives'
  | 'oranges'
  | 'peaches and nectarines'
  | 'peanut'
  | 'pistachios'
  | 'potato'
  | 'rice - flooded'
  | 'rye'
  | 'sorghum'
  | 'sorghum'
  | 'sorghum silage'
  | 'soybean'
  | 'spring wheat'
  | 'strawberry'
  | 'sugar beets'
  | 'sunflower'
  | 'switchgrass'
  | 'tangerines & mandarins'
  | 'tomatoes, fresh'
  | 'tomatoes, processing'
  | 'vetch'
  | 'winter grain-other'
  | 'winter wheat';

/**
 * Crop planting date. must be in MM/DD/YYYY format
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type PlantingDate = string;

/**
 * Grazing event
 */
export interface GrazingEvent {
  GrazingStartDate: GrazingStartDate;
  GrazingEndDate: GrazingEndDate;
  RestPeriod: RestPeriod;
  UtilizationPct: UtilizationPct;
}

/**
 * Grazing Start date. Any date of the year. The system is sensitive to leap years
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type GrazingStartDate = string;

/**
 * Grazing End date. Any date of the year. The system is sensitive to leap dates. Must be after the Grazing Start Date.
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type GrazingEndDate = string;

/**
 * Rest Period. Any number of days less than 365.
 */
export type RestPeriod = number; // todo (max, min )

/**
 * Utilization Percentage. Any percentage, in whole or real numbers, between 0 and 100.
 */
export type UtilizationPct = number; // todo (max 100, min 0)

/**
 * List of grazing events.
 */
export interface GrazingList {
  GrazingEvent: GrazingEvent[];
}

/**
 * List of irrigation events.
 */
export interface IrrigationList {
  IrrigationEvent: IrrigationEvent[];
}

/**
 * Irrigation Event
 */
export interface IrrigationEvent {
  IrrigationDate: IrrigationDate;
  IrrigationInches: IrrigationInches;
}

/**
 * Irrigation date. must be mm/dd/yyyy
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type IrrigationDate = string;

/**
 * Irrigation Inches
 */
export type IrrigationInches = number; // todo max/min

/**
 * Liming event.
 */
export interface LimingEvent {
  LimingDate: LimingDate;
  LimingMethod: LimingMethod;
  LimingRate: LimingRate;
}

/**
 * Liming date. must be in mm/dd/yyyy format
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type LimingDate = string;

/**
 * Liming Method
 */
export type LimingMethod =
  | 'none'
  | 'crushed limestone'
  | 'calcitic limestone'
  | 'dolomitic limestone';

/**
 * Liming Rate. units in tons/acre
 */
export type LimingRate = number; // todo max/min

/**
 * List of manure application events. (Organic Amendment)
 */
export interface OMADApplicationList {
  OMADApplicationEvent: OMADApplicationEvent[];
}

/**
 * Organic Amendment Application event
 */
export interface OMADApplicationEvent {
  OMADApplicationDate: OMADApplicationDate;
  OMADType: OMADType;
  OMADAmount: OMADAmount;
  OMADPercentN: OMADPercentN;
  OMADCNRatio: OMADCNRatio;
}

/**
 * Organic Amendment Application date
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type OMADApplicationDate = string;

/**
 * Organic Amendment Type. see GGIT_API_File_Specification.xlsx tab Organic Amendment Types for details
 */
export type OMADType =
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
 * Organic Amendment Amount units in tons dry matter per acre
 */
export type OMADAmount = number; // todo max/min

/**
 * Organic Amendment Percent. Units in %N
 */
export type OMADPercentN = number; // todo max/min

/**
 * Organic Amendment Ratio
 */
export type OMADCNRatio = number; // todo max/min

/**
 * Burn event.
 */
export interface BurnEvent {
  BurnTime: BurnTime;
}

/**
 * Time burn event occurred.
 */
export type BurnTime =
  | 'no burning'
  | 'yes, before planting'
  | 'yes, after harvesting';

/**
 * List of nitrogen applications.
 */
export interface NApplicationList {
  NApplicationEvent: NApplicationEvent[];
}

/**
 * Nitrogen application event.
 *
 */
export interface NApplicationEvent {
  NApplicationDate: NApplicationDate;
  NApplicationType: NApplicationType;
  NApplicationAmount: NApplicationAmount;
  NApplicationMethod: NApplicationMethod;
  EEP: EEP;
}

/**
 * "Nitrogen application date. must be in MM/DD/YYYY
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type NApplicationDate = string;

/**
 * Nitrogen application type.
 */
export type NApplicationType =
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
 * Nitrogen application amount. Units in lbs N/acre
 */
export type NApplicationAmount = number; // todo max/min

/**
 * Nitrogen application method.
 */
export type NApplicationMethod =
  | 'surface broadcast'
  | 'surface band / sidedress'
  | 'incorporate / inject'
  | 'fertigation'
  | 'aerial application';

export const eepTypes = [
  'none',
  'slow release',
  'nitrification inhibitor',
] as const;

/**
 * Enhanced efficiency product.
 */
export type EEP = typeof eepTypes[number];

/**
 * List of tillage events.
 */
export interface TillageList {
  TillageEvent: TillageEvent[];
}

/**
 * Tillage event.
 */
export interface TillageEvent {
  TillageDate: TillageDate;
  TillageType: TillageType;
}

/**
 * Date this tillage event occurred. must be in MM/DD/YYYY.
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type TillageDate = string;

/**
 * Tillage type.
 */
export type TillageType =
  | 'intensive tillage'
  | 'reduced tillage'
  | 'mulch tillage'
  | 'ridge tillage'
  | 'strip tillage'
  | 'no tillage'
  | 'growing season cultivation'
  | 'mow'
  | 'crimp'
  | 'broad-spectrum herbicide'
  | 'winter kill';

/**
 * List of harvest events.
 */
export interface HarvestList {
  HarvestEvent: HarvestEvent[];
}

/**
 * Harvest event
 */
export interface HarvestEvent {
  HarvestDate: HarvestDate;
  Grain: Grain;
  yield: Yield;
  StrawStoverHayRemoval: StrawStoverHayRemoval;
}

/**
 * Harvest Date. must be in MM/DD/YYYY
 *
 * @pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type HarvestDate = string;

/**
 * Is this a grain harvest
 */
export type Grain = 'yes' | 'no';

/**
 * Yield amount. See crop type spec for yield units in GGIT_API_File_Specification.xlsx.
 */
export type Yield = number; // todo max/min

/**
 * % of straw/stover/have/residue removal.
 */
export type StrawStoverHayRemoval = number; // todo max/min

/**
 * Geometry, point or polygon. Polygon has maximum about of vertices, 1000.  Max size is 10,000 acres. SRID any
 */
export interface GEOM {
  '@SRID': SRID;
  '@AREA': AREA;
  '#text': WKT;
}

/**
 * Standard spatial reference identifier.
 */
export type SRID = typeof WORLD_GEODETIC_SYSTEM_1984;

/**
 * Area of this geometry in acres.
 */
export type AREA = number; // todo max 10k

/**
 * WKT string of geometry polygon.
 *
 * @TJS-type string
 */
export declare type WKT = `polygon((${string}))` | `POLYGON((${string}))`;
