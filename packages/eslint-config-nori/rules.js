const path = require('path');

const jsdocRules = {
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
  'jsdoc/valid-types': 1,
};

const jsonSchemaRules = {
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

const parserOptions = ({
  typescript,
  react,
  dir,
  projectDirectories = ['./tsconfig.json'],
}) => ({
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

const react = ({ rules, dir, typescript, next }) => ({
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

const importRules = ({ dir, packageDirectories = ['.'] }) => {
  return {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        packageDir: packageDirectories.map((p) => path.join(dir, p)),
      },
    ],
  };
};

const reactBase = ({
  dir,
  typescript = true,
  next = true,
  packageDirectories = ['.'],
}) => ({
  extends: '@nori-dot-com/eslint-config-nori',
  ...react({
    rules: importRules({ dir, packageDirectories }),
    dir,
    typescript,
    next,
  }),
});

module.exports = {
  jsdocRules,
  jsonSchemaRules,
  reactBase,
  parserOptions,
  importRules,
};
