import * as Ajv from 'ajv';

import * as schema from './json/specification.json';

import type { Project } from './index';

/** @internal */
import ajvErrors = require('ajv-errors');

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
      ? Array.from(value, (c) => c.toLowerCase()).join('')
      : value;
  const formattedData: Project = JSON.parse(JSON.stringify(data), toLowercase);
  return formattedData;
};

/**
 * Takes input data and checks whether its contents are valid or not. When the data is not valid, context is provided.
 *
 * @example <caption>Validating project data using data that has an invalid number of fields defined:</caption>
 *
 * ```js
 * validateProjectData({version:'1.0.0',fields:[]}); // returns {valid:false, ...errors}
 * ```
 *
 */
export const validateProjectData = (
  data: Project
): { valid: boolean; message?: string; errors?: Ajv.ErrorObject[] } => {
  const ajv = ajvErrors(
    new Ajv({
      useDefaults: 'empty',
      allErrors: true,
      jsonPointers: true,
    }) as any
  );
  const valid = ajv.validate(schema, formatInputData(data)) as boolean;
  return { valid, message: ajv.errorsText(), errors: ajv.errors };
};
