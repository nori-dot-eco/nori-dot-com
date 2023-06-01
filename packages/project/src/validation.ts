import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import type { DataValidationCxt } from 'ajv/dist/types';
import type { UnparsedError } from '@nori-dot-com/errors';
import { parseError } from '@nori-dot-com/errors';

import * as schema from './json/v4-specification.json';
import type { CropEvent, Project } from './v4-specification';

type ProjectDataValidationContext = Omit<DataValidationCxt, 'rootData'> & {
  rootData: Project;
};

/**
 * Formats all non-geojson data to lowercase
 *
 * @internal
 */
export const formatInputData = (data: Project): Project => {
  const toLowercase = (_key: string, value: any): string =>
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
    if (typeof value === 'string') {
      const [, fieldIndex, , cropYearIndex] = dataPath.split('/').slice(1);
      const cropYear =
        project.fields[Number(fieldIndex)].cropYears[Number(cropYearIndex)]
          .plantingYear;
      const eventYear = new Date(value).getFullYear();
      return eventYear >= cropYear;
    }
    return true;
  },
};

/**
 * Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.
 *
 * @example <caption>Validating project data using data that has an invalid number of fields defined:</caption>
 *
 * ```js
 * validateProjectData(data); // returns {valid:false, ...errors}
 * ```
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
    addFormats(
      new Ajv({
        useDefaults: 'empty',
        allErrors: true,
        inlineRefs: false,
        $data: true,
        ajvErrors: true,
        allowUnionTypes: true,
      })
    )
  );
  ajv.addKeyword({
    keyword: 'validationRules',
    validate: (
      rules: (keyof typeof validationRules)[],
      value,
      _schema,
      context: ProjectDataValidationContext
    ) => {
      const allRulesAreSatisfied =
        rules?.every(
          (rule) =>
            !value || // if there is no value, leave validation up to default schema validation rules
            validationRules[rule]({ ctx: context, value }) === true
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
    }) ?? undefined;
  return {
    valid,
    message: errors?.map((e) => e.message).join(' ') ?? 'No errors',
    errors,
    formattedData,
  };
};
