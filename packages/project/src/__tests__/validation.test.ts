import { formatInputData, validateProjectData } from '../index';
import type { Project } from '../index';
import * as FULL_FORMATTED_VALID_PROJECT from '../example/example.json';
import type {
  AnnualCrop,
  HistoricNonCRPLandManagement,
} from '../specification';

type ProjectOrAny<T> = T extends Project ? Project : any;

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
const clone = (obj: Project): Project => JSON.parse(JSON.stringify(obj));

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
      const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
      expect(validateProjectData(data)).toStrictEqual<
        ReturnType<typeof validateProjectData>
      >({
        valid: true,
        errors: null,
        message: 'No errors',
        formattedData: expect.anything(),
      });
    });
    it('should return false and the errors when the data is invalid', () => {
      expect(
        validateProjectData(BASIC_UNFORMATTED_INVALID_PROJECT)
      ).toStrictEqual<ReturnType<typeof validateProjectData>>({
        valid: false,
        errors: expect.arrayContaining([expect.any(Object)]),
        message: expect.stringContaining(
          'must specify one of the allowed crop types if you are specifying an annual crop'
        ),
        formattedData: expect.anything(),
      });
    });
    describe('`Project`', () => {
      describe('validation errors', () => {
        describe('projectUnknownError', () => {
          it('should throw a validation error when an unknown error is encountered', () =>
            // todo use this desc/it combo as pattern for this test
            {
              const data = {};
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>({
                valid: false,
                errors: expect.arrayContaining([
                  expect.objectContaining({
                    error: expect.objectContaining({
                      message: 'projectUnknownError',
                    }),
                  }),
                ]),
                message: expect.stringContaining('data projectUnknownError'),
                formattedData: expect.anything(),
              });
            });
        });
      });
      describe('`fields`', () => {
        describe('when the number of fields is less than 1', () => {
          it('should throw a validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              fields: [] as Project['fields'],
            };
            expect(validateProjectData(data)).toStrictEqual<
              ReturnType<typeof validateProjectData>
            >({
              valid: false,
              // todo extend jest to expect NoriError
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'projectFieldsMinimumItemsError',
                  }),
                }),
              ]),
              message: 'data/fields projectFieldsMinimumItemsError',
              formattedData: expect.anything(),
            });
          });
        });
        describe('when the number of fields is more than 25', () => {
          it('should throw a validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              fields: Array(26).fill(BASIC_UNFORMATTED_VALID_PROJECT.fields[0]),
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'projectFieldsMaximumItemsError',
                  }),
                }),
              ]),
              message: 'data/fields projectFieldsMaximumItemsError',
              formattedData: expect.anything(),
            });
          });
        });
        describe('when fields is not an array', () => {
          it('should throw a validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              fields: 1 as any,
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'projectFieldsTypeError',
                  }),
                }),
              ]),
              message: 'data/fields projectFieldsTypeError',
              formattedData: expect.anything(),
            });
          });
        });
      });
      describe('`version`', () => {
        describe('when the type of `version` is not specified', () => {
          it('should throw a type validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              version: null as null,
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              // todo extend jest to expect NoriError
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'projectVersionTypeError',
                  }),
                }),
              ]),
              message: 'data/version projectVersionTypeError',
              formattedData: expect.anything(),
            });
          });
        });
        describe('when the type of `version` is not a string', () => {
          it('should throw a type validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              version: 1,
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'projectVersionTypeError',
                  }),
                }),
              ]),
              message: 'data/version projectVersionTypeError',
              formattedData: expect.anything(),
            });
          });
        });
        describe('when the type of `version` is a string', () => {
          it('should not throw a type validation error', () => {
            const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
            expect(validateProjectData(data)).toStrictEqual<
              ReturnType<typeof validateProjectData>
            >({
              valid: true,
              errors: null,
              message: 'No errors',
              formattedData: expect.anything(),
            });
          });
        });
      });
    });
    describe('`Field`', () => {
      describe('when a field has an unknown additional property specified', () => {
        it('should throw a validation error', () => {
          const data = {
            ...BASIC_UNFORMATTED_VALID_PROJECT,
            fields: [{ anything: 1 }] as any,
          };
          expect(
            validateProjectData(data as ProjectOrAny<typeof data>)
          ).toStrictEqual<ReturnType<typeof validateProjectData>>({
            valid: false,
            errors: expect.arrayContaining([
              expect.objectContaining({
                error: expect.objectContaining({
                  message: 'fieldUnknownAdditionalPropertyError',
                }),
              }),
            ]),
            message: expect.stringContaining(
              'data/fields/0 fieldUnknownAdditionalPropertyError'
            ),
            formattedData: expect.anything(),
          });
        });
      });
      describe('when a field in fields is missing a required property', () => {
        it('should throw a validation error', () => {
          const data = {
            ...BASIC_UNFORMATTED_VALID_PROJECT,
            fields: [{}] as any,
          };
          expect(
            validateProjectData(data as ProjectOrAny<typeof data>)
          ).toStrictEqual<ReturnType<typeof validateProjectData>>({
            valid: false,
            errors: expect.arrayContaining([
              expect.objectContaining({
                error: expect.objectContaining({
                  message: 'fieldRequiredPropertyMissing',
                }),
              }),
            ]),
            message: expect.stringContaining(
              'data/fields/0 fieldRequiredPropertyMissing'
            ),
            formattedData: expect.anything(),
          });
        });
      });
      describe('fieldName', () => {
        describe('when a fieldName is not a string', () => {
          it('should throw a validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              fields: [
                {
                  fieldName: 1,
                },
              ] as any,
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'fieldNameTypeError',
                  }),
                }),
              ]),
              message: expect.stringContaining(
                'data/fields/0/fieldName fieldNameTypeError'
              ),
              formattedData: expect.anything(),
            });
          });
        });
        describe('when a fieldName missing', () => {
          it('should throw a validation error', () => {
            const data = {
              ...BASIC_UNFORMATTED_VALID_PROJECT,
              fields: [
                {
                  fieldName: null,
                },
              ] as any,
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>({
              valid: false,
              errors: expect.arrayContaining([
                expect.objectContaining({
                  error: expect.objectContaining({
                    message: 'fieldRequiredPropertyMissing',
                  }),
                }),
              ]),
              message: expect.stringContaining(
                'data/fields/0 fieldRequiredPropertyMissing'
              ),
              formattedData: expect.anything(),
            });
          });
        });
      });
    });

    describe('`HistoricLandManagement`', () => {
      describe('default values', () => {
        describe('`type`', () => {
          describe('when the type is excluded or null', () => {
            it('should return true for validation', () => {
              const data: Project = {
                version: '0.1.0',
                fields: [
                  {
                    acres: 174.01,
                    historicLandManagement: null,
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
                    cropYears: [],
                  },
                ],
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: null,
                message: 'No errors',
                formattedData: data,
              });
            });
          });
        });
      });
    });
    describe('`CropEvent`', () => {
      describe('`date` validation', () => {
        describe('validationRules', () => {
          describe('when the crop event dates fall within years prior to the planting year', () => {
            it('should throw validation errors', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              (data.fields[0].cropYears[0]
                .crops[0] as AnnualCrop).harvestEvents[0] = {
                date: `09/18/${data.fields[0].cropYears[0].plantingYear - 1}`,
                yield: 211.88,
                grainFruitTuber: null,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: false,
                // todo extend jest to expect NoriError
                errors: expect.arrayContaining([
                  expect.objectContaining({
                    error: expect.objectContaining({
                      message: 'cropEventDateValidationRuleViolation',
                    }),
                  }),
                ]),
                message: expect.stringContaining(
                  'data/fields/0/cropYears/0/crops/0/harvestEvents/0/date cropEventDateValidationRuleViolation'
                ),
                formattedData: expect.anything(),
              });
            });
          });
          describe('when the crop event dates fall within the current planting year', () => {
            it.todo('should not throw validation errors');
          });
        });
        describe('when the type is excluded or null', () => {
          it('should return true for validation', () => {
            const data: Project = {
              version: '0.1.0',
              fields: [
                {
                  acres: 174.01,
                  historicLandManagement: null,
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
                          fertilizerEvents: [],
                          organicMatterEvents: [],
                          irrigationEvents: [],
                          limingEvents: null,
                          grazingEvents: null,
                          burningEvent: null,
                          soilOrCropDisturbanceEvents: [],
                          harvestEvents: [
                            {
                              date: null,
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
            expect(validateProjectData(data)).toStrictEqual<
              ReturnType<typeof validateProjectData>
            >({
              valid: true,
              errors: null,
              message: 'No errors',
              formattedData: data,
            });
          });
        });
      });
    });
    describe('`FertilizerEvent`', () => {
      describe('`type`', () => {
        describe('default values', () => {
          describe('when type is excluded or null', () => {
            it('should return true for validation and the default value for type', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
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
});
