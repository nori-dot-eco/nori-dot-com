/* eslint-disable jsdoc/require-example, jsdoc/require-jsdoc */
import type {
  AnnualCrop,
  CoverCrop,
  OrchardOrVineyardCrop,
  PerennialCrop,
} from '..';
import type {
  HistoricCRPLandManagement,
  HistoricNonCRPLandManagement,
} from '../specification';

export const isOrchardOrVineyardCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is OrchardOrVineyardCrop => {
  return (crop as OrchardOrVineyardCrop).prune !== undefined;
};

export const isCoverCrop = (
  crop: AnnualCrop | CoverCrop | OrchardOrVineyardCrop | PerennialCrop
): crop is CoverCrop => {
  return (crop as CoverCrop).classification === 'annual cover';
};

export const isHistoricCRPLandManagement = (
  historicLandManagement:
    | HistoricNonCRPLandManagement
    | HistoricCRPLandManagement
): historicLandManagement is HistoricCRPLandManagement => {
  return (historicLandManagement as HistoricCRPLandManagement).crp === 'yes';
};

export const isHistoricNonCRPLandManagement = (
  historicLandManagement:
    | HistoricNonCRPLandManagement
    | HistoricCRPLandManagement
): historicLandManagement is HistoricNonCRPLandManagement => {
  return (historicLandManagement as HistoricNonCRPLandManagement).crp === 'no';
};
