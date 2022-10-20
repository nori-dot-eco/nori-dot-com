const {
  parserOptions,
  importRules,
  // eslint-disable-next-line import/no-extraneous-dependencies -- this is a dev file that uses the workspace dependency.
} = require('@nori-dot-com/eslint-config-nori/rules');

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
