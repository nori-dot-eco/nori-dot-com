import * as constants from '../constants';
import {
  getQuantificationSummaries,
  getQuantificationSummary,
  getUnadjustedGrandfatheredTonnesPerYear,
  getGrandfatherableYears,
  parseYearlyMapUnitData,
} from '../index';

import {
  GRANDFATHERABLE_YEARS_OUTPUT,
  NO_GRANDFATHERABLE_YEARS_OUTPUT,
  MULTI_FIELD_OUTPUT,
} from './example-output';

/* //////////////////////////////////////////////////////////////
                              MOCKS
////////////////////////////////////////////////////////////// */

jest.mock<typeof constants>('../constants', () => ({
  ...jest.requireActual('../constants'),
  get CURRENT_YEAR() {
    return 2021;
  },
  get METHODOLOGY_VERSION() {
    return '1.0.0' as const;
  },
}));

/* //////////////////////////////////////////////////////////////
                            CONSTANTS
////////////////////////////////////////////////////////////// */
const { METHODOLOGY_VERSION, CURRENT_YEAR } = constants;

/* //////////////////////////////////////////////////////////////
                              TESTS
////////////////////////////////////////////////////////////// */
describe('getGrandfatherableYears', () => {
  it.concurrent.each([
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that was imported and `quantifyAsOfYear` as 2023',
      quantifyAsOfYear: 2023,
      modeledYears: [
        // imported projects contain 10 years of modeled future years
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
      expected: {
        firstGrandfatherableYear: 2018,
        grandfatherableYears: [2018, 2019, 2020, 2021, 2022],
        numberOfGrandfatheredYears: 5,
      },
    },
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that uses the intake sheet and `quantifyAsOfYear` as 2023',
      quantifyAsOfYear: 2023,
      modeledYears: [
        // fields that use the intake sheet contain 10 modeled future years up to 2030
        2015,
        2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
        2028, 2029, 2030,
      ],
      expected: {
        firstGrandfatherableYear: 2018,
        grandfatherableYears: [2018, 2019, 2020, 2021, 2022],
        numberOfGrandfatheredYears: 5,
      },
    },
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that was imported and `quantifyAsOfYear` as 2022',
      quantifyAsOfYear: 2022,
      modeledYears: [
        // imported projects contain 10 years of modeled future years
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
      expected: {
        firstGrandfatherableYear: 2017,
        grandfatherableYears: [2017, 2018, 2019, 2020, 2021],
        numberOfGrandfatheredYears: 5,
      },
    },
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that uses the intake sheet and `quantifyAsOfYear` as 2022',
      quantifyAsOfYear: 2022,
      modeledYears: [
        // fields that use the intake sheet contain 10 modeled future years up to 2030
        2015,
        2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
        2028, 2029, 2030,
      ],
      expected: {
        firstGrandfatherableYear: 2017,
        grandfatherableYears: [2017, 2018, 2019, 2020, 2021],
        numberOfGrandfatheredYears: 5,
      },
    },
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that was imported and `quantifyAsOfYear` as undefined',
      quantifyAsOfYear: undefined,
      modeledYears: Array.from({ length: 10 }) // 10 modeled years starting from 10 years prior to CURRENT_YEAR
        .map((_, i) => CURRENT_YEAR - i)
        .reverse(),
      expected: {
        firstGrandfatherableYear: 2016,
        grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
        numberOfGrandfatheredYears: 5,
      },
    },
    {
      description:
        'Gets the grandfatherable years for the quantification run of a field that uses the intake sheet and `quantifyAsOfYear` as undefined',
      modeledYears: [
        // fields that use the intake sheet contain 10 modeled future years up to 2030
        2015,
        2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
        2028, 2029, 2030,
      ],
      expected: {
        firstGrandfatherableYear: 2016,
        grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
        numberOfGrandfatheredYears: 5,
      },
    },
  ])('$description', ({ quantifyAsOfYear, expected, modeledYears }) => {
    expect(
      getGrandfatherableYears({
        modeledYears,
        maxNumberOfGrandfatheredYears: 5,
        quantifyAsOfYear,
      })
    ).toStrictEqual<ReturnType<typeof getGrandfatherableYears>>(expected);
  });
});

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
            averagePerAcre: 1.039_715_471_250_741,
            totalAcres: 16.87,
          },
          '2016': {
            amount: 12.34,
            method: 'somsc',
            averagePerAcre: 0.731_475_992_886_781_2,
            totalAcres: 16.87,
          },
          '2017': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.517_486_662_714_878_4,
            totalAcres: 16.87,
          },
          '2018': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.517_486_662_714_878_4,
            totalAcres: 16.87,
          },
          '2019': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.517_486_662_714_878_4,
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
            averagePerAcre: -0.772_241_386_653_038_7,
            totalAcres: 234.81,
          },
          '2016': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.894_084_579_021_336_3,
            totalAcres: 234.81,
          },
          '2017': {
            amount: 251.8,
            method: 'somsc',
            averagePerAcre: 1.072_356_373_237_937,
            totalAcres: 234.81,
          },
          '2018': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.894_084_579_021_336_3,
            totalAcres: 234.81,
          },
          '2019': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.894_084_579_021_336_3,
            totalAcres: 234.81,
          },
        },
      });
    });
  });
});

