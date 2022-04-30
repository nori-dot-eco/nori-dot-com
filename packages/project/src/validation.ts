import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvErrors from 'ajv-errors';
import type { DataValidationCxt } from 'ajv/dist/types';
import type { UnparsedError } from '@nori-dot-com/errors';
import { parseError } from '@nori-dot-com/errors';

import * as schema from './json/specification.json';
import type { CropEvent } from './specification';

import type { Project } from './index';

type ProjectDataValidationContext = Omit<DataValidationCxt, 'rootData'> & {
  rootData: Project;
};

/**
 * Formats all non-geojson data to lowercase
 *
 * @internal
 */
export const formatInputData = (data: Project): Project => {
  const toLowercase = (key: string, value: any): string =>
    typeof value === 'string' &&
    ![
      'multipolygon',
      'polygon',
      'geometry',
      'feature',
      'featurecollection',
      'point',
      'line',
      'multipoint',
      'linestring',
      'multilinestring',
      'geometrycollection',
    ].includes(value.toLowerCase())
      ? Array.from(value, (c) => {
          return c.toLowerCase();
        }).join('')
      : value;
  const formattedData: Project = JSON.parse(JSON.stringify(data), toLowercase);
  return formattedData;
};

/**
 * Additional validation rules for project data
 *
 * @internal
 */
const validationRules = {
  cropEventDateIsOnOrAfterContainingCropYear: ({
    ctx,
    value,
  }: {
    ctx: ProjectDataValidationContext;
    value: CropEvent['date'];
  }): boolean => {
    const { rootData: project, dataPath } = ctx;
    const [, fieldIndex, , cropYearIndex] = dataPath.split('/').slice(1);
    const cropYear =
      project.fields[Number(fieldIndex)].cropYears[Number(cropYearIndex)]
        .plantingYear;
    let isValid: boolean;
    if (typeof value === 'string') {
      const eventYear = Number(value.split('/').slice(-1));
      isValid = eventYear >= cropYear;
    } else {
      isValid = true; // if the type is not string, let other error handlers handle the error
    }
    return isValid;
  },
};

/**
 * Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.
 *
 * @example <caption>Validating project data using data that has an invalid number of fields defined:</caption>
 *
 * ```js
 * validateProjectData({version:'3.1.0',fields:[]}); // returns {valid:false, ...errors}
 * ```
 *
 */
export const validateProjectData = (
  data: Project
): {
  valid: boolean;
  message?: string;
  errors?: {
    type: ErrorObject['message'];
    dataPath: ErrorObject['dataPath'];
    error: ErrorObject;
  }[];
  formattedData: Project;
} => {
  const ajv = ajvErrors(
    new Ajv({
      useDefaults: 'empty',
      allErrors: true,
      inlineRefs: false,
      $data: true,
      ajvErrors: true,
      // allowUnionTypes: true,
    })
  );
  ajv.addKeyword({
    keyword: 'validationRules',
    validate: (
      rules: (keyof typeof validationRules)[],
      value,
      _schema,
      ctx: ProjectDataValidationContext
    ) => {
      const allRulesAreSatisfied =
        rules?.every(
          (rule) =>
            !value || // if there is no value, leave validation up to default schema validation rules
            validationRules[rule]({ ctx, value }) === true
        ) ?? true;
      return allRulesAreSatisfied;
    },
  });
  const formattedData = formatInputData(data);
  const valid = ajv.validate(schema, formattedData);
  const errors =
    ajv.errors?.map((error) => {
      const { code, type, message } = parseError({
        error: error.message as UnparsedError,
      });
      return {
        type,
        code,
        message,
        dataPath: error.dataPath,
        error,
      };
    }) ?? null;
  return {
    valid,
    message: errors?.map((e) => e.message).join(' ') ?? 'No errors',
    errors,
    formattedData,
  };
};
