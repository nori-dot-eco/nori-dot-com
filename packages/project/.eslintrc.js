const {
  jsonSchemaRules,
  parserOptions,
  // eslint-disable-next-line import/no-extraneous-dependencies -- this is a dev file that uses the workspace dependency.
} = require('@nori-dot-com/eslint-config-nori/rules');

module.exports = {
  extends: '@nori-dot-com/eslint-config-nori',
  parserOptions: parserOptions({
    projectDirectories: ['./tsconfig.json'],
    typescript: true,
    react: false,
    dir: __dirname,
  }),
  overrides: [
    {
      files: ['./**/*.ts'],
      rules: jsonSchemaRules,
    },
  ],
};
