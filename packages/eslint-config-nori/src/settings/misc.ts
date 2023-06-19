import type { Linter } from 'eslint';

/**
 * Disables the eslint no-unused-vars rule and replaces it with the typescript version.
 *
 * @see https://typescript-eslint.io/rules/no-unused-vars/
 */
export const noUnusedVarsRule: Linter.Config['overrides'][number]['rules'] = {
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

export const jsdocRules: Linter.Config['overrides'][number]['rules'] = {
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

/** A stricter JSDOC configuration for JSON schema heavy projects. */
export const jsonSchemaRules: Linter.Config['overrides'][number]['rules'] = {
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
