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
  it('will get the tonnes that are grandfatherable given a COMET output file', async () => {
    expect(
      await getQuantificationSummary({ data: GRANDFATHERABLE_YEARS_OUTPUT })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2016,
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      numberOfGrandfatheredYears: 5,
      modeledYears: [
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
      ],
      totalAcres: 119.00075350351062,
      totalM2: 481578.9635861122,
      tenYearProjectedTonnesPerYearPerAcre: 0.285822062454391,
      tenYearProjectedTonnesTotalEstimate: 340.130408,
      tenYearProjectedBaselineTonnesPerYear: 1.8870062,
      tenYearProjectedFutureTonnesPerYear: 35.900047,
      tenYearProjectedTonnesPerYear: 34.0130408,
      tenYearProjectedFutureTonnesPerYearPerAcre: 0.3016791570058497,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.015857094551458718,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 0.0521261741582416,
          '2016': -1.4351472510653576,
          '2017': -2.002480551694641,
          '2018': -0.9850570664701732,
          '2019': 20.249276380014983,
          '2020': 38.75844387790176,
          '2021': 44.73232332659349,
          '2022': 64.33882790601746,
          '2023': 78.07305030801871,
          '2024': 81.32940523618505,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -1.4351472510653576,
        '2017': -2.002480551694641,
        '2018': -0.9850570664701732,
        '2019': 20.249276380014983,
        '2020': 38.75844387790176,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 10.917007077737313,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: -1.4351472510653576,
          method: 'somsc',
          averagePerAcre: -0.01205998456995501,
          totalAcres: 119.00075350351062,
        },
        '2017': {
          amount: -2.002480551694641,
          method: 'somsc',
          averagePerAcre: -0.016827461110450585,
          totalAcres: 119.00075350351062,
        },
        '2018': {
          amount: -0.9850570664701732,
          method: 'somsc',
          averagePerAcre: -0.008277738060214158,
          totalAcres: 119.00075350351062,
        },
        '2019': {
          amount: 20.249276380014983,
          method: 'somsc',
          averagePerAcre: 0.17016090893422464,
          totalAcres: 119.00075350351062,
        },
        '2020': {
          amount: 34.0130408,
          averagePerAcre: 0.285822062454391,
          method: 'projection',
          totalAcres: 119.00075350351062,
        },
      },
      grandfatheredTonnes: 49.83963231078481,
      grandfatheredTonnesPerYearPerAcreAverage: 0.08376355752959919,
    });
  });
  describe('When there are no grandfatherable years', () => {
    it('will still return quantification for given a COMET output file', async () => {
      expect(
        await getQuantificationSummary({
          data: NO_GRANDFATHERABLE_YEARS_OUTPUT,
        })
      ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
        modeledYears: [
          2021,
          2022,
          2023,
          2024,
          2025,
          2026,
          2027,
          2028,
          2029,
          2030,
        ],
        tenYearProjectedTonnesTotalEstimate: 1082.7054,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
        tenYearProjectedTonnesPerYear: 108.27054,
        tenYearProjectedTonnesPerYearPerAcre: 0.9098307095745064,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
          {
            '2021': 126.59497292266812,
            '2022': 138.3042934131776,
            '2023': 159.93219538788773,
            '2024': 163.05942446217105,
            '2025': 127.38255173244718,
            '2026': 35.390486504833845,
            '2027': -9.568678724589025,
            '2028': -26.870950969355135,
            '2029': 102.46237088751425,
            '2030': -24.802548713470443,
          },
        ],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {},
        grandfatherableYears: [],
        grandfatheredTonnes: 0,
        unadjustedGrandfatheredTonnesPerYear: {},
        tenYearProjectedFutureTonnesPerYear: 155.86871,
        tenYearProjectedFutureTonnesPerYearPerAcre: 1.309812798751747,
        tenYearProjectedBaselineTonnesPerYear: 47.59817,
        tenYearProjectedBaselineTonnesPerYearPerAcre: 0.3999820891772405,
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
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      modeledYears: [
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
      ],
      tenYearProjectedTonnesTotalEstimate: 1681.0596,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 112.38744875127914,
      tenYearProjectedTonnesPerYear: 168.10596,
      tenYearProjectedTonnesPerYearPerAcre: 1.1592964675997524,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.195404690936048,
          '2016': 34.94434855725188,
          '2017': 74.04525740261839,
          '2018': 129.15700878846627,
          '2019': 96.05476140935995,
          '2020': 127.78574454214062,
          '2021': 206.08618261355502,
          '2022': 107.88828441856819,
          '2023': 207.7275077425182,
          '2024': 141.39788365066894,
        },
        {
          '2015': 5.728966670702151,
          '2016': 7.611534017973029,
          '2017': 15.88454523126803,
          '2018': 28.18619334367229,
          '2019': 20.786787969573215,
          '2020': 27.481062494072084,
          '2021': 44.457151244323036,
          '2022': 23.442223029370236,
          '2023': 44.9504145312951,
          '2024': 30.90873674511533,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 42.555882575224906,
        '2017': 89.92980263388642,
        '2018': 157.34320213213857,
        '2019': 116.84154937893317,
        '2020': 155.2668070362127,
      },
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      grandfatheredTonnes: 561.9372437563957,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 42.555882575224906,
          method: 'somsc',
          averagePerAcre: 0.2934749270344019,
          totalAcres: 145.0068767552207,
        },
        '2017': {
          amount: 89.92980263388642,
          method: 'somsc',
          averagePerAcre: 0.6201761229965163,
          totalAcres: 145.0068767552207,
        },
        '2018': {
          amount: 157.34320213213857,
          method: 'somsc',
          averagePerAcre: 1.0850740713334737,
          totalAcres: 145.0068767552207,
        },
        '2019': {
          amount: 116.84154937893317,
          method: 'somsc',
          averagePerAcre: 0.8057655746642134,
          totalAcres: 145.0068767552207,
        },
        '2020': {
          amount: 155.2668070362127,
          method: 'somsc',
          averagePerAcre: 1.0707547842597238,
          totalAcres: 145.0068767552207,
        },
      },
      tenYearProjectedFutureTonnesPerYear: 168.10596,
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.1592964675997524,
      tenYearProjectedBaselineTonnesPerYear: -7.3958909,
      tenYearProjectedBaselineTonnesPerYearPerAcre: -0.0510037252404564,
      totalM2: 586822.0104890191,
      totalAcres: 145.0068767552207,
      numberOfGrandfatheredYears: 5,
      switchYear: 2016,
      grandfatheredTonnesPerYearPerAcreAverage: 0.7750490960576657,
      methodologyVersion: '1.0.0',
    });
  });
});