describe('getQuantificationSummary', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file for 5 grandfatherable years', () => {
    expect(
      getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberOfGrandfatheredYears: 5,
      })
    ).toStrictEqual<ReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2016,
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      numberOfGrandfatheredYears: 5,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
      tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
      tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237_005_795_497_225,
          '2016': 15.527_376_378_425_224,
          '2017': 41.808_167_405_031_04,
          '2018': 73.329_044_626_437_04,
          '2019': 70.717_277_518_740_5,
          '2020': 104.660_508_516_130_16,
          '2021': 92.358_872_428_480_85,
          '2022': 57.860_299_141_229_15,
          '2023': 75.209_361_959_482_37,
          '2024': 49.259_094_477_479_096,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 15.527_376_378_425_224,
        '2017': 41.808_167_405_031_04,
        '2018': 73.329_044_626_437_04,
        '2019': 70.717_277_518_740_5,
        '2020': 104.660_508_516_130_16,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 61.208_474_888_952_786,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 15.527_376_378_425_224,
          method: 'somsc',
          averagePerAcre: 0.130_481_328_237_700_23,
          totalAcres: 119.000_753_503_510_62,
        },
        '2017': {
          amount: 41.808_167_405_031_04,
          method: 'somsc',
          averagePerAcre: 0.351_326_913_268_643,
          totalAcres: 119.000_753_503_510_62,
        },
        '2018': {
          amount: 60.696_700_824_693_26,
          method: 'projection',
          averagePerAcre: 0.510_053_079_814_344_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2019': {
          amount: 60.696_700_824_693_26,
          method: 'projection',
          averagePerAcre: 0.510_053_079_814_344_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2020': {
          amount: 60.696_700_824_693_26,
          averagePerAcre: 0.510_053_079_814_344_7,
          method: 'projection',
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 239.425_646_257_536_04,
      grandfatheredTonnesPerYearPerAcreAverage: 0.402_393_496_189_875_4,
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 4 grandfatherable years', () => {
    expect(
      getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberOfGrandfatheredYears: 4,
      })
    ).toStrictEqual<ReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2017,
      grandfatherableYears: [2017, 2018, 2019, 2020],
      numberOfGrandfatheredYears: 4,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
      tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
      tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237_005_795_497_225,
          '2016': 15.527_376_378_425_224,
          '2017': 41.808_167_405_031_04,
          '2018': 73.329_044_626_437_04,
          '2019': 70.717_277_518_740_5,
          '2020': 104.660_508_516_130_16,
          '2021': 92.358_872_428_480_85,
          '2022': 57.860_299_141_229_15,
          '2023': 75.209_361_959_482_37,
          '2024': 49.259_094_477_479_096,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2017': 41.808_167_405_031_04,
        '2018': 73.329_044_626_437_04,
        '2019': 70.717_277_518_740_5,
        '2020': 104.660_508_516_130_16,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 72.628_749_516_584_68,
      unadjustedGrandfatheredTonnesPerYear: {
        '2017': {
          amount: 41.808_167_405_031_04,
          method: 'somsc',
          averagePerAcre: 0.351_326_913_268_643,
          totalAcres: 119.000_753_503_510_62,
        },
        '2018': {
          amount: 60.696_700_824_693_26,
          method: 'projection',
          averagePerAcre: 0.510_053_079_814_344_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2019': {
          amount: 60.696_700_824_693_26,
          method: 'projection',
          averagePerAcre: 0.510_053_079_814_344_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2020': {
          amount: 60.696_700_824_693_26,
          averagePerAcre: 0.510_053_079_814_344_7,
          method: 'projection',
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 223.898_269_879_110_8,
      grandfatheredTonnesPerYearPerAcreAverage: 0.470_371_538_177_919_2,
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 3 grandfatherable years and a custom quantifyAsOfYear value', () => {
    expect(
      getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberOfGrandfatheredYears: 3,
        quantifyAsOfYear: 2019,
      })
    ).toStrictEqual<ReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2016,
      grandfatherableYears: [2016, 2017, 2018],
      numberOfGrandfatheredYears: 3,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
      tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
      tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
        {
          '2015': 26.237_005_795_497_225,
          '2016': 15.527_376_378_425_224,
          '2017': 41.808_167_405_031_04,
          '2018': 73.329_044_626_437_04,
          '2019': 70.717_277_518_740_5,
          '2020': 104.660_508_516_130_16,
          '2021': 92.358_872_428_480_85,
          '2022': 57.860_299_141_229_15,
          '2023': 75.209_361_959_482_37,
          '2024': 49.259_094_477_479_096,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 15.527_376_378_425_224,
        '2017': 41.808_167_405_031_04,
        '2018': 73.329_044_626_437_04,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 43.554_862_803_297_766,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 15.527_376_378_425_224,
          method: 'somsc',
          averagePerAcre: 0.130_481_328_237_700_23,
          totalAcres: 119.000_753_503_510_62,
        },
        '2017': {
          amount: 41.808_167_405_031_04,
          method: 'somsc',
          averagePerAcre: 0.351_326_913_268_643,
          totalAcres: 119.000_753_503_510_62,
        },
        '2018': {
          amount: 60.696_700_824_693_26,
          method: 'projection',
          averagePerAcre: 0.510_053_079_814_344_7,
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 118.032_244_608_149_53,
      grandfatheredTonnesPerYearPerAcreAverage: 0.330_620_440_440_229_3,
    });
  });
  describe('When there are no grandfatherable years', () => {
    it('will still return quantification for given a COMET output file', () => {
      expect(
        getQuantificationSummary({
          data: NO_GRANDFATHERABLE_YEARS_OUTPUT,
          maxNumberOfGrandfatheredYears: 5,
        })
      ).toStrictEqual<ReturnType<typeof getQuantificationSummary>>({
        modeledYears: [
          2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
        ],
        tenYearProjectedTonnesTotalEstimate: 337.715_417_744_636_34,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
        tenYearProjectedTonnesPerYear: 33.771_541_774_463_635,
        tenYearProjectedTonnesPerYearPerAcre: 0.283_792_671_728_480_66,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
          {
            '2021': 33.380_606_268_649_07,
            '2022': 71.901_934_532_841_17,
            '2023': 72.653_966_335_144_74,
            '2024': 74.060_478_714_426_85,
            '2025': 47.216_289_963_699_694,
            '2026': 38.910_730_828_159_62,
            '2027': 15.547_572_872_048_205,
            '2028': -0.663_414_771_981_846_1,
            '2029': 27.045_851_621_710_32,
            '2030': -42.338_598_620_061_42,
          },
        ],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {},
        grandfatherableYears: [],
        grandfatheredTonnes: 0,
        unadjustedGrandfatheredTonnesPerYear: {},
        totalM2: 481_578.963_586_112_2,
        totalAcres: 119.000_753_503_510_62,
        numberOfGrandfatheredYears: 0,
        switchYear: 2021,
        grandfatheredTonnesPerYearPerAcreAverage: 0,
        methodologyVersion: '1.0.0',
      });
    });
  });
  it('should quantify multi-polygon output files', () => {
    const { parsedJsonOutput } = parseYearlyMapUnitData({
      rawJsonOutput: MULTI_FIELD_OUTPUT,
    });
    const result = getQuantificationSummaries({
      parsedJsonOutput,
      maxNumberOfGrandfatheredYears: 5,
    });

    expect(result).toStrictEqual<
      Record<string, ReturnType<typeof getQuantificationSummary>>
    >({
      'externalId=14d9ac5b-b3d6-4de3-8a4d-c0d3ead56d96': {
        modeledYears: [
          2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        ],
        tenYearProjectedTonnesPerYear: 80.092_410_746_070_4,
        tenYearProjectedTonnesPerYearPerAcre: 0.456_044_051_917_675_55,
        tenYearProjectedTonnesTotalEstimate: 800.924_107_460_704,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 120.809_480_377_702_2,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
          {
            '2012': -129.937_652_180_419_52,
            '2013': 64.568_292_353_508_27,
            '2014': 148.961_026_629_237_47,
            '2015': 166.554_508_359_093_8,
            '2016': 134.706_494_834_650_64,
            '2017': -31.960_283_913_257_378,
            '2018': 201.037_692_692_949_6,
            '2019': 120.329_836_472_426_93,
            '2020': 179.933_661_801_741_12,
            '2021': -53.269_469_589_226_915,
          },
        ],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2016': 134.706_494_834_650_64,
          '2017': -31.960_283_913_257_378,
          '2018': 201.037_692_692_949_6,
          '2019': 120.329_836_472_426_93,
          '2020': 179.933_661_801_741_12,
        },
        grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
        grandfatheredTonnes: 288.409_359_071_024_26,
        grandfatheredTonnesPerYearPerAcreAverage: 0.328_439_040_594_574_4,
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 80.092_410_746_070_4,
            method: 'projection',
            averagePerAcre: 0.456_044_051_917_675_55,
            totalAcres: 175.624_285_437_514_2,
          },
          '2017': {
            amount: -31.960_283_913_257_378,
            method: 'somsc',
            averagePerAcre: -0.181_981_004_697_830_4,
            totalAcres: 175.624_285_437_514_2,
          },
          '2018': {
            amount: 80.092_410_746_070_4,
            method: 'projection',
            averagePerAcre: 0.456_044_051_917_675_55,
            totalAcres: 175.624_285_437_514_2,
          },
          '2019': {
            amount: 80.092_410_746_070_4,
            method: 'projection',
            averagePerAcre: 0.456_044_051_917_675_55,
            totalAcres: 175.624_285_437_514_2,
          },
          '2020': {
            amount: 80.092_410_746_070_4,
            method: 'projection',
            averagePerAcre: 0.456_044_051_917_675_55,
            totalAcres: 175.624_285_437_514_2,
          },
        },
        totalM2: 710_726.267_452_201_8,
        totalAcres: 175.624_285_437_514_2,
        numberOfGrandfatheredYears: 5,
        switchYear: 2016,
        methodologyVersion: '1.0.0',
      },
      'externalId=7c8bf8c4-c880-4836-854a-b1b2ec153835': {
        modeledYears: [
          2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
        ],
        tenYearProjectedTonnesTotalEstimate: 76.935_320_636_772_09,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 10.292_001_747_306_955,
        tenYearProjectedTonnesPerYear: 7.693_532_063_677_209,
        tenYearProjectedTonnesPerYearPerAcre: 0.547_584_319_099_662_5,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
          {
            '2012': 0.525_846_857_138_835_9,
            '2013': -5.183_579_265_870_239_5,
            '2014': 4.749_087_753_168_133_5,
            '2015': 7.747_216_675_435_475,
            '2016': 8.260_583_768_730_98,
            '2017': 12.675_552_032_674_942,
            '2018': 12.560_614_438_525_4,
            '2019': 11.198_154_691_164_232,
            '2020': 6.765_103_805_439_222,
            '2021': 17.636_739_880_365_106,
          },
        ],
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2016': 8.260_583_768_730_98,
          '2017': 12.675_552_032_674_942,
          '2018': 12.560_614_438_525_4,
          '2019': 11.198_154_691_164_232,
          '2020': 6.765_103_805_439_222,
        },
        grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
        grandfatheredTonnes: 37.539_232_060_148_06,
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 7.693_532_063_677_209,
            method: 'projection',
            averagePerAcre: 0.547_584_319_099_662_5,
            totalAcres: 14.049_949_560_876_588,
          },
          '2017': {
            amount: 7.693_532_063_677_209,
            method: 'projection',
            averagePerAcre: 0.547_584_319_099_662_5,
            totalAcres: 14.049_949_560_876_588,
          },
          '2018': {
            amount: 7.693_532_063_677_209,
            method: 'projection',
            averagePerAcre: 0.547_584_319_099_662_5,
            totalAcres: 14.049_949_560_876_588,
          },
          '2019': {
            amount: 7.693_532_063_677_209,
            method: 'projection',
            averagePerAcre: 0.547_584_319_099_662_5,
            totalAcres: 14.049_949_560_876_588,
          },
          '2020': {
            amount: 6.765_103_805_439_222,
            method: 'somsc',
            averagePerAcre: 0.481_503_778_794_857_23,
            totalAcres: 14.049_949_560_876_588,
          },
        },
        totalM2: 56_858.128_614_828_41,
        totalAcres: 14.049_949_560_876_588,
        numberOfGrandfatheredYears: 5,
        switchYear: 2016,
        grandfatheredTonnesPerYearPerAcreAverage: 0.534_368_211_038_701_6,
        methodologyVersion: '1.0.0',
      },
    });
  });
});

