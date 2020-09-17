const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);
require('@rushstack/eslint-config/patch-eslint6');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:require-path-exists/recommended',
    'plugin:relay/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'import',
    'sort-imports-es6-autofix',
    'require-path-exists',
    'react-hooks',
    'graphql',
    'relay',
    'jsdoc',
  ],
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
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
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
    'jsdoc/require-returns-check': [
      'error',
      {
        contexts: ['any'],
      },
    ],
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
    'import/extensions': ['error', 'never', { ts: 'never' }],
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
    'graphql/named-operations': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
      },
    ],
    'graphql/capitalized-type-name': [
      'error',
      {
        tagName: 'graphql',
        env: 'relay',
      },
    ],
    'graphql/no-deprecated-fields': [
      'error',
      {
        tagName: 'graphql',
        env: 'relay',
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        tagName: 'graphql',
        env: 'relay',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-fragments': [1, 'element'],
    'relay/generated-flow-types': 0,
    'require-path-exists/exists': [
      2,
      {
        extensions: allExtensions,
      },
    ],
  },
  overrides: [
    {
      files: ['**/cypress/**/*.js'],
      rules: {
        'spaced-comment': 0,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/extensions': ['error', 'never', { ts: 'never' }],
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/no-unused-vars': 'error',
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
        'no-unused-vars': 0,
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'new-cap': 'warn',
        'graphql/named-operations': [
          'error',
          {
            tagName: 'gql',
          },
        ],
        'graphql/capitalized-type-name': [
          'error',
          {
            tagName: 'gql',
          },
        ],
        'graphql/no-deprecated-fields': [
          'error',
          {
            tagName: 'gql',
          },
        ],
        'graphql/template-strings': [
          'error',
          {
            tagName: 'gql',
            // The following disables fragment linting errors when using fragments in tests
            // https://github.com/apollographql/eslint-plugin-graphql/issues/226#issuecomment-493706108
            env: 'apollo',
          },
        ],
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
      files: ['**.test.ts'],
      rules: {
        'dot-notation': [0],
      },
      env: {
        node: true,
        jest: true,
      },
    },
  ],
};
