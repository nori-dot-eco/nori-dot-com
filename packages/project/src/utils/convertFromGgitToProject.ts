/* eslint-disable jsdoc/require-example, jsdoc/require-jsdoc */

import { Input } from '@nori-dot-com/ggit';
import { add } from '@nori-dot-com/math';
import * as wicket from 'wicket';
import { featureCollection, feature } from '@turf/helpers';
import type { FeatureCollection, Polygon } from 'geojson';

import type {
  Project,
  Field,
  HistoricNonCRPLandManagement,
  HistoricCRPLandManagement,
  BurningEvent,
  CropEvents,
  CropYear,
  AnnualCrop,
  FertilizerEvent,
  SlurryOrganicMatterEvent,
  SolidOrganicMatterEvent,
  IrrigationEvent,
  AnnualCropHarvestEvent,
  SoilOrCropDisturbanceEvent,
  CoverCrop,
  OrchardOrVineyardCrop,
  PerennialCrop,
} from '../index';
import {
  annualCropTypes,
  slurryOmadTypes,
  solidOmadTypes,
  coverCropTypes,
  orchardOrVineyardCropTypes,
} from '../index';
import type { CropManagementEvent } from '../specification';

interface Translations {
  historicNonCrpLandManagement: {
    preYear1980: Record<
      Input.Pre1980,
      Field['historicLandManagement']['preYear1980']
    >;
  };
  burnEvents: {
    type: Partial<Record<Input.BurnTime, BurningEvent['type']>>;
  };
  soilOrCropDisturbanceEvents: {
    type: Partial<
      Record<Partial<Input.TillageType>, SoilOrCropDisturbanceEvent['type']>
    >;
  };
}

export const TRANSLATIONS: Translations = {
  historicNonCrpLandManagement: {
    preYear1980: {
      'upland non-irrigated (pre 1980s)': 'upland non-irrigated',
      'irrigation (pre 1980s)': 'irrigation',
      'lowland non-irrigated (pre 1980s)': 'lowland non-irrigated',
      'livestock grazing': 'livestock grazing',
    },
  },
  burnEvents: {
    type: {
      'yes, before planting': 'before planting',
      'yes, after harvest': 'after harvesting',
    },
  },
  soilOrCropDisturbanceEvents: {
    type: {
      'winter kill': 'winter killed',
    },
  },
};

export const isSlurryOrganicMatterEvent = (
  event: Input.OMADApplicationEvent
): event is Input.OMADApplicationEvent & {
  OMADType: SlurryOrganicMatterEvent['type'];
} => {
  return slurryOmadTypes.includes(
    event.OMADType as SlurryOrganicMatterEvent['type']
  );
};

export const isSolidOrganicMatterEvent = (
  event: Input.OMADApplicationEvent
): event is Input.OMADApplicationEvent & {
  OMADType: SolidOrganicMatterEvent['type'];
} => {
  return solidOmadTypes.includes(
    event.OMADType as SolidOrganicMatterEvent['type']
  );
};

export const isAnnualCrop = (
  cropEvent: Input.Crop
): cropEvent is Input.NewCrop & { CropName: AnnualCrop['type'] } => {
  return annualCropTypes.includes(cropEvent.CropName as AnnualCrop['type']);
};

export const isOrchardOrVineyardCrop = (
  cropEvent: Input.Crop
): cropEvent is Input.NewCrop & { CropName: OrchardOrVineyardCrop['type'] } => {
  return orchardOrVineyardCropTypes.includes(
    cropEvent.CropName as OrchardOrVineyardCrop['type']
  );
};

export const isPerennialCrop = (
  crop: Partial<Input.Crop> & { CropName: Input.Crop['CropName'] }
): crop is Input.Crop & { CropName: PerennialCrop['type'] } => {
  return Input.PERENNIAL_CROPS.includes(
    (crop as Input.Crop).CropName as PerennialCrop['type']
  );
};

export const isCoverCrop = (
  cropEvent: Input.Crop
): cropEvent is Input.NewCrop & { CropName: CoverCrop['type'] } => {
  return coverCropTypes.includes(cropEvent.CropName as CoverCrop['type']);
};

