var jsExtensions = ['.js', '.jsx'];
var tsExtensions = ['.ts', '.tsx'];
var allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:require-path-exists/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
  ],
  plugins: ['@typescript-eslint', 'import', 'sort-imports-es6-autofix'],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    'one-var': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    'import/extensions': ['error', 'never', { ts: 'never' }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/class-name-casing': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/member-naming': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: {
    files: ['**/*.ts'],
    rules: {
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, typedefs: false, classes: false },
      ],
      'no-unused-vars': 0,
      'import/no-unresolved': 'off',
      'no-undef': 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',
      'new-cap': 'warn',
      'require-path-exists/exists': [0],
    },
  },
};
