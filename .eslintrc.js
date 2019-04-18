module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript', 'import'],
  rules: {
    'typescript/member-ordering': 'warn',
    'typescript/class-name-casing': 'warn',
    'typescript/member-ordering': 'warn',
    'typescript/member-naming': 'warn',
    'typescript/no-unused-vars': 'error',
  },
  overrides: {
    files: ['**/*.ts'],
    rules: {
      'no-unused-vars': 0,
      'import/no-unresolved': 'off',
      'no-undef': 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',
      'new-cap': 'warn',
      'require-path-exists/exists': [0],
    },
  },
};
