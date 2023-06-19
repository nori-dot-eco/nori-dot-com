const {
  parserOptions,
  // eslint-disable-next-line import/no-extraneous-dependencies -- this is a dev file that uses the workspace dependency.
} = require('@nori-dot-com/eslint-config-nori/dist/settings/parser-options');
const {
  importRules,
  // eslint-disable-next-line import/no-extraneous-dependencies -- this is a dev file that uses the workspace dependency.
} = require('@nori-dot-com/eslint-config-nori/dist/settings/import-rules');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: '@nori-dot-com/eslint-config-nori',
  parserOptions: parserOptions({
    projectDirectories: ['tsconfig.eslint.json'],
    typescript: true,
    react: false,
    dir: __dirname,
  }),
  rules: importRules({ dir: __dirname }),
};
