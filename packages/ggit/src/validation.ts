import Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
import ajvErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
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
      let formattedValue = value;
      if (
        value &&
        !Array.isArray(value) && // todo format array values
        !isNaN(value) &&
        !['@SRID'].includes(key) // todo can srid be a number?
      ) {
        formattedValue = Number(value); // convert all string numbers to numbers
      } else if (
        value &&
        typeof value === 'string' &&
        !['#text', '@Name'].includes(key) // todo can text or name be lowercase?
      ) {
        formattedValue = value.toLowerCase(); // lower cases all string values
      }
      if (key === 'BurnEvent' && Object.keys(value).length === 0) {
        value = { BurnTime: 'No burning' }; // todo {} is eq to No burning. stop using no burning as the default
      }
      return formattedValue;
    }
  );
  return {
    ...formattedData,
    Cropland: formattedData.Cropland?.sort((a, b) =>
      a.GEOM['#text'].localeCompare(b.GEOM['#text'])
    ),
  };
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
 */
export const validateInputData = (
  data: Input.InputData
): {
  valid: boolean;
  message?: string;
  errors?: {
    type: ErrorObject['message'];
    instancePath: ErrorObject['instancePath'];
    error: ErrorObject;
  }[];
  formattedData: Input.InputData;
} => {
  const ajv = ajvErrors(
    addFormats(
      new Ajv({
        useDefaults: 'empty',
        allErrors: true,
        inlineRefs: false,
        $data: true,
        // allowUnionTypes: true,
      })
    )
  );
  ajv.addKeyword({
    keyword: 'validationRules',
    validate: (
      rules: (keyof typeof validationRules)[],
      _value,
      _schema,
      _context: InputDataValidationContext
    ) => {
      const allRulesAreSatisfied =
        rules?.every(
          (_rule) => true
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
        instancePath: error.instancePath,
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
