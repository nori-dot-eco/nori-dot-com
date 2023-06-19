import moment = require('moment');

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
} from '../v3-specification';

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
                      .map((crop, index): V1Crop => {
                        let irrigationEvents: V1IrrigationEvent[] =
                          crop.irrigationEvents?.map(
                            (irrigationEvent): V1IrrigationEvent => {
                              return {
                                date: irrigationEvent.date,
                                volume: irrigationEvent.volume,
                              };
                            }
                          ) ?? [];
                        // If more than one event, attempt to detect a regular pattern
                        if (irrigationEvents.length > 1) {
                          const dates = crop.irrigationEvents.map(
                            (irrigationEvent) => {
                              return irrigationEvent.date;
                            }
                          );
                          const everyDateIntervalIsEqual = dates.every(
                            (e, index, array) => {
                              if (array[index + 1]) {
                                return (
                                  moment(array[index]).diff(
                                    array[index + 1]
                                  ) === moment(array[0]).diff(array[1])
                                );
                              }
                              return true;
                            }
                          );
                          if (everyDateIntervalIsEqual) {
                            const frequency = Math.abs(
                              moment(dates[0]).diff(dates[1], 'days')
                            );
                            const startDate = dates[0];
                            const endDate = dates.at(-1);
                            // Rebekah says volume doesn't matter - it's not incorporated into the SoilMetrics model
                            // We'll just use whatever the first value is for all.
                            const volume = crop.irrigationEvents[0].volume;
                            irrigationEvents = [
                              {
                                date: startDate,
                                startDate,
                                endDate,
                                frequency,
                                volume,
                              },
                            ];
                          }
                        }

                        return {
                          version: 2,
                          cropName: crop.name || crop.type,
                          type: crop.classification,
                          cropNumber: (index + 1) as V1Crop['cropNumber'],
                          classification: crop.type,
                          datePlanted: crop.plantingDate,
                          fertilizerEvents: (
                            crop.fertilizerEvents?.map(
                              (fertilizerEvent): V1FertilizerEvent => {
                                return {
                                  date: fertilizerEvent.date,
                                  classification: fertilizerEvent.type,
                                  productName:
                                    fertilizerEvent.name ||
                                    fertilizerEvent.type,
                                  lbsOfN: fertilizerEvent.lbsOfNPerAcre,
                                  area: field.acres,
                                  quantityUnit: 'lbs/acre',
                                };
                              }
                            ) ?? []
                          ).sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime()
                          ),
                          harvestOrKillEvents: (
                            (crop as AnnualCrop).harvestEvents?.map(
                              (
                                harvestOrKillEvent: AnnualCropHarvestEvent
                              ): V1HarvestOrKillEvent => {
                                if (
                                  harvestOrKillEvent.yieldUnit &&
                                  harvestOrKillEvent.yieldUnit !== 'bu/ac'
                                ) {
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
                          irrigationEvents,
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
                                  classification: organicMatterEvent.type,
                                  productName:
                                    organicMatterEvent.name ??
                                    `OMAD product ${
                                      Math.random() *
                                      Math.floor(Math.random() * 10_000_000)
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

export const isV3Data = (data: Project | V1Data): data is Project => {
  return 'version' in data && data.version === '3.0.0';
};
