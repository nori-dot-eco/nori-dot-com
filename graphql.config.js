const path = require('path');
const fs = require('fs');

const schemaPath = './nori-graphql/src/schema.graphql';

const relayExtensions = path.join(__dirname, './relay-extensions.graphql');

module.exports = {
  schema: [...(fs.existsSync(schemaPath) ? [schemaPath] : []), relayExtensions],
};
