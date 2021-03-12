import { convertFromGgitToProject } from '../../index';

import { ggitInputData, v3Data } from './fixtures';

describe('convertFromGgitToProject', () => {
  it('should convert v2 to v1 project data', () => {
    expect(convertFromGgitToProject({ ggitInputData })).toStrictEqual<
      ReturnType<typeof convertFromGgitToProject>
    >(v3Data);
  });
});
