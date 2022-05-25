const {
  parserOptions,
  importRules,
} = require('@nori-dot-com/eslint-config-nori/rules'); // eslint-disable-line import/no-extraneous-dependencies -- this is a workspace package

module.exports = {
  extends: '@nori-dot-com/eslint-config-nori',
  parserOptions: parserOptions({
    projectDirectories: ['./tsconfig.json', 'packages/project/tsconfig.json'],
    typescript: true,
    react: false,
    dir: __dirname,
  }),
  rules: importRules({ dir: __dirname }),
};
