import * as readline from 'node:readline';

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
  console.log(validateV4(input as unknown as Project));
};

main();
