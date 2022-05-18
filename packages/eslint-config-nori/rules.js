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

module.exports = { jsdocRules, jsonSchemaRules };
