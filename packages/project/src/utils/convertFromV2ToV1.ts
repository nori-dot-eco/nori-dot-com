/* eslint-disable jsdoc/require-jsdoc */
import type { GeoJSON } from 'geojson';

export interface V2Data {
  fields: V2Field[];
  energyUse: any[];
}

interface V2Field {
  fieldName: string;
  cropYears: V2CropYear[];
  area: number;
  areaUnit: string;
  geometry: GeoJSON;
  clus: Clus[];
  srid: string;
}

interface Clus {
  cluID?: any;
}

interface V2CropYear {
  plantingYear: number;
  crops: V2Crop[];
}

interface V2Crop {
  cropName?: string;
  cropType?: string;
  continueFromPreviousYear?: string;
  datePlanted?: string;
  cropNumber?: number;
  harvestOrKillEvents?: V2HarvestOrKillEvent[];
  tillageEvents?: V2TillageEvent[];
  fertilizerEvents?: V2FertilizerEvent[];
  organicMatterEvents?: V2OrganicMatterEvent[];
  irrigationEvents?: any[];
  limingEvents?: V2LimingEvent[];
  burningEvents?: any[];
  type?: string;
  classification?: string;
  plantingDate?: string;
}

interface V2LimingEvent {
  date: string;
  productName: string;
  tonsPerAcre: number;
}

interface V2OrganicMatterEvent {
  date: string;
  percentNitrogen: number;
  amountPerAcre: number;
  carbonNitrogenRatio?: any;
  percentMoisture?: any;
  productName?: string;
}

interface V2FertilizerEvent {
  date: string;
  productName: string;
  lbsOfNPerAcre: number;
}

interface V2TillageEvent {
  date: string;
  method: string;
}

interface V1HarvestOrKillEvent {
  date: string;
  boundaryYield: number;
  yieldNumeratorUnit: string;
  yieldDenominatorUnit: string;
  grainFruitTuber: string;
  residueRemoved: number;
}

interface V2HarvestOrKillEvent {
  date: string;
  yield: number;
  yieldNumeratorUnit: string;
  yieldDenominatorUnit: string;
  grainFruitTuber: string;
  residueRemoved: number;
}

interface V1Data {
  projects: V1Project[];
  energyUse: any[];
}

interface V1Project {
  fieldSets: V1FieldSet[];
}

interface V1FieldSet {
  fieldSetName: string;
  cropYears: V1CropYear[];
  area: number;
  areaUnit: string;
  geometry: GeoJSON;
  clus: V1Clus[];
  srid: string;
}

interface V1Clus {
  cluID?: any;
}

interface V1CropYear {
  cropYear: number;
  crops: V1Crop[];
}

interface V1TillageEvent {
  date: string;
  type: string;
}

interface V1OrganicMatterEvent {
  date: string;
  productName: string;
  percentN: number;
  amountPerAcre: number;
  amountUnit: string;
}

interface V1Crop {
  cropName: string;
  cropType: string;
  continueFromPreviousYear: string;
  version: number;
  datePlanted: string;
  cropNumber: number;
  harvestOrKillEvents: V1HarvestOrKillEvent[];
  tillageEvents: V1TillageEvent[];
  fertilizerEvents: V1FertilizerEvent[];
  organicMatterEvents: V1OrganicMatterEvent[];
  irrigationEvents: any[];
  limingEvents: any[];
  burningEvents: any[];
}

interface V1FertilizerEvent {
  date: string;
  productName: string;
  lbsOfN: number;
}

export const convertFromV2ToV1 = ({ v2Data }: { v2Data: V2Data }): V1Data => {
  const { fields: fieldSets } = v2Data;
  const v1Fields =
    fieldSets?.map((field) => {
      const v1Field: V1FieldSet = {
        fieldSetName: field.fieldName,
        area: field.area,
        areaUnit: field.areaUnit,
        geometry: field.geometry,
        clus: field.clus,
        srid: field.srid,
        cropYears: field.cropYears.map((cropYear) => {
          const v1VCropYear: V1CropYear = {
            cropYear: cropYear.plantingYear,
            crops:
              cropYear.crops
                ?.map((crop) => {
                  const v1Crop: V1Crop = crop.cropName
                    ? {
                        cropName: crop.cropName,
                        cropType: crop.cropType,
                        continueFromPreviousYear: crop.continueFromPreviousYear,
                        version: 2,
                        datePlanted: crop.datePlanted,
                        cropNumber: crop.cropNumber,
                        harvestOrKillEvents:
                          crop.harvestOrKillEvents?.map(
                            (harvestOrKillEvent) => {
                              const v1HarvestOrKillEvent: V1HarvestOrKillEvent = {
                                date: harvestOrKillEvent.date,
                                boundaryYield: harvestOrKillEvent.yield,
                                yieldNumeratorUnit:
                                  harvestOrKillEvent.yieldNumeratorUnit,
                                yieldDenominatorUnit:
                                  harvestOrKillEvent.yieldDenominatorUnit,
                                grainFruitTuber:
                                  harvestOrKillEvent.grainFruitTuber,
                                residueRemoved:
                                  harvestOrKillEvent.residueRemoved,
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
                            };
                            return v1FertilizerEvent;
                          }) ?? [],
                        organicMatterEvents:
                          crop.organicMatterEvents?.map(
                            (organicMatterEvent) => {
                              const v1OrganicMatterEvent: V1OrganicMatterEvent = {
                                date: organicMatterEvent.date,
                                productName:
                                  organicMatterEvent.productName ??
                                  `OMAD product ${
                                    Math.random() *
                                    Math.floor(Math.random() * 10000000)
                                  }`,
                                percentN: organicMatterEvent.percentNitrogen,
                                amountPerAcre: organicMatterEvent.amountPerAcre,
                                amountUnit: '1000gal',
                              };
                              return v1OrganicMatterEvent;
                            }
                          ) ?? [],
                        irrigationEvents: crop.irrigationEvents ?? [],
                        limingEvents: crop.limingEvents ?? [],
                        burningEvents: crop.burningEvents ?? [],
                      }
                    : null;
                  return v1Crop;
                })
                .filter((c) => c) ?? [],
          };
          return v1VCropYear;
        }),
      };
      return v1Field;
    }) ?? [];
  const v1Data: V1Data = {
    projects: [{ fieldSets: v1Fields }],
    energyUse: v2Data.energyUse,
  };
  return v1Data;
};
