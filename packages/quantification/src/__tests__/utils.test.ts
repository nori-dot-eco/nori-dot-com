import { convertM2ToAcres } from '../utils';

describe('convertM2ToAcres', () => {
  it('should convert M2 to acres', () => {
    expect(convertM2ToAcres({ m2: 4046.856_422_399_924 })).toEqual<
      ReturnType<typeof convertM2ToAcres>
    >(1);
  });
});
