import { convertFromV3ToV1 } from '../v3-utils';

import { v3Data, v3DataForIrrigationTests } from './fixtures';

describe('v3-utils', () => {
  describe('convertFromV3ToV1', () => {
    it('should convert v3 data into v1 data', () => {
      const { v1Data } = convertFromV3ToV1({
        v3Data,
      });
      expect(v1Data).toStrictEqual<
        ReturnType<typeof convertFromV3ToV1>['v1Data']
      >({
        projects: [
          {
            fieldSets: [
              {
                area: 6,
                fieldSetName: 'example field',
                geometry: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Polygon',
                        coordinates: [
                          [
                            [-102.0256, 41.1624],
                            [-102.02423, 41.1631],
                            [-102.0225, 41.1635],
                            [-102.0261, 41.161],
                            [-102.0256, 41.1624],
                          ],
                        ],
                      },
                      properties: {},
                    },
                  ],
                },
                cropYears: [
                  {
                    cropYear: 2000,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/20/2000',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2000',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2000',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2001,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2001',
                        fertilizerEvents: [
                          {
                            date: '06/15/2001',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2001',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [
                          {
                            date: '04/25/2001',
                            startDate: '04/25/2001',
                            endDate: '09/05/2001',
                            frequency: 7,
                            volume: 1,
                          },
                        ],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2001',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2001',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2002,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/20/2002',
                        fertilizerEvents: [
                          // {
                          //   area: 6,
                          //   classification: 'urea ammonium nitrate (30-00-00)',
                          //   date: '06/15/2002',
                          //   lbsOfN: 149.8,
                          //   productName: 'urea ammonium nitrate (30-00-00)',
                          //   quantityUnit: 'lbs/acre',
                          // },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2002',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                          {
                            date: '09/14/2003',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2003',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2002',
                          },
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2003',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2003,
                    crops: [],
                  },
                  {
                    cropYear: 2004,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/20/2004',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2004',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2004',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2005,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2005',
                        fertilizerEvents: [
                          {
                            date: '06/15/2005',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2005',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2005',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2005',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2006,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/20/2006',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2006',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2006',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2007,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2007',
                        fertilizerEvents: [
                          {
                            date: '06/15/2007',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2007',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [
                          {
                            date: '04/25/2007',
                            startDate: '04/25/2007',
                            endDate: '09/05/2007',
                            frequency: 7,
                            volume: 1,
                          },
                        ],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2007',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2007',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2007',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2008',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '09/19/2007',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2008,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2008',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2008',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [
                          {
                            date: '12/30/2008',
                            productName: 'dolomitic limestone',
                            tonsPerAcre: 1,
                            areaUnit: 'ac',
                            area: 6,
                          },
                        ],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '06/15/2008',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2009,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2009',
                        fertilizerEvents: [
                          {
                            date: '06/15/2009',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2009',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2009',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2009',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2009',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2010',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '09/19/2009',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2010,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2010',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2010',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '06/15/2010',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2011,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2011',
                        fertilizerEvents: [
                          {
                            date: '06/15/2011',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2011',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2011',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2011',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2011',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2012',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [
                          {
                            date: '12/30/2011',
                            productName: 'calcitic limestone',
                            tonsPerAcre: 1,
                            areaUnit: 'ac',
                            area: 6,
                          },
                        ],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '09/19/2011',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2012,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2012',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2012',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '06/15/2012',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2013,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2013',
                        fertilizerEvents: [
                          {
                            date: '06/15/2013',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2013',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2013',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '04/19/2013',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2013',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2014',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '09/19/2013',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2014,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2014',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2014',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'intensive tillage',
                            type: 'intensive tillage',
                            date: '06/14/2014',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2015,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2015',
                        fertilizerEvents: [
                          {
                            date: '06/15/2015',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2015',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2015',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2015',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2015',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2016',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/20/2015',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2016,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2016',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2016',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '06/15/2016',
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
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2017',
                        fertilizerEvents: [
                          {
                            date: '06/15/2017',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2017',
                            boundaryYield: 134,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2017',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2017',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'winter wheat',
                        type: 'annual crop',
                        cropNumber: 2,
                        classification: 'winter wheat',
                        datePlanted: '09/20/2017',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '06/10/2018',
                            boundaryYield: 84,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/20/2017',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2018,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '06/15/2018',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '11/15/2018',
                            boundaryYield: 38,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '06/15/2018',
                          },
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/22/2018',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/22/2018',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/22/2018',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2019,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2019',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2019',
                            boundaryYield: 150,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2020',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2019',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/20/2019',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/20/2019',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2020,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/27/2020',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/20/2020',
                            boundaryYield: 50,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/27/2020',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/22/2020',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/22/2020',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2021,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2021',
                        fertilizerEvents: [
                          {
                            date: '06/15/2021',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2021',
                            boundaryYield: 150,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2021',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2021',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/20/2021',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/20/2021',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2022,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/27/2022',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/20/2022',
                            boundaryYield: 50,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/27/2022',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/22/2022',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/22/2022',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2023,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2023',
                        fertilizerEvents: [
                          {
                            date: '06/15/2023',
                            productName: 'urea ammonium nitrate (30-00-00)',
                            classification: 'urea ammonium nitrate (30-00-00)',
                            lbsOfN: 149.8,
                            area: 6,
                            quantityUnit: 'lbs/acre',
                          },
                        ],
                        harvestOrKillEvents: [
                          {
                            date: '09/14/2023',
                            boundaryYield: 150,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [
                          {
                            date: '04/01/2023',
                            productName: expect.stringMatching(/OMAD product /),
                            classification: 'chicken - broiler (litter), solid',
                            percentN: 2.3,
                            tonsPerAcre: 0.78,
                            carbonToNitrogenRatio: 7.8,
                            percentMoisture: null,
                            quantityUnit: '1000gal',
                          },
                        ],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/20/2023',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/20/2023',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/20/2023',
                          },
                        ],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2024,
                    crops: [
                      {
                        version: 2,
                        cropName: 'soybean',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'soybean',
                        datePlanted: '04/27/2024',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [
                          {
                            date: '09/20/2024',
                            boundaryYield: 50,
                            yieldNumeratorUnit: 'bu',
                            yieldDenominatorUnit: 'ac',
                          },
                        ],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '04/27/2024',
                          },
                        ],
                        burningEvents: [],
                      },
                      {
                        version: 2,
                        cropName: 'annual rye - legume',
                        type: 'annual cover',
                        cropNumber: 2,
                        classification: 'annual rye - legume',
                        datePlanted: '09/22/2024',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        irrigationEvents: [],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [
                          {
                            classification: 'no tillage',
                            type: 'no tillage',
                            date: '09/22/2024',
                          },
                        ],
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
    it('should correctly handle irrigation events', () => {
      const { v1Data } = convertFromV3ToV1({
        v3Data: v3DataForIrrigationTests,
      });
      expect(v1Data).toStrictEqual<
        ReturnType<typeof convertFromV3ToV1>['v1Data']
      >({
        projects: [
          {
            fieldSets: [
              {
                area: 6,
                fieldSetName: 'example field',
                geometry: {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Polygon',
                        coordinates: [
                          [
                            [-102.0256, 41.1624],
                            [-102.02423, 41.1631],
                            [-102.0225, 41.1635],
                            [-102.0261, 41.161],
                            [-102.0256, 41.1624],
                          ],
                        ],
                      },
                      properties: {},
                    },
                  ],
                },
                cropYears: [
                  {
                    cropYear: 2000,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2007',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        // valid number of events, no overflow
                        irrigationEvents: [
                          {
                            date: '04/25/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/02/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/09/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/16/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/23/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/30/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/06/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/13/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/20/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/27/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/04/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/11/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/18/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/25/2007',
                            volume: 1.0,
                          },
                        ],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2001,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2007',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        // too many events, regular pattern
                        irrigationEvents: [
                          {
                            date: '04/25/2007',
                            startDate: '04/25/2007',
                            endDate: '09/05/2007',
                            frequency: 7,
                            volume: 1,
                          },
                        ],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [],
                        burningEvents: [],
                      },
                    ],
                  },
                  {
                    cropYear: 2002,
                    crops: [
                      {
                        version: 2,
                        cropName: 'corn',
                        type: 'annual crop',
                        cropNumber: 1,
                        classification: 'corn',
                        datePlanted: '04/20/2007',
                        fertilizerEvents: [],
                        harvestOrKillEvents: [],
                        // too many events, irregular pattern
                        irrigationEvents: [
                          {
                            date: '04/25/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/06/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/09/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/20/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/23/2007',
                            volume: 1.0,
                          },
                          {
                            date: '05/30/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/06/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/13/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/20/2007',
                            volume: 1.0,
                          },
                          {
                            date: '06/27/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/04/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/11/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/18/2007',
                            volume: 1.0,
                          },
                          {
                            date: '07/25/2007',
                            volume: 1.0,
                          },
                          {
                            date: '08/01/2007',
                            volume: 1.0,
                          },
                          {
                            date: '08/08/2007',
                            volume: 1.0,
                          },
                          {
                            date: '08/15/2007',
                            volume: 1.0,
                          },
                          {
                            date: '08/22/2007',
                            volume: 1.0,
                          },
                          {
                            date: '08/29/2007',
                            volume: 1.0,
                          },
                          {
                            date: '09/05/2007',
                            volume: 1.0,
                          },
                        ],
                        limingEvents: [],
                        organicMatterEvents: [],
                        tillageEvents: [],
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
});
