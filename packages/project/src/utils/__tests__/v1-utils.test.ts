import { ContextualError, ErrorCollector } from '@nori-dot-com/errors/dist';

import { collectV1Errors } from '../v1-utils';
import type { V1Data } from '../../index';

import { Logger } from './mocks/Logger';

// Note this is not complete/valid project data -- for unit testing only
const exampleV1DataForErrorTests: V1Data = {
  projects: [
    {
      owners: ['ExampleOwner1'],
      fieldSets: [
        {
          fieldSetName: 'ExampleFieldset1',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 10.86,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              cropYear: 2014,
              crops: [
                {
                  version: 2,
                  cropName: 'corn',
                  type: 'annual crop',
                  cropNumber: 1,
                  classification: 'corn',
                  datePlanted: '03/30/2014',
                  // The two 2013 fertilizer events should create errors.
                  fertilizerEvents: [
                    {
                      date: '11/20/2013',
                      type: 'Mixed Blends',
                      productName: 'DAP',
                      lbsOfN: 18.78,
                      area: 51.69,
                      quantityUnit: 'lbs/acre',
                    },
                    {
                      date: '11/20/2013',
                      type: 'Mixed Blends',
                      productName: 'Potash',
                      lbsOfN: undefined,
                      area: 51.69,
                      quantityUnit: 'lbs/acre',
                    },
                    {
                      date: '03/18/2014',
                      type: 'Mixed Blends',
                      productName: 'Anhydrous Ammonia',
                      lbsOfN: 110,
                      area: 51.69,
                      quantityUnit: 'lbs/acre',
                    },
                  ],
                  harvestOrKillEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                  organicMatterEvents: [],
                  tillageEvents: [
                    {
                      classification: 'mulch tillage',
                      type: 'mulch tillage',
                      date: '03/29/2014',
                    },
                  ],
                  burningEvents: [],
                },
              ],
            },
            {
              // acceptable data values
              cropYear: 2015,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '10/06/2015',
                      boundaryYield: 85.67,
                      harvestedYield: undefined,
                      plantedYield: 4.34,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  organicMatterEvents: [],
                  fertilizerEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
            {
              // errors in data values
              cropYear: 2016,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2016',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '10/06/2016',
                      boundaryYield: 85.67,
                      harvestedYield: undefined,
                      plantedYield: 4.34,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  fertilizerEvents: [
                    {
                      // too far in future
                      date: '05/12/2017',
                      type: 'Nitrogen',
                      productName: 'Wil Corn 32-0-0 [UAN]',
                      manufacturerName: 'Unknown',
                      taskName: 'Lexar Application',
                      applicationMethod: 'spray',
                      lbsOfN: 419.1,
                      NPK: '32-0-0',
                      quantity: 0.65,
                      quantityUnit: 'tons',
                      area: 10.86,
                      areaUnit: 'ac',
                      productDensity: undefined,
                    },
                  ],
                  organicMatterEvents: [],
                  // too many events! (17)
                  irrigationEvents: [
                    { date: '05/11/2016', volume: 1 },
                    { date: '05/12/2016', volume: 1 },
                    { date: '05/13/2016', volume: 1 },
                    { date: '05/14/2016', volume: 1 },
                    { date: '05/15/2016', volume: 1 },
                    { date: '05/16/2016', volume: 1 },
                    { date: '05/17/2016', volume: 1 },
                    { date: '05/18/2016', volume: 1 },
                    { date: '05/19/2016', volume: 1 },
                    { date: '05/20/2016', volume: 1 },
                    { date: '05/21/2016', volume: 1 },
                    { date: '05/22/2016', volume: 1 },
                    { date: '05/23/2016', volume: 1 },
                    { date: '05/24/2016', volume: 1 },
                    { date: '05/25/2016', volume: 1 },
                    { date: '05/26/2016', volume: 1 },
                    { date: '05/27/2016', volume: 1 },
                  ],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
        {
          fieldSetName: 'ExampleFieldset2',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 49.27,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              cropYear: 2015,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [],
                  tillageEvents: [],
                  fertilizerEvents: [
                    {
                      date: '06/01/2015',
                      type: 'Nitrogen',
                      productName: 'Wil Corn 32-0-0 [UAN]',
                      manufacturerName: 'Unknown',
                      taskName: 'Sidedress Nitrogen',
                      applicationMethod: 'spray',
                      lbsOfN: 197.46,
                      NPK: '32-0-0',
                      quantity: 0.31,
                      quantityUnit: 'tons',
                      area: 1.56,
                      areaUnit: 'ac',
                      productDensity: undefined,
                    },
                  ],
                  organicMatterEvents: [],
                  // acceptable number of irrigation events
                  irrigationEvents: [{ date: '05/23/2015', volume: 1 }],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      owners: ['ExampleOwner2'],
      fieldSets: [
        {
          fieldSetName: 'ExampleFieldset3',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 96.43,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              // errors in data
              cropYear: 2015,
              crops: [
                {
                  cropName: 'soybean',
                  cropSubspeciesName: 'commercial soybean',
                  datePlanted: '07/11/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '11/09/2015',
                      boundaryYield: 42.38,
                      harvestedYield: 41.11,
                      plantedYield: 42.38,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  // too many events! (18) frequency-encoded
                  irrigationEvents: [
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1,
                      frequency: 7,
                    },
                  ],
                  limingEvents: [],
                },
                {
                  cropName: 'wheat',
                  cropSubspeciesName: 'soft red winter wheat',
                  datePlanted: '09/19/2015',
                  cropNumber: 2,
                  harvestOrKillEvents: [],
                  tillageEvents: [],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  // many events, but acceptable encoding will fit in rows
                  irrigationEvents: [
                    {
                      date: '09/19/2015',
                      endDate: '09/19/2015',
                      startDate: '06/16/2015',
                      volume: 1,
                      frequency: 2,
                    },
                  ],
                  limingEvents: [],
                },
              ],
            },
            {
              // errors in data
              cropYear: 2016,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '03/30/2016',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '08/29/2016',
                      boundaryYield: 210.38,
                      harvestedYield: 202.87,
                      plantedYield: 203.71,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [
                    // date too far in future
                    {
                      date: '04/25/2017',
                      type: 'secondary',
                      implement: 'bedder_hipper',
                    },
                    {
                      date: '08/19/2016',
                      type: 'secondary',
                      implement: 'bedder_hipper',
                    },
                  ],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const expectedFilteredV1Data: V1Data = {
  projects: [
    {
      owners: ['ExampleOwner1'],
      fieldSets: [
        {
          fieldSetName: 'ExampleFieldset1',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 10.86,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              cropYear: 2014,
              crops: [
                {
                  version: 2,
                  cropName: 'corn',
                  type: 'annual crop',
                  cropNumber: 1,
                  classification: 'corn',
                  datePlanted: '03/30/2014',
                  fertilizerEvents: [
                    {
                      date: '03/18/2014',
                      type: 'Mixed Blends',
                      productName: 'Anhydrous Ammonia',
                      lbsOfN: 110,
                      area: 51.69,
                      quantityUnit: 'lbs/acre',
                    },
                  ],
                  harvestOrKillEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                  organicMatterEvents: [],
                  tillageEvents: [
                    {
                      classification: 'mulch tillage',
                      type: 'mulch tillage',
                      date: '03/29/2014',
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
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '10/06/2015',
                      boundaryYield: 85.67,
                      harvestedYield: undefined,
                      plantedYield: 4.34,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  organicMatterEvents: [],
                  fertilizerEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
            {
              cropYear: 2016,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2016',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '10/06/2016',
                      boundaryYield: 85.67,
                      harvestedYield: undefined,
                      plantedYield: 4.34,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
        {
          fieldSetName: 'ExampleFieldset2',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 49.27,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              cropYear: 2015,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '05/02/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [],
                  tillageEvents: [],
                  fertilizerEvents: [
                    {
                      date: '06/01/2015',
                      type: 'Nitrogen',
                      productName: 'Wil Corn 32-0-0 [UAN]',
                      manufacturerName: 'Unknown',
                      taskName: 'Sidedress Nitrogen',
                      applicationMethod: 'spray',
                      lbsOfN: 197.46,
                      NPK: '32-0-0',
                      quantity: 0.31,
                      quantityUnit: 'tons',
                      area: 1.56,
                      areaUnit: 'ac',
                      productDensity: undefined,
                    },
                  ],
                  organicMatterEvents: [],
                  irrigationEvents: [{ date: '05/23/2015', volume: 1 }],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      owners: ['ExampleOwner2'],
      fieldSets: [
        {
          fieldSetName: 'ExampleFieldset3',
          geometry: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                    [-76.183_900_000_000_69, 39.244_546_666_666_3],
                    [-76.183_841_666_667_38, 39.244_541_666_666_294],
                    [-76.181_933_333_334_03, 39.242_738_333_332_99],
                  ],
                ],
              ],
            },
            properties: {},
          },
          area: 96.43,
          clus: [],
          srid: '4326',
          cropYears: [
            {
              cropYear: 2015,
              crops: [
                {
                  cropName: 'soybean',
                  cropSubspeciesName: 'commercial soybean',
                  datePlanted: '07/11/2015',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '11/09/2015',
                      boundaryYield: 42.38,
                      harvestedYield: 41.11,
                      plantedYield: 42.38,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
                {
                  cropName: 'wheat',
                  cropSubspeciesName: 'soft red winter wheat',
                  datePlanted: '09/19/2015',
                  cropNumber: 2,
                  harvestOrKillEvents: [],
                  tillageEvents: [],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
            {
              cropYear: 2016,
              crops: [
                {
                  cropName: 'corn',
                  cropSubspeciesName: 'commercial corn',
                  datePlanted: '03/30/2016',
                  cropNumber: 1,
                  harvestOrKillEvents: [
                    {
                      date: '08/29/2016',
                      boundaryYield: 210.38,
                      harvestedYield: 202.87,
                      plantedYield: 203.71,
                      yieldNumeratorUnit: 'bu',
                      yieldDenominatorUnit: 'ac',
                    },
                  ],
                  tillageEvents: [
                    {
                      date: '08/19/2016',
                      type: 'secondary',
                      implement: 'bedder_hipper',
                    },
                  ],
                  fertilizerEvents: [],
                  organicMatterEvents: [],
                  irrigationEvents: [],
                  limingEvents: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
describe('collectV1Errors', () => {
  it('should collect the errors present in the example data and filter the offending events', () => {
    const errorCollector = new ErrorCollector(new Logger());
    const filteredProject = collectV1Errors(
      exampleV1DataForErrorTests,
      errorCollector
    );
    const expectedErrors = [
      new ContextualError({
        message:
          'A crop event date was found to be outside of the allowed range',
        context: {
          field: 'ExampleFieldset1',
          crop: 'corn',
          eventType: 'fertilizerEvent',
          eventDate: '05/12/2017',
          datePlanted: '05/02/2016',
        },
      }),
      new ContextualError({
        message:
          'No more than 16 irrigation event data entries can be specified for a crop year.',
        context: { cropYear: 2016, numberOfIrrigationEntries: 17 },
      }),
      new ContextualError({
        message:
          'No more than 16 irrigation event data entries can be specified for a crop year.',
        context: { cropYear: 2015, numberOfIrrigationEntries: 19 },
      }),

      new ContextualError({
        message:
          'A crop event date was found to be outside of the allowed range',
        context: {
          field: 'ExampleFieldset3',
          crop: 'corn',
          eventType: 'tillageEvent',
          eventDate: '04/25/2017',
          datePlanted: '03/30/2016',
        },
      }),
      new ContextualError({
        message:
          'This event must be entered manually, there is not yet a crop in the same year as this event.',
        context: {
          field: 'ExampleFieldset1',
          event: {
            date: '11/20/2013',
            type: 'Mixed Blends',
            productName: 'DAP',
            lbsOfN: 18.78,
            area: 51.69,
            quantityUnit: 'lbs/acre',
          },
        },
      }),
      new ContextualError({
        message:
          'This event must be entered manually, there is not yet a crop in the same year as this event.',
        context: {
          field: 'ExampleFieldset1',
          event: {
            date: '11/20/2013',
            type: 'Mixed Blends',
            productName: 'Potash',
            lbsOfN: undefined,
            area: 51.69,
            quantityUnit: 'lbs/acre',
          },
        },
      }),
    ];
    expect(errorCollector.errors).toEqual(
      expect.arrayContaining(expectedErrors)
    );
    expect(filteredProject).toEqual(expectedFilteredV1Data);
  });
});