describe('getQuantificationSummaries', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file for 5 grandfatherable years', () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    const { parsedJsonOutput } = parseYearlyMapUnitData({
      rawJsonOutput: GRANDFATHERABLE_YEARS_OUTPUT,
    });
    const result = getQuantificationSummaries({
      parsedJsonOutput,
      maxNumberOfGrandfatheredYears: 5,
    });
    expect(result).toStrictEqual<ReturnType<typeof getQuantificationSummaries>>(
      {
        [modelRunName]: {
          methodologyVersion: METHODOLOGY_VERSION,
          switchYear: 2016,
          grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
          numberOfGrandfatheredYears: 5,
          modeledYears: [
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
          ],
          totalAcres: 119.000_753_503_510_62,
          totalM2: 481_578.963_586_112_2,
          tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
          tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
          tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
            {
              '2015': 26.237_005_795_497_225,
              '2016': 15.527_376_378_425_224,
              '2017': 41.808_167_405_031_04,
              '2018': 73.329_044_626_437_04,
              '2019': 70.717_277_518_740_5,
              '2020': 104.660_508_516_130_16,
              '2021': 92.358_872_428_480_85,
              '2022': 57.860_299_141_229_15,
              '2023': 75.209_361_959_482_37,
              '2024': 49.259_094_477_479_096,
            },
          ],
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
            '2016': 15.527_376_378_425_224,
            '2017': 41.808_167_405_031_04,
            '2018': 73.329_044_626_437_04,
            '2019': 70.717_277_518_740_5,
            '2020': 104.660_508_516_130_16,
          },
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 61.208_474_888_952_786,
          unadjustedGrandfatheredTonnesPerYear: {
            '2016': {
              amount: 15.527_376_378_425_224,
              method: 'somsc',
              averagePerAcre: 0.130_481_328_237_700_23,
              totalAcres: 119.000_753_503_510_62,
            },
            '2017': {
              amount: 41.808_167_405_031_04,
              method: 'somsc',
              averagePerAcre: 0.351_326_913_268_643,
              totalAcres: 119.000_753_503_510_62,
            },
            '2018': {
              amount: 60.696_700_824_693_26,
              method: 'projection',
              averagePerAcre: 0.510_053_079_814_344_7,
              totalAcres: 119.000_753_503_510_62,
            },
            '2019': {
              amount: 60.696_700_824_693_26,
              method: 'projection',
              averagePerAcre: 0.510_053_079_814_344_7,
              totalAcres: 119.000_753_503_510_62,
            },
            '2020': {
              amount: 60.696_700_824_693_26,
              averagePerAcre: 0.510_053_079_814_344_7,
              method: 'projection',
              totalAcres: 119.000_753_503_510_62,
            },
          },
          grandfatheredTonnes: 239.425_646_257_536_04,
          grandfatheredTonnesPerYearPerAcreAverage: 0.402_393_496_189_875_4,
        },
      }
    );
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 4 grandfatherable years', () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    const { parsedJsonOutput } = parseYearlyMapUnitData({
      rawJsonOutput: GRANDFATHERABLE_YEARS_OUTPUT,
    });
    const result = getQuantificationSummaries({
      parsedJsonOutput,
      maxNumberOfGrandfatheredYears: 4,
    });
    expect(result).toStrictEqual<ReturnType<typeof getQuantificationSummaries>>(
      {
        [modelRunName]: {
          methodologyVersion: METHODOLOGY_VERSION,
          switchYear: 2017,
          grandfatherableYears: [2017, 2018, 2019, 2020],
          numberOfGrandfatheredYears: 4,
          modeledYears: [
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
          ],
          totalAcres: 119.000_753_503_510_62,
          totalM2: 481_578.963_586_112_2,
          tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
          tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
          tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
            {
              '2015': 26.237_005_795_497_225,
              '2016': 15.527_376_378_425_224,
              '2017': 41.808_167_405_031_04,
              '2018': 73.329_044_626_437_04,
              '2019': 70.717_277_518_740_5,
              '2020': 104.660_508_516_130_16,
              '2021': 92.358_872_428_480_85,
              '2022': 57.860_299_141_229_15,
              '2023': 75.209_361_959_482_37,
              '2024': 49.259_094_477_479_096,
            },
          ],
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
            '2017': 41.808_167_405_031_04,
            '2018': 73.329_044_626_437_04,
            '2019': 70.717_277_518_740_5,
            '2020': 104.660_508_516_130_16,
          },
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 72.628_749_516_584_68,
          unadjustedGrandfatheredTonnesPerYear: {
            '2017': {
              amount: 41.808_167_405_031_04,
              method: 'somsc',
              averagePerAcre: 0.351_326_913_268_643,
              totalAcres: 119.000_753_503_510_62,
            },
            '2018': {
              amount: 60.696_700_824_693_26,
              method: 'projection',
              averagePerAcre: 0.510_053_079_814_344_7,
              totalAcres: 119.000_753_503_510_62,
            },
            '2019': {
              amount: 60.696_700_824_693_26,
              method: 'projection',
              averagePerAcre: 0.510_053_079_814_344_7,
              totalAcres: 119.000_753_503_510_62,
            },
            '2020': {
              amount: 60.696_700_824_693_26,
              averagePerAcre: 0.510_053_079_814_344_7,
              method: 'projection',
              totalAcres: 119.000_753_503_510_62,
            },
          },
          grandfatheredTonnes: 223.898_269_879_110_8,
          grandfatheredTonnesPerYearPerAcreAverage: 0.470_371_538_177_919_2,
        },
      }
    );
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 3 grandfatherable years and a custom quantifyAsOfYear value', () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    const { parsedJsonOutput } = parseYearlyMapUnitData({
      rawJsonOutput: GRANDFATHERABLE_YEARS_OUTPUT,
    });
    const result = getQuantificationSummaries({
      parsedJsonOutput,
      maxNumberOfGrandfatheredYears: 3,
      quantifyAsOfYear: 2019,
    });
    expect(result).toStrictEqual<ReturnType<typeof getQuantificationSummaries>>(
      {
        [modelRunName]: {
          methodologyVersion: METHODOLOGY_VERSION,
          switchYear: 2016,
          grandfatherableYears: [2016, 2017, 2018],
          numberOfGrandfatheredYears: 3,
          modeledYears: [
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
          ],
          totalAcres: 119.000_753_503_510_62,
          totalM2: 481_578.963_586_112_2,
          tenYearProjectedTonnesPerYear: 60.696_700_824_693_26,
          tenYearProjectedTonnesPerYearPerAcre: 0.510_053_079_814_344_7,
          tenYearProjectedTonnesTotalEstimate: 606.967_008_246_932_6,
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
            {
              '2015': 26.237_005_795_497_225,
              '2016': 15.527_376_378_425_224,
              '2017': 41.808_167_405_031_04,
              '2018': 73.329_044_626_437_04,
              '2019': 70.717_277_518_740_5,
              '2020': 104.660_508_516_130_16,
              '2021': 92.358_872_428_480_85,
              '2022': 57.860_299_141_229_15,
              '2023': 75.209_361_959_482_37,
              '2024': 49.259_094_477_479_096,
            },
          ],
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
            '2016': 15.527_376_378_425_224,
            '2017': 41.808_167_405_031_04,
            '2018': 73.329_044_626_437_04,
          },
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 43.554_862_803_297_766,
          unadjustedGrandfatheredTonnesPerYear: {
            '2016': {
              amount: 15.527_376_378_425_224,
              method: 'somsc',
              averagePerAcre: 0.130_481_328_237_700_23,
              totalAcres: 119.000_753_503_510_62,
            },
            '2017': {
              amount: 41.808_167_405_031_04,
              method: 'somsc',
              averagePerAcre: 0.351_326_913_268_643,
              totalAcres: 119.000_753_503_510_62,
            },
            '2018': {
              amount: 60.696_700_824_693_26,
              method: 'projection',
              averagePerAcre: 0.510_053_079_814_344_7,
              totalAcres: 119.000_753_503_510_62,
            },
          },
          grandfatheredTonnes: 118.032_244_608_149_53,
          grandfatheredTonnesPerYearPerAcreAverage: 0.330_620_440_440_229_3,
        },
      }
    );
  });
  describe('When there are no grandfatherable years', () => {
    let modelRun = NO_GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    it('will still return quantification for given a COMET output file', () => {
      const { parsedJsonOutput } = parseYearlyMapUnitData({
        rawJsonOutput: NO_GRANDFATHERABLE_YEARS_OUTPUT,
      });
      const result = getQuantificationSummaries({
        parsedJsonOutput,
        maxNumberOfGrandfatheredYears: 5,
      });
      expect(result).toStrictEqual<
        ReturnType<typeof getQuantificationSummaries>
      >({
        [modelRunName]: {
          modeledYears: [
            2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
          ],
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
          tenYearProjectedTonnesPerYear: 33.771_541_774_463_635,
          tenYearProjectedTonnesPerYearPerAcre: 0.283_792_671_728_480_66,
          tenYearProjectedTonnesTotalEstimate: 337.715_417_744_636_34,
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
            {
              '2021': 33.380_606_268_649_07,
              '2022': 71.901_934_532_841_17,
              '2023': 72.653_966_335_144_74,
              '2024': 74.060_478_714_426_85,
              '2025': 47.216_289_963_699_694,
              '2026': 38.910_730_828_159_62,
              '2027': 15.547_572_872_048_205,
              '2028': -0.663_414_771_981_846_1,
              '2029': 27.045_851_621_710_32,
              '2030': -42.338_598_620_061_42,
            },
          ],
          somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {},
          grandfatherableYears: [],
          grandfatheredTonnes: 0,
          unadjustedGrandfatheredTonnesPerYear: {},
          totalM2: 481_578.963_586_112_2,
          totalAcres: 119.000_753_503_510_62,
          numberOfGrandfatheredYears: 0,
          switchYear: 2021,
          grandfatheredTonnesPerYearPerAcreAverage: 0,
          methodologyVersion: '1.0.0',
        },
      });
    });
  });
});
