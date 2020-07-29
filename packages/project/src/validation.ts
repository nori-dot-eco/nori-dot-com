// import * as TJS from 'typescript-json-schema';
// import { resolve } from 'path';
// const settings: TJS.PartialArgs = {
//   required: true,
// };
// const compilerOptions: TJS.CompilerOptions = {
//   strictNullChecks: true,
// };
// const program = TJS.getProgramFromFiles(
//   [resolve(__dirname, './specification')],
//   compilerOptions
// );
// const schema = TJS.generateSchema(program, 'DataImport', settings);
import * as Ajv from 'ajv';

import * as schema from './json/specification.json';
import * as data from './json/example2.json';

const ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
const toLowercase = (key: any, value: any) =>
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

const valid = ajv.validate(
  schema,
  JSON.parse(JSON.stringify(data), toLowercase)
);

console.log(valid, ajv.errors);
export const tmp = '';
