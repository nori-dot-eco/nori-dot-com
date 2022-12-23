import * as fs from 'fs';

import type { Project } from '../src/v4-specification';
import { validateProjectData } from '../src/validation';

export const main = (): void => {
  const input = fs.readFileSync(0, 'utf8');
  const result = validateProjectData(JSON.parse(input) as Project);
  if (!result.valid) {
    console.log(JSON.stringify(result.errors, null, 4));
    process.exit(1);
  }
};

main();
