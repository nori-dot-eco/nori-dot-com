import { bignumber, round } from 'mathjs';

type BigNumberArgument = Parameters<typeof bignumber>[0];

export const multiply = (x: BigNumberArgument, y: BigNumberArgument): number =>
  bignumber(x).mul(bignumber(y)).toNumber();

export const divide = (x: BigNumberArgument, y: BigNumberArgument): number =>
  bignumber(x).div(bignumber(y)).toNumber();

export const add = (x: BigNumberArgument, y: BigNumberArgument): number =>
  bignumber(x).add(bignumber(y)).toNumber();

export const subtract = (x: BigNumberArgument, y: BigNumberArgument): number =>
  bignumber(x).sub(bignumber(y)).toNumber();

export const roundToDigit = (
  number: BigNumberArgument,
  numberOfDigits: number
): number => round(bignumber(number), numberOfDigits).toNumber();

export { unit } from 'mathjs';
