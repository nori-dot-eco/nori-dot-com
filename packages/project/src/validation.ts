import * as Ajv from 'ajv';

import * as schema from './json/specification.json';

import type { Project } from './index';

import ajvErrors = require('ajv-errors');

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

export const validateProjectData = (
  data: Project
): { valid: boolean; message?: string; errors?: Ajv.ErrorObject[] } => {
  const ajv = ajvErrors(
    new Ajv({ useDefaults: 'empty', allErrors: true, jsonPointers: true })
  );
  const valid = ajv.validate(schema, formatInputData(data)) as boolean;
  return { valid, message: ajv.errorsText(), errors: ajv.errors };
};
