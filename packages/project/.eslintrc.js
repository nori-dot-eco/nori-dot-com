const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);
require('@rushstack/eslint-config/patch-eslint6');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['../../.eslintrc.js'],
  overrides: [
    {
      files: ['./**/*.ts'],
      rules: {
        'jsdoc/require-example': [
          'error',
          {
            contexts: ['any'],
            exemptedBy: ['inheritdoc', 'packageDocumentation'],
          },
        ],
        'jsdoc/require-jsdoc': [
          'error',
          {
            contexts: ['any', 'TSInterfaceDeclaration'],
          },
        ],
      },
    },
  ],
};
