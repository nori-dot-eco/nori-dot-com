export const Errors = {
  apiError: {
    invalidArguments: {
      message: 'The arguments you provided are invalid',
    },
  },
  ggitInputError: {
    ggitInputDataUnknownError: {
      message: 'An unknown error occurred within the GGIT input data',
    },
  },
  projectDataError: {
    projectUnknownError: {
      message: 'An unknown error occurred within the project data',
    },
    cropEventDateValidationRuleViolation: {
      message: 'A crop event date was found to be outside of the allowed range',
    },
    cropEventDateTypeError: {
      message: 'An unexpected type was used to specify the crop event date',
    },
    projectVersionTypeError: {
      message: 'An unexpected type was used to specify the project version',
    },
    projectVersionUnknownError: {
      message: 'An unknown error occurred with the project version',
    },
    projectFieldsMinimumItemsError: {
      message: 'At least one field must be specified',
    },
    projectFieldsMaximumItemsError: {
      message: 'No more than 25 fields can be specified',
    },
    projectFieldsTypeError: {
      message: 'An unexpected type was used to specify the project fields',
    },
    projectFieldsUnknownError: {
      message: 'An unknown error occurred with the project fields',
    },
    fieldRequiredPropertyMissing: {
      message: 'A required property is missing for a field',
    },
    fieldUnknownAdditionalProperty: {
      message: 'An unknown additional property was specified for a field',
    },
    fieldUnknownError: {
      message: 'An unknown error occurred with a field',
    },
    fieldNameTypeError: {
      message: 'An unexpected type was used to specify the field name',
    },
    fieldNameUnknownError: {
      message: 'An unknown error occurred with the field name',
    },
    irrigationEventOverflowError: {
      message:
        'No more than 16 irrigation event data entries can be specified for a crop year.',
    },
    priorYearEdgeCaseError: {
      message:
        'This event must be entered manually, there is not yet a crop in the same year as this event.',
    },
  },
  unknownErrorCode: {
    unknownErrorType: {
      message: 'An unknown error ocurred',
    },
  },
  operationalErrorCode: {
    ggitCommunicationError: {
      message: 'An error occurred in communication with the GGIT API.',
    },
  },
  sheetInput: {
    historicalLandUsePre1980Missing: {
      message:
        'You are missing Pre-1980 history data. Please specify this in the "Details" section of the sheet.',
    },
    historicalLandUsePre1980Error: {
      message:
        'There was an error formatting Pre-1980 history data. Please check the sheet for missing or invalid data.',
    },
    historicalLandUseCRPError: {
      message:
        'There was an error parsing CRP details in the sheet. Please check the sheet for missing or invalid data.',
    },
    historicalLandUsePre2000Error: {
      message:
        'There was an error formatting Pre-2000s history data. Please check the sheet for missing or invalid data.',
    },
    cropPerennialInvalidError: {
      message: `Crop contains an invalid perennial definition. Could not find a matching initial perennial crop (i.e., the perennial's planting date is missing for the first instance of this crop).`,
    },
    cropPlantingDateInvalidError: {
      message:
        'Crop contains an invalid planting date. Usually this means the sheet date formula has been overwritten, or that you incorrectly specified a perennial crop. Undo the change and use the formula instead, and then try again.',
    },
    cropHarvestDataError: {
      message:
        'There was an error parsing harvest data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropTillageMissingDateError: {
      message:
        'You must specify a tillage date if you specify a type. Please check the sheet for missing or invalid data.',
    },
    cropTillageDataError: {
      message:
        'There was an error parsing tillage data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropFertilizerInvalidDateError: {
      message:
        'Fertilizer event contains an invalid date. Usually this means the sheet date formula has been overwritten. Undo the change and use the formula instead, and then try again',
    },
    cropFertilizerNitrogenAggregationError: {
      message: 'There was an error aggregating nitrogen events',
    },
    cropFertilizerError: {
      message:
        'There was an error parsing fertilizer data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropOrganicMatterCalculationError: {
      message: `Invalid omad calculation: (1 - percentMoisture) * omadAmount = omadAmountAdjusted.`,
    },
    cropOrganicMatterError: {
      message:
        'There was an error parsing OMAD data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropLimingError: {
      message:
        'There was an error parsing liming data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropBurningError: {
      message:
        'There was an error parsing burning data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropGrazingError: {
      message:
        'There was an error parsing grazing data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropIrrigationDateOverlapError: {
      message: `Irrigation dates can not overlap with the next crop's harvest date`,
    },
    cropIrrigationMissingStartDateError: {
      message: `You are missing irrigation start dates for a crop. Either remove all irrigation inputs for that crop or enter the state date.`,
    },
    cropIrrigationMissingVolumeError: {
      message: `You are missing irrigation volume for a crop. Either remove all irrigation inputs for that crop or enter the volume.`,
    },
    cropIrrigationError: {
      message:
        'There was an error parsing irrigation data in the sheet. Please check the sheet for missing or invalid data.',
    },
    cropFormattingError: {
      message:
        'There was an error formatting crop data. Please check the sheet for missing or invalid data.',
    },
    futureScenarioInsufficientDataError: {
      message:
        'Not enough annual data was detected in the future section of the sheet.  At least 10 years are required.',
    },
    historicalScenarioInsufficientDataError: {
      message:
        'Not enough annual data was detected in the historical/current section of the sheet',
    },
    cropScenarioError: {
      message:
        'There was an error formatting the crop scenario. Please check the sheet for missing or invalid data.',
    },
    cropStartYearError: {
      message:
        'There was an error formatting the start year in the sheet. Please check the sheet for missing or invalid data.',
    },
    fieldError: {
      message:
        'There was an error formatting annual data for the field. Please check the sheet for missing or invalid data.',
    },
    startYearMissingError: {
      message: 'The sheet is missing a start year',
    },
    startYearError: {
      message:
        'There was an error formatting the start year in the sheet. Please check the sheet for missing or invalid data.',
    },
    ggitConversionGeneralError: {
      message: 'An unexpected error occurred generating the ggit input file.',
    },
    googleSheetsNamedRangeError: {
      message:
        'Google Sheets returned an invalid response containing data from a malformed named range.',
    },
    fieldTabMismatchError: {
      message:
        'There was an error getting sheet data. Make sure the field names in the land management tab match the tab names in the associated spreadsheet.',
    },
    buildAnnualCropRangesError: {
      message: 'There was an error building the annual crop ranges.',
    },
  },
  /**
   * checkoutError's are NOT retried by the task queue
   */
  checkoutError: {
    insufficientStock: {
      message: 'There is not enough stock remaining to fulfill this order',
    },
    certificateAlreadyExistsForOrder: {
      message: 'A certificate already exists for this order',
    },
    invalidIsoLocation: {
      message: 'The specified ISO location is invalid',
    },
  },
  authenticationError: {
    userNotFound: {
      message:
        'There is no user record corresponding to this identifier. The user may have been deleted.',
    },
    unknownError: {
      message: 'An unknown error occurred',
    },
    wrongPassword: {
      message: 'The password is invalid or the user does not have a password',
    },
  },
};
