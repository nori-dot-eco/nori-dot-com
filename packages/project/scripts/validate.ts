import { inspect } from 'util';

import { Project } from '../src/v4-specification';
import { validateProjectData } from '../src/validation';
import * as fs from 'fs';

function validateV4(
  projectJson: Project
): ReturnType<typeof validateProjectData> {
  const validatonResult = validateProjectData(projectJson);
  return validatonResult;
}

export const main = (): void => {
  const input = fs.readFileSync(0, 'utf-8');
  const result = validateV4(JSON.parse(input) as Project);
  console.log(`Valid: `, result.valid);
  if (!result.valid) {
    console.log(JSON.stringify(result.errors, null, 4));
  }
  console.log(JSON.stringify(result.formattedData, null, 4));
};

main();