export const extractGeometryData = ({
  croplands,
}: {
  croplands: Input.Cropland[];
}): Pick<Field, 'acres' | 'geojson'> => {
  const geometryData = croplands.reduce(
    (cropland, { GEOM: { '#text': wkt, '@AREA': acres } }) => {
      const geojson = featureCollection([
        feature(new wicket.Wkt().read(wkt).toJson<Polygon>()),
        ...(cropland.geojson as FeatureCollection).features,
      ]);
      return { geojson, acres: add(cropland.acres, acres) };
    },
    { acres: 0, geojson: { features: [] } } as Pick<Field, 'acres' | 'geojson'>
  );
  return { geojson: geometryData.geojson, acres: geometryData.acres };
};

export const extractFieldName = ({
  metadata,
}: {
  metadata: Input.Name;
}): { fieldName: Field['fieldName'] } => {
  const fieldName = metadata.split('|')[1];
  return { fieldName };
};

export const buildHistoricCrpLandManagement = (): HistoricCRPLandManagement => {
  throw new Error('Historic CRP Land Management is not currently supported');
};

export const buildHistoricNonCrpLandManagement = ({
  'Pre-1980': preYear1980,
  'Year1980-2000': year1980To2000,
  'Year1980-2000_Tillage': tillageForYears1980To2000,
}: Pick<
  Input.Cropland,
  'Year1980-2000' | 'Year1980-2000_Tillage' | 'Pre-1980'
>): HistoricNonCRPLandManagement => {
  return {
    crp: 'no',
    preYear1980:
      TRANSLATIONS.historicNonCrpLandManagement.preYear1980[preYear1980],
    year1980To2000,
    tillageForYears1980To2000,
  };
};

export const buildHistoricLandManagement = (
  historicLandManagement: Pick<
    Input.Cropland,
    | 'CRP'
    | 'CRPType'
    | 'Year1980-2000'
    | 'Year1980-2000_Tillage'
    | 'CRPStartYear'
    | 'CRPEndYear'
    | 'PreCRPManagement'
    | 'PreCRPTillage'
    | 'PostCRPManagement'
    | 'PostCRPTillage'
    | 'Pre-1980'
  >
): Field['historicLandManagement'] => {
  return historicLandManagement.CRP === 'yes'
    ? buildHistoricCrpLandManagement()
    : buildHistoricNonCrpLandManagement(historicLandManagement);
};

export const separateCurrentAndFutureScenarios = ({
  cropScenarios,
}: {
  cropScenarios: Input.CropScenario[];
}): {
  futureCropScenario: Input.CropScenario;
  currentCropScenario: Input.CropScenario;
} => {
  const futureCropScenario = cropScenarios.find((s) => s['@Name'] === 'Future');
  const currentCropScenario = cropScenarios.find(
    (s) => s['@Name'] === 'Current'
  );
  return {
    futureCropScenario,
    currentCropScenario,
  };
};

export const extractRegenerativeSwitchYear = ({
  futureCropScenario,
}: {
  futureCropScenario: Input.CropScenario;
}): { regenerativeStartYear: Field['regenerativeStartYear'] } => {
  const regenerativeStartYear = futureCropScenario.CropYear.sort(
    ({ '@Year': yearA }, { '@Year': yearB }) => yearA - yearB
  )[0]['@Year'];
  return { regenerativeStartYear };
};

export const translateFertilizerEvent = ({
  event,
}: {
  event: Input.NApplicationEvent;
}): { fertilizerEvent: FertilizerEvent } => {
  const {
    NApplicationDate: date,
    NApplicationType: type,
    NApplicationAmount: lbsOfNPerAcre,
  } = event;
  return {
    fertilizerEvent: {
      date,
      type,
      lbsOfNPerAcre,
      name: null,
    },
  };
};

export const translateFertilizerEvents = ({
  fertilizerEventList,
}: {
  fertilizerEventList: Input.Crop['NApplicationList'];
}): { fertilizerEvents: CropEvents['fertilizerEvents'] } => {
  const fertilizerEvents =
    fertilizerEventList?.NApplicationEvent?.reduce?.((eventList, event) => {
      const { fertilizerEvent } = translateFertilizerEvent({ event });
      return [...eventList, fertilizerEvent];
    }, [] as FertilizerEvent[]) ?? [];
  return { fertilizerEvents };
};

