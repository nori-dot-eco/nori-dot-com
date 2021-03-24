export const Errors = {
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
  },
  unknownErrorCode: {
    unknownErrorType: {
      message: 'An unknown error ocurred',
    },
  },
};
