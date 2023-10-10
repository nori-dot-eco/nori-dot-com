/* eslint-disable unicorn/no-null -- undefined is invalid in JSON so we use null instead in the example data */
import { Errors } from '@nori-dot-com/errors';

import { formatInputData, validateProjectData } from '../index';
import type {
  Crop,
  Project,
  HistoricNonCRPLandManagement,
} from '../v4-specification';
import * as FULL_FORMATTED_VALID_PROJECT from '../example/v4-example.json';

type ProjectOrAny<T> = T extends Project ? Project : any;

const BASIC_UNFORMATTED_VALID_PROJECT: Project = {
  version: '4.1.0',
  primaryContact: {},
  fields: [
    {
      legalAcres: 174.01,
      externalId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
      historicLandManagement: {
        crp: false,
        preYear1980: 'Irrigation',
        tillageForYears1980To2000: 'Intensive Tillage',
        year1980To2000: 'Irrigated: annual crops in rotation',
      } as any as HistoricNonCRPLandManagement,
      regenerativeStartYear: 2015,
      earliestEvidenceYear: 2008,
      practiceChangesAdopted: {
        addedOMAD: false,
        coverCropping: false,
        increasedBiodiversity: false,
        noTill: true,
        reducedFallow: false,
        reducedTillage: false,
        stripTill: false,
      },
      assignmentOfAuthority: false,
      fieldName: 'zyt0f1mnasi',
      geojson: {
        coordinates: [
          [
            [
              [-102.025_696_361_447_96, 41.162_456_919_333_47],
              [-102.024_237_239_743_85, 41.163_135_397_690_4],
              [-102.026_168_430_234_58, 41.161_843_051_910_21],
              [-102.025_696_361_447_96, 41.162_456_919_333_47],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      cropYears: [
        {
          plantingYear: 2015,
          dataSourceType: 'grower reported',
          crops: [
            {
              name: 'corn',
              type: 'corn',
              plantingEvents: [{ date: '2015-04-28' }],
              fertilizerEvents: [
                {
                  date: '2015-04-28',
                  name: 'Corn Starter (Green Demon)',
                  lbsOfNPerAcre: 10,
                  type: 'mixed blends',
                },
                {
                  date: '2015-04-29',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 38.579_204_996_202_215,
                  type: 'mixed blends',
                },
                {
                  date: '2015-09-05',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 126.259_177_989_703_79,
                  type: 'mixed blends',
                },
              ],
              harvestEvents: [
                {
                  date: '2015-09-18',
                  yield: 211.88,
                  residueRemoved: 0,
                  yieldUnit: 'bu/ac',
                },
              ],
              burningEvents: [],
              clearingAndRenewalEvents: [],
              grazingEvents: [],
              irrigationEvents: [],
              limingEvents: [],
              organicMatterEvents: [],
              pruningEvents: [],
              soilOrCropDisturbanceEvents: [],
              classification: 'annual crop',
            },
          ],
        },
      ],
    },
  ],
};

const BASIC_UNFORMATTED_INVALID_PROJECT: Project = {
  version: '4.1.0',
  primaryContact: {},
  fields: [
    {
      legalAcres: 174.01,
      externalId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
      historicLandManagement: {
        crp: false,
        preYear1980: 'Irrigation',
        tillageForYears1980To2000: 'Intensive Tillage',
        year1980To2000: 'Irrigated: annual crops in rotation',
      } as any as HistoricNonCRPLandManagement,
      regenerativeStartYear: 2015,
      earliestEvidenceYear: 2008,
      practiceChangesAdopted: {
        noTill: true,
      },
      assignmentOfAuthority: false,
      fieldName: 'zyt0f1mnasi',
      geojson: {
        coordinates: [
          [
            [
              [-102.025_696_361_447_96, 41.162_456_919_333_47],
              [-102.024_237_239_743_85, 41.163_135_397_690_4],
              [-102.026_168_430_234_58, 41.161_843_051_910_21],
              [-102.025_696_361_447_96, 41.162_456_919_333_47],
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
              plantingEvents: [{ date: '2015-04-28' }],
              fertilizerEvents: [
                {
                  date: '2015-04-28',
                  name: 'Corn Starter (Green Demon)',
                  lbsOfNPerAcre: null,
                },
                {
                  date: '2015-04-29',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 38.579_204_996_202_215,
                },
                {
                  date: '2015-09-05',
                  name: 'wil corn 32-0-0 [uan]',
                  lbsOfNPerAcre: 126.259_177_989_703_79,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvents: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [
                {
                  date: '2015-09-18',
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
const clone = (object: Project): Project => JSON.parse(JSON.stringify(object));
// todo extend jest to expect NoriError

const buildExpectedError = ({
  errorCode,
  instancePath,
}: {
  errorCode: keyof typeof Errors.projectDataError;
  instancePath: string;
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
          instancePath,
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
        false,
        'Irrigation',
        'Intensive Tillage',
        'Irrigated: annual crops in rotation',
      ]);
      const formattedData = formatInputData(
        FULL_FORMATTED_VALID_PROJECT as any as Project
      );
      expect(
        Object.values(formattedData.fields[0].historicLandManagement)
      ).toStrictEqual([
        false,
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
        errors: undefined,
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
            // todo test instancePath everywhere
            {
              const data = {};
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectUnknownError',
                  instancePath: '',
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
                  instancePath: '/fields',
                })
              );
            });
          });
        });
        describe('projectFieldsMaximumItemsError', () => {
          describe('when the number of fields is more than 200', () => {
            it('should throw a validation error', () => {
              const data = {
                ...BASIC_UNFORMATTED_VALID_PROJECT,
                fields: Array.from({ length: 201 }).fill(
                  BASIC_UNFORMATTED_VALID_PROJECT.fields[0]
                ),
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectFieldsMaximumItemsError',
                  instancePath: '/fields',
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
                  instancePath: '/fields',
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
                version: null as undefined,
              };
              expect(
                validateProjectData(data as ProjectOrAny<typeof data>)
              ).toStrictEqual<ReturnType<typeof validateProjectData>>(
                buildExpectedError({
                  errorCode: 'projectVersionTypeError',
                  instancePath: '/version',
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
                  instancePath: '/version',
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
              errors: undefined,
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
                instancePath: '/fields/0',
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
                instancePath: '/fields/0',
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
                instancePath: '/fields/0',
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
                  instancePath: '/fields/0/fieldName',
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
                version: '4.1.0',
                primaryContact: {},
                fields: [
                  {
                    legalAcres: 174.01,
                    externalId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
                    historicLandManagement: null,
                    regenerativeStartYear: 2015,
                    earliestEvidenceYear: 2008,
                    assignmentOfAuthority: false,
                    practiceChangesAdopted: {
                      addedOMAD: false,
                      coverCropping: false,
                      increasedBiodiversity: false,
                      noTill: false,
                      reducedFallow: false,
                      reducedTillage: false,
                      stripTill: false,
                    },
                    fieldName: 'zyt0f1mnasi',
                    geojson: {
                      coordinates: [
                        [
                          [
                            [-102.025_696_361_447_96, 41.162_456_919_333_47],
                            [-102.024_237_239_743_85, 41.163_135_397_690_4],
                            [-102.026_168_430_234_58, 41.161_843_051_910_21],
                            [-102.025_696_361_447_96, 41.162_456_919_333_47],
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
                errors: undefined,
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
                (
                  data.fields[0].cropYears[0].crops[0] as Crop
                ).harvestEvents[0] = {
                  date: `${data.fields[0].cropYears[0].plantingYear - 1}-09-18`,
                  yield: 211.88,
                  grainFruitTuber: undefined,
                  residueRemoved: 0,
                  yieldUnit: 'bu/ac',
                };
                expect(validateProjectData(data)).toStrictEqual<
                  ReturnType<typeof validateProjectData>
                >(
                  buildExpectedError({
                    errorCode: 'cropEventDateValidationRuleViolation',
                    instancePath:
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
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT) as any;
              data.fields[0].cropYears[0].crops[0].harvestEvents[0] = {
                date: 1,
                yield: 211.88,
                grainFruitTuber: undefined,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >(
                buildExpectedError({
                  errorCode: 'cropEventDateTypeError',
                  instancePath:
                    '/fields/0/cropYears/0/crops/0/harvestEvents/0/date',
                })
              );
            });
          });
          describe('when the date is before the crop year', () => {
            it('should throw validation errors', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT) as any;
              data.fields[0].cropYears[0].crops[0].harvestEvents[0] = {
                date: '2000-01-01',
                yield: 211.88,
                grainFruitTuber: undefined,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >(
                buildExpectedError({
                  errorCode: 'cropEventDateValidationRuleViolation',
                  instancePath:
                    '/fields/0/cropYears/0/crops/0/harvestEvents/0/date',
                })
              );
            });
          });

          describe('when the type is excluded or null', () => {
            it('should return true for validation', () => {
              const data = clone(BASIC_UNFORMATTED_VALID_PROJECT);
              data.fields[0].cropYears[0].crops[0].harvestEvents[0] = {
                date: '2018-01-01',
                yield: 211.88,
                grainFruitTuber: null,
                residueRemoved: 0,
                yieldUnit: 'bu/ac',
              };
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: undefined,
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
              for (const [
                index,
              ] of data.fields[0].cropYears[0].crops[0].fertilizerEvents.entries()) {
                delete data.fields[0].cropYears[0].crops[0].fertilizerEvents[
                  index
                ].type;
              }

              const formattedData = formatInputData(data);
              for (const [
                index,
              ] of formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents.entries()) {
                formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents[
                  index
                ].type = 'mixed blends';
              }
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: undefined,
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
              for (const [
                index,
                _,
              ] of formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents.entries()) {
                formattedData.fields[0].cropYears[0].crops[0].fertilizerEvents[
                  index
                ].type = 'mixed blends';
              }
              expect(validateProjectData(data)).toStrictEqual<
                ReturnType<typeof validateProjectData>
              >({
                valid: true,
                errors: undefined,
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
