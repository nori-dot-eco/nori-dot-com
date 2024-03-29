import type { Linter } from 'eslint';

import { jsdocRules, noUnusedVarsRule } from './settings/misc';
import { namingConventionRules } from './settings/naming-conventions';

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = [...jsExtensions, ...tsExtensions];

export = {
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
      files: ['README.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:prettier/recommended', 'plugin:md/recommended'],
      rules: {
        'md/remark': [
          'error',
          {
            plugins: [['lint-maximum-line-length', 120]],
          },
        ],
        'prettier/prettier': [
          'error',
          /**
           * Important to force prettier to use “markdown” parser - otherwise it wouldn't be able to parse *.md files.
           * You also can configure other options supported by prettier here - “prose-wrap” is
           * particularly useful for *.md files.
           */
          { parser: 'markdown' },
        ],
      },
    },
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
        'plugin:prettier/recommended', // todo define prettier.rc rules in this file
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
        'jest-extended',
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
        'unicorn/prefer-ternary': ['error', 'only-single-line'],
        'unicorn/filename-case': ['warn', { case: 'kebabCase' }],
        'unicorn/no-useless-promise-resolve-reject': [0],
        'unicorn/prevent-abbreviations': [
          'error',
          {
            allowList: {
              seedDb: true,
              req: true,
              res: true,
              NConfConfig: true,
              params: true,
              args: true,
              Args: true,
              getStaticProps: true,
              Lib: true,
            },
            ignore: ['[a-z]'],
          },
        ],
        'unicorn/prefer-spread': [0], // todo enable
        'eslint-comments/require-description': ['error'], // requires eslint directive comments to have descriptions
        'eslint-comments/disable-enable-pair': [
          'error',
          { allowWholeFile: true }, // allows using eslint-disable directives for whole-file disables
        ],
        'eslint-comments/no-unused-disable': ['error'],
        'no-restricted-syntax': [
          'error',
          'ForStatement',
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
        'import/no-cycle': [0], // todo enable this after fixing all cycles
        'import/extensions': [
          'error',
          'never',
          { ts: 'never', json: 'always' },
        ],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            // groups: [
            //   'builtin',
            //   'external',
            //   'internal',
            //   'parent',
            //   'sibling',
            //   'index',
            //   'object',
            //   'type',
            // ],
          },
        ],
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
      extends: [
        'plugin:@graphql-eslint/schema-recommended',
        'plugin:@graphql-eslint/relay',
      ],
      rules: {
        '@graphql-eslint/known-directives': 0,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0, // todo enable (Requires strict null checks enabled)
        '@typescript-eslint/prefer-nullish-coalescing': 0, // todo enable (Requires strict null checks enabled)
        '@typescript-eslint/no-unnecessary-condition': 0, // todo enable (Requires strict null checks enabled)
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
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        ...noUnusedVarsRule,
        ...namingConventionRules,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        // '@typescript-eslint/no-explicit-any': [
        //   'error',
        //   { ignoreRestArgs: true },
        // ], // todo enable
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
      extends: ['plugin:jest/recommended', 'plugin:jest-extended/all'],
      files: [
        '**.test.js',
        '**/__mocks__/**.js',
        '**/__mocks__/**.ts',
        '**.test.ts',
        '**.test.tsx',
        'integration-util.ts',
      ],
      env: { node: true, jest: true },
      rules: {
        'dot-notation': [0],
        '@typescript-eslint/dot-notation': [0],
        'jest/prefer-strict-equal': 'warn',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: { 'react/jsx-props-no-spreading': ['off'] },
    },
    {
      extends: ['airbnb-base', 'plugin:toml/standard'],
      files: ['*.toml'],
    },
    {
      files: ['*'],
      plugins: ['only-warn'],
    },
  ],
} satisfies Linter.Config;
