module.exports = {
  overrides: [
    {
      files: ['./**/*.ts'],
      rules: {
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
      },
    },
  ],
};
