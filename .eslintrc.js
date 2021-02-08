module.exports = {
  parser: '@typescript-eslint/parser',
  extends: '@nori-dot-com/eslint-config-nori',
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
};
