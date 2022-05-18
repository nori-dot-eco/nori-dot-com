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
                      [-102.02569636144796, 41.16245691933347],
                      [-102.02423723974385, 41.1631353976904],
                      [-102.02252062597432, 41.163555404581764],
                      [-102.02046068945089, 41.16326463086678],
                      [-102.01904448309102, 41.16258615384778],
                      [-102.0182290915505, 41.1617784339522],
                      [-102.01754244604268, 41.160712228446904],
                      [-102.01758536138692, 41.15948445516609],
                      [-102.01771410741964, 41.15874131805951],
                      [-102.0182290915505, 41.15796586166069],
                      [-102.01930197515645, 41.15712577354221],
                      [-102.0205894354836, 41.156673413941746],
                      [-102.02196272649923, 41.156382609692926],
                      [-102.02333601751485, 41.156479544585906],
                      [-102.02488096990743, 41.157061150933295],
                      [-102.02599676885762, 41.157901239879976],
                      [-102.02655466833272, 41.1586120759635],
                      [-102.02681216039815, 41.15977524565328],
                      [-102.02668341436544, 41.161035322856],
                      [-102.02616843023458, 41.16184305191021],
                      [-102.02569636144796, 41.16245691933347],
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
                          lbsOfN: 110.85090294972589,
                        },
                        {
                          date: '4/26/2016',
                          productName: 'Urea (46-00-00)',
                          area: 119,
                          lbsOfN: 47.81910517541112,
                        },
                      ],
                      organicMatterEvents: [],
                      irrigationEvents: [],
                      limingEvents: [
                        {
                          date: '12/8/2015',
                          productName: 'crushed limestone',
                          tonsPerAcre: 2.4856850715746424,
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
                          lbsOfN: 28.118872357086893,
                        },
                        {
                          date: '6/24/2018',
                          productName: 'Urea Ammonium Phosphate (34-17-00)',
                          area: 119,
                          lbsOfN: 46.50650679961159,
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
                          tonsPerAcre: 13.720321064996085,
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
                          lbsOfN: 70.22333594361778,
                        },
                        {
                          date: '6/6/2020',
                          productName: 'Urea Ammonium Phosphate (27-27-00)',
                          area: 119,
                          lbsOfN: 45.995459919179325,
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
                          tonsPerAcre: 13.439464627151052,
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
