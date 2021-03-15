import {
  convertFromGgitToProject,
  // findCropsTaggedAsContinueFromPreviousYear,
  shiftCropsTaggedAsContinueFromPreviousYear,
} from '../../index';

import { ggitInputData, v3Data } from './fixtures';

describe('convertFromGgitToProject', () => {
  it('should convert v2 to v1 project data', () => {
    expect(convertFromGgitToProject({ ggitInputData })).toStrictEqual<
      ReturnType<typeof convertFromGgitToProject>
    >(v3Data);
  });
});

// describe('findCropsTaggedAsContinueFromPreviousYear', () => {
//   it('should find all crops tagged as ContinueFromPreviousYear', () => {
//     const croplands = ggitInputData.Cropland;
//     const cropland = croplands[0];
//     const { CropScenario: cropScenarios } = cropland;
//     expect(
//       findCropsTaggedAsContinueFromPreviousYear({ cropScenarios })
//     ).toStrictEqual<
//       ReturnType<typeof findCropsTaggedAsContinueFromPreviousYear>
//     >(null);
//   });
// });

// describe('shiftCropsTaggedAsContinueFromPreviousYear', () => {
//   it('should find all crops tagged as ContinueFromPreviousYear', () => {
//     const croplands = ggitInputData.Cropland;
//     const cropland = croplands[0];
//     const { CropScenario: cropScenarios } = cropland;
//     expect(
//       shiftCropsTaggedAsContinueFromPreviousYear({ cropScenarios })
//     ).toStrictEqual<
//       ReturnType<typeof shiftCropsTaggedAsContinueFromPreviousYear>
//     >(null);
//   });
// });
