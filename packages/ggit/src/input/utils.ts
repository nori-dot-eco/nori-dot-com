import type { Input } from '..';

export type Crp = Pick<
  Input.Cropland,
  | 'Pre-1980'
  | 'CRPType'
  | 'CRPStartYear'
  | 'CRPEndYear'
  | 'PreCRPManagement'
  | 'PreCRPTillage'
  | 'PostCRPManagement'
  | 'PostCRPTillage'
> & { CRP: 'yes' };

export type NonCrp = Pick<
  Input.Cropland,
  'Pre-1980' | 'Year1980-2000' | 'Year1980-2000_Tillage'
> & {
  CRP: 'no';
  CRPType: 'none';
  CRPStartYear: [];
  CRPEndYear: [];
  PreCRPManagement: [];
  PreCRPTillage: [];
  PostCRPManagement: [];
  PostCRPTillage: [];
};

export const isHistoricCrpLandManagement = (
  data: Crp | NonCrp
): data is Crp => {
  return data.CRP === 'yes';
};

export const isHistoricNonCrpLandManagement = (
  data: Crp | NonCrp
): data is NonCrp => {
  return data.CRP === 'no';
};
