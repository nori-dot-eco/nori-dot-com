import { convertFromV2ToV1 } from '../../index';

import { v2Data } from './fixtures';

describe('convertFromV2ToV1', () => {
  it('should convert v2 to v1 project data', () => {
    expect(convertFromV2ToV1({ v2Data })).toStrictEqual<
      ReturnType<typeof convertFromV2ToV1>
    >({
      projects: [
        {
          fieldSets: [
            {
              fieldSetName: 'Example Field Name',
              area: 119,
              geometry: {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [-102.025_696_361_447_96, 41.162_456_919_333_47],
                      [-102.024_237_239_743_85, 41.163_135_397_690_4],
                      [-102.022_520_625_974_32, 41.163_555_404_581_764],
                      [-102.020_460_689_450_89, 41.163_264_630_866_78],
                      [-102.019_044_483_091_02, 41.162_586_153_847_78],
                      [-102.018_229_091_550_5, 41.161_778_433_952_2],
                      [-102.017_542_446_042_68, 41.160_712_228_446_904],
                      [-102.017_585_361_386_92, 41.159_484_455_166_09],
                      [-102.017_714_107_419_64, 41.158_741_318_059_51],
                      [-102.018_229_091_550_5, 41.157_965_861_660_69],
                      [-102.019_301_975_156_45, 41.157_125_773_542_21],
                      [-102.020_589_435_483_6, 41.156_673_413_941_746],
                      [-102.021_962_726_499_23, 41.156_382_609_692_926],
                      [-102.023_336_017_514_85, 41.156_479_544_585_906],
                      [-102.024_880_969_907_43, 41.157_061_150_933_295],
                      [-102.025_996_768_857_62, 41.157_901_239_879_976],
                      [-102.026_554_668_332_72, 41.158_612_075_963_5],
                      [-102.026_812_160_398_15, 41.159_775_245_653_28],
                      [-102.026_683_414_365_44, 41.161_035_322_856],
                      [-102.026_168_430_234_58, 41.161_843_051_910_21],
                      [-102.025_696_361_447_96, 41.162_456_919_333_47],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              clus: undefined,
              srid: '',
              cropYears: [
                {
                  cropYear: 2015,
                  crops: [
                    {
                      cropName: 'Soybeans',

                      version: 2,
                      datePlanted: '5/19/2015',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '10/08/2015',
                          boundaryYield: 55.89,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [],
                      fertilizerEvents: [],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2016,
                  crops: [
                    {
                      cropName: 'Corn',

                      version: 2,
                      datePlanted: '5/4/2016',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '11/02/2016',
                          boundaryYield: 219.56,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [],
                      fertilizerEvents: [
                        {
                          date: '4/13/2016',
                          productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                          area: 119,
                          lbsOfN: 110.850_902_949_725_89,
                        },
                        {
                          date: '4/26/2016',
                          productName: 'Urea (46-00-00)',
                          area: 119,
                          lbsOfN: 47.819_105_175_411_12,
                        },
                      ],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [
                        {
                          date: '12/8/2015',
                          productName: 'crushed limestone',
                          tonsPerAcre: 2.485_685_071_574_642_4,
                        },
                      ],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2017,
                  crops: [
                    {
                      cropName: 'Soybeans',

                      version: 2,
                      datePlanted: '5/30/2017',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '10/27/2017',
                          boundaryYield: 44.01,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [],
                      fertilizerEvents: [],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2018,
                  crops: [
                    {
                      cropName: 'Corn',

                      version: 2,
                      datePlanted: '5/17/2018',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '10/17/2018',
                          boundaryYield: 206.42,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [
                        { date: '5/17/2018', type: 'mulch tillage' },
                      ],
                      fertilizerEvents: [
                        {
                          date: '5/16/2018',
                          productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                          area: 119,
                          lbsOfN: 28.118_872_357_086_893,
                        },
                        {
                          date: '6/24/2018',
                          productName: 'Urea Ammonium Phosphate (34-17-00)',
                          area: 119,
                          lbsOfN: 46.506_506_799_611_59,
                        },
                      ],
                      organicMatterEvents: [
                        {
                          date: '11/30/2017',
                          productName: expect.any(String),
                          percentN: 0.64,
                          quantityUnit: '1000gal',
                          percentMoisture: undefined,
                          carbonToNitrogenRatio: undefined,
                          tonsPerAcre: 13.720_321_064_996_085,
                        },
                      ],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2019,
                  crops: [
                    {
                      cropName: 'Soybeans',

                      version: 2,
                      datePlanted: '5/17/2019',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '10/30/2019',
                          boundaryYield: 50.89,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [],
                      fertilizerEvents: [],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2020,
                  crops: [
                    {
                      cropName: 'Corn',

                      version: 2,
                      datePlanted: '4/27/2020',
                      cropNumber: 1,
                      harvestOrKillEvents: [
                        {
                          date: '10/28/2020',
                          boundaryYield: 203.55,
                          yieldNumeratorUnit: 'BU',
                          yieldDenominatorUnit: 'ACRE',
                        },
                      ],
                      tillageEvents: [
                        { date: '4/25/2020', type: 'mulch tillage' },
                      ],
                      fertilizerEvents: [
                        {
                          date: '4/21/2020',
                          productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                          area: 119,
                          lbsOfN: 70.223_335_943_617_78,
                        },
                        {
                          date: '6/6/2020',
                          productName: 'Urea Ammonium Phosphate (27-27-00)',
                          area: 119,
                          lbsOfN: 45.995_459_919_179_325,
                        },
                      ],
                      organicMatterEvents: [
                        {
                          date: '12/19/2019',
                          productName: expect.any(String),
                          percentN: 0.76,
                          quantityUnit: '1000gal',
                          percentMoisture: undefined,
                          carbonToNitrogenRatio: undefined,
                          tonsPerAcre: 13.439_464_627_151_052,
                        },
                      ],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
                {
                  cropYear: 2021,
                  crops: [
                    {
                      cropName: 'Soybeans',

                      version: 2,
                      datePlanted: '',
                      cropNumber: 1,
                      harvestOrKillEvents: [],
                      tillageEvents: [],
                      fertilizerEvents: [],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [],
                      burningEvents: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
