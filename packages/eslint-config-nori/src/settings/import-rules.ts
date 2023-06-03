import path = require('path');

import type { Linter } from 'eslint';

export const importRules = ({
  dir,
  packageDirectories = ['.'],
}: {
  dir: string;
  packageDirectories?: string[];
}): Linter.Config['overrides'][number]['rules'] => {
  return {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        packageDir: packageDirectories.map((p) => path.join(dir, p)),
      },
    ],
  };
};
