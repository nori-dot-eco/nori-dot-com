import { bignumber, round } from 'mathjs';

type BigNumberArg = Parameters<typeof bignumber>[0];

export const multiply = (x: BigNumberArg, y: BigNumberArg): number =>
  bignumber(x).mul(bignumber(y)).toNumber();

export const divide = (x: BigNumberArg, y: BigNumberArg): number =>
  bignumber(x).div(bignumber(y)).toNumber();

export const add = (x: BigNumberArg, y: BigNumberArg): number =>
  bignumber(x).add(bignumber(y)).toNumber();

export const subtract = (x: BigNumberArg, y: BigNumberArg): number =>
  bignumber(x).sub(bignumber(y)).toNumber();

export const roundToDigit = (
  number: BigNumberArg,
  numberOfDigits: number
): number => round(bignumber(number), numberOfDigits).toNumber();

export { unit } from 'mathjs';
