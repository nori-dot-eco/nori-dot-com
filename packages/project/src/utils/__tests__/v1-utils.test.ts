import { ContextualError, ErrorCollector } from '../../../../errors';
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
                    [-76.18193333333403, 39.24273833333299],
                    [-76.18390000000069, 39.2445466666663],
                    [-76.18384166666738, 39.244541666666294],
                    [-76.18193333333403, 39.24273833333299],
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
                      harvestedYield: null,
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
                      harvestedYield: null,
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
                      productDensity: null,
                    },
                  ],
                  organicMatterEvents: [],
                  // too many events! (17)
                  irrigationEvents: [
                    { date: '05/11/2016', volume: 1.0 },
                    { date: '05/12/2016', volume: 1.0 },
                    { date: '05/13/2016', volume: 1.0 },
                    { date: '05/14/2016', volume: 1.0 },
                    { date: '05/15/2016', volume: 1.0 },
                    { date: '05/16/2016', volume: 1.0 },
                    { date: '05/17/2016', volume: 1.0 },
                    { date: '05/18/2016', volume: 1.0 },
                    { date: '05/19/2016', volume: 1.0 },
                    { date: '05/20/2016', volume: 1.0 },
                    { date: '05/21/2016', volume: 1.0 },
                    { date: '05/22/2016', volume: 1.0 },
                    { date: '05/23/2016', volume: 1.0 },
                    { date: '05/24/2016', volume: 1.0 },
                    { date: '05/25/2016', volume: 1.0 },
                    { date: '05/26/2016', volume: 1.0 },
                    { date: '05/27/2016', volume: 1.0 },
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
                    [-76.18193333333403, 39.24273833333299],
                    [-76.18390000000069, 39.2445466666663],
                    [-76.18384166666738, 39.244541666666294],
                    [-76.18193333333403, 39.24273833333299],
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
                      productDensity: null,
                    },
                  ],
                  organicMatterEvents: [],
                  // acceptable number of irrigation events
                  irrigationEvents: [{ date: '05/23/2015', volume: 1.0 }],
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
                    [-76.18193333333403, 39.24273833333299],
                    [-76.18390000000069, 39.2445466666663],
                    [-76.18384166666738, 39.244541666666294],
                    [-76.18193333333403, 39.24273833333299],
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
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
                      frequency: 7,
                    },
                    {
                      date: '05/02/15',
                      startDate: '05/02/2015',
                      endDate: '05/09/2015',
                      volume: 1.0,
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
                      date: '09/19/15',
                      startDate: '09/019/2015',
                      endDate: '06/16/2015',
                      volume: 1.0,
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

describe('collectV1Errors', () => {
  it('should collect the errors present in the example data', () => {
    const errorCollector = new ErrorCollector(new Logger());
    collectV1Errors(exampleV1DataForErrorTests, errorCollector);
    const expectedErrors = [
      new ContextualError(
        'A crop event date was found to be outside of the allowed range',
        {
          field: 'ExampleFieldset1',
          crop: 'corn',
          eventType: 'fertilizerEvent',
          eventDate: '05/12/2017',
          datePlanted: '05/02/2016',
        }
      ),
      new ContextualError(
        'No more than 16 irrigation event data entries can be specified for a crop year.',
        { cropYear: 2016, numberOfIrrigationEntries: 17 }
      ),
      new ContextualError(
        'No more than 16 irrigation event data entries can be specified for a crop year.',
        { cropYear: 2015, numberOfIrrigationEntries: 19 }
      ),

      new ContextualError(
        'A crop event date was found to be outside of the allowed range',
        {
          field: 'ExampleFieldset3',
          crop: 'corn',
          eventType: 'tillageEvent',
          eventDate: '04/25/2017',
          datePlanted: '03/30/2016',
        }
      ),
    ];
    console.log(errorCollector.errors);
    expect(errorCollector.errors).toEqual(
      expect.arrayContaining(expectedErrors)
    );
  });
});
