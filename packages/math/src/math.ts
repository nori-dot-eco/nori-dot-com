import { bignumber, round } from 'mathjs';

export const multiply = (x: number, y: number): number =>
  bignumber(x).mul(bignumber(y)).toNumber();

export const divide = (x: number, y: number): number =>
  bignumber(x).div(bignumber(y)).toNumber();

export const add = (x: number, y: number): number =>
  bignumber(x).add(bignumber(y)).toNumber();

export const subtract = (x: number, y: number): number =>
  bignumber(x).sub(bignumber(y)).toNumber();

export const roundToDigit = (number: number, numberOfDigits: number): number =>
  round(bignumber(number), numberOfDigits).toNumber();

export { unit } from 'mathjs';