export const translateOrganicMatterEvent = ({
  event,
}: {
  event: Input.OMADApplicationEvent;
}): { organicMatterEvent: CropEvents['organicMatterEvents'][number] } => {
  if (
    !(isSolidOrganicMatterEvent(event) || isSlurryOrganicMatterEvent(event))
  ) {
    throw new Error(
      `Could not translate organic matter event. Unknown type: ${event.OMADType}`
    );
  }
  const {
    OMADApplicationDate: date,
    OMADType: type,
    OMADAmount: amountPerAcre,
    OMADPercentN: percentNitrogen,
    OMADCNRatio: carbonNitrogenRatio,
  } = event;
  return {
    organicMatterEvent: {
      date,
      type,
      amountPerAcre,
      percentNitrogen,
      carbonNitrogenRatio,
      percentMoisture: null,
      name: null,
    },
  };
};

export const translateOrganicMatterEvents = ({
  organicMatterEventList,
}: {
  organicMatterEventList: Input.Crop['OMADApplicationList'];
}): { organicMatterEvents: CropEvents['organicMatterEvents'] } => {
  const organicMatterEvents =
    organicMatterEventList?.OMADApplicationEvent?.reduce?.(
      (eventList, event) => {
        const { organicMatterEvent } = translateOrganicMatterEvent({ event });
        return [...eventList, organicMatterEvent];
      },
      [] as CropEvents['organicMatterEvents']
    ) ?? [];
  return { organicMatterEvents };
};

export const translateIrrigationEvent = ({
  event,
}: {
  event: Input.IrrigationEvent;
}): { irrigationEvent: IrrigationEvent } => {
  const { IrrigationDate: date, IrrigationInches: volume } = event;
  return {
    irrigationEvent: {
      date,
      volume,
    },
  };
};

export const translateIrrigationEvents = ({
  irrigationEventList,
}: {
  irrigationEventList: Input.Crop['IrrigationList'];
}): { irrigationEvents: CropEvents['irrigationEvents'] } => {
  const irrigationEvents =
    irrigationEventList?.IrrigationEvent?.reduce?.((eventList, event) => {
      const { irrigationEvent } = translateIrrigationEvent({ event });
      return [...eventList, irrigationEvent];
    }, [] as CropEvents['irrigationEvents']) ?? [];
  return { irrigationEvents };
};

export const translateLimingEvents = ({
  limingEventList,
}: {
  limingEventList: Input.Crop['LimingEvent'];
}): { limingEvents: CropEvents['limingEvents'] } => {
  const {
    LimingDate: date,
    LimingMethod: type,
    LimingRate: tonsPerAcre,
  } = limingEventList;
  return {
    limingEvents:
      type && type !== 'none'
        ? [
            {
              date,
              type,
              tonsPerAcre,
            },
          ]
        : null,
  };
};

export const translateBurningEvent = ({
  burnEvent,
}: {
  burnEvent: Input.Crop['BurnEvent'];
}): { burningEvent: CropEvents['burningEvent'] } => {
  return {
    burningEvent:
      !burnEvent?.BurnTime || burnEvent?.BurnTime === 'no burning'
        ? null
        : { type: TRANSLATIONS.burnEvents.type[burnEvent.BurnTime] },
  };
};

export const translateGrazingEvent = ({
  event,
}: {
  event: Input.GrazingEvent;
}): { grazingEvent: CropEvents['grazingEvents'][number] } => {
  const {
    GrazingStartDate: startDate,
    GrazingEndDate: endDate,
    RestPeriod: restPeriod,
    UtilizationPct: utilization,
  } = event;
  return {
    grazingEvent: { startDate, endDate, restPeriod, utilization },
  };
};

export const translateGrazingEvents = ({
  grazingEventList,
}: {
  grazingEventList: Input.Crop['GrazingList'];
}): { grazingEvents: CropEvents['grazingEvents'] } => {
  const grazingEvents =
    grazingEventList?.GrazingEvent?.reduce?.((eventList, event) => {
      const { grazingEvent } = translateGrazingEvent({ event });
      return [...eventList, grazingEvent];
    }, [] as CropEvents['grazingEvents']) ?? null;
  return { grazingEvents };
};

export const translateCropHarvestEvent = ({
  event,
}: {
  event: Input.HarvestEvent;
}): { annualCropHarvestEvent: AnnualCropHarvestEvent } => {
  const {
    HarvestDate: date,
    Grain: grainFruitTuber,
    yield: harvestYield,
    StrawStoverHayRemoval: residueRemoved,
  } = event;
  return {
    annualCropHarvestEvent: {
      grainFruitTuber,
      yield: harvestYield,
      date,
      residueRemoved,
      yieldUnit: 'bu/ac',
    },
  };
};

