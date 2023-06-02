import path = require('path');

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

/**
 * Rules that define how things can be named in code.
 *
 * @see https://typescript-eslint.io/rules/naming-convention/
 */
export const namingConventionRules = {
  camelcase: [0], // replaced by @typescript-eslint/naming-convention rules
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: 'class', format: ['PascalCase'] },
    {
      selector: ['function', 'classMethod'],
      format: ['camelCase'],
      leadingUnderscore: 'allow', // todo constrain this, use private methods instead
    },
    {
      selector: ['variable'],
      format: [
        'camelCase',
        'UPPER_CASE',
        'PascalCase', // todo remove PascalCase
      ],
    },
    { selector: 'typeLike', format: ['PascalCase'] },
    {
      selector: ['typeProperty', 'classProperty'],
      format: ['camelCase'],
      leadingUnderscore: 'allow', // todo constrain this, use private fields instead
    },
    {
      selector: ['parameter'],
      format: ['camelCase'],
      custom: {
        regex: '^_?[a-z][a-zA-Z0-9]*$', // todo constrain this, disallow leading underscore unless unused
        match: true,
      },
    },
    {
      selector: ['parameter'],
      format: ['camelCase'],
      modifiers: ['unused'],
      leadingUnderscore: 'require',
    },
    {
      selector: ['variable', 'objectLiteralProperty'],
      modifiers: ['destructured'],
      format: ['camelCase', 'UPPER_CASE'],
    },
    {
      selector: ['variable', 'objectLiteralProperty'],
      modifiers: ['destructured', 'unused'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
    {
      selector: ['variable'],
      modifiers: ['unused'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
    {
      selector: ['objectLiteralProperty'],
      modifiers: ['unused'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
  ],
};

/**
 * Disables the eslint no-unused-vars rule and replaces it with the typescript version.
 *
 * @see https://typescript-eslint.io/rules/no-unused-vars/
 */
export const noUnusedVarsRule = {
  'no-unused-vars': 0, // replaced by @typescript-eslint/no-unused-vars
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '_',
      args: 'all',
      caughtErrors: 'all',
      ignoreRestSiblings: true,
      varsIgnorePattern: '_',
    },
  ],
};

export const jsdocRules = {
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
  'jsdoc/tag-lines': [
    'error',
    'never',
    {
      startLines: 1,
    },
  ],
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
  'jsdoc/valid-types': 1,
};

export const jsonSchemaRules = {
  ...jsdocRules,
  'jsdoc/require-example': [
    'error',
    {
      contexts: ['any'],
      exemptedBy: ['inheritdoc', 'packageDocumentation', 'internal'],
    },
  ],
  'jsdoc/check-tag-names': ['error', { definedTags: ['internal'] }],
  'jsdoc/require-jsdoc': [
    'error',
    {
      contexts: ['any', 'TSInterfaceDeclaration'],
    },
  ],
  'jsdoc/require-returns-type': [
    'error',
    {
      contexts: ['any'],
    },
  ],
};

export const parserOptions = ({
  typescript,
  react,
  dir,
  projectDirectories = ['./tsconfig.json'],
}: ReactOptions) => ({
  ...(typescript && {
    tsconfigRootDir: dir,
    project: projectDirectories.map((p) => path.join(dir, p)),
  }),
  ecmaVersion: 'latest',
  sourceType: 'module',
  ...(react && {
    ecmaFeatures: {
      jsx: true,
    },
  }),
});

export const react = ({ rules, dir, typescript, next }: NextOptions) => ({
  parserOptions: parserOptions({ typescript, react: true, dir }),
  overrides: [
    ...(next
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
      : []),
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

export const importRules = ({
  dir,
  packageDirectories = ['.'],
}: Pick<ReactOptions, 'dir'> & Pick<GeneralOptions, 'packageDirectories'>) => {
  return {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        packageDir: packageDirectories.map((p) => path.join(dir, p)),
      },
    ],
  };
};

/**
 * Disables the eslint dot-notation rule and replaces it with the typescript version.
 *
 * @see https://typescript-eslint.io/rules/dot-notation/
 */
export const dotNotationRules = {
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',
} as const;

export const reactBase = ({
  dir,
  typescript = true,
  next = true,
  packageDirectories = ['.'],
}: Pick<NextOptions, 'next' | 'dir' | 'typescript'> &
  Pick<GeneralOptions, 'packageDirectories'>) => ({
  extends: '@nori-dot-com/eslint-config-nori',
  ...react({
    rules: importRules({ dir, packageDirectories }),
    dir,
    typescript,
    next,
  }),
});
