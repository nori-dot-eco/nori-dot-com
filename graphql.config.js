/**
 * This file is used by eslint as well as the vscode-graphql plugin
 *
 */

const path = require('path');
const fs = require('fs');

const schemaPath = './nori-graphql/artifacts/schema.graphql';
const documents = '**/*.graphql.ts';

const relayExtensions = path.resolve(__dirname, './relay-extensions.graphql');

module.exports = {
  schema: [...(fs.existsSync(schemaPath) ? [schemaPath] : []), relayExtensions],
  documents: [...(fs.existsSync(documents) ? [documents] : [])],
};
