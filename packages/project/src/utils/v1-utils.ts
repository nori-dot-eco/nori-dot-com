import * as moment from 'moment';
import type { ErrorCollector } from '@nori-dot-com/errors/dist';

import type { V1CropYear, V1Crop, V1Data } from '../index';
import type {
  V1FertilizerEvent,
  V1TillageEvent,
} from '../legacy-specifications';

// Max number of data rows for a given year in the spreadsheet
const MAX_SHEET_ROWS_PER_YEAR = 16;

export const sanitizeV1Data = ({
  project,
}: {
  project: V1Data;
}): { sanitizedProject: V1Data } => {
  const sanitizedProject = JSON.parse(JSON.stringify(project)); // https://stackoverflow.com/questions/48885194/typeerror-cannot-assign-to-read-only-property-x-of-object-object-react-j
  if (project?.projects)
    for (const [index, p] of project?.projects.entries())
      if (p?.fieldSets)
        for (const [index_, f] of p?.fieldSets.entries())
          if (f?.cropYears)
            for (const [k, cy] of f?.cropYears.entries()) {
              sanitizedProject.projects[index].fieldSets[index_].cropYears[k] =
                JSON.parse(
                  JSON.stringify(cy, (key, value) => {
                    return value?.toLowerCase?.() ?? (value || '');
                  })
                ) as V1CropYear;
            }
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
  const filteredCrop = { ...crop };
  filteredCrop.harvestOrKillEvents = crop.harvestOrKillEvents?.filter(
    (event) => {
      const dateIsOutOfRange = eventDateIsOutOfRange(
        crop.datePlanted,
        event.date
      );
      if (dateIsOutOfRange) {
        errorCollector.collectKeyedError(
          'projectDataError:cropEventDateValidationRuleViolation',
          {
            field: fieldSetName,
            crop: crop.cropName,
            eventType: 'harvestEvent',
            eventDate: event.date,
            datePlanted: crop.datePlanted,
          }
        );
      }
      return !dateIsOutOfRange;
    }
  );
  filteredCrop.tillageEvents = crop.tillageEvents?.filter((event) => {
    const dateIsOutOfRange = eventDateIsOutOfRange(
      crop.datePlanted,
      event.date
    );
    if (dateIsOutOfRange) {
      errorCollector.collectKeyedError(
        'projectDataError:cropEventDateValidationRuleViolation',
        {
          field: fieldSetName,
          crop: crop.cropName,
          eventType: 'tillageEvent',
          eventDate: event.date,
          datePlanted: crop.datePlanted,
        }
      );
    }
    return !dateIsOutOfRange;
  });
  filteredCrop.limingEvents = crop.limingEvents?.filter((event) => {
    const dateIsOutOfRange = eventDateIsOutOfRange(
      crop.datePlanted,
      event.date
    );
    if (dateIsOutOfRange) {
      errorCollector.collectKeyedError(
        'projectDataError:cropEventDateValidationRuleViolation',
        {
          field: fieldSetName,
          crop: crop.cropName,
          eventType: 'limingEvent',
          eventDate: event.date,
          datePlanted: crop.datePlanted,
        }
      );
    }
    return !dateIsOutOfRange;
  });
  filteredCrop.organicMatterEvents = crop.organicMatterEvents?.filter(
    (event) => {
      const dateIsOutOfRange = eventDateIsOutOfRange(
        crop.datePlanted,
        event.date
      );
      if (dateIsOutOfRange) {
        errorCollector.collectKeyedError(
          'projectDataError:cropEventDateValidationRuleViolation',
          {
            field: fieldSetName,
            crop: crop.cropName,
            eventType: 'organicMatterEvent',
            eventDate: event.date,
            datePlanted: crop.datePlanted,
          }
        );
      }
      return !dateIsOutOfRange;
    }
  );
  filteredCrop.fertilizerEvents = crop.fertilizerEvents?.filter((event) => {
    const dateIsOutOfRange = eventDateIsOutOfRange(
      crop.datePlanted,
      event.date
    );
    if (dateIsOutOfRange) {
      errorCollector.collectKeyedError(
        'projectDataError:cropEventDateValidationRuleViolation',
        {
          field: fieldSetName,
          crop: crop.cropName,
          eventType: 'fertilizerEvent',
          eventDate: event.date,
          datePlanted: crop.datePlanted,
        }
      );
    }
    return !dateIsOutOfRange;
  });
  filteredCrop.irrigationEvents = crop.irrigationEvents?.filter((event) => {
    const dateIsOutOfRange = eventDateIsOutOfRange(
      crop.datePlanted,
      event.endDate ?? event.date
    );
    if (dateIsOutOfRange) {
      errorCollector.collectKeyedError(
        'projectDataError:cropEventDateValidationRuleViolation',
        {
          field: fieldSetName,
          crop: crop.cropName,
          eventType: 'irrigationEvent',
          eventDate: event.date,
          datePlanted: crop.datePlanted,
        }
      );
    }
    return !dateIsOutOfRange;
  });
  return filteredCrop;
};

