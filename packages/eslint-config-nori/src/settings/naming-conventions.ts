import type { Linter } from 'eslint';

/** Ignore property names that require quotes (e.g., 'Content-Type') */
const ignorePropertiesThatRequireQuotes: Linter.RuleLevelAndOptions[number] = {
  selector: [
    'classProperty',
    'objectLiteralProperty',
    'typeProperty',
    'classMethod',
    'objectLiteralMethod',
    'typeMethod',
    'accessor',
    'enumMember',
  ],
  format: null, // eslint-disable-line unicorn/no-null -- rule requires null instead of undefined
  modifiers: ['requiresQuotes'],
};

/**
 * Rules that define how things can be named in code.
 *
 * @see https://typescript-eslint.io/rules/naming-convention/
 */
export const namingConventionRules: Linter.Config['overrides'][number]['rules'] =
  {
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
      { ...ignorePropertiesThatRequireQuotes },
    ],
  };
