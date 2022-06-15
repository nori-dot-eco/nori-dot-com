const path = require('path');
const fs = require('fs');

const { jsdocRules } = require('./rules');

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = [...jsExtensions, ...tsExtensions];

const schemaPath = path.join(
  __dirname,
  '../../../../nori-graphql/src/schema.graphql'
);
const schema = fs.existsSync(schemaPath) ? schemaPath : undefined;

module.exports = {
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': { '@typescript-eslint/parser': tsExtensions },
    'import/resolver': {
      node: { extensions: jsExtensions },
      typescript: { alwaysTryTypes: true, extensions: tsExtensions },
    },
    jsdoc: { mode: 'typescript' },
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:require-path-exists/recommended',
        'plugin:relay/recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:import/recommended',
        'plugin:@next/next/recommended',
        'plugin:@next/next/core-web-vitals',
        'plugin:unicorn/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: [
        'react',
        'react-hooks',
        'import',
        'sort-imports-es6-autofix',
        'require-path-exists',
        'relay',
        'jsdoc',
        'jest',
        'mui-unused-classes',
      ],
      processor: '@graphql-eslint/graphql',
      rules: {
        'no-implicit-coercion': ['error'],
        'no-underscore-dangle': [0],
        'unicorn/no-array-reduce': [0],
        'unicorn/prefer-module': [0],
        'unicorn/prefer-switch': [0],
        'unicorn/no-useless-undefined': [0],
        'unicorn/prefer-node-protocol': [0], // todo enable this when we have a compatile version of node (~18)
        // 'unicorn/filename-case': [ // todo enable this after running kebab-case codemod to rename files
        //   'warn',
        //   {
        //     case: 'kebabCase',
        //   },
        // ],
        'unicorn/filename-case': [0], // todo remove this after running kebab-case codemod to rename files
        'unicorn/no-useless-promise-resolve-reject': [0],
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              seedDb: true,
              req: true,
              res: true,
              e: true,
              NConfConfig: true,
              params: true,
              args: true,
              getStaticProps: true,
            },
            ignore: ['a-z'],
          },
        ],
        'unicorn/prefer-spread': [0],
        'eslint-comments/require-description': ['error'], // requires eslint directive comments to have descriptions
        'eslint-comments/disable-enable-pair': [
          'error',
          { allowWholeFile: true }, // allows using eslint-disable directives for whole-file disables
        ],
        'eslint-comments/no-unused-disable': ['error'],
        'no-restricted-syntax': [
          'error',
          'ForInStatement',
          'LabeledStatement',
          'WithStatement',
        ], // overrides airbnb restricted syntax rules and allows for of loops
        'no-extra-boolean-cast': 0, // todo remove once strict is enabled for all tsconfigs
        'mui-unused-classes/unused-classes': 'warn',
        '@next/next/no-html-link-for-pages': 0, // we must manually override this in each next app with a custom pages dir
        'prefer-const': [
          'error',
          { destructuring: 'all', ignoreReadBeforeAssign: false },
        ],
        ...jsdocRules,
        'import/no-cycle': [0], // todo look into enabling this
        'import/extensions': [
          'error',
          'never',
          { ts: 'never', json: 'always' },
        ],
        'import/order': ['error', { 'newlines-between': 'always' }],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: false,
          },
        ],

        'relay/generated-flow-types': 0,
        'require-path-exists/exists': [2, { extensions: allExtensions }],
        'max-classes-per-file': 0, // todo deprecate
        'prefer-destructuring': 0,
      },
    },
    {
      files: ['*.graphql'],
      parserOptions: { skipGraphQLConfig: true, schema: [schema] },
      extends: [
        'plugin:@graphql-eslint/schema-recommended',
        'plugin:@graphql-eslint/relay',
      ],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        camelcase: [0], // replaced by @typescript-eslint/naming-convention rules
        '@typescript-eslint/strict-boolean-expressions': [
          'warn',
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
          },
        ],
        'no-shadow': 'off', // replaced by ts-eslint rule below
        '@typescript-eslint/no-shadow': 'error', // replaces by no-shadow
        // 'id-denylist': ['error', 'FC', 'React.FC', 'React.FunctionComponent'], // todo enable (disallows type usage)
        'require-await': 'off', // replaced by @typescript-eslint/require-await
        '@typescript-eslint/require-await': 'error', // replaces require-await
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: 'req|_' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'class', format: ['PascalCase'] },
          {
            selector: 'variable',
            format: [
              'camelCase',
              'PascalCase', // todo remove
              'UPPER_CASE',
            ],
          },
          {
            selector: 'default',
            // eslint-disable-next-line unicorn/no-null -- rule requires null and not undefined
            format: null,
          },
          { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE'] },
          { selector: 'typeLike', format: ['PascalCase'] },
          {
            selector: ['property'],
            // eslint-disable-next-line unicorn/no-null -- rule requires null and not undefined
            format: null, // format must be set in separate rule definition to allow "requireQuotes" (see below)
            modifiers: ['requiresQuotes'],
            leadingUnderscore: 'allow',
          },
          {
            selector: ['property'],
            format: ['camelCase', 'UPPER_CASE'], // overrides format for same selector while persisting "requiresQuotes"
            leadingUnderscore: 'allow',
          },
          {
            selector: ['objectLiteralProperty'],
            // eslint-disable-next-line unicorn/no-null -- rule requires null and not undefined
            format: null, // format must be set in separate rule definition to allow "requireQuotes" (see below)
            leadingUnderscore: 'allow',
            modifiers: ['requiresQuotes'],
          },
          {
            selector: ['objectLiteralProperty'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'], // overrides format for same selector while persisting "requiresQuotes"
            leadingUnderscore: 'allow',
          },
          {
            selector: ['typeProperty'],
            // eslint-disable-next-line unicorn/no-null -- rule requires null and not undefined
            format: null, // format must be set in separate rule definition to allow "requireQuotes" (see below)
            modifiers: ['requiresQuotes'],
          },
          {
            selector: ['typeProperty'],
            format: ['camelCase', 'PascalCase'], // overrides format for same selector while persisting "requiresQuotes"
            leadingUnderscore: 'allow',
          },
          {
            selector: ['classProperty'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: ['parameter'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        // '@typescript-eslint/no-explicit-any': [
        //   'error',
        //   { ignoreRestArgs: true },
        // ],
        '@typescript-eslint/ban-types': ['warn'],
        'no-use-before-define': 'off', // replaced by @typescript-eslint/no-use-before-define
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, typedefs: false, classes: false },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'warn',
        'import/no-unresolved': 'off',
        'import/extensions': [
          'error',
          'never',
          { ts: 'never', json: 'always' },
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        'require-path-exists/exists': [0],
      },
    },
    {
      extends: ['plugin:jest/recommended'],
      files: [
        '**.test.js',
        '**/__mocks__/**.js',
        '**/__mocks__/**.ts',
        '**.test.ts',
        '**.test.tsx',
        'integration-util.ts',
      ],
      env: { node: true, jest: true },
      rules: { 'dot-notation': [0], 'jest/prefer-strict-equal': 'warn' },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          // Need PascalCase to allow for functional react components that have generics
          // on them. Like:
          //   type MyComponentProps<T> { value: T };
          //   function MyComponent<T>({value}: MyComponentProps<T>) { ... }
          // because unfortunately you can't use generics with arrow functions in tsx files:
          //   const MyComponent = <T>({value}: MyComponentProps<T>) => { ... } //parsing error! // todo verify this is true
          { selector: 'function', format: ['camelCase', 'PascalCase'] }, // todo remove after verifying the above is false (only allow `const` function components)
        ],
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: { 'react/jsx-props-no-spreading': ['off'] },
    },
  ],
};
