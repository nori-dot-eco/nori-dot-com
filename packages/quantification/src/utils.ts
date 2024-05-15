import { divide, multiply } from '@nori-dot-com/math';

import { ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C } from './constants';

export const convertM2ToAcres = ({ m2 }: { m2: number }): number => {
  return multiply(m2, 0.000_247_105_381_467_17);
};

/**
 * Converts grams per meter squared and a map area in meters squared to the total tonnes of CO2e
 *
 */
export const convertGramsPerM2ToTonnes = ({
  gramsPerM2,
  mapUnitAreaInM2,
}: {
  gramsPerM2: number;
  mapUnitAreaInM2: number;
}): number => {
  const gramsOfCarbonForMapUnitInM2 = multiply(gramsPerM2, mapUnitAreaInM2);
  const tonnesOfCarbonForMapUnit = divide(
    gramsOfCarbonForMapUnitInM2,
    1_000_000 // 1 million
  );
  const tonnesOfCO2eForMapUnit = multiply(
    tonnesOfCarbonForMapUnit,
    ATOMIC_WEIGHT_RATIO_OF_CO2_TO_C
  );
  return tonnesOfCO2eForMapUnit;
};
