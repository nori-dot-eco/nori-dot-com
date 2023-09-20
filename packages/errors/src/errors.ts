export const Errors = {
  apiError: {
    malformedRequest: {
      message: 'The request is malformed.',
      http: {
        code: 400,
        reason: 'Bad Request',
      },
    },
    unauthorized: {
      message: 'Not Authorised!',
      http: {
        code: 401,
        reason: 'Unauthorized',
      },
    },
    unknown: {
      message: 'An unknown error occurred within the API.',
      http: {
        code: 500,
        reason: 'Unknown',
      },
    },
    exceedsNrtQuota: {
      message: 'The request exceeds your remaining NRT quota',
      http: {
        code: 403,
        reason: 'Quota Exceeded',
      },
    },
    insufficientStock: {
      message: 'There is not enough stock remaining to fulfill this order.',
      http: {
        code: 409,
        reason: 'Supply Unavailable',
      },
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
    projectHasIssuanceCannotDeleteError: {
      message:
        'This project has a parcel with an issuance and cannot be deleted.',
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
    cropIrrigationMissingFrequencyError: {
      message:
        'Irrigation events that define both a start and end date with different values must also define a frequency.',
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
   *
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
    paymentMethodNull: {
      message:
        'We were unable to process your payment. Please check your payment information and try again.',
    },
    notEnoughNori: {
      message:
        '️Heads up! You don’t have enough assets in your wallet to complete this transaction.',
    },
    unknownError: {
      message:
        'An unexpected error has occurred while processing your transaction. Please try again, and if the issue persists, contact support@nori.com.',
    },
    ranOutOfGas: {
      message:
        'Sorry, we couldn’t complete the transaction because it ran out of gas, you were not charged. Please try again using a higher gas limit.',
    },
    failedToCapturePaymentIntent: {
      message:
        'We were unable to process your payment. Please check your payment information and try again.',
    },
    failedToAuthorizePaymentIntent: {
      message:
        'We were unable to process your payment. Please check your payment information and try again.',
    },
    specialOrderCertificateExists: {
      message: 'Certificate already exists for this order.',
    },
    specialOrderWrongType: {
      message: 'This order is not a special order.',
    },
    specialOrderTransactionInProgress: {
      message: 'A transaction has already been created for this order.',
    },
    priceOrFeeMismatch: {
      message:
        'The price for NRTs has changed. Please refresh the page and try again.',
    },
    stripeClimateOrderError: {
      message:
        'There was an error creating or confirming a Climate Order with the Stripe Climate API.',
    },
    stripeClimateOrderNotFound: {
      message: 'The stripe climate order for this order was not found.',
    },
    stripeClimateOrderCancelled: {
      message: 'The stripe climate order for this order was cancelled.',
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
    missingRole: {
      message: 'The user does not have the required admin role.',
    },
    tooManyRequests: {
      message:
        'Access to this account was paused due to too many attempts during sign in. Please wait a bit and try again.',
    },
    invalidVerificationCode: {
      message: 'That code is incorrect. Please try again.',
    },
    invalidPhoneNumber: {
      message: 'Enter a valid phone number.',
    },
    captchaCheckFailed: {
      message:
        'A recaptcha error occurred.  You are most likely seeing this because you are trying to log into an mfa-enabled account on a test environment with a real phone number. Either disable MFA or use one of the test phone numbers in the Firebase Console.',
    },
  },
  miscError: {
    unexpectedError: 'An unexpected error occurred',
  },
  parcelError: {
    mustHaveIsoLocation: {
      message: 'Parcel must have ISO location set',
    },
    mustHaveNetRemovals: {
      message: 'Parcel must have net removals calculated',
    },
    alreadyHasIssuance: {
      message: 'Parcel already has an issuance created',
    },
    hasMintedRemovals: {
      message: 'Parcel already has at least one removal minted to chain',
    },
    parcelHasIssuanceCannotDeleteError: {
      message: 'This parcel has an issuance and cannot be deleted.',
    },
  },
  mintingError: {
    emptyBatch: {
      message: 'Cannot mint empty batch of removals',
    },
    missingProjectData: {
      message: 'Missing required project metadata',
    },
    scheduleDurationNotSet: {
      message:
        'Schedule duration has not been set in RestrictedNORI contract for this methodology and version',
    },
    transactionSubmissionError: {
      message:
        'There was an error submitting the `mintBatch` transaction to the blockchain',
    },
    differentProjects: {
      message: 'Cannot mint removals from different projects in the same batch',
    },
  },
  quantificationError: {
    schema: {
      message: 'Schema expectations are not met',
    },
    insufficientData: {
      message: 'Output lacks required data',
    },
  },
} as const;
