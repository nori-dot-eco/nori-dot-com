const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);
const path = require('path');
const fs = require('fs');

const schemaPath = path.join(
  __dirname,
  '../../../../nori-graphql/src/schema.graphql'
);
const schema = fs.existsSync(schemaPath) ? schemaPath : null;

module.exports = {
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: jsExtensions,
      },
      typescript: {
        alwaysTryTypes: true,
        extensions: tsExtensions,
      },
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:require-path-exists/recommended',
        'plugin:relay/recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:import/recommended',
        'plugin:jest/recommended',
        'plugin:@next/next/recommended',
        'plugin:@next/next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      plugins: [
        'import',
        'sort-imports-es6-autofix',
        'require-path-exists',
        'react-hooks',
        'relay',
        'jsdoc',
        'jest',
        'mui-unused-classes',
      ],
      processor: '@graphql-eslint/graphql',
      rules: {
        camelcase: ['warn', { allow: ['__'] }],
        'mui-unused-classes/unused-classes': 'warn',
        '@next/next/no-html-link-for-pages': 0, // we must manually override this in each next app with a custom pages dir
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: false,
          },
        ],
        'jsdoc/check-alignment': [
          'error',
          {
            contexts: ['any'],
          },
        ],
        'jsdoc/check-indentation': 1,
        'jsdoc/check-syntax': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/implements-on-classes': [
          'error',
          {
            contexts: ['any'],
          },
        ],
        'jsdoc/match-description': [
          'error',
          {
            mainDescription: false,
            contexts: ['TSInterfaceDeclaration', 'TSPropertySignature'],
          },
        ],
        'jsdoc/newline-after-description': 1,
        'jsdoc/no-types': 1,
        'jsdoc/no-undefined-types': 1,
        'jsdoc/require-description': 1,
        'jsdoc/require-returns': [
          'error',
          {
            contexts: ['any'],
          },
        ],
        'jsdoc/require-returns-check': ['error'],
        'jsdoc/require-returns-description': [
          'error',
          {
            contexts: ['any'],
          },
        ],
        'jsdoc/require-returns-type': [
          'error',
          {
            contexts: ['any'],
          },
        ],
        'jsdoc/valid-types': 1,
        'no-else-return': [0],
        'one-var': 0,
        'no-underscore-dangle': 0,
        'import/no-cycle': [0], // todo look into enabling this
        'import/extensions': [
          'error',
          'never',
          { ts: 'never', json: 'always' },
        ],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
          },
        ],
        'max-classes-per-file': 0,
        'function-paren-newline': [0],
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/sort-comp': 0,
        'react/no-multi-comp': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-curly-brace-presence': 0,
        'react/prop-types': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'no-plusplus': 0,
        'import/prefer-default-export': 0,
        'prefer-destructuring': 0,
        'no-use-before-define': ['error', { variables: false }],
        'no-continue': 0,
        'no-param-reassign': 0,
        'global-require': 0,
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
          },
        ],
        'react/require-default-props': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-fragments': [1, 'element'],
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
          },
        ],
        'relay/generated-flow-types': 0,
        'require-path-exists/exists': [
          2,
          {
            extensions: allExtensions,
          },
        ],
        /**
         * jest rules
         */
        'jest/prefer-strict-equal': 'warn',
      },
    },
    {
      files: ['*.graphql'],
      parserOptions: {
        skipGraphQLConfig: true,
        schema: [schema],
      },
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
        'no-extra-boolean-cast': 'off',
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
        '@typescript-eslint/no-shadow': 'error',
        // 'id-denylist': ['error', 'FC', 'React.FC', 'React.FunctionComponent'],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'import/first': 0,
        'import/extensions': [
          'error',
          'never',
          { ts: 'never', json: 'always' },
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: 'req|_' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'class', format: ['PascalCase'] },
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
          { selector: 'property', format: ['camelCase', 'PascalCase'] },
          {
            selector: 'objectLiteralProperty',
            format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
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
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, typedefs: false, classes: false },
        ],
        '@typescript-eslint/no-unused-expressions': 'warn',
        'no-unused-expressions': 'off',
        'no-unused-vars': 0,
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'new-cap': 'warn',
        'require-path-exists/exists': [0],
      },
    },
    {
      files: ['**_spec.js', '**.test.js', '**/__mocks__/**.js'],
      rules: {
        // See https://github.com/benmosher/eslint-plugin-import/issues/458
        'import/no-extraneous-dependencies': 0,
        'dot-notation': [0],
      },
      env: {
        node: true,
        jest: true,
      },
    },
    {
      files: ['**.test.ts', 'integration-util.ts'],
      env: {
        node: true,
        jest: true,
      },
    },
  ],
};