export const translateCropHarvestEvents = ({
  harvestEventList,
}: {
  harvestEventList: Input.Crop['HarvestList'];
}): { harvestEvents: AnnualCropHarvestEvent[] } => {
  const harvestEvents =
    harvestEventList?.HarvestEvent?.reduce?.((eventList, event) => {
      const { annualCropHarvestEvent } = translateCropHarvestEvent({
        event,
      });
      return [...eventList, annualCropHarvestEvent];
    }, [] as AnnualCropHarvestEvent[]) ?? [];
  return { harvestEvents };
};

export const translateSoilOrCropDisturbanceEvent = ({
  event,
}: {
  event: Input.TillageEvent;
}): {
  soilOrCropDisturbanceEvent: CropEvents['soilOrCropDisturbanceEvents'][number];
} => {
  const { TillageDate: date, TillageType: type } = event;
  return {
    soilOrCropDisturbanceEvent: {
      name: null,
      date,
      type:
        TRANSLATIONS.soilOrCropDisturbanceEvents.type[type] ||
        (type as SoilOrCropDisturbanceEvent['type']),
    },
  };
};

export const translateSoilOrCropDisturbanceEvents = ({
  soilOrCropDisturbanceEventList,
}: {
  soilOrCropDisturbanceEventList: Input.Crop['TillageList'];
}): {
  soilOrCropDisturbanceEvents: CropEvents['soilOrCropDisturbanceEvents'];
} => {
  const soilOrCropDisturbanceEvents =
    soilOrCropDisturbanceEventList?.TillageEvent?.reduce?.(
      (eventList, event) => {
        const {
          soilOrCropDisturbanceEvent,
        } = translateSoilOrCropDisturbanceEvent({ event });
        return [...eventList, soilOrCropDisturbanceEvent];
      },
      [] as CropEvents['soilOrCropDisturbanceEvents']
    ) ?? [];
  return { soilOrCropDisturbanceEvents };
};

export const translateCoverCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop<Input.NewCrop> & { CropName: CoverCrop['type'] };
}): {
  coverCrop: CoverCrop & {
    harvestEvents?: (CropManagementEvent & { yield: 0 })[];
  };
} => {
  const classification = 'annual cover';
  const {
    CropName: type,
    PlantingDate: plantingDate,
    NApplicationList: fertilizerEventList,
    OMADApplicationList: organicMatterEventList,
    IrrigationList: irrigationEventList,
    LimingEvent: limingEventList,
    GrazingList: grazingEventList,
    BurnEvent: burnEvent,
    TillageList: soilOrCropDisturbanceEventList,
  } = cropEvent;
  const { fertilizerEvents } = translateFertilizerEvents({
    fertilizerEventList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList,
  });
  const { limingEvents } = translateLimingEvents({ limingEventList });
  const { grazingEvents } = translateGrazingEvents({ grazingEventList });
  const { burningEvent } = translateBurningEvent({ burnEvent });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList,
  });
  return {
    coverCrop: {
      name: null,
      plantingDate,
      type,
      classification,
      fertilizerEvents,
      organicMatterEvents,
      irrigationEvents,
      limingEvents,
      grazingEvents,
      burningEvent,
      soilOrCropDisturbanceEvents,
      ...(cropEvent.HarvestList?.HarvestEvent?.[0] && {
        harvestEvents: cropEvent.HarvestList?.HarvestEvent?.[0]
          ? [
              translateCropHarvestEvent({
                event: {
                  ...cropEvent.HarvestList?.HarvestEvent[0],
                  // todo throw if more than one harvest event, extract to own fn
                  /**
                   * This is the flag that tells daycent/ggit that the crop was terminated.
                   * cover crops are not harvested. However, in the legacy sheet we used harvest
                   * events with a yield of 0 to signal the end of life for a crop.
                   */
                  yield: 0,
                },
              }).annualCropHarvestEvent as CropManagementEvent & { yield: 0 },
            ]
          : null,
      }),
    },
  };
};

export const translateOrchardOrVineyardCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop<Input.NewCrop> & {
    CropName: OrchardOrVineyardCrop['type'];
  };
}): {
  orchardOrVineyard: OrchardOrVineyardCrop;
} => {
  const classification = 'vineyard';
  const {
    CropName: type,
    PlantingDate: plantingDate,
    NApplicationList: fertilizerEventList,
    OMADApplicationList: organicMatterEventList,
    IrrigationList: irrigationEventList,
    LimingEvent: limingEventList,
    GrazingList: grazingEventList,
    HarvestList: harvestEventList,
    BurnEvent: burnEvent,
    TillageList: soilOrCropDisturbanceEventList,
    Prune: prune,
    Renew: renewOrClear,
  } = cropEvent;
  const { fertilizerEvents } = translateFertilizerEvents({
    fertilizerEventList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList,
  });
  const { limingEvents } = translateLimingEvents({ limingEventList });
  const { grazingEvents } = translateGrazingEvents({ grazingEventList });
  const { burningEvent } = translateBurningEvent({ burnEvent });
  const { harvestEvents } = translateCropHarvestEvents({ harvestEventList });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList,
  });
  return {
    orchardOrVineyard: {
      name: null,
      plantingDate,
      type,
      classification,
      fertilizerEvents,
      organicMatterEvents,
      irrigationEvents,
      limingEvents,
      grazingEvents,
      burningEvent,
      harvestEvents,
      soilOrCropDisturbanceEvents,
      prune,
      renewOrClear,
    },
  };
};

export const translateAnnualCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop<Input.NewCrop> & { CropName: AnnualCrop['type'] };
}): {
  annualCrop: AnnualCrop;
} => {
  const classification = 'annual crop';
  const {
    CropName: type,
    PlantingDate: plantingDate,
    NApplicationList: fertilizerEventList,
    OMADApplicationList: organicMatterEventList,
    IrrigationList: irrigationEventList,
    LimingEvent: limingEventList,
    GrazingList: grazingEventList,
    HarvestList: harvestEventList,
    BurnEvent: burnEvent,
    TillageList: soilOrCropDisturbanceEventList,
  } = cropEvent;
  const { fertilizerEvents } = translateFertilizerEvents({
    fertilizerEventList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList,
  });
  const { limingEvents } = translateLimingEvents({ limingEventList });
  const { grazingEvents } = translateGrazingEvents({ grazingEventList });
  const { burningEvent } = translateBurningEvent({ burnEvent });
  const { harvestEvents } = translateCropHarvestEvents({ harvestEventList });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList,
  });
  return {
    annualCrop: {
      name: null,
      plantingDate,
      type,
      classification,
      fertilizerEvents,
      organicMatterEvents,
      irrigationEvents,
      limingEvents,
      grazingEvents,
      burningEvent,
      harvestEvents,
      soilOrCropDisturbanceEvents,
    },
  };
};

export const translatePerennialCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop & { CropName: PerennialCrop['type'] };
}): {
  perennialCrop: PerennialCrop;
} => {
  const classification = 'perennial';
  const {
    CropName: type,
    NApplicationList: fertilizerEventList,
    OMADApplicationList: organicMatterEventList,
    IrrigationList: irrigationEventList,
    LimingEvent: limingEventList,
    GrazingList: grazingEventList,
    HarvestList: harvestEventList,
    BurnEvent: burnEvent,
    TillageList: soilOrCropDisturbanceEventList,
  } = cropEvent;
  const { fertilizerEvents } = translateFertilizerEvents({
    fertilizerEventList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList,
  });
  const { limingEvents } = translateLimingEvents({ limingEventList });
  const { grazingEvents } = translateGrazingEvents({ grazingEventList });
  const { burningEvent } = translateBurningEvent({ burnEvent });
  const { harvestEvents } = translateCropHarvestEvents({ harvestEventList });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList,
  });
  return {
    perennialCrop: {
      name: null,
      ...('PlantingDate' in cropEvent && {
        plantingDate: cropEvent.PlantingDate,
      }),
      type,
      classification,
      fertilizerEvents,
      organicMatterEvents,
      irrigationEvents,
      limingEvents,
      grazingEvents,
      burningEvent,
      harvestEvents,
      soilOrCropDisturbanceEvents,
    },
  };
};

