import type { GeoJSON } from 'geojson';

// todo
// * why did we include clus?
// * readme on how to build schema

export type YesOrNo = 'yes' | 'no' | null;

export interface DataImport {
  accountName?: string;
  projectName?: string;
  fields: Field[];
  energyUse?: Energy[];
}

export interface Field {
  fieldName: string;
  owners: string[] | null;

  // Field location and boundary
  state?: string;
  county?: string;
  area?: number;
  // todo required if area is specified
  areaUnit?: 'ac' | 'ha';
  srid?: string; // SRID of projection; 4326 (NAD83) is recommended
  geometry?: GeoJSON;

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
  crop: string; // list of known crops at go.nori.com/inputs
  type:
    | 'annual crop'
    | 'annual cover'
    | 'perennial'
    | 'orchard'
    | 'vineyard'
    | null;
  continueFromPreviousYear: YesOrNo; // Only set to be "Yes" for perennials
  datePlanted: string | null; // mm/dd/yyyy, must be same year as plantingYear

  // Order crops in order they were planted from oldest to most recent
  cropNumber: 1 | 2 | 3;

  // If an orchard or vineyard, did you prune, renew or clear?
  prune: YesOrNo;
  renewOrClear?: YesOrNo;

  // • None of the following events should have dates in previous years
  //   or dates prior to the last harvest date of previous crops.
  // • All inputs should be ordered oldest to most recent
  harvestOrKillEvents: HarvestOrKillEvent[] | null;
  tillageEvents: TillageEvent[] | null;
  fertilizerEvents: FertilizerEvent[] | null;
  organicMatterEvents: OrganicMatterEvent[] | null;
  irrigationEvents: IrrigationEvent[] | null;
  limingEvents: LimingEvent[] | null;
  grazingEvents: GrazingEvent[] | null;
  burningEvents: BurningEvent[] | null;
}

export interface HarvestOrKillEvent {
  // Straw / Stover harvest exception: If the hay or stover was removed
  // separately after grain / fruit / tuber harvest, do NOT add this as
  // a second harvest. Instead, enter the percent of the remaining residue
  // that was removed on the grain harvest, regardless of removal date.

  date: string; // mm/dd/yyyy, must be same year or year after plantingYear
  yield: number | null;
  yieldNumeratorUnit: string | null;
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
  type: string; // list of known methods at go.nori.com/inputs
}

export interface FertilizerEvent {
  date: string; // mm/dd/yyyy
  type: string;
  applicationMethod:
    | 'Aerial'
    | 'Fertigation'
    | 'Incoprate'
    | 'Inject'
    | 'Sidedress'
    | 'Spray'
    | 'Spread'
    | 'Surface band'
    | null;
  enhancedEfficiency:
    | 'None'
    | 'Slow release'
    | 'Nitrification Inhibitor'
    | null;

  // Amount of N applied in lbs/ac is prefered
  lbsOfNPerAcre?: number;

  // If unable to compute Lbs of N / acre, provide as much of the following as you can
  NPK?: string;
  amount?: number;
  amountUnit?:
    | 'lb/acre'
    | 'ton/acre'
    | 'gal/acre'
    | '1000gal/acre'
    | 'lb'
    | 'ton'
    | 'gal'
    | '1000gal';
  productDensity?: number | null; // in lbs / gal
}

export interface OrganicMatterEvent {
  date: string; // mm/dd/yyyy
  type: string; // List of known manures is here go.nori.com/inputs; doesn't have to be one of these

  // Amount of manure applied (ton/acre is prefered)
  amount: number;
  amountUnit:
    | 'ton'
    | 'lb'
    | 'gal'
    | '1000gal'
    | 'ton/acre'
    | 'lb/acre'
    | 'gal/acre'
    | '1000gal/acre';

  // Attributes of the manure
  applicationMethod: 'aerial' | 'inject' | 'spray' | 'spread' | null;
  percentNitrogen: number | null;
  percentAmmoniumNitrogen: number | null;
  percentMoisture: number | null;
  carbonNitrogenRatio: number | null;
}

export interface IrrigationEvent {
  date: string; // mm/dd/yyyy
  volume?: number;
  volumeUnits?: 'in' | 'cm';
  depth?: number; // 0 if applied to surface
  depthUnits?: 'in' | 'cm';
  endDate?: string; // mm/dd/yyyy
  frequency?: number;
}

export interface LimingEvent {
  date: string; // mm/dd/yyyy
  type:
    | 'None'
    | 'Crushed Limestone'
    | 'Calcitic Limestone'
    | 'Dolomitic Limestone'
    | 'Other';

  // Tons/acre is prefered
  amount: number;
  amountUnit: 'lb' | 'ton' | 'lb/acre' | 'ton/acre';
}

export interface GrazingEvent {
  startDate: string; // mm/dd/yyyy
  endDate: string; // mm/dd/yyyy
  restPeriod: number; // 0-365 days
  utilization: number; // 0-100%
}

export interface BurningEvent {
  type: 'No burning' | 'Yes, before planting' | 'Yes, after harvesting';
}

export interface Energy {
  // Go back to 3 years before earliest qualified practice switch
  energyYear: number;

  // Size of total opperation for that year so we can compute the
  // percent of the numbers that applies to the fields enrolled
  farmSize: number;

  // Liquid fuels
  diesel: number; // No. 2 diesel (US gal)
  gasoline: number; // (US gal)
  biodiesel: {
    type: 'B2' | 'B5' | 'B10' | 'B20' | 'B100';
    amount: number; // (US gal)
  }[];
  vegetableOil: number; // SVO (US gal)

  // Gas fuels
  propane: number; // mmBTU
  naturalGas: number; // mmBTU
  CNG: number; // mmBTU
  LNG: number; // mmBTU

  // Electricity
  electricity: number; // kWh

  heatFromWaste: {
    type: string;
    amount: number; // mmBTU
    volume: number; // tons
  };
}
