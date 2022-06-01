import type {
  AnnualTotals,
  UnadjustedQuantificationSummary,
} from './quantification';

/**
 * Calculates the net tonnes removed accounting for years with emissions. Years with emissions (represented
 * by a negative number) should be reduced to zero and any tonnes removed should be reduced by the emitted
 * amount.
 *
 * Algorithm overview:
 * 1. Years with negative numbers are set to zero
 * 2. The amount emitted will be debited from the subsequent years of the same field
 * 3. Should the amount emitted exceed the amount available from subsequent years, wrap to the
 * start year and continue to the currently considered year
 * 4. Should the amount exceed all available tonnes removed from this project, repeat step 1
 * starting with the currently considered year in the next quantification
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
 * 21 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 10   | 0    | 0    |
 * | B     | 10   | 10   | 9    |
 *
 * 11 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 0    | 0    | 0    |
 * | B     | 10   | 10   | 9    |
 *
 * 1 left
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 0    | 0    | 0    |
 * | B     | 10   | 0    | 9    |
 *
 * 0
 * | field | 2015 | 2016 | 2017 |
 * |-------|------|------|------|
 * | A     | 0    | 0    | 0    |
 * | B     | 10   | 0    | 8    |
 * | final | 10   | 0    | 8    |
 *
 */
export const getNetQuantificationProjection = (
  quantifications: Pick<
    UnadjustedQuantificationSummary,
    'somscAnnualDifferencesBetweenFutureAndBaselineScenarios'
  >[],
  logger?: Pick<Console, 'debug' | 'table'>
): AnnualTotals[] => {
  const netQuantifications: AnnualTotals[] = quantifications.map(
    (quantification) => ({
      ...quantification.somscAnnualDifferencesBetweenFutureAndBaselineScenarios,
    })
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
      if (quantification[year] === undefined) {
        quantification[year] = 0;
      }
    }
  }

  let rowIndex = 0;
  let colIndex = 0;
  let debt = 0;
  while (rowIndex < netQuantifications.length) {
    while (colIndex < yearsOrderedAsc.length) {
      const yearIndex = yearsOrderedAsc[colIndex];
      const value = netQuantifications[rowIndex][yearIndex];
      logger?.debug(`Visiting [${rowIndex}, ${yearIndex}] = ${value}`);

      if (value < 0) {
        logger?.debug(`Found negative number (${value}), adding to debt`);
        debt += value;
        netQuantifications[rowIndex][yearIndex] = 0;
      }

      if (debt < 0) {
        logger?.debug(`Accounting for debt of ${debt}`);
        // Edge case: if there's only one year, start on the next field, otherwise start on the current
        let accountingRowIndex =
          yearsOrderedAsc.length === 1
            ? rowIndex + (1 % netQuantifications.length)
            : rowIndex;
        let accountingColIndex = (colIndex + 1) % years.size;
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
          const cellRemainder = accountingCellValue - amountToTake;
          netQuantifications[accountingRowIndex][accountingYearIndex] =
            cellRemainder;
          debt += amountToTake;

          logger?.debug(
            `Removing ${amountToTake} from [${accountingRowIndex}, ${accountingYearIndex}] = ${cellRemainder}`
          );
          logger?.debug(`Debt left: ${debt}`);
          logger?.table(netQuantifications);

          // Go to the next column
          accountingColIndex =
            (accountingColIndex + 1) % yearsOrderedAsc.length;
          accountingYearIndex = yearsOrderedAsc[accountingColIndex];
          logger?.debug(`Advancing to next year (col ${accountingYearIndex})`);

          // If we're back to the row's starting year, advance to the next field
          if (accountingColIndex === colIndex) {
            accountingRowIndex =
              (accountingRowIndex + 1) % netQuantifications.length;
            logger?.debug(
              `Advancing to next field (row ${accountingRowIndex})`
            );
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

      colIndex += 1;
      logger?.table(netQuantifications);
    }

    colIndex = 0;
    rowIndex += 1;
  }

  return netQuantifications;
};
