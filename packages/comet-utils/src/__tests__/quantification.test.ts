import {
  getQuantificationSummary,
  getGrandfatheredTonnesPerYear,
} from '../index';

import {
  GRANDFATHERABLE_YEARS_OUTPUT,
  NO_GRANDFATHERABLE_YEARS_OUTPUT,
  COMPLEX_OUTPUT,
  MULTIPOLYGON_OUTPUT,
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
      // grandfatheredTonnesPerYearPerAcre: 0.834358059193311,
      tenYearProjectedFutureTonnesPerYear: 176.46715,
      grandfatheredTonnes: 496.47117187614447,
      grandfatheredYears: 5,
      somscGrandfatherableTonnesPerYearAverage: 99.2942343752289,
      switchYear: 2015,
      tenYearProjectedTonnesPerYear: 160.569536,
      totalAcres: 119.00674210689633,
      totalM2: 481603.1986041848,
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.4828332149576078,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.1335858264712445,
      grandfatheredTonnesPerYear: {
        '2015': 120.88957366558826,
        '2016': 43.28736522204999,
        '2017': 105.228401624067,
        '2018': 129.19400878679176,
        '2019': 97.87182257764748,
      },
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
        // grandfatheredTonnesPerYearPerAcre: 0,
        grandfatheredTonnes: 0,
        grandfatheredYears: 0,
        somscGrandfatherableTonnesPerYearAverage: 0,
        switchYear: 2020,
        grandfatheredTonnesPerYear: {},
      });
    });
  });
  // todo checkout master quantification and check diff
  it('should quantify multi-polygon output files', async () => {
    expect(
      await getQuantificationSummary({
        xmlData: MULTIPOLYGON_OUTPUT,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      tenYearProjectedTonnesPerYearPerAcre: 1.1533581913018405,
      tenYearProjectedTonnesTotalEstimate: 1672.448691,
      somscAverageTonnesTotalEstimate: 932.7040091919677,
      grandfatherableYears: [2015, 2016, 2017, 2018, 2019],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: [
        {
          '2015': 13.268194830596787,
          '2016': 7.478908262178777,
          '2017': 18.44880961039429,
          '2018': 23.295611123448456,
          '2019': 20.553943742745066,
          '2020': 20.70432300088026,
          '2021': 43.66344963093679,
          '2022': 16.707221931863394,
          '2023': 44.16069820818342,
          '2024': 30.6840811421353,
        },
        {
          '2015': 60.90014578515644,
          '2016': 34.35279847468213,
          '2017': 85.76966639711026,
          '2018': 107.29346186569582,
          '2019': 94.99046450397587,
          '2020': 97.48785290689473,
          '2021': 202.4611476448192,
          '2022': 77.21154156458417,
          '2023': 204.14385209004348,
          '2024': 140.37850822960675,
        },
      ],
      somscGrandfatherableTonnesPerYear: {
        '2015': 74.16834061575322,
        '2016': 41.83170673686091,
        '2017': 104.21847600750455,
        '2018': 130.58907298914428,
        '2019': 115.54440824672093,
      },
      tenYearProjectedBaselineTonnesPerYear: 2.3572619,
      // grandfatheredTonnesPerYearPerAcre: 0.6432136392886346,
      tenYearProjectedFutureTonnesPerYear: 169.602131,
      grandfatheredTonnes: 466.3520045959839,
      grandfatheredYears: 5,
      somscGrandfatherableTonnesPerYearAverage: 93.27040091919677,
      switchYear: 2015,
      tenYearProjectedTonnesPerYear: 167.2448691,
      totalAcres: 145.00687675458755,
      totalM2: 586822.0104864568,
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.1696143989573538,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.0162562076555133,
      grandfatheredTonnesPerYear: {
        '2015': 74.16834061575322,
        '2016': 41.83170673686091,
        '2017': 104.21847600750455,
        '2018': 130.58907298914428,
        '2019': 115.54440824672093,
      },
    });
  });
});
