import type {
  V2Data,
  V1Data,
  V1FieldSet,
  V1CropYear,
  V1Crop,
  V1HarvestOrKillEvent,
  V1TillageEvent,
  V1FertilizerEvent,
  V1OrganicMatterEvent,
  V1LimingEvent,
} from '../index';

export const convertFromV2ToV1 = ({ v2Data }: { v2Data: V2Data }): V1Data => {
  const { fields: fieldSets } = v2Data;
  const v1Fields =
    fieldSets?.map((field) => {
      const v1Field: V1FieldSet = {
        fieldSetName: field.fieldName,
        area: field.area,
        geometry: field.geometry,
        clus: field.clus,
        srid: field.srid,
        cropYears: field.cropYears
          .map((cropYear) => {
            const v1VCropYear: V1CropYear = {
              cropYear: cropYear.plantingYear,
              crops:
                cropYear.crops
                  ?.map((crop) => {
                    const v1Crop: V1Crop = crop.cropName
                      ? {
                          cropName: crop.cropName,
                          version: 2,
                          datePlanted: crop.datePlanted,
                          cropNumber: crop.cropNumber,
                          harvestOrKillEvents:
                            crop.harvestOrKillEvents?.map(
                              (harvestOrKillEvent) => {
                                const v1HarvestOrKillEvent: V1HarvestOrKillEvent =
                                  {
                                    date: harvestOrKillEvent.date,
                                    boundaryYield: harvestOrKillEvent.yield,
                                    yieldNumeratorUnit:
                                      harvestOrKillEvent.yieldNumeratorUnit,
                                    yieldDenominatorUnit:
                                      harvestOrKillEvent.yieldDenominatorUnit,
                                  };
                                return v1HarvestOrKillEvent;
                              }
                            ) ?? [],
                          tillageEvents:
                            crop.tillageEvents?.map((tillageEvent) => {
                              const v1TillageEvent: V1TillageEvent = {
                                date: tillageEvent.date,
                                type: tillageEvent.method,
                              };
                              return v1TillageEvent;
                            }) ?? [],
                          fertilizerEvents:
                            crop.fertilizerEvents?.map((fertilizerEvent) => {
                              const v1FertilizerEvent: V1FertilizerEvent = {
                                date: fertilizerEvent.date,
                                productName: fertilizerEvent.productName,
                                lbsOfN: fertilizerEvent.lbsOfNPerAcre,
                                area: field.area,
                              };
                              return v1FertilizerEvent;
                            }) ?? [],
                          organicMatterEvents:
                            crop.organicMatterEvents?.map(
                              (organicMatterEvent) => {
                                const v1OrganicMatterEvent: V1OrganicMatterEvent =
                                  {
                                    date: organicMatterEvent.date,
                                    productName:
                                      organicMatterEvent.productName ??
                                      `OMAD product ${
                                        Math.random() *
                                        Math.floor(Math.random() * 10_000_000)
                                      }`,
                                    percentN:
                                      organicMatterEvent.percentNitrogen,
                                    tonsPerAcre:
                                      organicMatterEvent.amountPerAcre,
                                    carbonToNitrogenRatio:
                                      organicMatterEvent.carbonNitrogenRatio,
                                    percentMoisture:
                                      organicMatterEvent.percentMoisture,
                                    quantityUnit: '1000gal',
                                  };
                                return v1OrganicMatterEvent;
                              }
                            ) ?? [],
                          irrigationEvents: crop.irrigationEvents ?? [],
                          limingEvents:
                            (crop.limingEvents as V1LimingEvent[]) ?? [],
                          burningEvents: crop.burningEvents ?? [],
                        }
                      : null;
                    return v1Crop;
                  })
                  .filter(Boolean) ?? [],
            };
            return v1VCropYear;
          })
          .sort((a, b) => a.cropYear - b.cropYear),
      };
      return v1Field;
    }) ?? [];
  const v1Data: V1Data = {
    projects: [{ fieldSets: v1Fields }],
  };
  return v1Data;
};
