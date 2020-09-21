import { formatInputData } from '../index';
import type { Project } from '../index';
import * as FULL_FORMATTED_VALID_PROJECT from '../example/example.json';
import { HistoricNonCRPLandManagement } from '../specification';
import { validateProjectData } from '../validation';

const BASIC_UNFORMATTED_VALID_PROJECT: Project = {
  version: '0.1.0',
  fields: [
    {
      acres: 174.01,
      historicLandManagement: ({
        crp: 'No',
        preYear1980: 'Irrigation',
        tillageForYears1980To2000: 'Intensive Tillage',
        year1980To2000: 'Irrigated: annual crops in rotation',
      } as any) as HistoricNonCRPLandManagement,
      regenerativeStartYear: 2015,
      fieldName: 'zyt0f1mnasi',
      geojson: {
        coordinates: [
          [
            [
              [-102.02569636144796, 41.16245691933347],
              [-102.02423723974385, 41.1631353976904],
              [-102.02616843023458, 41.16184305191021],
              [-102.02569636144796, 41.16245691933347],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      cropYears: [
        {
          plantingYear: 2015,
          crops: [
            {
              name: 'corn',
              type: 'corn',
              plantingDate: '04/28/2015',
              fertilizerEvents: [
                {
                  date: '04/28/2015',
                  name: 'Corn Starter (Green Demon)',
                  lbsOfNPerAcre: null,
                  type: null,
                },
                {
                  date: '04/29/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 38.579204996202215,
                },
                {
                  date: '09/05/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 126.25917798970379,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [
                {
                  date: '09/18/2015',
                  yield: 211.88,
                  grainFruitTuber: null,
                  residueRemoved: 0,
                  yieldUnit: 'bu/ac',
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
      ],
    },
  ],
};

const BASIC_UNFORMATTED_INVALID_PROJECT: Project = {
  version: '0.1.0',
  fields: [
    {
      acres: 174.01,
      historicLandManagement: ({
        crp: 'No',
        preYear1980: 'Irrigation',
        tillageForYears1980To2000: 'Intensive Tillage',
        year1980To2000: 'Irrigated: annual crops in rotation',
      } as any) as HistoricNonCRPLandManagement,
      regenerativeStartYear: 2015,
      fieldName: 'zyt0f1mnasi',
      geojson: {
        coordinates: [
          [
            [
              [-102.02569636144796, 41.16245691933347],
              [-102.02423723974385, 41.1631353976904],
              [-102.02616843023458, 41.16184305191021],
              [-102.02569636144796, 41.16245691933347],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      cropYears: [
        {
          plantingYear: 2015,
          crops: [
            {
              name: 'corn',
              type: 'corn plant' as any,
              plantingDate: '04/28/2015',
              fertilizerEvents: [
                {
                  date: '04/28/2015',
                  name: 'Corn Starter (Green Demon)',
                  lbsOfNPerAcre: null,
                },
                {
                  date: '04/29/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 38.579204996202215,
                },
                {
                  date: '09/05/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 126.25917798970379,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [
                {
                  date: '09/18/2015',
                  yield: 211.88,
                  grainFruitTuber: null,
                  residueRemoved: 0,
                  yieldUnit: 'bu/ac',
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
      ],
    },
  ],
};

const BASIC_UNFORMATTED_INVALID_PROJECT_NULL_REGEN_START_YEAR: Project = {
  version: '0.1.0',
  fields: [
    {
      acres: 174.01,
      historicLandManagement: ({
        crp: 'No',
        preYear1980: 'Irrigation',
        tillageForYears1980To2000: 'Intensive Tillage',
        year1980To2000: 'Irrigated: annual crops in rotation',
      } as any) as HistoricNonCRPLandManagement,
      regenerativeStartYear: null,
      fieldName: 'zyt0f1mnasi',
      geojson: {
        coordinates: [
          [
            [
              [-102.02569636144796, 41.16245691933347],
              [-102.02423723974385, 41.1631353976904],
              [-102.02616843023458, 41.16184305191021],
              [-102.02569636144796, 41.16245691933347],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      cropYears: [
        {
          plantingYear: 2015,
          crops: [
            {
              name: 'corn',
              type: 'corn plant' as any,
              plantingDate: '04/28/2015',
              fertilizerEvents: [
                {
                  date: '04/28/2015',
                  name: 'Corn Starter (Green Demon)',
                  lbsOfNPerAcre: null,
                },
                {
                  date: '04/29/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 38.579204996202215,
                },
                {
                  date: '09/05/2015',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 126.25917798970379,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [
                {
                  date: '09/18/2015',
                  yield: 211.88,
                  grainFruitTuber: null,
                  residueRemoved: 0,
                  yieldUnit: 'bu/ac',
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
      ],
    },
  ],
};

describe('validation', () => {
  describe('formatInputData', () => {
    it('should format strings to lowercase', () => {
      expect(
        Object.values(
          BASIC_UNFORMATTED_VALID_PROJECT.fields[0].historicLandManagement
        )
      ).toStrictEqual([
        'No',
        'Irrigation',
        'Intensive Tillage',
        'Irrigated: annual crops in rotation',
      ]);
      const formattedData = formatInputData(
        FULL_FORMATTED_VALID_PROJECT as Project
      );
      expect(
        Object.values(formattedData.fields[0].historicLandManagement)
      ).toStrictEqual([
        'no',
        'irrigation',
        'intensive tillage',
        'irrigated: annual crops in rotation',
      ]);
    });
  });
  describe('validateProjectData', () => {
    it('should return true and no errors when the data is valid', () => {
      expect(
        validateProjectData(BASIC_UNFORMATTED_VALID_PROJECT)
      ).toStrictEqual({
        valid: true,
        errors: null,
        message: 'No errors',
        formattedData: expect.anything(),
      });
    });
    it('should return false and the errors when the data is valid', () => {
      expect(
        validateProjectData(BASIC_UNFORMATTED_INVALID_PROJECT)
      ).toStrictEqual({
        valid: false,
        errors: expect.arrayContaining([expect.any(Object)]),
        message: expect.stringContaining(
          'must specify one of the allowed crop types if you are specifying an annual crop'
        ),
        formattedData: expect.anything(),
      });
    });
    describe('validation for the `fields` property', () => {
      it('should return false and the errors when the data contains an invalid number of fields', () => {
        expect(
          validateProjectData({ version: '1.0.0', fields: [] } as any)
        ).toStrictEqual({
          valid: false,
          errors: [
            {
              dataPath: '/fields',
              keyword: 'errorMessage',
              message: 'must specify 1-25 fields',
              params: {
                errors: [
                  {
                    dataPath: '/fields',
                    keyword: 'minItems',
                    message: 'should NOT have fewer than 1 items',
                    params: { limit: 1 },
                    schemaPath: '#/properties/fields/minItems',
                  },
                ],
              },
              schemaPath: '#/properties/fields/errorMessage',
            },
          ],
          message: 'data/fields must specify 1-25 fields',
          formattedData: {
            fields: [],
            version: '1.0.0',
          },
        });
      });
    });
    describe("validation for the FertilizerEvent's `type` property", () => {
      describe('default values', () => {
        describe('when type is excluded or null', () => {
          it('should return true for validation and the default value for type', () => {
            const validated = validateProjectData(
              BASIC_UNFORMATTED_VALID_PROJECT as any
            );
            expect(validated).toStrictEqual({
              valid: true,
              errors: null,
              message: 'No errors',
              formattedData: {
                version: '0.1.0',
                fields: [
                  {
                    acres: 174.01,
                    historicLandManagement: ({
                      crp: 'no',
                      preYear1980: 'irrigation',
                      tillageForYears1980To2000: 'intensive tillage',
                      year1980To2000: 'irrigated: annual crops in rotation',
                    } as any) as HistoricNonCRPLandManagement,
                    regenerativeStartYear: 2015,
                    fieldName: 'zyt0f1mnasi',
                    geojson: {
                      coordinates: [
                        [
                          [
                            [-102.02569636144796, 41.16245691933347],
                            [-102.02423723974385, 41.1631353976904],
                            [-102.02616843023458, 41.16184305191021],
                            [-102.02569636144796, 41.16245691933347],
                          ],
                        ],
                      ],
                      type: 'MultiPolygon',
                    },
                    cropYears: [
                      {
                        plantingYear: 2015,
                        crops: [
                          {
                            name: 'corn',
                            type: 'corn',
                            plantingDate: '04/28/2015',
                            fertilizerEvents: [
                              {
                                date: '04/28/2015',
                                name: 'corn starter (green demon)',
                                lbsOfNPerAcre: null,
                                type: 'mixed blends',
                              },
                              {
                                date: '04/29/2015',
                                name: 'wil corn 32-0-0 [uan]',
                                lbsOfNPerAcre: 38.579204996202215,
                                type: 'mixed blends',
                              },
                              {
                                date: '09/05/2015',
                                name: 'wil corn 32-0-0 [uan]',
                                lbsOfNPerAcre: 126.25917798970379,
                                type: 'mixed blends',
                              },
                            ],
                            organicMatterEvents: [],
                            irrigationEvents: [],
                            limingEvents: null,
                            grazingEvents: null,
                            burningEvent: null,
                            soilOrCropDisturbanceEvents: [],
                            harvestEvents: [
                              {
                                date: '09/18/2015',
                                yield: 211.88,
                                grainFruitTuber: null,
                                residueRemoved: 0,
                                yieldUnit: 'bu/ac',
                              },
                            ],
                            classification: 'annual crop',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            });
          });
        });
      });
    });
  });
});
