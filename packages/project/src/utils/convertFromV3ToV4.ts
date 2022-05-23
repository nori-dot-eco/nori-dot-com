import { Project as ProjectV4, Field as FieldV4 } from '../v4-specification';
import { Project as ProjectV3, Field as FieldV3 } from '../v3-specification';
import * as V4 from '../v4-specification';
import * as V3 from '../v3-specification';

const yesNoToBool = (value: string): boolean => value?.toLowerCase() === 'yes';

const dateRegex = /^(\d\d)\/(\d\d)\/(\d\d\d\d)$/;
const parseV3Date = (value: string): Date => {
  const match = value.match(dateRegex);
  if (match) {
    return new Date(`${match[3]}-${match[1]}-${match[2]}`);
  }
  throw new Error(`Unable to parse date: ${value}`);
};
const msPerDay = 1000 * 3600 * 24;
const daysBetween = (date1: Date, date2: Date): number =>
  Math.round(Math.abs(date1.getTime() - date2.getTime()) / msPerDay);

const convertHistoricLandManagement = (
  v3Mgmt: V3.Field['historicLandManagement']
): V4.Field['historicLandManagement'] => {
  if (v3Mgmt.crp === 'yes') {
    return {
      ...v3Mgmt,
      crp: true,
    };
  } else {
    return {
      ...v3Mgmt,
      crp: false,
    };
  }
};

const convertV3CropToV4Crop = (
  v3Crop:
    | V3.AnnualCrop
    | V3.CoverCrop
    | V3.OrchardOrVineyardCrop
    | V3.PerennialCrop,
  year: number
):
  | V4.AnnualCrop
  | V4.CoverCrop
  | V4.OrchardOrVineyardCrop
  | V4.PerennialCrop => {
  let harvestEvents: V4.HarvestEvent[] = [];
  if (
    v3Crop.classification === 'annual crop' ||
    v3Crop.classification === 'perennial' ||
    v3Crop.classification === 'orchard' ||
    v3Crop.classification === 'vineyard'
  ) {
    harvestEvents = v3Crop.harvestEvents?.map((evt) => ({
      ...evt,
      date: parseV3Date(evt.date),
      grainFruitTuber: yesNoToBool(evt.grainFruitTuber),
    }));
  }

  let burningEvents: V4.BurningEvent[] = [];
  if (v3Crop.burningEvent) {
    burningEvents = [
      {
        date: new Date(`${year}-01-01`),
      },
    ];
  }

  let pruningEvents: V4.PruningEvent[] = [];
  if (
    (v3Crop.classification === 'orchard' ||
      v3Crop.classification === 'vineyard') &&
    v3Crop.prune === 'yes'
  ) {
    pruningEvents = [
      {
        date: new Date(`${year}-01-01`),
      },
    ];
  }

  let clearingAndRenewalEvents: V4.ClearingAndRenewalEvent[] = [];
  if (
    (v3Crop.classification === 'orchard' ||
      v3Crop.classification === 'vineyard') &&
    v3Crop.renewOrClear === 'yes'
  ) {
    clearingAndRenewalEvents = [
      {
        date: new Date(`${year}-01-01`),
        percentRenewed: 100,
      },
    ];
  }

  let events = {
    plantingEvents: [{ date: parseV3Date(v3Crop.plantingDate) }],
    soilOrCropDisturbanceEvents: v3Crop.soilOrCropDisturbanceEvents?.map(
      (evt) => ({
        ...evt,
        date: parseV3Date(evt.date),
      })
    ),
    fertilizerEvents: v3Crop.fertilizerEvents?.map((evt) => ({
      ...evt,
      date: parseV3Date(evt.date),
    })),
    organicMatterEvents: v3Crop.organicMatterEvents?.map(
      (evt): V4.SolidOrganicMatterEvent | V4.SlurryOrganicMatterEvent => {
        if (V3.solidOmadTypes.includes(evt.type as any)) {
          const solid = evt as V3.SolidOrganicMatterEvent;
          return {
            date: parseV3Date(solid.date),
            name: solid.name,
            type: solid.type,
            percentMoisture: solid.percentMoisture,
            percentNitrogen: solid.percentNitrogen,
            carbonNitrogenRatio: solid.carbonNitrogenRatio,
            tonsPerAcre: solid.amountPerAcre,
          };
        } else {
          const slurry = evt as V3.SlurryOrganicMatterEvent;
          return {
            date: parseV3Date(slurry.date),
            name: slurry.name,
            type: slurry.type,
            percentMoisture: slurry.percentMoisture,
            percentNitrogen: slurry.percentNitrogen,
            carbonNitrogenRatio: slurry.carbonNitrogenRatio,
            gallonsPerAcre: slurry.amountPerAcre,
          };
        }
      }
    ),
    irrigationEvents: v3Crop.irrigationEvents?.map((evt) => ({
      ...evt,
      date: parseV3Date(evt.date),
    })),
    limingEvents: v3Crop.limingEvents?.map((evt) => ({
      ...evt,
      date: parseV3Date(evt.date),
    })),
    grazingEvents: v3Crop.grazingEvents?.map((evt) => ({
      ...evt,
      date: parseV3Date(evt.startDate),
      daysGrazed: daysBetween(
        parseV3Date(evt.endDate),
        parseV3Date(evt.startDate)
      ),
      percentResidueRemoved: evt.utilization,
    })),
    harvestEvents,
    pruningEvents,
    clearingAndRenewalEvents,
    burningEvents,
  };
  switch (v3Crop.classification) {
    case 'annual crop':
      return {
        classification: 'annual crop',
        name: v3Crop.name,
        type: v3Crop.type,
        ...events,
      } as V4.AnnualCrop // TODO: translation function for updated crop types;
    case 'annual cover':
      return {
        classification: 'annual cover',
        name: v3Crop.name,
        type: v3Crop.type,
        ...events,
      } as V4.CoverCrop; // TODO: translation function for updated crop types
    case 'perennial':
      return {
        classification: 'perennial',
        name: v3Crop.name,
        type: v3Crop.type,
        ...events,
      } as V4.PerennialCrop; // TODO: translation function for updated crop types
    case 'vineyard':
    case 'orchard':
      return {
        classification: v3Crop.classification,
        name: v3Crop.name,
        type: v3Crop.type,
        ...events,
      } as V4.OrchardOrVineyardCrop; // TODO: translation function for updated crop types
  }
};

export const convertV3FieldToV4Field = (v3Field: FieldV3): FieldV4 => {
  return {
    ...v3Field,
    historicLandManagement: convertHistoricLandManagement(
      v3Field.historicLandManagement
    ),
    practiceChangesAdopted: {},
    cropYears: v3Field.cropYears.map((v3CropYear: V3.CropYear): V4.CropYear => {
      const crops = v3CropYear.crops.map(
        convertV3CropToV4Crop,
        v3CropYear.plantingYear
      );
      return {
        plantingYear: v3CropYear.plantingYear,
        crops: [crops[0], crops[1], crops[2]],
      };
    }),
  };
};

export const convertFromV3ToV4 = ({ v3 }: { v3: ProjectV3 }): ProjectV4 => {
  return {
    ...v3,
    version: '4.0.0',
    fields: v3.fields.map(convertV3FieldToV4Field),
  };
};
