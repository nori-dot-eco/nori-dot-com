module.exports = {
  extends: '@nori-dot-com/eslint-config-nori',
  overrides: [
    {
      files: ['**/src/**/*.ts'],
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
      processor: '@graphql-eslint/graphql',
      rules: {
        'cypress/no-force': 'error',
        'cypress/assertion-before-screenshot': 'error',
        'cypress/require-data-selectors': 'error',
        'cypress/no-pause': 'error',
        'jest/expect-expect': ['off'],
        'jest/valid-expect-in-promise': ['off'],
        'jest/valid-expect': ['off'],
        'jest/no-standalone-expect': ['off'],
        'no-useless-constructor': ['off'],
        'unicorn/consistent-function-scoping': ['off'], // defining a function in the top scope of a test file makes the function global
        'jest/valid-describe-callback': ['off'], // cypress-grep uses a different implementation for describe blocks
        'dot-notation': [
          'warn',
          {
            allowPattern: '^[A-Z]+', // allow upper pascal cased index access (e.g., allows process.env['NODE_ENV'])
          },
        ], // this package uses a strict set of tsconfig that uses noPropertyAccessFromIndexSignature which can break this rule
        'no-unused-expressions': 0, // https://github.com/cypress-io/eslint-plugin-cypress#chai-and-no-unused-expressions
        'chai-friendly/no-unused-expressions': 'error', // https://github.com/cypress-io/eslint-plugin-cypress#chai-and-no-unused-expressions
      },
    },
  ],
};
