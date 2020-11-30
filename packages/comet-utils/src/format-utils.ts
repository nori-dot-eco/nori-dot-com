import type { AdjustedGrandfatheredTotals } from './index';
import { CURRENT_YEAR, MAXIMUM_GRANDFATHERABLE_YEARS } from './index';

export const createAdjustmentMatrix = ({
  adjustedGrandfatheredTonnesPerYear,
}: {
  adjustedGrandfatheredTonnesPerYear: AdjustedGrandfatheredTotals[];
}): (string | number)[][] => {
  const projectMatrix = adjustedGrandfatheredTonnesPerYear.reduce(
    (projectAnnualMatrix, adjustedFieldTotals) => {
      const adjustedFieldTotalsWithMissingYears: AdjustedGrandfatheredTotals[] = Array.from(
        { length: MAXIMUM_GRANDFATHERABLE_YEARS },
        (_, i) => {
          const year = CURRENT_YEAR - (i + 1);
          return adjustedFieldTotals[year]
            ? { [year]: adjustedFieldTotals[year] }
            : {
                [year]: {
                  unadjusted: undefined,
                  adjustment: undefined,
                  adjusted: undefined,
                  method: undefined,
                  averagePerAcre: undefined,
                  totalAcres: undefined,
                },
              };
        }
      ).reverse();
      const fieldMatrix = adjustedFieldTotalsWithMissingYears.reduce(
        (fieldAnnualMatrix, adjustedYear) => {
          const [
            [year, { unadjusted, adjustment, adjusted, method }],
          ] = Object.entries(adjustedYear);
          return [
            ...fieldAnnualMatrix,
            method,
            unadjusted,
            adjustment,
            adjusted,
          ];
        },
        []
      );
      projectAnnualMatrix.push(fieldMatrix);
      return projectAnnualMatrix;
    },
    []
  );
  return projectMatrix;
};
