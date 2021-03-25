const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: '../../eslint-config-nori',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'react/jsx-props-no-spreading': ['off'],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          {
            packageDir: [
              path.join(__dirname, '../'),
              path.join(__dirname, '.'),
            ],
          },
        ],
        camelcase: 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'class', format: ['PascalCase'] },

          // Need PascalCase to allow for functional react components that have generics
          // on them. Like:
          //   type MyComponentProps<T> { value: T };
          //   function MyComponent<T>({value}: MyComponentProps<T>) { ... }
          // because unfortunately you can't use generics with arrow functions in tsx files:
          //   const MyComponent = <T>({value}: MyComponentProps<T>) => { ... } //parsing error!
          { selector: 'function', format: ['camelCase', 'PascalCase'] },
          {
            selector: 'variable',
            // Needed to allow for react functional components that
            // are supposed to be CamelCase. Adding the types specifier
            // requires specifying a tsconfig.json file path in parserOptions.project,
            // which gets complicated because we have multiple...
            // types: ['function'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          { selector: 'typeLike', format: ['PascalCase'] },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
          },
          { selector: 'property', format: ['camelCase', 'PascalCase'] },
        ],
      },
    },
  ],
};
