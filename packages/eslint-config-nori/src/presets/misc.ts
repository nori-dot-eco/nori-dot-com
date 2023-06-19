import path = require('path');

import type { Linter } from 'eslint';

import { parserOptions } from '../settings/parser-options';
import { importRules } from '../settings/import-rules';

interface GeneralOptions {
  packageDirectories: string[];
}

interface ReactOptions {
  typescript: boolean;
  react: boolean;
  dir: string;
  projectDirectories?: string[];
}

interface NextOptions
  extends Omit<ReactOptions, 'projectDirectories' | 'react'> {
  rules: Record<string, unknown>;
  next: boolean;
}

export const react = ({
  rules,
  dir,
  typescript,
  next,
}: NextOptions): Linter.BaseConfig => ({
  parserOptions: parserOptions({ typescript, react: true, dir }),
  overrides: [
    ...((next
      ? [
          {
            files: ['*'],
            rules: {
              '@next/next/no-html-link-for-pages': [
                'error',
                path.join(dir, './src/pages'),
              ],
            },
          },
        ]
      : []) as Linter.BaseConfig['overrides']),
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.js'],
      processor: '@graphql-eslint/graphql',
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react-hooks/recommended',
      ].concat(
        '@nori-dot-com/eslint-config-nori' // re-applies base config last as this files glob is also used there
      ),
      rules: {
        ...rules,
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.tsx', '.jsx', '.js'] },
        ],
        'react/require-default-props': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-fragments': [1, 'element'],
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        'react/no-multi-comp': ['warn', { ignoreStateless: true }], // todo remove ignoreStateless
        'react/jsx-curly-brace-presence': 0, // todo deprecate
      },
    },
  ],
});

export const reactBase = ({
  dir,
  typescript = true,
  next = true,
  packageDirectories = ['.'],
}: Pick<NextOptions, 'next' | 'dir' | 'typescript'> &
  Pick<GeneralOptions, 'packageDirectories'>): Linter.BaseConfig => ({
  extends: '@nori-dot-com/eslint-config-nori',
  ...react({
    rules: importRules({ dir, packageDirectories }),
    dir,
    typescript,
    next,
  }),
});
