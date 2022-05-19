const { jsonSchemaRules } = require('@nori-dot-com/eslint-config-nori/rules');

module.exports = {
  overrides: [
    {
      files: ['./**/*.ts'],
      rules: jsonSchemaRules,
    },
  ],
};