export const translateCropEvent = ({
  cropEvent,
}: {
  cropEvent: Input.Crop;
}): { crop: CropYear['crops'][number] } => {
  let crop: CropYear['crops'][number];
  if (isAnnualCrop(cropEvent)) {
    ({ annualCrop: crop } = translateAnnualCrop({
      cropEvent,
    }));
  } else if (isCoverCrop(cropEvent)) {
    ({ coverCrop: crop } = translateCoverCrop({
      cropEvent,
    }));
  } else if (isOrchardOrVineyardCrop(cropEvent)) {
    ({ orchardOrVineyard: crop } = translateOrchardOrVineyardCrop({
      cropEvent,
    }));
  } else if (isPerennialCrop(cropEvent)) {
    ({ perennialCrop: crop } = translatePerennialCrop({
      cropEvent,
    }));
  } else {
    throw new Error(`Unknown crop event: ${JSON.stringify(cropEvent)}`);
  }
  return { crop };
};

export const extractCrops = ({
  cropList,
}: {
  cropList: Input.Crop[];
}): { crops: CropYear['crops'] } => {
  const crops: CropYear['crops'] = cropList.reduce(
    (cropEventList, cropEvent) => {
      const { crop } = translateCropEvent({ cropEvent });
      return [
        ...(cropEventList as
          | [CropYear['crops'][0]]
          | [CropYear['crops'][0], CropYear['crops'][1]]),
        crop,
      ];
    },
    ([] as unknown) as CropYear['crops']
  );
  return { crops };
};

export const extractCropYears = ({
  currentCropScenario,
  futureCropScenario,
}: {
  currentCropScenario: Input.CropScenario;
  futureCropScenario: Input.CropScenario;
}): { cropYears: Field['cropYears'] } => {
  const currentCropYears = currentCropScenario.CropYear.reduce(
    (
      cropYears,
      {
        '@Year': plantingYear,
        Crop: cropList,
      }: { '@Year': Input.CropYear['@Year']; Crop: Input.Crop[] }
    ) => {
      const { crops } = extractCrops({ cropList });
      return [...cropYears, { plantingYear, crops }];
    },
    [] as CropYear[]
  );
  const futureCropYears = futureCropScenario.CropYear.reduce(
    (
      cropYears,
      {
        '@Year': plantingYear,
        Crop: cropList,
      }: { '@Year': Input.CropYear['@Year']; Crop: Input.Crop[] }
    ) => {
      const { crops } = extractCrops({ cropList });
      return [...cropYears, { plantingYear, crops }];
    },
    [] as CropYear[]
  );
  return {
    cropYears: [...currentCropYears, ...futureCropYears],
  };
};

export const extractCroplandsAndScenarios = ({
  croplands,
}: {
  croplands: Input.Cropland[];
}): {
  metadata: Input.Name;
  croplands: Input.Cropland[];
  cropland: Input.Cropland;
  cropScenarios: Input.CropScenario[];
} => {
  const cropland = croplands[0];
  const { CropScenario: cropScenarios, '@Name': metadata } = cropland;
  return {
    metadata,
    croplands,
    cropland,
    cropScenarios,
  };
};

