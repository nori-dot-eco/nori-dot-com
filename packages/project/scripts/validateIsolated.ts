/**
 * This is a stripped down self-contained example of validating V4 import files
 * without reliance on Nori's errors library or the custom validationRule that
 * enforces crop events being in the expected crop year.
 */

import * as fs from 'fs';
import { inspect } from 'util';
import Ajv from 'ajv';
// Adds `date` type format support
import addFormats from 'ajv-formats';
import type { ErrorObject } from 'ajv';

import { Project } from '../src/v4-specification';
import * as schema from '../src/json/v4-specification.json';

export const validateProjectData = (
  data: Project
): {
  valid: boolean;
  message?: string;
  errors?: ErrorObject[];
} => {
  const ajv = addFormats(
    new Ajv({
      useDefaults: 'empty',
      allErrors: true,
      inlineRefs: false,
      $data: true,
      allowUnionTypes: true,
    })
  );
  // Ignore the custom NORI errorMessage and validationRules clauses
  ajv.addKeyword('errorMessage');
  ajv.addKeyword('validationRules');
  const valid = ajv.validate(schema, data);
  const errors = ajv.errors || [];
  return {
    valid,
    message: errors?.map((e) => e.message).join(' ') ?? 'No errors',
    errors,
  };
};

export const main = (): void => {
  const input = fs.readFileSync(0, 'utf-8');
  const result = validateProjectData(JSON.parse(input) as Project);
  if (!result.valid) {
    result.errors?.forEach((err) => {
      console.log(
        inspect(err, {
          showHidden: false,
          depth: 4,
          colors: true,
        })
      );
    });
  }
};

main();
