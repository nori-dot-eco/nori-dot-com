import path = require('path');

import type { Linter } from 'eslint';

export const parserOptions = ({
  typescript,
  react,
  dir,
  projectDirectories = ['./tsconfig.json'],
}: {
  typescript: boolean;
  react: boolean;
  dir: string;
  projectDirectories?: string[];
}): Linter.ParserOptions => ({
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