export const shiftCropsTaggedAsContinueFromPreviousYear = ({
  unadjustedCropScenarios,
}: {
  unadjustedCropScenarios: Input.CropScenario[];
}): { cropScenarios: Input.CropScenario[] } => {
  const current = {
    scenarios: unadjustedCropScenarios[0],
    length: unadjustedCropScenarios[0].CropYear.length,
  };
  const future = {
    scenarios: unadjustedCropScenarios[1],
    length: unadjustedCropScenarios[1].CropYear.length,
  };
  const cropYears: Input.CropYear[] = [
    ...current.scenarios.CropYear,
    ...future.scenarios.CropYear,
  ];
  cropYears.forEach((cropYear, i) => {
    cropYear.Crop.forEach((crop: Input.Crop) => {
      if (crop.ContinueFromPreviousYear === 'y') {
        cropYears
          .slice(0, i)
          .reverse()
          .some((lookupCropYear, j) => {
            let adjusted = false;
            lookupCropYear.Crop.forEach((lookupCrop, k) => {
              if (
                lookupCrop.ContinueFromPreviousYear === 'n' &&
                lookupCrop.CropName === crop.CropName
              ) {
                const indexYearToInsertInto = i - (j + 1);
                const indexCropToInsertInto = k;
                const cropToAppendTo =
                  cropYears[indexYearToInsertInto].Crop[indexCropToInsertInto];
                const harvestListToAppendTo =
                  cropToAppendTo.HarvestList?.HarvestEvent ?? [];
                const appendedHarvestList = [
                  ...harvestListToAppendTo,
                  ...(crop.HarvestList?.HarvestEvent ?? []),
                ];
                const grazingListToAppendTo =
                  cropToAppendTo.GrazingList?.GrazingEvent ?? [];
                const appendedGrazingList = [
                  ...grazingListToAppendTo,
                  ...(crop.GrazingList?.GrazingEvent ?? []),
                ];
                const omadListToAppendTo =
                  cropToAppendTo.OMADApplicationList?.OMADApplicationEvent ??
                  [];
                const appendedOmadList = [
                  ...omadListToAppendTo,
                  ...(crop.OMADApplicationList?.OMADApplicationEvent ?? []),
                ];
                const fertilizerListToAppendTo =
                  cropToAppendTo.NApplicationList?.NApplicationEvent ?? [];
                const appendedFertilizerList = [
                  ...fertilizerListToAppendTo,
                  ...(crop.NApplicationList?.NApplicationEvent ?? []),
                ];
                const tillageListToAppendTo =
                  cropToAppendTo.TillageList?.TillageEvent ?? [];
                const appendedTillageList = [
                  ...tillageListToAppendTo,
                  ...(crop.TillageList?.TillageEvent ?? []),
                ];
                const irrigationListToAppendTo =
                  cropToAppendTo.IrrigationList?.IrrigationEvent ?? [];
                const appendedIrrigationList = [
                  ...irrigationListToAppendTo,
                  ...(crop.IrrigationList?.IrrigationEvent ?? []),
                ];
                cropYears[indexYearToInsertInto].Crop[indexCropToInsertInto] = {
                  ...cropToAppendTo,
                  ...(appendedOmadList.length && {
                    OMADApplicationList: {
                      OMADApplicationEvent: appendedOmadList,
                    },
                  }),
                  ...(appendedFertilizerList.length && {
                    NApplicationList: {
                      NApplicationEvent: appendedFertilizerList,
                    },
                  }),
                  ...(appendedTillageList.length && {
                    TillageList: { TillageEvent: appendedTillageList },
                  }),
                  ...(appendedIrrigationList.length && {
                    IrrigationList: {
                      IrrigationEvent: appendedIrrigationList,
                    },
                  }),
                  ...(appendedHarvestList.length && {
                    HarvestList: { HarvestEvent: appendedHarvestList },
                  }),
                  ...(appendedGrazingList.length && {
                    GrazingList: { GrazingEvent: appendedGrazingList },
                  }),
                };
                cropYears[i].Crop.splice(indexCropToInsertInto, 1);
                adjusted = true;
              }
            });
            return adjusted;
          });
      }
    });
  });
  return {
    cropScenarios: [
      {
        '@Name': 'Current',
        CropYear: cropYears
          .slice(0, current.scenarios.CropYear.length)
          .filter(({ '@Year': year }) => year),
      },
      {
        '@Name': 'Future',
        CropYear: cropYears
          .slice(current.scenarios.CropYear.length)
          .filter(({ '@Year': year }) => year),
      },
    ],
  };
};

export const convertFromGgitToProject = ({
  ggitInputData,
}: {
  ggitInputData: Input.InputData;
}): Project => {
  const {
    croplands,
    cropland,
    cropScenarios: unadjustedCropScenarios,
    metadata,
  } = extractCroplandsAndScenarios({
    croplands: ggitInputData.Cropland,
  });
  const { geojson, acres } = extractGeometryData({
    croplands,
  });
  const { fieldName } = extractFieldName({
    metadata,
  });
  const historicLandManagement = buildHistoricLandManagement(cropland);
  const { cropScenarios } = shiftCropsTaggedAsContinueFromPreviousYear({
    unadjustedCropScenarios,
  });
  const {
    currentCropScenario,
    futureCropScenario,
  } = separateCurrentAndFutureScenarios({
    cropScenarios,
  });
  const { regenerativeStartYear } = extractRegenerativeSwitchYear({
    futureCropScenario,
  });
  const { cropYears } = extractCropYears({
    currentCropScenario,
    futureCropScenario,
  });
  const projectData: Project = {
    version: '3.0.0',
    fields: [
      {
        geojson,
        acres,
        fieldName,
        cropYears,
        historicLandManagement,
        regenerativeStartYear,
      },
    ],
  };
  return projectData;
};
