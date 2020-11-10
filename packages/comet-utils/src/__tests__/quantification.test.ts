import {
  getQuantificationSummary,
  getGrandfatheredTonnesPerYear,
} from '../index';

import {
  GRANDFATHERABLE_YEARS_OUTPUT,
  NO_GRANDFATHERABLE_YEARS_OUTPUT,
} from './example-output';

type AnyFunction = (...args: any[]) => any;
type Resolved<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
type ResolvedReturnType<T extends AnyFunction> = Resolved<ReturnType<T>>;

describe('getGrandfatheredTonnesPerYear', () => {
  describe('When all annuals are net positive', () => {
    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getGrandfatheredTonnesPerYear({
          somscGrandfatherableTonnesPerYear: {
            '2015': 17.54,
            '2016': 12.34,
            '2017': 30.43,
            '2018': 30.14,
            '2019': 34.95,
          },
          tenYearProjectedTonnesPerYear: 25.6,
        })
      ).toStrictEqual<ReturnType<typeof getGrandfatheredTonnesPerYear>>({
        grandfatheredTonnesPerYear: {
          '2015': 17.54,
          '2016': 12.34,
          '2017': 25.6,
          '2018': 25.6,
          '2019': 25.6,
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
        getGrandfatheredTonnesPerYear({
          somscGrandfatherableTonnesPerYear: {
            '2015': -181.33,
            '2016': 444.75,
            '2017': 251.8,
            '2018': 444.75,
            '2019': 444.75,
          },
          tenYearProjectedTonnesPerYear: 444.75,
        })
      ).toStrictEqual<ReturnType<typeof getGrandfatheredTonnesPerYear>>({
        grandfatheredTonnesPerYear: {
          '2015': 0,
          '2016': 263.4,
          '2017': 304.7,
          '2018': 538.1,
          '2019': 538.1,
        },
      });
    });
  });
});

describe('getQuantificationSummary', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file', async () => {
    expect(
      await getQuantificationSummary({ xmlData: GRANDFATHERABLE_YEARS_OUTPUT })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      tenYearProjectedTonnesPerYearPerAcre: 1.3492473884863634,
      tenYearProjectedTonnesTotalEstimate: 1605.69536,
      somscAverageTonnesTotalEstimate: 992.942343752289,
      grandfatherableYears: [2015, 2016, 2017, 2018, 2019],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: [
        {
          '2015': 120.88957366558826,
          '2016': 43.28736522204999,
          '2017': 105.228401624067,
          '2018': 129.19400878679176,
          '2019': 97.87182257764748,
          '2020': 168.92058104294398,
          '2021': 272.1879037705469,
          '2022': 92.38950808272901,
          '2023': 270.0208473579143,
          '2024': 149.65168144606594,
        },
      ],
      somscGrandfatherableTonnesPerYear: {
        '2015': 120.88957366558826,
        '2016': 43.28736522204999,
        '2017': 105.228401624067,
        '2018': 129.19400878679176,
        '2019': 97.87182257764748,
      },
      tenYearProjectedBaselineTonnesPerYear: 15.897614,
      grandfatheredTonnesPerYearPerAcre: 0.834358059193311,
      tenYearProjectedFutureTonnesPerYear: 176.46715,
      grandfatheredTonnes: 496.4711718761445,
      grandfatheredYears: 5,
      somscGrandfatherableTonnesPerYearAverage: 99.2942343752289,
      switchYear: 2015,
      grandfatheredTonnesPerYear: 99.2942343752289,
      tenYearProjectedTonnesPerYear: 160.569536,
      totalAcres: 119.00674210689633,
      totalM2: 481603.1986041848,
      grandfatheringMethod: 'Using value computed from somsc',
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.4828332149576078,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.1335858264712445,
      TODO_grandfatheredTonnes: null,
    });
  });
  describe('When there are no grandfatherable years', () => {
    it('will still return quantification for given a COMET output file', async () => {
      expect(
        await getQuantificationSummary({
          xmlData: NO_GRANDFATHERABLE_YEARS_OUTPUT,
        })
      ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
        somscAverageTonnesTotalEstimate: 0,
        grandfatherableYears: [],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: [
          {
            '2020': 21.512554803739313,
            '2021': 189.8415946555484,
            '2022': 80.30323403374872,
            '2023': 246.0286161308517,
            '2024': 123.42537186243399,
            '2025': 146.34627095898384,
            '2026': 40.494103607930256,
            '2027': 17.28526790269211,
            '2028': -29.671080261013287,
            '2029': 174.21881806431668,
          },
        ],
        somscGrandfatherableTonnesPerYear: {},
        tenYearProjectedBaselineTonnesPerYear: 58.102417,
        tenYearProjectedBaselineTonnesPerYearPerAcre: 0.48825251344533616,
        tenYearProjectedFutureTonnesPerYear: 177.79944,
        tenYearProjectedFutureTonnesPerYearPerAcre: 1.4941034805690312,
        tenYearProjectedTonnesPerYear: 119.697023,
        tenYearProjectedTonnesPerYearPerAcre: 1.005850967123695,
        tenYearProjectedTonnesTotalEstimate: 1196.97023,
        totalAcres: 119.00075350355577,
        totalM2: 481578.9635862949,
        grandfatheredTonnesPerYearPerAcre: 0,
        grandfatheredTonnes: 0,
        grandfatheredYears: 0,
        somscGrandfatherableTonnesPerYearAverage: 0,
        switchYear: 2020,
        grandfatheredTonnesPerYear: 0,
        grandfatheringMethod: 'Using value computed from somsc',
        TODO_grandfatheredTonnes: null,
      });
    });
  });
});
