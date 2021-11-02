import {
  getQuantificationSummary,
  getUnadjustedGrandfatheredTonnesPerYear,
  METHODOLOGY_VERSION,
} from '../index';

import {
  GRANDFATHERABLE_YEARS_OUTPUT,
  NO_GRANDFATHERABLE_YEARS_OUTPUT,
  MULTIPOLYGON_OUTPUT,
} from './example-output';

describe('getUnadjustedGrandfatheredTonnesPerYear', () => {
  describe('When all annuals are net positive', () => {
    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getUnadjustedGrandfatheredTonnesPerYear({
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
            '2015': 17.54,
            '2016': 12.34,
            '2017': 30.43,
            '2018': 30.14,
            '2019': 34.95,
          },
          tenYearProjectedTonnesPerYear: 25.6,
          totalAcres: 16.87,
        })
      ).toStrictEqual<
        ReturnType<typeof getUnadjustedGrandfatheredTonnesPerYear>
      >({
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 17.54,
            method: 'somsc',
            averagePerAcre: 1.039715471250741,
            totalAcres: 16.87,
          },
          '2016': {
            amount: 12.34,
            method: 'somsc',
            averagePerAcre: 0.7314759928867812,
            totalAcres: 16.87,
          },
          '2017': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
            totalAcres: 16.87,
          },
          '2018': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
            totalAcres: 16.87,
          },
          '2019': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
            totalAcres: 16.87,
          },
        },
      });
    });
  });
  describe('When the ten year projection is net negative', () => {
    // todo
    it.todo('should create the correct quantification numbers');
  });
  describe('When some annuals are net negative', () => {
    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getUnadjustedGrandfatheredTonnesPerYear({
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
            '2015': -181.33,
            '2016': 444.75,
            '2017': 251.8,
            '2018': 444.75,
            '2019': 444.75,
          },
          tenYearProjectedTonnesPerYear: 444.75,
          totalAcres: 234.81,
        })
      ).toStrictEqual<
        ReturnType<typeof getUnadjustedGrandfatheredTonnesPerYear>
      >({
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: -181.33,
            method: 'somsc',
            averagePerAcre: -0.7722413866530387,
            totalAcres: 234.81,
          },
          '2016': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
          },
          '2017': {
            amount: 251.8,
            method: 'somsc',
            averagePerAcre: 1.072356373237937,
            totalAcres: 234.81,
          },
          '2018': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
          },
          '2019': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
          },
        },
      });
    });
  });
});

