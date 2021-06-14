/* eslint-disable jsdoc/require-example, jsdoc/require-jsdoc */
import type {
  AnnualCrop,
  CoverCrop,
  OrchardOrVineyardCrop,
  PerennialCrop,
} from '..';
import type {
  V1Crop,
  V1CropYear,
  V1Data,
  V1FertilizerEvent,
  V1FieldSet,
  V1HarvestOrKillEvent,
  V1IrrigationEvent,
  V1LimingEvent,
  V1OrganicMatterEvent,
  V1TillageEvent,
} from '../legacy-specifications';
import type {
  HistoricCRPLandManagement,
  HistoricNonCRPLandManagement,
  Project,
  AnnualCropHarvestEvent,
} from '../specification';

export const isOrchardOrVineyardCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is OrchardOrVineyardCrop => {
  return (crop as OrchardOrVineyardCrop).prune !== undefined;
};

export const isCoverCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is CoverCrop => {
  return (crop as CoverCrop).classification === 'annual cover';
};

export const isHistoricCRPLandManagement = (
  historicLandManagement:
    | HistoricNonCRPLandManagement
    | HistoricCRPLandManagement
): historicLandManagement is HistoricCRPLandManagement => {
  return (historicLandManagement as HistoricCRPLandManagement).crp === 'yes';
};

export const isHistoricNonCRPLandManagement = (
  historicLandManagement:
    | HistoricNonCRPLandManagement
    | HistoricCRPLandManagement
): historicLandManagement is HistoricNonCRPLandManagement => {
  return (historicLandManagement as HistoricNonCRPLandManagement).crp === 'no';
};

export const convertFromV3ToV1 = ({
  v3Data,
}: {
  v3Data: Project;
}): { v1Data: V1Data } => {
  const v1Data: V1Data = {
    projects: [
      {
        fieldSets:
          v3Data.fields?.map((field): V1FieldSet => {
            return {
              area: field.acres,
              fieldSetName: field.fieldName,
              geometry: field.geojson,
              cropYears:
                field.cropYears?.map((cropYear): V1CropYear => {
                  return {
                    cropYear: cropYear.plantingYear,
                    crops: cropYear.crops
                      .sort(
                        (a, b) =>
                          new Date(a.plantingDate).getTime() -
                          new Date(b.plantingDate).getTime()
                      )
                      .map((crop, i): V1Crop => {
                        return {
                          version: 2,
                          cropName: crop.name || crop.type,
                          type: crop.classification,
                          cropNumber: (i + 1) as V1Crop['cropNumber'],
                          classification: crop.type,
                          datePlanted: crop.plantingDate,
                          fertilizerEvents: (
                            crop.fertilizerEvents?.map(
                              (fertilizerEvent): V1FertilizerEvent => {
                                return {
                                  date: fertilizerEvent.date,
                                  productName:
                                    fertilizerEvent.name ||
                                    fertilizerEvent.type,
                                  lbsOfN: fertilizerEvent.lbsOfNPerAcre,
                                  area: field.acres,
                                  quantityUnit: 'lbs/acre',
                                };
                              }
                            ) ?? []
                          )
                            .sort(
                              (a, b) =>
                                new Date(a.date).getTime() -
                                new Date(b.date).getTime()
                            )
                            .filter(
                              (f) =>
                                Number(f.date.split('/').slice(-1)) ===
                                cropYear.plantingYear // todo v3 to v1 multi year events are not supported for fertilizer events
                            ),
                          harvestOrKillEvents: (
                            (crop as AnnualCrop).harvestEvents?.map(
                              (
                                harvestOrKillEvent: AnnualCropHarvestEvent
                              ): V1HarvestOrKillEvent => {
                                if (harvestOrKillEvent.yieldUnit !== 'bu/ac') {
                                  throw new Error(
                                    'Only bu/ac is supported as a yield unit'
                                  );
                                }
                                return {
                                  date: harvestOrKillEvent.date,
                                  boundaryYield: harvestOrKillEvent.yield,
                                  yieldNumeratorUnit: 'bu',
                                  yieldDenominatorUnit: 'ac',
                                };
                              }
                            ) ?? []
                          ).sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime()
                          ),
                          irrigationEvents:
                            crop.irrigationEvents?.map(
                              (irrigationEvent): V1IrrigationEvent => {
                                return {
                                  date: irrigationEvent.date,
                                  volume: irrigationEvent.volume,
                                  startDate: undefined,
                                  endDate: undefined,
                                  frequency: undefined,
                                  depth: undefined,
                                  // eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
                                  depth_units: undefined,
                                };
                              }
                            ) ?? [],
                          limingEvents:
                            crop.limingEvents?.map(
                              (limingEvent): V1LimingEvent => {
                                return {
                                  date: limingEvent.date,
                                  productName: limingEvent.type,
                                  tonsPerAcre: limingEvent.tonsPerAcre,
                                  areaUnit: 'ac',
                                  area: field.acres,
                                };
                              }
                            ) ?? [],
                          organicMatterEvents: (
                            crop.organicMatterEvents?.map(
                              (organicMatterEvent): V1OrganicMatterEvent => {
                                return {
                                  date: organicMatterEvent.date,
                                  productName:
                                    organicMatterEvent.name ??
                                    `OMAD product ${
                                      Math.random() *
                                      Math.floor(Math.random() * 10000000)
                                    }`,
                                  percentN: organicMatterEvent.percentNitrogen,
                                  tonsPerAcre: organicMatterEvent.amountPerAcre,
                                  carbonToNitrogenRatio:
                                    organicMatterEvent.carbonNitrogenRatio,
                                  percentMoisture:
                                    organicMatterEvent.percentMoisture,
                                  quantityUnit: '1000gal',
                                };
                              }
                            ) ?? []
                          ).sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime()
                          ),
                          tillageEvents: (
                            crop.soilOrCropDisturbanceEvents?.map(
                              (tillageEvent): V1TillageEvent => {
                                return {
                                  classification:
                                    tillageEvent.type === 'winter killed'
                                      ? 'winter kill'
                                      : // todo:
                                        (tillageEvent.type as any),
                                  type: tillageEvent.name || tillageEvent.type,
                                  date: tillageEvent.date,
                                };
                              }
                            ) ?? []
                          ).sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime()
                          ),
                          burningEvents: crop.burningEvent?.type
                            ? [{ type: crop.burningEvent.type }]
                            : [],
                          ...(isOrchardOrVineyardCrop(crop) && {
                            prune: crop.prune,
                          }),
                          ...(isOrchardOrVineyardCrop(crop) && {
                            renewOrClear: crop.renewOrClear,
                          }),
                        };
                      }),
                  };
                }) ?? [],
            };
          }) ?? [],
      },
    ],
  };
  return { v1Data };
};
