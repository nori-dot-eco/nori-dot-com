import { Errors } from '@nori-dot-com/errors';

import { validateInputData } from '../index';
import type { Input } from '../index';
import { CURRENT_SCENARIO_NAME, FUTURE_SCENARIO_NAME } from '../input';

type InputDataOrAny<T> = T extends Input.InputData ? Input.InputData : any;

const clone = (obj: Input.InputData): Input.InputData =>
  JSON.parse(JSON.stringify(obj));

const BASIC_CROP_DATA: Omit<
  Input.Crop,
  '@CropNumber' | 'CropName' | 'PlantingDate'
> = {
  ContinueFromPreviousYear: 'n',
  HarvestList: null,
  TillageList: null,
  NApplicationList: {},
  OMADApplicationList: {},
  IrrigationList: {},
  BurnEvent: {
    BurnTime: 'no burning',
  },
  LimingEvent: {},
  GrazingList: {},
};

const INPUT_DATA: Input.InputData = {
  '@cometEmailId': 'comet@nori.com',
  Cropland: [
    {
      '@Name':
        'ggit schema|example field|U3VwcGxpZXJQcm9qZWN0UGFyY2VsOlVzZXIsNDcwNTU5NzgzMDIwMTM0NCxTdXBwbGllclByb2ZpbGUsNTg4ODc1MDQ4MTU3MTg0MCxTdXBwbGllclByb2plY3QsNTQ1ODIzMDQyMTQ4NzYxNixTdXBwbGllclByb2plY3RQYXJjZWwsNTQyODQ5NDM0OTYzMTQ4OA==|025039656b07efbdd7aef67fc6e0cb643f158e7e|2021-03-09T16:52:15.223Z|120|0',
      GEOM: {
        '@SRID': '4326',
        '@AREA': 120,
        '#text':
          'POLYGON((-102.0256 41.1624, -102.02423 41.1631, -102.0225 41.1635, -102.0261 41.161, -102.0256 41.1624))',
      },
      'Pre-1980': 'irrigation (pre 1980s)',
      CRP: 'no',
      CRPType: 'none',
      'Year1980-2000': 'irrigated: annual crops in rotation',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Year1980-2000_Tillage': 'intensive tillage',
      CRPStartYear: [],
      CRPEndYear: [],
      PreCRPManagement: [],
      PreCRPTillage: ['intensive tillage'],
      PostCRPManagement: [],
      PostCRPTillage: [],
      CropScenario: [
        {
          '@Name': CURRENT_SCENARIO_NAME,
          CropYear: [
            {
              '@Year': 2000,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/20/2000',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2001,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2001',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2002,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/20/2002',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2003,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '01/01/2003',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2004,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/20/2004',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2005,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2005',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2006,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/20/2006',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2007,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2007',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2007',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2008,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2008',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2009,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2009',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2009',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2010,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2010',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2011,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2011',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2011',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2012,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2012',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2013,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2013',
                  ContinueFromPreviousYear: 'n',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2013',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2014,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2014',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
          ],
        },
        {
          '@Name': FUTURE_SCENARIO_NAME,
          CropYear: [
            {
              '@Year': 2015,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2015',
                  ContinueFromPreviousYear: 'n',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2015',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2016,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2016',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2017,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2017',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2017',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2018,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '06/15/2018',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2018',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2019,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2019',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2019',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2020,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/27/2020',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2020',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2021,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2021',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2021',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2022,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/27/2022',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2022',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2023,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2023',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2023',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
            {
              '@Year': 2024,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/27/2024',
                  ...BASIC_CROP_DATA,
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2024',
                  ...BASIC_CROP_DATA,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// todo extend jest to expect NoriError
const buildExpectedError = ({
  errorCode,
  dataPath,
}: {
  errorCode: keyof typeof Errors.ggitInputError;
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
          message: `ggitInputError:${errorCode}`,
          dataPath,
        }),
      }),
    ]),
    message: expect.stringContaining(
      `${Errors.ggitInputError[errorCode].message}`
    ),
    formattedData: expect.anything(),
  };
};

describe('validation', () => {
  describe('formatInputData', () => {
    it.todo('should format strings to lowercase');
  });
  describe('validateInputData', () => {
    describe('`InputData`', () => {
      describe('when there are not validation errors', () => {
        it('should return as valid', () => {
          const data = clone(INPUT_DATA);
          expect(validateInputData(data)).toStrictEqual<
            ReturnType<typeof validateInputData>
          >({
            valid: true,
            errors: null,
            message: 'No errors',
            formattedData: expect.anything(),
          });
        });
      });
      describe('ggitInputDataUnknownError', () => {
        describe('when the data contains an unknown error', () => {
          it('should throw a validation error', () => {
            const data = {};
            expect(
              validateInputData(data as InputDataOrAny<typeof data>)
            ).toStrictEqual<ReturnType<typeof validateInputData>>(
              buildExpectedError({
                errorCode: 'ggitInputDataUnknownError',
                dataPath: '',
              })
            );
          });
        });
      });
    });
  });
});