describe('getQuantificationSummary', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file for 5 grandfatherable years', async () => {
    expect(
      await getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 5,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2016,
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      numberOfGrandfatheredYears: 5,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.00075350351062,
      totalM2: 481578.9635861122,
      tenYearProjectedTonnesPerYearPerAcre: 0.5393865005914137,
      tenYearProjectedTonnesTotalEstimate: 641.874,
      tenYearProjectedBaselineTonnesPerYear: -24.6869,
      tenYearProjectedFutureTonnesPerYear: 64.1874,
      tenYearProjectedTonnesPerYear: 64.1874,
      tenYearProjectedFutureTonnesPerYearPerAcre: 0.5393865005914137,
      tenYearProjectedBaselineTonnesPerYearPerAcre: -0.2074516276005909,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237005795497225,
          '2016': 15.527376378425224,
          '2017': 41.80816740503104,
          '2018': 73.32904462643704,
          '2019': 70.7172775187405,
          '2020': 104.66050851613016,
          '2021': 92.35887242848085,
          '2022': 57.86029914122915,
          '2023': 75.20936195948237,
          '2024': NaN,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 15.527376378425224,
        '2017': 41.80816740503104,
        '2018': 73.32904462643704,
        '2019': 70.7172775187405,
        '2020': 104.66050851613016,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 61.208474888952786,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 15.527376378425224,
          method: 'somsc',
          averagePerAcre: 0.13048132823770023,
          totalAcres: 119.00075350351062,
        },
        '2017': {
          amount: 41.80816740503104,
          method: 'somsc',
          averagePerAcre: 0.351326913268643,
          totalAcres: 119.00075350351062,
        },
        '2018': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.5393865005914137,
          totalAcres: 119.00075350351062,
        },
        '2019': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.5393865005914137,
          totalAcres: 119.00075350351062,
        },
        '2020': {
          amount: 64.1874,
          averagePerAcre: 0.5393865005914137,
          method: 'projection',
          totalAcres: 119.00075350351062,
        },
      },
      grandfatheredTonnes: 249.89774378345626,
      grandfatheredTonnesPerYearPerAcreAverage: 0.4199935486561168,
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 4 grandfatherable years', async () => {
    expect(
      await getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 4,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2017,
      grandfatherableYears: [2017, 2018, 2019, 2020],
      numberOfGrandfatheredYears: 4,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.00075350351062,
      totalM2: 481578.9635861122,
      tenYearProjectedTonnesPerYearPerAcre: 0.5393865005914137,
      tenYearProjectedTonnesTotalEstimate: 641.874,
      tenYearProjectedBaselineTonnesPerYear: -24.6869,
      tenYearProjectedFutureTonnesPerYear: 64.1874,
      tenYearProjectedTonnesPerYear: 64.1874,
      tenYearProjectedFutureTonnesPerYearPerAcre: 0.5393865005914137,
      tenYearProjectedBaselineTonnesPerYearPerAcre: -0.2074516276005909,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237005795497225,
          '2016': 15.527376378425224,
          '2017': 41.80816740503104,
          '2018': 73.32904462643704,
          '2019': 70.7172775187405,
          '2020': 104.66050851613016,
          '2021': 92.35887242848085,
          '2022': 57.86029914122915,
          '2023': 75.20936195948237,
          '2024': NaN,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2017': 41.80816740503104,
        '2018': 73.32904462643704,
        '2019': 70.7172775187405,
        '2020': 104.66050851613016,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 72.62874951658468,
      unadjustedGrandfatheredTonnesPerYear: {
        '2017': {
          amount: 41.80816740503104,
          method: 'somsc',
          averagePerAcre: 0.351326913268643,
          totalAcres: 119.00075350351062,
        },
        '2018': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.5393865005914137,
          totalAcres: 119.00075350351062,
        },
        '2019': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.5393865005914137,
          totalAcres: 119.00075350351062,
        },
        '2020': {
          amount: 64.1874,
          averagePerAcre: 0.5393865005914137,
          method: 'projection',
          totalAcres: 119.00075350351062,
        },
      },
      grandfatheredTonnes: 234.37036740503103,
      grandfatheredTonnesPerYearPerAcreAverage: 0.492371603760721,
    });
  });
  describe('When there are no grandfatherable years', () => {
    it('will still return quantification for given a COMET output file', async () => {
      expect(
        await getQuantificationSummary({
          data: NO_GRANDFATHERABLE_YEARS_OUTPUT,
          maxNumberGrandfatheredYearsForProject: 5,
        })
      ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
        modeledYears: [
          2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
        ],
        tenYearProjectedTonnesTotalEstimate: 458.83,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
        tenYearProjectedTonnesPerYear: 45.883,
        tenYearProjectedTonnesPerYearPerAcre: 0.3855689871631478,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
          {
            '2021': 33.38060626864907,
            '2022': 71.90193453284117,
            '2023': 72.65396633514474,
            '2024': 74.06047871442685,
            '2025': 47.216289963699694,
            '2026': 38.91073082815962,
            '2027': 15.547572872048205,
            '2028': -0.6634147719818461,
            '2029': 27.04585162171032,
            '2030': -42.33859862006142,
          },
        ],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {},
        grandfatherableYears: [],
        grandfatheredTonnes: 0,
        unadjustedGrandfatheredTonnesPerYear: {},
        tenYearProjectedFutureTonnesPerYear: 61.3983,
        tenYearProjectedFutureTonnesPerYearPerAcre: 0.5159488338717847,
        tenYearProjectedBaselineTonnesPerYear: 15.5153,
        tenYearProjectedBaselineTonnesPerYearPerAcre: 0.1303798467086369,
        totalM2: 481578.9635861122,
        totalAcres: 119.00075350351062,
        numberOfGrandfatheredYears: 0,
        switchYear: 2021,
        grandfatheredTonnesPerYearPerAcreAverage: 0,
        methodologyVersion: '1.0.0',
      });
    });
  });
  it('should quantify multi-polygon output files', async () => {
    expect(
      await getQuantificationSummary({
        data: MULTIPOLYGON_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 5,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      tenYearProjectedTonnesTotalEstimate: 780.638,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 74.4567141625979,
      tenYearProjectedTonnesPerYear: 78.0638,
      tenYearProjectedTonnesPerYearPerAcre: 0.5383455029638066,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237005795497225,
          '2016': 15.527376378425224,
          '2017': 41.80816740503104,
          '2018': 73.32904462643704,
          '2019': 70.7172775187405,
          '2020': 104.66050851613016,
          '2021': 92.35887242848085,
          '2022': 57.86029914122915,
          '2023': 75.20936195948237,
          '2024': NaN,
        },
        {
          '2015': 5.746271717264432,
          '2016': 3.406406770065806,
          '2017': 8.966450274935438,
          '2018': 15.973293814577158,
          '2019': 15.374521744567634,
          '2020': 22.52052376407958,
          '2021': 19.785112030788145,
          '2022': 12.365248164545722,
          '2023': 16.370102302508144,
          '2024': NaN,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 18.93378314849103,
        '2017': 50.774617679966475,
        '2018': 89.3023384410142,
        '2019': 86.09179926330813,
        '2020': 127.18103228020973,
      },
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      grandfatheredTonnes: 303.8998008284575,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 18.93378314849103,
          method: 'somsc',
          averagePerAcre: 0.13057162234072706,
          totalAcres: 145.0068767552207,
        },
        '2017': {
          amount: 50.774617679966475,
          method: 'somsc',
          averagePerAcre: 0.3501531707746297,
          totalAcres: 145.0068767552207,
        },
        '2018': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.5383455029638066,
          totalAcres: 145.0068767552207,
        },
        '2019': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.5383455029638066,
          totalAcres: 145.0068767552207,
        },
        '2020': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.5383455029638066,
          totalAcres: 145.0068767552207,
        },
      },
      tenYearProjectedFutureTonnesPerYear: 78.0638,
      tenYearProjectedFutureTonnesPerYearPerAcre: 0.5383455029638066,
      tenYearProjectedBaselineTonnesPerYear: -30.0899,
      tenYearProjectedBaselineTonnesPerYearPerAcre: -0.20750671053203462,
      totalM2: 586822.0104890191,
      totalAcres: 145.0068767552207,
      numberOfGrandfatheredYears: 5,
      switchYear: 2016,
      grandfatheredTonnesPerYearPerAcreAverage: 0.4191522604013553,
      methodologyVersion: '1.0.0',
    });
  });
});
