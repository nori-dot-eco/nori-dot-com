import { bignumber, round } from 'mathjs';

type BigNumberArgument = Parameters<typeof bignumber>[0];

interface FormatNumberOptions {
  allowString?: boolean;
  defaultToUse?: string;
  localeOptions?: Parameters<typeof Number.prototype.toLocaleString>[1];
}

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

/**
 * Formats a number (by default to one decimal place and comma separators). If the input is not a finite number it will use a default string.
 *
 * @see [toLocale​String options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) for localeOptions:
 * @example
 * formatNumber(1000.1000); // outputs 1,000.1
 */
export const formatNumber = (
  numberToFormat: unknown,
  {
    allowString = false,
    defaultToUse = '$ - -',
    localeOptions = {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    },
  }: FormatNumberOptions = { defaultToUse: '$ - -' }
): string => {
  const formattedNumber =
    allowString && typeof numberToFormat === 'string'
      ? Number(numberToFormat)
      : numberToFormat;

  return !Number.isNaN(formattedNumber) &&
    Number.isFinite(formattedNumber) &&
    typeof formattedNumber === 'number'
    ? formattedNumber.toLocaleString('en-US', localeOptions)
    : defaultToUse;
};

export { unit } from 'mathjs';
