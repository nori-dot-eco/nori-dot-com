const jsonSchemaRules = {
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

module.exports = { jsonSchemaRules };
