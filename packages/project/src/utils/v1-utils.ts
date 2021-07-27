import * as moment from 'moment';

import type { V1CropYear, V1Crop, V1Data } from '../index';

import type { ErrorCollector } from './ErrorCollector';

// Max number of data rows for a given year in the spreadsheet
const MAX_SHEET_ROWS_PER_YEAR = 16;

export const sanitizeV1Data = ({
  project,
}: {
  project: V1Data;
}): { sanitizedProject: V1Data } => {
  const sanitizedProject = JSON.parse(JSON.stringify(project)); // https://stackoverflow.com/questions/48885194/typeerror-cannot-assign-to-read-only-property-x-of-object-object-react-j
  project?.projects?.forEach((p, i) =>
    p?.fieldSets?.forEach((f, j) =>
      f?.cropYears?.forEach((cy, k) => {
        sanitizedProject.projects[i].fieldSets[j].cropYears[k] = JSON.parse(
          JSON.stringify(cy, (key, value) => {
            return value?.toLowerCase?.() ?? (value || '');
          })
        ) as V1CropYear;
      })
    )
  );
  return { sanitizedProject };
};

const eventDateIsOutOfRange = (plantingDate: string, eventDate: string) => {
  const daysFromPlantingDate = Math.abs(
    moment(plantingDate).diff(moment(eventDate), 'days')
  );
  return daysFromPlantingDate > 365;
};

/**
 * @example
 * Examine the events for each crop and determine if any of them are beyond the acceptable date range (one year from planting date)
 */
const checkEventDates = (
  crop: V1Crop,
  fieldSetName: string,
  errorCollector: ErrorCollector
) => {
  crop.harvestOrKillEvents?.forEach((harvestEvent) => {
    if (eventDateIsOutOfRange(crop.datePlanted, harvestEvent.date)) {
      errorCollector.collectError(
        new Error(
          `Harvest event with date ${harvestEvent.date} is more than one year from planting date ${crop.datePlanted} for ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
  crop.tillageEvents?.forEach((tillageEvent) => {
    if (eventDateIsOutOfRange(crop.datePlanted, tillageEvent.date)) {
      errorCollector.collectError(
        new Error(
          `Tillage event with date ${tillageEvent.date} is more than one year from planting date ${crop.datePlanted} for ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
  crop.limingEvents?.forEach((limingEvent) => {
    if (eventDateIsOutOfRange(crop.datePlanted, limingEvent.date)) {
      errorCollector.collectError(
        new Error(
          `Liming event with date ${limingEvent.date} is more than one year from planting date ${crop.datePlanted} for ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
  crop.organicMatterEvents?.forEach((organicMatterEvent) => {
    if (eventDateIsOutOfRange(crop.datePlanted, organicMatterEvent.date)) {
      errorCollector.collectError(
        new Error(
          `Organic matter event with date ${organicMatterEvent.date} is more than one year from planting date ${crop.datePlanted} for ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
  crop.fertilizerEvents?.forEach((fertilizerEvent) => {
    if (eventDateIsOutOfRange(crop.datePlanted, fertilizerEvent.date)) {
      errorCollector.collectError(
        new Error(
          `Fertilizer event with date ${fertilizerEvent.date} is more than one year from planting date ${crop.datePlanted} for crop ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
  crop.irrigationEvents?.forEach((irrigationEvent) => {
    if (
      eventDateIsOutOfRange(
        crop.datePlanted,
        irrigationEvent.endDate ?? irrigationEvent.date
      )
    ) {
      errorCollector.collectError(
        new Error(
          `Irrigation event with date ${irrigationEvent.date} is more than one year from planting date ${crop.datePlanted} for crop ${crop.cropName} in field ${fieldSetName}.`
        )
      );
    }
  });
};

export const collectV1Errors = (
  sanitizedProject: V1Data,
  errorCollector: ErrorCollector
) => {
  sanitizedProject?.projects?.forEach((project) => {
    project?.fieldSets?.forEach((field) => {
      field?.cropYears?.forEach((cropYear) => {
        const totalRequiredIrrigationRows = 0;
        const reducer = (accumulator: number, crop: V1Crop): number => {
          if (crop?.irrigationEvents?.length > 0) {
            accumulator += crop.irrigationEvents.length;
          }
          return accumulator;
        };
        cropYear?.crops?.reduce(reducer, totalRequiredIrrigationRows);
        cropYear?.crops?.forEach((crop) =>
          checkEventDates(crop, field.fieldSetName, errorCollector)
        );
        if (totalRequiredIrrigationRows > MAX_SHEET_ROWS_PER_YEAR) {
          errorCollector.collectError(
            new Error(
              `${totalRequiredIrrigationRows} total irrigation events for cropYear ${cropYear.cropYear} exceed maximum of ${MAX_SHEET_ROWS_PER_YEAR} spreadsheet rows.`
            )
          );
        }
      });
    });
  });
};
