import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvErrors from 'ajv-errors';
import type { DataValidationCxt } from 'ajv/dist/types';
import type { UnparsedError } from '@nori-dot-com/errors';
import { parseError } from '@nori-dot-com/errors';

import * as schema from './input/specification.json';

import type { Input } from './index';

type InputDataValidationContext = Omit<DataValidationCxt, 'rootData'> & {
  rootData: Input.InputData;
};

/**
 * Formats input data to lower case
 *
 * @internal
 */
export const formatInputData = (data: Input.InputData): Input.InputData => {
  const formattedData: Input.InputData = JSON.parse(
    JSON.stringify(data),
    (key, value) => {
      return value?.toLowerCase?.() ?? value; // lower cases all string values
    }
  );
  return formattedData;
};

/**
 * Additional validation rules for input data
 *
 * @internal
 */
const validationRules = {};

/**
 * Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.
 *
 * @example <caption>Validating input data using data that has an invalid number of fields defined:</caption>
 *
 * ```js
 * validateInputData({}); // returns {valid:false, ...errors}
 * ```
 *
 */
export const validateInputData = (
  data: Input.InputData
): {
  valid: boolean;
  message?: string;
  errors?: {
    type: ErrorObject['message'];
    dataPath: ErrorObject['dataPath'];
    error: ErrorObject;
  }[];
  formattedData: Input.InputData;
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
      ctx: InputDataValidationContext
    ) => {
      const allRulesAreSatisfied =
        rules?.every(
          (rule) => true
          // todo
          // !value || // if there is no value, leave validation up to default schema validation rules
          // validationRules[rule]({ ctx, value }) === true
        ) ?? true;
      return allRulesAreSatisfied;
    },
  });
  const formattedData = formatInputData(data);
  const valid = ajv.validate(schema, data);
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
