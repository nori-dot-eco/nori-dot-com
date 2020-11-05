import { multiply } from '@nori-dot-com/math';

export const convertM2ToAcres = ({ m2 }: { m2: number }): number => {
  return multiply(m2, 0.00024710538146717);
};
