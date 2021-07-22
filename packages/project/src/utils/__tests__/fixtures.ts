import type { Input } from '@nori-dot-com/ggit';

import type { V2Data, Project } from '../../index';

// todo BUG likely impacts quantification: multi tillage dates getting applied to same crop. see: 2018 no till planting for one crops and should have been for each crop
// todo ^ check for multi tillage events on same crop
// todo why does 4/25/2020 have a harvest date and no yield? (get back info from rebekah, adjust the below in any place yield is set to 0 in the sheet fixture)
// todo in some years (i.e. 2019 and more) crop#2, is fertilizer applied to the correct crop? looks like it should go to the first harvested crop instead of cover crop
// todo need a way to get classification of crop from sheet as well

// NOTE: these fixtures are not quite valid project data from a sheet-logic perspective, just being used to
// test the converter.  See nori-graphql/src/__tests__/data/v3-import.json for valid(er) project data.
export const v3Data: Project = {
  version: '3.0.0',
  fields: [
    {
      fieldName: 'example field',
      geojson: {
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
          plantingYear: 2000,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/20/2000',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              harvestEvents: [
                {
                  date: '09/14/2000',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2000',
                  type: 'no tillage',
                  name: null,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2001,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2001',
              fertilizerEvents: [
                {
                  date: '06/15/2001',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2001',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [
                {
                  date: '04/25/2001',
                  volume: 1.0,
                },
                {
                  date: '05/02/2001',
                  volume: 1.0,
                },
                {
                  date: '05/09/2001',
                  volume: 1.0,
                },
                {
                  date: '05/16/2001',
                  volume: 1.0,
                },
                {
                  date: '05/23/2001',
                  volume: 1.0,
                },
                {
                  date: '05/30/2001',
                  volume: 1.0,
                },
                {
                  date: '06/06/2001',
                  volume: 1.0,
                },
                {
                  date: '06/13/2001',
                  volume: 1.0,
                },
                {
                  date: '06/20/2001',
                  volume: 1.0,
                },
                {
                  date: '06/27/2001',
                  volume: 1.0,
                },
                {
                  date: '07/04/2001',
                  volume: 1.0,
                },
                {
                  date: '07/11/2001',
                  volume: 1.0,
                },
                {
                  date: '07/18/2001',
                  volume: 1.0,
                },
                {
                  date: '07/25/2001',
                  volume: 1.0,
                },
                {
                  date: '08/01/2001',
                  volume: 1.0,
                },
                {
                  date: '08/08/2001',
                  volume: 1.0,
                },
                {
                  date: '08/15/2001',
                  volume: 1.0,
                },
                {
                  date: '08/22/2001',
                  volume: 1.0,
                },
                {
                  date: '08/29/2001',
                  volume: 1.0,
                },
                {
                  date: '09/05/2001',
                  volume: 1.0,
                },
              ],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2001',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2001',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2002,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/20/2002',
              fertilizerEvents: [
                {
                  date: '06/15/2003',
                  name: null,
                  type: 'urea ammonium nitrate (30-00-00)',
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2003',
                  type: 'chicken - broiler (litter), solid',
                  name: null,
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2002',
                  type: 'no tillage',
                  name: null,
                },
                {
                  date: '04/19/2003',
                  name: null,
                  type: 'intensive tillage',
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2002',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
                {
                  date: '09/14/2003',
                  grainFruitTuber: 'yes',
                  yield: 134.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2003,
          crops: [],
        },
        {
          plantingYear: 2004,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/20/2004',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2004',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2004',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2005,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2005',
              fertilizerEvents: [
                {
                  date: '06/15/2005',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2005',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2005',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2005',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2006,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/20/2006',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2006',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2006',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2007,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2007',
              fertilizerEvents: [
                {
                  date: '06/15/2007',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2007',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
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
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2007',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2007',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2007',
              fertilizerEvents: [
                {
                  date: '03/01/2008',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 90.2,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/19/2007',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2008',
                  grainFruitTuber: 'yes',
                  yield: 84.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2008,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2008',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: [
                {
                  date: '12/30/2008',
                  type: 'dolomitic limestone',
                  tonsPerAcre: 1.0,
                },
              ],
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/15/2008',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2008',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2009,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2009',
              fertilizerEvents: [
                {
                  date: '06/15/2009',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2009',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2009',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2009',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2009',
              fertilizerEvents: [
                {
                  date: '03/01/2010',
                  lbsOfNPerAcre: 90.2,
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/19/2009',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2010',
                  grainFruitTuber: 'yes',
                  yield: 84,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2010,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2010',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/15/2010',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2010',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2011,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2011',
              fertilizerEvents: [
                {
                  date: '06/15/2011',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2011',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2011',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2011',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2011',
              fertilizerEvents: [
                {
                  date: '03/01/2012',
                  type: 'urea ammonium nitrate (30-00-00)',
                  lbsOfNPerAcre: 90.2,
                  name: null,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: [
                {
                  date: '12/30/2011',
                  type: 'calcitic limestone',
                  tonsPerAcre: 1.0,
                },
              ],
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/19/2011',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2012',
                  grainFruitTuber: 'yes',
                  yield: 84.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2012,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2012',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/15/2012',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2012',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2013,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2013',
              fertilizerEvents: [
                {
                  date: '06/15/2013',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2013',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/19/2013',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2013',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2013',
              fertilizerEvents: [
                {
                  date: '03/01/2014',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 90.2,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/19/2013',
                  type: 'intensive tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2014',
                  grainFruitTuber: 'yes',
                  yield: 84.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2014,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2014',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/14/2014',
                  name: null,
                  type: 'intensive tillage',
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2014',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2015,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2015',
              fertilizerEvents: [
                {
                  date: '06/15/2015',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2015',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2015',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2015',
                  grainFruitTuber: 'yes',
                  yield: 134,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2015',
              fertilizerEvents: [
                {
                  date: '03/01/2016',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 90.2,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/20/2015',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2016',
                  grainFruitTuber: 'yes',
                  yield: 84.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2016,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2016',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/15/2016',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2016',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2017,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2017',
              fertilizerEvents: [
                {
                  date: '06/15/2017',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2017',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2017',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2017',
                  grainFruitTuber: 'yes',
                  yield: 134.0,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'winter wheat',
              plantingDate: '09/20/2017',
              fertilizerEvents: [
                {
                  date: '03/01/2018',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 90.2,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/20/2017',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '06/10/2018',
                  grainFruitTuber: 'yes',
                  yield: 84,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
          ],
        },
        {
          plantingYear: 2018,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '06/15/2018',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '06/15/2018',
                  type: 'no tillage',
                  name: null,
                },
                {
                  date: '09/22/2018',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '11/15/2018',
                  grainFruitTuber: 'yes',
                  yield: 38,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/22/2018',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/22/2018',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2019,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2019',
              fertilizerEvents: [],
              organicMatterEvents: [
                {
                  date: '04/01/2020',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2019',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2019',
                  grainFruitTuber: 'yes',
                  yield: 150,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/20/2019',
              fertilizerEvents: [
                {
                  date: '06/15/2020',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/20/2019',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2020,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/27/2020',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/27/2020',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/20/2020',
                  grainFruitTuber: 'yes',
                  yield: 50,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/22/2020',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/22/2020',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2021,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2021',
              fertilizerEvents: [
                {
                  date: '06/15/2021',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2021',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2021',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2021',
                  grainFruitTuber: 'yes',
                  yield: 150,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/20/2021',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/20/2021',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2022,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/27/2022',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/27/2022',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/20/2022',
                  grainFruitTuber: 'yes',
                  yield: 50,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/22/2022',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/22/2022',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2023,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2023',
              fertilizerEvents: [
                {
                  date: '06/15/2023',
                  type: 'urea ammonium nitrate (30-00-00)',
                  name: null,
                  lbsOfNPerAcre: 149.8,
                },
              ],
              organicMatterEvents: [
                {
                  date: '04/01/2023',
                  name: null,
                  type: 'chicken - broiler (litter), solid',
                  amountPerAcre: 0.78,
                  percentNitrogen: 2.3,
                  carbonNitrogenRatio: 7.8,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/20/2023',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/14/2023',
                  grainFruitTuber: 'yes',
                  yield: 150,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/20/2023',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/20/2023',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
        {
          plantingYear: 2024,
          crops: [
            {
              name: null,
              type: 'soybean',
              plantingDate: '04/27/2024',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '04/27/2024',
                  type: 'no tillage',
                  name: null,
                },
              ],
              harvestEvents: [
                {
                  date: '09/20/2024',
                  grainFruitTuber: 'yes',
                  yield: 50,
                  yieldUnit: 'bu/ac',
                  residueRemoved: 0,
                },
              ],
              classification: 'annual crop',
            },
            {
              name: null,
              type: 'annual rye - legume',
              classification: 'annual cover',
              plantingDate: '09/22/2024',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [
                {
                  date: '09/22/2024',
                  type: 'no tillage',
                  name: null,
                },
              ],
            },
          ],
        },
      ],
      acres: 6,
      historicLandManagement: {
        crp: 'no',
        preYear1980: 'irrigation',
        tillageForYears1980To2000: 'intensive tillage',
        year1980To2000: 'irrigated: annual crops in rotation',
      },
      regenerativeStartYear: 2015,
    },
  ],
};

export const v3DataForIrrigationTests: Project = {
  version: '3.0.0',
  fields: [
    {
      fieldName: 'example field',
      geojson: {
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
          // Single irrigation event
          plantingYear: 2000,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2007',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [
                {
                  date: '04/25/2007',
                  volume: 1.0,
                },
              ],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [],
              classification: 'annual crop',
            },
          ],
        },
        {
          // Two irrigation events
          plantingYear: 2001,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2007',
              fertilizerEvents: [],
              organicMatterEvents: [],
              irrigationEvents: [
                {
                  date: '04/25/2007',
                  volume: 1.0,
                },
                {
                  date: '05/02/2007',
                  volume: 1.0,
                },
              ],
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [],
              classification: 'annual crop',
            },
          ],
        },
        {
          // Regular pattern, many events
          plantingYear: 2002,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2007',
              fertilizerEvents: [],
              organicMatterEvents: [],
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
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [],
              classification: 'annual crop',
            },
          ],
        },
        {
          // irregular pattern, many events
          plantingYear: 2003,
          crops: [
            {
              name: null,
              type: 'corn',
              plantingDate: '04/20/2007',
              fertilizerEvents: [],
              organicMatterEvents: [],
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
              limingEvents: null,
              grazingEvents: null,
              burningEvent: null,
              soilOrCropDisturbanceEvents: [],
              harvestEvents: [],
              classification: 'annual crop',
            },
          ],
        },
      ],
      acres: 6,
      historicLandManagement: {
        crp: 'no',
        preYear1980: 'irrigation',
        tillageForYears1980To2000: 'intensive tillage',
        year1980To2000: 'irrigated: annual crops in rotation',
      },
      regenerativeStartYear: 2015,
    },
  ],
};

export const ggitInputData: Input.InputData = {
  '@cometEmailId': 'comet@nori.com',
  Cropland: [
    {
      '@Name':
        'ggit schema|example field|U3VwcGxpZXJQcm9qZWN0UGFyY2VsOlVzZXIsNDcwNTU5NzgzMDIwMTM0NCxTdXBwbGllclByb2ZpbGUsNTg4ODc1MDQ4MTU3MTg0MCxTdXBwbGllclByb2plY3QsNTQ1ODIzMDQyMTQ4NzYxNixTdXBwbGllclByb2plY3RQYXJjZWwsNTQyODQ5NDM0OTYzMTQ4OA==|025039656b07efbdd7aef67fc6e0cb643f158e7e|2021-03-09T16:52:15.223Z|6|0',
      GEOM: {
        '@SRID': '4326',
        '@AREA': 6,
        '#text':
          'POLYGON((-102.0256 41.1624,-102.02423 41.1631,-102.0225 41.1635,-102.0261 41.161,-102.0256 41.1624))',
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
      PreCRPTillage: [],
      PostCRPManagement: [],
      PostCRPTillage: [],
      CropScenario: [
        {
          '@Name': 'Current',
          CropYear: [
            {
              '@Year': 2000,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean',
                  PlantingDate: '04/20/2000',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2000',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2000',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2001',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2001',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2001',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2001',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {
                    IrrigationEvent: [
                      {
                        IrrigationDate: '04/25/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/02/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/09/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/16/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/23/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/30/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/06/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/13/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/20/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/27/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/04/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/11/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/18/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/25/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/01/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/08/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/15/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/22/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/29/2001',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '09/05/2001',
                        IrrigationInches: 1.0,
                      },
                    ],
                  },
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2002',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2002',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
              ],
            },
            {
              '@Year': 2003,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'soybean', // todo use actual perennial and restrict type accordingly
                  ContinueFromPreviousYear: 'y',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2003',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2003',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2003',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2003',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2004',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2004',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2005',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2005',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2005',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2005',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2006',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2006',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2007',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2007',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2007',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2007',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {
                    IrrigationEvent: [
                      {
                        IrrigationDate: '04/25/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/02/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/09/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/16/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/23/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '05/30/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/06/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/13/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/20/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '06/27/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/04/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/11/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/18/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '07/25/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/01/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/08/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/15/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/22/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '08/29/2007',
                        IrrigationInches: 1.0,
                      },
                      {
                        IrrigationDate: '09/05/2007',
                        IrrigationInches: 1.0,
                      },
                    ],
                  },
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2007',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2008',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/19/2007',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2008',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2008',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/15/2008',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {
                    LimingDate: '12/30/2008',
                    LimingMethod: 'dolomitic limestone',
                    LimingRate: 1.0,
                  },
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2009',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2009',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2009',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2009',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2009',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2010',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/19/2009',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2010',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2010',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/15/2010',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2011',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2011',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2011',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2011',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2011',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2012',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/19/2011',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2012',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {
                    LimingDate: '12/30/2011',
                    LimingMethod: 'calcitic limestone',
                    LimingRate: 1.0,
                  },
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2012',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/15/2012',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2013',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/19/2013',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2013',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2013',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2013',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2014',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/19/2013',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2014',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2014',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/14/2014',
                        TillageType: 'intensive tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
              ],
            },
          ],
        },
        {
          '@Name': 'Future',
          CropYear: [
            {
              '@Year': 2015,
              Crop: [
                {
                  '@CropNumber': 1,
                  CropName: 'corn',
                  PlantingDate: '04/20/2015',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2015',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2015',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2015',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2015',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2015',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2016',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/20/2015',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2016',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2016',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/15/2016',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2017',
                        Grain: 'yes',
                        yield: 134.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2017',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2017',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2017',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'winter wheat',
                  PlantingDate: '09/20/2017',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '06/10/2018',
                        Grain: 'yes',
                        yield: 84.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/20/2017',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '03/01/2018',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 90.2,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '11/15/2018',
                        Grain: 'yes',
                        yield: 38.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '06/15/2018',
                        TillageType: 'no tillage',
                      },
                      {
                        TillageDate: '09/22/2018',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2018',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/22/2018',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2019',
                        Grain: 'yes',
                        yield: 150.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2019',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2020',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2019',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/20/2019',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2020',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/20/2020',
                        Grain: 'yes',
                        yield: 50.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/27/2020',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2020',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/22/2020',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2021',
                        Grain: 'yes',
                        yield: 150.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2021',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2021',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2021',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2021',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/20/2021',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/20/2022',
                        Grain: 'yes',
                        yield: 50.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/27/2022',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2022',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/22/2022',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/14/2023',
                        Grain: 'yes',
                        yield: 150.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/20/2023',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {
                    NApplicationEvent: [
                      {
                        NApplicationDate: '06/15/2023',
                        NApplicationType: 'urea ammonium nitrate (30-00-00)',
                        NApplicationAmount: 149.8,
                        NApplicationMethod: 'surface broadcast',
                        EEP: 'none',
                      },
                    ],
                  },
                  OMADApplicationList: {
                    OMADApplicationEvent: [
                      {
                        OMADApplicationDate: '04/01/2023',
                        OMADType: 'chicken - broiler (litter), solid',
                        OMADAmount: 0.78,
                        OMADPercentN: 2.3,
                        OMADCNRatio: 7.8,
                      },
                    ],
                  },
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/20/2023',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/20/2023',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
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
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {
                    HarvestEvent: [
                      {
                        HarvestDate: '09/20/2024',
                        Grain: 'yes',
                        yield: 50.0,
                        StrawStoverHayRemoval: 0,
                      },
                    ],
                  },
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '04/27/2024',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
                {
                  '@CropNumber': 2,
                  CropName: 'annual rye - legume',
                  PlantingDate: '09/22/2024',
                  ContinueFromPreviousYear: 'n',
                  HarvestList: {},
                  TillageList: {
                    TillageEvent: [
                      {
                        TillageDate: '09/22/2024',
                        TillageType: 'no tillage',
                      },
                    ],
                  },
                  NApplicationList: {},
                  OMADApplicationList: {},
                  IrrigationList: {},
                  BurnEvent: {},
                  LimingEvent: {},
                  GrazingList: {},
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const v2Data: V2Data = {
  fields: [
    {
      fieldName: 'Example Field Name',
      cropYears: [
        {
          plantingYear: 2021,
          crops: [
            {
              cropName: 'Soybeans',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
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
        {
          plantingYear: 2020,
          crops: [
            {
              cropName: 'Corn',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '4/27/2020',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '10/28/2020',
                  yield: 203.55,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
                },
              ],
              tillageEvents: [
                {
                  date: '4/25/2020',
                  method: 'mulch tillage',
                },
              ],
              fertilizerEvents: [
                {
                  date: '4/21/2020',
                  productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                  lbsOfNPerAcre: 70.22333594361778,
                },
                {
                  date: '6/6/2020',
                  productName: 'Urea Ammonium Phosphate (27-27-00)',
                  lbsOfNPerAcre: 45.995459919179325,
                },
              ],
              organicMatterEvents: [
                {
                  date: '12/19/2019',
                  percentNitrogen: 0.76,
                  amountPerAcre: 13.439464627151052,
                  carbonNitrogenRatio: null,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: [],
              burningEvents: [],
            },
          ],
        },
        {
          plantingYear: 2019,
          crops: [
            {
              cropName: 'Soybeans',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '5/17/2019',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '10/30/2019',
                  yield: 50.89,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
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
          plantingYear: 2018,
          crops: [
            {
              cropName: 'Corn',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '5/17/2018',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '10/17/2018',
                  yield: 206.42,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
                },
              ],
              tillageEvents: [
                {
                  date: '5/17/2018',
                  method: 'mulch tillage',
                },
              ],
              fertilizerEvents: [
                {
                  date: '5/16/2018',
                  productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                  lbsOfNPerAcre: 28.118872357086893,
                },
                {
                  date: '6/24/2018',
                  productName: 'Urea Ammonium Phosphate (34-17-00)',
                  lbsOfNPerAcre: 46.50650679961159,
                },
              ],
              organicMatterEvents: [
                {
                  date: '11/30/2017',
                  percentNitrogen: 0.64,
                  amountPerAcre: 13.720321064996085,
                  carbonNitrogenRatio: null,
                  percentMoisture: null,
                },
              ],
              irrigationEvents: [],
              limingEvents: [],
              burningEvents: [],
            },
          ],
        },
        {
          plantingYear: 2017,
          crops: [
            {
              cropName: 'Soybeans',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '5/30/2017',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '10/27/2017',
                  yield: 44.01,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
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
          plantingYear: 2016,
          crops: [
            {
              cropName: 'Corn',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '5/4/2016',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '11/02/2016',
                  yield: 219.56,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
                },
              ],
              tillageEvents: [],
              fertilizerEvents: [
                {
                  date: '4/13/2016',
                  productName: 'Anhydrous Ammonia (gas) (82-00-00)',
                  lbsOfNPerAcre: 110.85090294972589,
                },
                {
                  date: '4/26/2016',
                  productName: 'Urea (46-00-00)',
                  lbsOfNPerAcre: 47.81910517541112,
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
          plantingYear: 2015,
          crops: [
            {
              cropName: 'Soybeans',
              cropType: 'Annual crop',
              continueFromPreviousYear: 'no',
              datePlanted: '5/19/2015',
              cropNumber: 1,
              harvestOrKillEvents: [
                {
                  date: '10/08/2015',
                  yield: 55.89,
                  yieldNumeratorUnit: 'BU',
                  yieldDenominatorUnit: 'ACRE',
                  grainFruitTuber: 'yes',
                  residueRemoved: 0,
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
      ],
      area: 119,
      areaUnit: 'Ac',
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
      srid: '',
    },
  ],
  energyUse: [],
};
