/**
 * daycentcrv1 input schema.
 */
export interface InputData {
  '@cometEmailId': CometEmailId;
  Cropland: Cropland[];
}

/**
 * Soil Metrics API email address or GGIT.com email address.
 */
export type CometEmailId = string; // todo template literal string

export interface Cropland {
  '@Name': Name;
  GEOM: GEOM;
  'Pre-1980': Pre1980;
  CRP: CRP;
  CRPType: CRPType;
  'Year1980-2000': Year1980To2000;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Year1980-2000_Tillage': Year1980To2000Tillage;
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
export type Year1980To2000 =
  | 'Irrigated: Annual Crops in Rotation'
  | 'Irrigated: Annual Crops with Hay/Pasture in Rotation'
  | 'Irrigated: Continuous Hay'
  | 'Irrigated: Orchard or Vineyard'
  | 'Non-Irrigated: Annual Crops in Rotation'
  | 'Non-Irrigated: Continuous Hay'
  | 'Non-Irrigated: Livestock Grazing'
  | 'Non-Irrigated: Fallow-Grain'
  | 'Non-Irrigated: Orchard or Vineyard';

/**
 * Tillage from 1980 - 2000.
 */
export type Year1980To2000Tillage = CrpTillageOption;

/**
 * Historic management data input. Pre-1980. See GGIT_API_File_Specification.xlsx Pre-1980 history by LRR tab.
 */
export type Pre1980 =
  | 'Upland Non-Irrigated (Pre 1980s)'
  | 'Irrigation (Pre 1980s)'
  | 'Lowland Non-Irrigated (Pre 1980s)';

/**
 * CRP.
 */
export type CRP = 'No' | 'Yes';

/**
 * CRP Type. Dependant on CRP.
 */
export type CRPType = 'None' | '100% Grass' | 'Grass/Legume Mixture';

// todo de-duplicate in app
export type CrpManagementOption =
  | 'Irrigated: Annual Crops in Rotation'
  | 'Irrigated: Annual Crops with Hay/Pasture in Rotation'
  | 'Irrigated: Continuous Hay'
  | 'Irrigated: Orchard or Vineyard'
  | 'Non-Irrigated: Annual Crops in Rotation'
  | 'Non-Irrigated: Continuous Hay'
  | 'Non-Irrigated: Livestock Grazing'
  | 'Non-Irrigated: Fallow-Grain'
  | 'Non-Irrigated: Orchard or Vineyard';

// todo de-duplicate in app
// todo all lower case
export type CrpTillageOption =
  | 'Intensive Tillage'
  | 'Reduced Tillage'
  | 'No Till';

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
export type CropScenarioName = string;

/**
 * Crop event year.
 */
export interface CropYear {
  '@Year': Year;
  Crop: Crop[];
}

/**
 * Year for this crop event.
 */
export type Year = string; // todo number range

/**
 * Crop event
 */
export interface Crop {
  '@CropNumber': CropNumber;
  CropName: CropName;
  PlantingDate: PlantingDate;
  ContinueFromPreviousYear: ContinueFromPreviousYear;
  /**
   * @default {}
   */
  HarvestList: HarvestList | Record<string, never>;
  /**
   * @default {}
   */
  TillageList: TillageList | Record<string, never>;
  /**
   * @default {}
   */
  NApplicationList: NApplicationList | Record<string, never>;
  /**
   * @default  {}
   */
  OMADApplicationList: OMADApplicationList | Record<string, never>;
  /**
   * @default  {}
   */
  IrrigationList: IrrigationList | Record<string, never>;
  /**
   * @default {}
   */
  BurnEvent: BurnEvent | Record<string, never>;
  /**
   * @default  {}
   */
  LimingEvent: LimingEvent | Record<string, never>;
  /**
   * @default  {}
   */
  GrazingList: GrazingList | Record<string, never>;
  Prune?: Prune;
  Renew?: Renew;
}

/**
 * Crop number for this crop event. Can have up to 3 crops for one crop year
 */
export type CropNumber = '1' | '2' | '3'; // todo number

/**
 * Prune. Yes = woody perennial crops are pruned.
 */
export type Prune = 'Yes' | 'No';

/**
 * Renew. Yes = remove and replant orchard. All coarse and fine branches
 * and all coarse roots are removed, soil is plowed, and new saplings
 * assumed to be 2 yrs old are planted.
 */
export type Renew = 'Yes' | 'No';

/**
 * Name of crop. Check GGIT_API_File_Specification.xlsx tab CropName for complete list
 */
export type CropName =
  | 'Alfalfa'
  | 'Almond'
  | 'Annual Rye'
  | 'Annual Rye - Legume'
  | 'Annual Rye - Legume - Radish'
  | 'Austrian Winter Pea'
  | 'Avocados'
  | 'Barley'
  | 'Broccoli-Coast'
  | 'Broccoli-Desert'
  | 'Carrots'
  | 'Cauliflower'
  | 'Cereal Rye'
  | 'Cherries'
  | 'Clover'
  | 'Corn'
  | 'Corn Silage'
  | 'Cotton'
  | 'Dry Field Beans'
  | 'Dry Field Pea'
  | 'English Walnuts'
  | 'Fallow'
  | 'Forage Radish'
  | 'Grape, Raisin'
  | 'Grape, Table'
  | 'Grape, Wine (<1390 GDD)'
  | 'Grape, Wine (>1950 GDD)'
  | 'Grape, Wine (1391-1670 GDD)'
  | 'Grape, Wine (1671-1950 GDD)'
  | 'Grapefruit'
  | 'Grass'
  | 'Grass-Legume Mix'
  | 'Lemons & Limes'
  | 'Lettuce-Head'
  | 'Lettuce-Leaf'
  | 'Lettuce-Romaine'
  | 'Millet'
  | 'Oats'
  | 'Oilseed Radish'
  | 'Olives'
  | 'Oranges'
  | 'Peaches and Nectarines'
  | 'Peanut'
  | 'Pistachios'
  | 'Potato'
  | 'Rice - Flooded'
  | 'Rye'
  | 'Sorghum'
  | 'Sorghum'
  | 'Sorghum Silage'
  | 'Soybean'
  | 'Spring Wheat'
  | 'Strawberry'
  | 'Sugar Beets'
  | 'Sunflower'
  | 'Switchgrass'
  | 'Tangerines & Mandarins'
  | 'Tomatoes, Fresh'
  | 'Tomatoes, Processing'
  | 'Vetch'
  | 'Winter Grain-Other'
  | 'Winter Wheat';

/**
 * Crop planting date. must be in MM/DD/YYYY format
 *
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type PlantingDate = string;

/**
 * Was this crop planted in the previous year.
 * Yes = continue crop growth for non-woody perennial crops
 * (like alfalfa, perennial grass hay or pasture) from
 * previous year without re-planting.
 */
export type ContinueFromPreviousYear = 'N' | 'Y';

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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type GrazingStartDate = string;

/**
 * Grazing End date. Any date of the year. The system is sensitive to leap dates. Must be after the Grazing Start Date.
 *
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type GrazingEndDate = string;

/**
 * Rest Period. Any number of days less than 365.
 */
export type RestPeriod = string; // todo number

/**
 * Utilization Percentage. Any percentage, in whole or real numbers, between 0 and 100.
 */
export type UtilizationPct = string; // todo number (max 100, min 0)

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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type IrrigationDate = string;

/**
 * Irrigation Inches
 */
export type IrrigationInches = string; // todo number

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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type LimingDate = string;

/**
 * Liming Method
 */
export type LimingMethod =
  | 'None'
  | 'Crushed limestone'
  | 'Calcitic limestone'
  | 'Dolomitic limestone';

/**
 * Liming Rate. units in tons/acre
 */
export type LimingRate = string; // todo number

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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type OMADApplicationDate = string;

/**
 * Organic Amendment Type. see GGIT_API_File_Specification.xlsx tab Organic Amendment Types for details
 */
export type OMADType =
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
 * Organic Amendment Amount units in tons dry matter per acre
 */
export type OMADAmount = string; // todo number

/**
 * Organic Amendment Percent. Units in %N
 */
export type OMADPercentN = string; // todo number

/**
 * Organic Amendment Ratio
 */
export type OMADCNRatio = string; // todo number

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
  | 'No burning'
  | 'Yes, before planting'
  | 'Yes, after harvest';

/**
 * List of nitrogen applications.
 */
export interface NApplicationList {
  NApplicationEvent: NApplicationEvent[];
}

/**
 * Nitrogen application event.
 *
 * @default {}
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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type NApplicationDate = string;

/**
 * Nitrogen application type.
 */
export type NApplicationType =
  | 'Ammonium Nitrate (34-0-0)'
  | 'Ammonium Nitrate Phosphate (23-23-00)'
  | 'Ammonium Nitrate Phosphate (27-14-00)'
  | 'Ammonium Phosphate Sulphate (16-20-00)'
  | 'Ammonium Polyphosphate Solution (10-34-00)'
  | 'Ammonium Sulphate (21-00-00)'
  | 'Ammonium Thiosulphate Solution (12-00-00)'
  | 'Anhydrous Ammonia (gas) (82-00-00)'
  | 'Calcium Ammonium Nitrate'
  | 'Calcium Nitrate'
  | 'Diammonium Phosphate (18-46-00)'
  | 'Element-N (N)'
  | 'Element-P (P)'
  | 'Mixed Blends'
  | 'Monoammonium Phosphate (11-55-00)'
  | 'Monoammonium Phosphate (12-51-00)'
  | 'Potassium Nitrate'
  | 'Urea (46-00-00)'
  | 'Urea Ammonium Nitrate (30-00-00)'
  | 'Urea Ammonium Phosphate (27-27-00)'
  | 'Urea Ammonium Phosphate (34-17-00)';

/**
 * Nitrogen application amount. Units in lbs N/acre
 */
export type NApplicationAmount = string; // todo number

/**
 * Nitrogen application method.
 */
export type NApplicationMethod =
  | 'Surface Broadcast'
  | 'Surface Band / Sidedress'
  | 'Incorporate / Inject'
  | 'Fertigation'
  | 'Aerial Application';

/**
 * Enhanced efficiency product.
 */
export type EEP = 'None' | 'Slow release' | 'Nitrification Inhibitor';

/**
 * List of tillage events.
 *
 * @default {}
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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type TillageDate = string;

/**
 * Tillage type.
 */
export type TillageType =
  | 'Intensive Tillage'
  | 'Reduced Tillage'
  | 'Mulch Tillage'
  | 'Ridge Tillage'
  | 'Strip Tillage'
  | 'No Tillage'
  | 'Growing Season Cultivation'
  | 'Mow'
  | 'Crimp'
  | 'Broad-spectrum herbicide'
  | 'Winter kill';

/**
 * List of harvest events.
 *
 * @default {}
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
 * @TJS-pattern ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
 */
export type HarvestDate = string;

/**
 * Is this a grain harvest.
 */
export type Grain = 'Yes' | 'No';

/**
 * Yield amount. See crop type spec for yield units in GGIT_API_File_Specification.xlsx.
 */
export type Yield = string; // todo number

/**
 * % of straw/stover/have/residue removal.
 */
export type StrawStoverHayRemoval = string; // todo number

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
export type SRID = '4326';

/**
 * Area of this geometry in acres.
 */
export type AREA = string; // todo number, max 10k

/**
 * WKT string of geometry polygon.
 *
 * @TJS-type string
 */
export type WKT = `Polygon((${any}))`; // todo regex
