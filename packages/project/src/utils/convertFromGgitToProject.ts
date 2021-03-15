/* eslint-disable jsdoc/require-example, jsdoc/require-jsdoc */

import type { Input } from '@nori-dot-com/ggit';
import { add } from '@nori-dot-com/math';
import * as wicket from 'wicket';
import { featureCollection, feature } from '@turf/helpers';
import type { FeatureCollection, Polygon } from 'geojson';

import type {
  Project,
  Field,
  HistoricNonCRPLandManagement,
  HistoricCRPLandManagement,
} from '../index';
import type {
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
} from '../specification';
import {
  annualCropTypes,
  slurryOmadTypes,
  solidOmadTypes,
  coverCropTypes,
} from '../specification';

interface Translations {
  historicNonCrpLandManagement: {
    preYear1980: Record<
      Input.Pre1980,
      Field['historicLandManagement']['preYear1980']
    >;
  };
  burnEvents: {
    type: Partial<Record<Partial<Input.BurnTime>, BurningEvent['type']>>;
  };
  soilOrCropDisturbanceEvents: {
    type: Partial<
      Record<Partial<Input.TillageType>, SoilOrCropDisturbanceEvent['type']>
    >;
  };
}

const TRANSLATIONS: Translations = {
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
// todo type guard everything

const isSlurryOrganicMatterEvent = (
  event: Input.OMADApplicationEvent
): event is Input.OMADApplicationEvent & {
  OMADType: SlurryOrganicMatterEvent['type'];
} => {
  return slurryOmadTypes.includes(
    event.OMADType as SlurryOrganicMatterEvent['type']
  );
};

const isSolidOrganicMatterEvent = (
  event: Input.OMADApplicationEvent
): event is Input.OMADApplicationEvent & {
  OMADType: SolidOrganicMatterEvent['type'];
} => {
  return solidOmadTypes.includes(
    event.OMADType as SolidOrganicMatterEvent['type']
  );
};

const isAnnualCrop = (
  cropEvent: Input.Crop
): cropEvent is Input.Crop & { CropName: AnnualCrop['type'] } => {
  return annualCropTypes.includes(cropEvent.CropName as AnnualCrop['type']);
};

const isCoverCrop = (
  cropEvent: Input.Crop
): cropEvent is Input.Crop & { CropName: CoverCrop['type'] } => {
  return coverCropTypes.includes(cropEvent.CropName as CoverCrop['type']);
};

const extractGeometryData = ({
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

const extractFieldName = ({
  metadata,
}: {
  metadata: Input.Name;
}): { fieldName: Field['fieldName'] } => {
  const fieldName = metadata.split('|')[1];
  return { fieldName };
};

const buildHistoricCrpLandManagement = (): HistoricCRPLandManagement => {
  //  {
  //   crp: 'yes',
  //   crpType: '100% grass',
  //   crpStartYear: 1980,
  //   crpEndYear: 2000,
  //   preCRPManagement: 'irrigated: annual crops in rotation',
  //   preCRPTillage: 'intensive tillage',
  //   postCRPManagement: 'non-irrigated: livestock grazing',
  //   postCRPTillage: 'intensive tillage',
  //   preYear1980: 'irrigation',
  // };
  throw new Error('TODO'); // todo
};

const buildHistoricNonCrpLandManagement = ({
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

const buildHistoricLandManagement = (
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

const separateCurrentAndFutureScenarios = ({
  cropScenarios,
}: {
  cropScenarios: Input.CropScenario[];
}): {
  futureCropScenario: Input.CropScenario;
  currentCropScenario: Input.CropScenario;
} => {
  const futureCropScenario = cropScenarios.find((s) => s['@Name'] === 'future');
  const currentCropScenario = cropScenarios.find(
    (s) => s['@Name'] === 'current'
  );
  return {
    futureCropScenario,
    currentCropScenario,
  };
};

const extractRegenerativeSwitchYear = ({
  futureCropScenario,
}: {
  futureCropScenario: Input.CropScenario;
}): { regenerativeStartYear: Field['regenerativeStartYear'] } => {
  const regenerativeStartYear = futureCropScenario.CropYear[0]['@Year']; // todo sort just in case
  return { regenerativeStartYear };
};

const translateFertilizerEvent = ({
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
      name: null, // todo need to figure out out to pass through in input files
    },
  };
};

const translateFertilizerEvents = ({
  fertilizerEventList,
}: {
  fertilizerEventList: Input.NApplicationList;
}): { fertilizerEvents: CropEvents['fertilizerEvents'] } => {
  const fertilizerEvents =
    fertilizerEventList?.NApplicationEvent?.reduce?.((eventList, event) => {
      const { fertilizerEvent } = translateFertilizerEvent({ event });
      return [...eventList, fertilizerEvent];
    }, [] as FertilizerEvent[]) ?? [];
  return { fertilizerEvents };
};

const translateOrganicMatterEvent = ({
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
      percentMoisture: null, // todo need to figure out out to pass through in input files
      name: null, // todo need to figure out out to pass through in input files
    },
  };
};

const translateOrganicMatterEvents = ({
  organicMatterEventList,
}: {
  organicMatterEventList: Input.OMADApplicationList;
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

const translateIrrigationEvent = ({
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

const translateIrrigationEvents = ({
  irrigationEventList,
}: {
  irrigationEventList: Input.IrrigationList;
}): { irrigationEvents: CropEvents['irrigationEvents'] } => {
  const irrigationEvents =
    irrigationEventList?.IrrigationEvent?.reduce?.((eventList, event) => {
      const { irrigationEvent } = translateIrrigationEvent({ event });
      return [...eventList, irrigationEvent];
    }, [] as CropEvents['irrigationEvents']) ?? [];
  return { irrigationEvents };
};

const translateLimingEvents = ({
  limingEventList,
}: {
  limingEventList: Input.LimingEvent;
}): { limingEvents: CropEvents['limingEvents'] } => {
  // todo ability to capture multiple liming events
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

const translateBurningEvent = ({
  burnEvent,
}: {
  burnEvent: Input.BurnEvent;
}): { burningEvent: CropEvents['burningEvent'] } => {
  return {
    burningEvent:
      !burnEvent?.BurnTime || burnEvent?.BurnTime === 'no burning'
        ? null
        : { type: TRANSLATIONS.burnEvents.type[burnEvent.BurnTime] },
  };
};

const translateGrazingEvents = ({
  grazingEventList,
}: {
  grazingEventList: Input.GrazingList;
}): { grazingEvents: CropEvents['grazingEvents'] } => {
  // todo
  const grazingEvents =
    grazingEventList?.GrazingEvent?.reduce?.((eventList, event) => {
      return eventList;
    }, []) ?? null;
  return { grazingEvents };
};

const translateAnnualCropHarvestEvent = ({
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

const translateAnnualCropHarvestEvents = ({
  harvestEventList,
}: {
  harvestEventList: Input.HarvestList;
}): { harvestEvents: AnnualCropHarvestEvent[] } => {
  const harvestEvents =
    harvestEventList?.HarvestEvent?.reduce?.((eventList, event) => {
      const { annualCropHarvestEvent } = translateAnnualCropHarvestEvent({
        event,
      });
      return [...eventList, annualCropHarvestEvent];
    }, [] as AnnualCropHarvestEvent[]) ?? [];
  return { harvestEvents };
};

const translateSoilOrCropDisturbanceEvent = ({
  event,
}: {
  event: Input.TillageEvent;
}): {
  soilOrCropDisturbanceEvent: CropEvents['soilOrCropDisturbanceEvents'][number];
} => {
  const { TillageDate: date, TillageType: type } = event;
  return {
    soilOrCropDisturbanceEvent: {
      name: null, // todo need to figure out out to pass through in input files
      date,
      type:
        TRANSLATIONS.soilOrCropDisturbanceEvents.type[type] ||
        (type as SoilOrCropDisturbanceEvent['type']),
    },
  };
};

const translateSoilOrCropDisturbanceEvents = ({
  soilOrCropDisturbanceEventList,
}: {
  soilOrCropDisturbanceEventList: Input.TillageList;
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

const translateCoverCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop & { CropName: CoverCrop['type'] };
}): {
  coverCrop: CoverCrop;
} => {
  const classification = 'annual cover';
  const {
    CropName: type,
    PlantingDate: plantingDate, // '04/20/2020',
    NApplicationList: fertilizerEventList,
    OMADApplicationList: organicMatterEventList,
    IrrigationList: irrigationEventList,
    LimingEvent: limingEventList,
    GrazingList: grazingEventList,
    BurnEvent: burnEvent,
    TillageList: soilOrCropDisturbanceEventList,
  } = cropEvent;
  const { fertilizerEvents } = translateFertilizerEvents({
    fertilizerEventList: fertilizerEventList as Input.NApplicationList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList: organicMatterEventList as Input.OMADApplicationList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList: irrigationEventList as Input.IrrigationList,
  });
  const { limingEvents } = translateLimingEvents({
    limingEventList: limingEventList as Input.LimingEvent,
  });
  const { grazingEvents } = translateGrazingEvents({
    grazingEventList: grazingEventList as Input.GrazingList,
  });
  const { burningEvent } = translateBurningEvent({
    burnEvent: burnEvent as Input.BurnEvent,
  });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList: soilOrCropDisturbanceEventList as Input.TillageList,
  });
  return {
    coverCrop: {
      name: null, // todo need to figure out out to pass through in input files
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
    },
  };
};

const translateAnnualCrop = ({
  cropEvent,
}: {
  cropEvent: Input.Crop & { CropName: AnnualCrop['type'] };
}): {
  annualCrop: AnnualCrop;
} => {
  const classification = 'annual crop';
  const {
    CropName: type,
    PlantingDate: plantingDate, // '04/20/2020',
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
    fertilizerEventList: fertilizerEventList as Input.NApplicationList,
  });
  const { organicMatterEvents } = translateOrganicMatterEvents({
    organicMatterEventList: organicMatterEventList as Input.OMADApplicationList,
  });
  const { irrigationEvents } = translateIrrigationEvents({
    irrigationEventList: irrigationEventList as Input.IrrigationList,
  });
  const { limingEvents } = translateLimingEvents({
    limingEventList: limingEventList as Input.LimingEvent,
  });
  const { grazingEvents } = translateGrazingEvents({
    grazingEventList: grazingEventList as Input.GrazingList,
  });
  const { burningEvent } = translateBurningEvent({
    burnEvent: burnEvent as Input.BurnEvent,
  });
  const { harvestEvents } = translateAnnualCropHarvestEvents({
    harvestEventList: harvestEventList as Input.HarvestList,
  });
  const { soilOrCropDisturbanceEvents } = translateSoilOrCropDisturbanceEvents({
    soilOrCropDisturbanceEventList: soilOrCropDisturbanceEventList as Input.TillageList,
  });
  return {
    annualCrop: {
      name: null, // todo need to figure out out to pass through in input files
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

const translateCropEvent = ({
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
  } else {
    throw new Error('Unknown crop type');
  }
  // todo orchard/vineyard
  // todo perennial crop
  return { crop };
};

const extractCrops = ({
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

const extractCropYears = ({
  currentCropScenario,
  futureCropScenario,
}: {
  currentCropScenario: Input.CropScenario;
  futureCropScenario: Input.CropScenario;
}): { cropYears: Field['cropYears'] } => {
  const currentCropYears = currentCropScenario.CropYear.reduce(
    (cropYears, { '@Year': plantingYear, Crop: cropList }) => {
      const { crops } = extractCrops({ cropList });
      return [...cropYears, { plantingYear, crops }];
    },
    [] as CropYear[]
  );
  const futureCropYears = futureCropScenario.CropYear.reduce(
    (cropYears, { '@Year': plantingYear, Crop: cropList }) => {
      const { crops } = extractCrops({ cropList });
      return [...cropYears, { plantingYear, crops }];
    },
    [] as CropYear[]
  );
  return {
    cropYears: [...currentCropYears, ...futureCropYears],
  };
};

const extractCroplandsAndScenarios = ({
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
    cropYear.Crop.forEach((crop) => {
      if (crop.ContinueFromPreviousYear === 'y') {
        cropYears
          .slice(0, i)
          .reverse()
          .some((lookupCropYear, k) => {
            let adjusted = false;
            lookupCropYear.Crop.forEach((lookupCrop, l) => {
              if (
                lookupCrop.ContinueFromPreviousYear === 'n' &&
                lookupCrop.CropName === crop.CropName
              ) {
                const indexYearToInsertInto = i - (k + 1);
                const indexCropToInsertInto = l;
                const cropToAppendTo =
                  cropYears[indexYearToInsertInto].Crop[indexCropToInsertInto];
                const harvestListToAppendTo =
                  cropToAppendTo.HarvestList?.HarvestEvent ?? [];
                const appendedHarvestList = [
                  ...harvestListToAppendTo,
                  ...(crop.HarvestList?.HarvestEvent ?? []),
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
                  // GrazingList // todo
                  // Prune // todo
                  // Renew // todo
                  // BurnEvent // todo
                  // LimingEvent //todo
                };
                delete cropYears[i];
                adjusted = true;
              }
            });
            return adjusted;
          });
      }
    });
  });
  const cropScenarios: Input.CropScenario[] = [
    {
      '@Name': 'current',
      CropYear: cropYears.slice(0, current.scenarios.CropYear.length),
    },
    {
      '@Name': 'future',
      CropYear: cropYears.slice(current.scenarios.CropYear.length),
    },
  ];
  return {
    cropScenarios,
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
