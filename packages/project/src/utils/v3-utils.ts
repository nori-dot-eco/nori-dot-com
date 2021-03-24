/* eslint-disable jsdoc/require-example, jsdoc/require-jsdoc */
import type {
  AnnualCrop,
  CoverCrop,
  OrchardOrVineyardCrop,
  PerennialCrop,
} from '..';

export const isOrchardOrVinyardCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is OrchardOrVineyardCrop => {
  return (crop as OrchardOrVineyardCrop).prune !== undefined;
};

export const isCoverCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is CoverCrop => {
  return (crop as CoverCrop).classification === 'annual cover';
};