// eslint-disable-next-line jsdoc/require-example
/**
 * The very first crop year on a field is subject to a problem where any fertilizer or tillage events
 * that occur in the calendar year PRIOR to the crop year (like fall fertilizer) will cause the import
 * code to throw because there doesn't exist a crop in the corresponding year to assign the event to.
 * We therefore notify the user of the problematic event and remove it from the import.
 *
 * @param crop The crop for which we are looking for edge-case event date problems.
 * @param fieldName The name of the field currently being checked.
 * @param earliestCropYear The year of the earliest crop year that appears in this field.
 * @param errorCollector The error collector aggregating all errors for this import file.
 *
 * @returns The original crop but with offending events removed.
 */
const checkFertilizerTillageDateEdgeCase = (
  crop: V1Crop,
  fieldName: string,
  earliestCropYear: number,
  errorCollector: ErrorCollector
): V1Crop => {
  const filteredCrop = { ...crop };
  const earliestCropYearEventDateFilter = (
    event: V1FertilizerEvent | V1TillageEvent
  ): boolean => {
    const eventDateIsBeforeEarliestCropYear = moment(event.date).isBefore(
      moment(earliestCropYear, 'year')
    );
    if (eventDateIsBeforeEarliestCropYear) {
      errorCollector.collectKeyedError(
        'projectDataError:priorYearEdgeCaseError',
        {
          field: fieldName,
          event,
        }
      );
    }
    return !eventDateIsBeforeEarliestCropYear;
  };
  filteredCrop.fertilizerEvents = crop.fertilizerEvents.filter(
    earliestCropYearEventDateFilter
  );
  filteredCrop.tillageEvents = crop.tillageEvents.filter(
    earliestCropYearEventDateFilter
  );
  return filteredCrop;
};

export const collectV1Errors = (
  sanitizedProject: V1Data,
  errorCollector: ErrorCollector
) => {
  const filteredProject = { ...sanitizedProject };
  if (sanitizedProject?.projects)
    for (const [index, project] of sanitizedProject?.projects.entries()) {
      if (project?.fieldSets)
        for (const [index_, field] of project?.fieldSets.entries()) {
          const earliestCropYear = field?.cropYears?.[0];
          if (earliestCropYear?.crops)
            for (const [l, crop] of earliestCropYear?.crops.entries()) {
              filteredProject.projects[index].fieldSets[
                index_
              ].cropYears[0].crops[l] = checkFertilizerTillageDateEdgeCase(
                crop,
                field.fieldSetName,
                earliestCropYear.cropYear,
                errorCollector
              );
            }
          if (field?.cropYears)
            for (const [k, cropYear] of field?.cropYears.entries()) {
              // Irrigation rows
              const reducer = (accumulator: number, crop: V1Crop): number => {
                if (crop?.irrigationEvents?.length > 0) {
                  accumulator += crop.irrigationEvents.length;
                }
                return accumulator;
              };
              const totalRequiredIrrigationRows = cropYear?.crops?.reduce(
                reducer,
                0
              );
              if (totalRequiredIrrigationRows > MAX_SHEET_ROWS_PER_YEAR) {
                errorCollector.collectKeyedError(
                  'projectDataError:irrigationEventOverflowError',
                  {
                    cropYear: cropYear.cropYear,
                    numberOfIrrigationEntries: totalRequiredIrrigationRows,
                  }
                );
                if (cropYear?.crops)
                  for (const [l, crop] of cropYear?.crops.entries()) {
                    filteredProject.projects[index].fieldSets[index_].cropYears[
                      k
                    ].crops[l].irrigationEvents = [];
                  }
              }
              // Event dates
              if (cropYear?.crops)
                for (const [l, crop] of cropYear?.crops.entries()) {
                  const filteredCrop = checkEventDates(
                    crop,
                    field.fieldSetName,
                    errorCollector
                  );
                  filteredProject.projects[index].fieldSets[index_].cropYears[
                    k
                  ].crops[l] = filteredCrop;
                }
            }
        }
    }
  return filteredProject;
};
