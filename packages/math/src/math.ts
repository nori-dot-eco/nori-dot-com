import * as math from 'mathjs';

export const multiply = (x: number, y: number): number =>
  math.number(
    math.multiply(math.bignumber(x), math.bignumber(y)) as math.BigNumber
  ) as number;

export const divide = (x: number, y: number): number =>
  math.number(
    math.divide(math.bignumber(x), math.bignumber(y)) as math.BigNumber
  ) as number;

export const add = (x: number, y: number): number =>
  math.number(
    math.add(math.bignumber(x), math.bignumber(y)) as math.BigNumber
  ) as number;

export const subtract = (x: number, y: number): number =>
  math.number(
    math.subtract(math.bignumber(x), math.bignumber(y)) as math.BigNumber
  ) as number;

export const roundToDigit = (number: number, numberOfDigits: number): number =>
  math.number(
    math.round(math.bignumber(number), math.bignumber(numberOfDigits))
  ) as number;
