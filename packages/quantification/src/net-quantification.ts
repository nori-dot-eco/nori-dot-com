import { add, subtract } from '@nori-dot-com/math';

import type {
  AnnualTotals,
  AnnualTotalItem,
  UnadjustedGrandfatheredTotals,
} from './quantification';

export type NetQuantificationInput = {
  unadjustedGrandfatheredTonnesPerYear: {
    [year: string]: Pick<UnadjustedGrandfatheredTotals[string], 'amount'>;
  };
}[];

/**
 * Calculates the net tonnes removed accounting for years with emissions. Years with emissions (represented
 * by a negative number) should be reduced to zero and any tonnes removed should be reduced by the emitted
 * amount.
 *
 * Algorithm overview:
 * 1. Years with negative numbers are set to zero
 * 2. The amount emitted will be debited from the same vintage of other fields
 * 3. Should the amount emitted exceed the amount available from the vintage year, continue
 * to the next vintage year in the same field
 * 4. Continue with steps 2 and 3, wrapping from the last field to the first, and from the
 * last vintage year to the first in each step
 * 5. Should the negative amount exceed the total tonnes available, the negative amount should
 * persist in the year it originated
 *
 * An example:
 *
 * Starting with:
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | -30  | 9    |
 * | B     | 10   | 10   | 9    |
 *
 * 30 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | 0    | 9    |
 * | B     | 10   | 10   | 9    |
 *
 * 20 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | 0    | 9    |
 * | B     | 10   | 0    | 9    |
 *
 * 11 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | 0    | 0    |
 * | B     | 10   | 0    | 9    |
 *
 * 2 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | 0    | 0    |
 * | B     | 10   | 0    | 0    |
 *
 * 0 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 8    | 0    | 0    |
 * | B     | 10   | 0    | 0    |
 * | final | 18   | 0    | 0    |
 *
 */
export const getNetQuantificationProjection = (
  quantificationSummaries: NetQuantificationInput,
  logger?: Pick<Console, 'debug' | 'table'>
): AnnualTotalItem[][] => {
  const netQuantifications: AnnualTotals[] = quantificationSummaries.map(
    (quantificationSummary) =>
      Object.fromEntries(
        Object.entries(
          quantificationSummary.unadjustedGrandfatheredTonnesPerYear
        ).map(([year, { amount }]) => [year, amount])
      )
  );

  // Get the set of years in all quantifications
  const years = new Set<string>();
  for (const quantification of netQuantifications) {
    for (const year of Object.keys(quantification)) {
      years.add(year);
    }
  }

  /**
   * CAUTION -- years are represented as strings and sorted alphabetically. If for some reason, we
   * begin supporting years < 1000 or > 9999, we'll need to rework this sort
   */
  const yearsOrderedAsc = Array.from(years.values()).sort();
  logger?.debug('All years:', yearsOrderedAsc);

  // No guarantee that all fields have data for each year, so we need to add zeroes for the missing years
  for (const quantification of netQuantifications) {
    for (const year of years) {
      if (quantification[year] === undefined || quantification[year] === null) {
        quantification[year] = 0;
      }
    }
  }

  let rowIndex = 0;
  let colIndex = 0;
  let debt = 0;
  // "Year-first" traversal -- iterate through all fields in a year before moving on
  while (colIndex < yearsOrderedAsc.length) {
    while (rowIndex < netQuantifications.length) {
      const yearIndex = yearsOrderedAsc[colIndex];
      const value = netQuantifications[rowIndex][yearIndex];
      logger?.debug(`Visiting [${rowIndex}, ${yearIndex}] = ${value}`);

      if (value < 0) {
        logger?.debug(`Found negative number (${value}), adding to debt`);
        debt = add(debt, value);
        netQuantifications[rowIndex][yearIndex] = 0;
      }

      if (debt < 0) {
        logger?.debug(`Accounting for debt of ${debt}`);
        let accountingRowIndex = (rowIndex + 1) % netQuantifications.length;
        let accountingColIndex = colIndex;
        let accountingYearIndex = yearsOrderedAsc[accountingColIndex];
        while (debt < 0) {
          const accountingCellValue =
            netQuantifications[accountingRowIndex][accountingYearIndex];

          logger?.debug(
            `Accounting visiting [${accountingRowIndex}, ${accountingYearIndex}] = ${accountingCellValue}`
          );

          // Core logic: the amount to take is the lesser of the absolute value of the debt or the
          // the amount available
          const amountAvailable = Math.max(accountingCellValue, 0);
          const amountToTake = Math.min(amountAvailable, Math.abs(debt));
          const cellRemainder = subtract(accountingCellValue, amountToTake);
          netQuantifications[accountingRowIndex][accountingYearIndex] =
            cellRemainder;
          debt = add(debt, amountToTake);

          logger?.debug(
            `Removing ${amountToTake} from [${accountingRowIndex}, ${accountingYearIndex}] = ${cellRemainder}`
          );
          logger?.debug(`Debt left: ${debt}`);
          logger?.table(netQuantifications);

          // Go to the next row
          accountingRowIndex =
            (accountingRowIndex + 1) % netQuantifications.length;
          logger?.debug(`Advancing to next field (row ${accountingRowIndex})`);

          // If we're back to the columns's starting row, advance to the next column
          if (accountingRowIndex === rowIndex) {
            accountingColIndex =
              (accountingColIndex + 1) % yearsOrderedAsc.length;
            accountingYearIndex = yearsOrderedAsc[accountingColIndex];
            logger?.debug(`Advancing to next year (col ${accountingRowIndex})`);
          }

          // If we get back to where we started, we can't account for the debt
          // Set the cell's value to the remainder, clear the debt and break
          if (
            accountingRowIndex === rowIndex &&
            accountingColIndex === colIndex
          ) {
            logger?.debug(
              `Accounting arrived back to start [${accountingRowIndex}, ${accountingYearIndex}] with debt of ${debt}`
            );
            netQuantifications[accountingRowIndex][accountingYearIndex] = debt;
            debt = 0;
            break;
          }
        }
      }

      rowIndex += 1;
      logger?.table(netQuantifications);
    }

    rowIndex = 0;
    colIndex += 1;
  }

  return netQuantifications.map((netQuantification) =>
    Object.entries(netQuantification).map(([year, value]) => ({ year, value }))
  );
};
