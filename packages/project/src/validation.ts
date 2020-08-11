import * as Ajv from 'ajv';

import * as data from './example/example2.json';
import * as schema from './json/specification.json';

const ajv = new Ajv({ useDefaults: 'empty', verbose: true, allErrors: true });
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
