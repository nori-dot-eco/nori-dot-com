import { multiply } from '@nori-dot-com/math';

export const convertM2ToAcres = ({ m2 }: { m2: number }): number => {
  return multiply(m2, 0.000_247_105_381_467_17);
};
