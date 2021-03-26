import { Errors } from '@nori-dot-com/errors';

import { formatInputData, validateProjectData } from '../index';
import type { Project, CropEvent } from '../index';
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
// todo extend jest to expect NoriError

const buildExpectedError = ({
  errorCode,
  dataPath,
}: {
  errorCode: keyof typeof Errors.projectDataError;
  dataPath: string;
}): {
  valid: boolean;
  errors: any;
  message: any;
  formattedData: any;
} => {
  return {
    valid: false,
    errors: expect.arrayContaining([
      expect.objectContaining({
        error: expect.objectContaining({
          message: `projectDataError:${errorCode}`,
          dataPath,
        }),
      }),
    ]),
    message: expect.stringContaining(
      `${Errors.projectDataError[errorCode].message}`
    ),
    formattedData: expect.anything(),
  };
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
        message: expect.any(String),
        formattedData: expect.anything(),
      });
    });
    describe('`Project`', () => {
      describe('misc. validation errors', () => {
        describe('projectUnknownError', () => {
          it('should throw a validation error when an unknown error is encountered', () =>
            // todo use this desc/it combo as pattern for this test
            // todo test dataPath everywhere
            {
              const data = {};
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectUnknownError',
                  dataPath: '',
                })
              );
            });
        });
      });
      describe('`fields`', () => {
        describe('projectFieldsMinimumItemsError', () => {
          describe('when the number of fields is less than 1', () => {
            it('should throw a validation error', () => {
              const data = {
                ...BASIC_UNFORMATTED_VALID_PROJECT,
                fields: [] as Project['fields'],
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >(
                buildExpectedError({
                  errorCode: 'projectFieldsMinimumItemsError',
                  dataPath: '/fields',
                })
              );
            });
          });
        });
        describe('projectFieldsMaximumItemsError', () => {
          describe('when the number of fields is more than 25', () => {
            it('should throw a validation error', () => {
              const data = {
                ...BASIC_UNFORMATTED_VALID_PROJECT,
                fields: Array(26).fill(
                  BASIC_UNFORMATTED_VALID_PROJECT.fields[0]
                ),
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectFieldsMaximumItemsError',
                  dataPath: '/fields',
                })
              );
            });
          });
        });

        describe('projectFieldsTypeError', () => {
          describe('when fields is not an array', () => {
            it('should throw a validation error', () => {
              const data = {
                ...BASIC_UNFORMATTED_VALID_PROJECT,
                fields: 1 as unknown,
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectFieldsTypeError',
                  dataPath: '/fields',
                })
              );
            });
          });
        });
      });
      describe('`version`', () => {
        describe('projectVersionTypeError', () => {
          describe('when the type of `version` is not specified', () => {
            it('should throw a type validation error', () => {
              const data = {
                ...BASIC_UNFORMATTED_VALID_PROJECT,
                version: null as null,
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectVersionTypeError',
                  dataPath: '/version',
                })
              );
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
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectVersionTypeError',
                  dataPath: '/version',
                })
              );
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
      describe('fieldUnknownAdditionalProperty', () => {
        describe('when a field has an unknown additional property specified', () => {
          it('should throw a validation error', () => {
            const data = {
              ...clone(BASIC_UNFORMATTED_VALID_PROJECT),
              fields: [{ anything: 1 }],
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>(
              buildExpectedError({
                errorCode: 'fieldUnknownAdditionalProperty',
                dataPath: '/fields/0',
              })
            );
          });
        });
      });
      describe('fieldRequiredPropertyMissing', () => {
        describe('when a fieldName null', () => {
          it('should throw a validation error', () => {
            const data = {
              ...clone(BASIC_UNFORMATTED_VALID_PROJECT),
              fields: [{ fieldName: null as null }],
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>(
              buildExpectedError({
                errorCode: 'fieldRequiredPropertyMissing',
                dataPath: '/fields/0',
              })
            );
          });
        });
        describe('when a field in fields is missing a required property', () => {
          it('should throw a validation error', () => {
            const data = {
              ...clone(BASIC_UNFORMATTED_VALID_PROJECT),
              fields: [{}],
            };
            expect(
              validateProjectData(data as ProjectOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateProjectData>>(
              buildExpectedError({
                errorCode: 'fieldRequiredPropertyMissing',
                dataPath: '/fields/0',
              })
            );
          });
        });
      });
      describe('fieldName', () => {
        describe('fieldNameTypeError', () => {
          describe('when a fieldName is not a string', () => {
            it('should throw a validation error', () => {
              const data = {
                ...clone(BASIC_UNFORMATTED_VALID_PROJECT),
                fields: [{ fieldName: 1 }],
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'fieldNameTypeError',
                  dataPath: '/fields/0/fieldName',
                })
              );
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
      describe('`date`', () => {
        describe('validationRules', () => {
          describe('cropEventDateIsOnOrAfterContainingCropYear', () => {
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
                >(
                  buildExpectedError({
                    errorCode: 'cropEventDateValidationRuleViolation',
                    dataPath:
                      '/fields/0/cropYears/0/crops/0/harvestEvents/0/date',
                  })
                );
              });
            });
            describe('when the crop event dates fall within the current planting year', () => {
              it.todo('should not throw validation errors');
            });
          });
        });
        describe('cropEventDateTypeError', () => {
          describe('when the type is not a string', () => {
            it('should throw validation errors', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              (data.fields[0].cropYears[0]
                .crops[0] as AnnualCrop).harvestEvents[0] = {
                date: (1 as unknown) as CropEvent['date'],
                yield: 211.88,
                grainFruitTuber: null,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >(
                buildExpectedError({
                  errorCode: 'cropEventDateTypeError',
                  dataPath:
                    '/fields/0/cropYears/0/crops/0/harvestEvents/0/date',
                })
              );
            });
          });

          describe('when the type is excluded or null', () => {
            it('should return true for validation', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              (data.fields[0].cropYears[0]
                .crops[0] as AnnualCrop).harvestEvents[0] = {
                date: null,
                yield: 211.88,
                grainFruitTuber: null,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
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
    });
    describe('`FertilizerEvent`', () => {
      describe('default values', () => {
        describe('`type`', () => {
          describe('when type is excluded', () => {
            it('should return true for validation and the default value for type', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              data.fields[0].cropYears[0].crops[0].fertilizerEvents.forEach(
                (_, i) => {
                  delete data.fields[0].cropYears[0].crops[0].fertilizerEvents[
                    i
                  ].type;
                }
              );
              const formattedData = formatInputData(data);
              formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents.forEach(
                (_, i) => {
                  formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents[
                    i
                  ].type = 'mixed blends';
                }
              );
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: null,
                message: 'No errors',
                formattedData,
              });
            });
          });
          describe('when type is null', () => {
            it('should return true for validation and the default value for type', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              data.fields[0].cropYears[0].crops[0].fertilizerEvents[0] = {
                ...data.fields[0].cropYears[0].crops[0].fertilizerEvents[0],
                type: null,
              };
              const formattedData = formatInputData(data);
              formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents.forEach(
                (_, i) => {
                  formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents[
                    i
                  ].type = 'mixed blends';
                }
              );
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: null,
                message: 'No errors',
                formattedData,
              });
            });
          });
        });
      });
    });
  });
});
