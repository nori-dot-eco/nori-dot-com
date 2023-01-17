import { METHODOLOGY_VERSION } from '../constants';
import {
  getQuantificationSummaries,
  getQuantificationSummary,
  getUnadjustedGrandfatheredTonnesPerYear,
} from '../index';

import {
  GRANDFATHERABLE_YEARS_OUTPUT,
  NO_GRANDFATHERABLE_YEARS_OUTPUT,
  MULTIPOLYGON_OUTPUT,
} from './example-output';

jest.mock('../constants', () => ({
  get CURRENT_YEAR() {
    return 2021;
  },
  get METHODOLOGY_VERSION() {
    return '1.0.0';
  },
}));

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
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
      tenYearProjectedTonnesTotalEstimate: 641.874,
      tenYearProjectedTonnesPerYear: 64.1874,
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
          '2024': Number.NaN,
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
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.539_386_500_591_413_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2019': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.539_386_500_591_413_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2020': {
          amount: 64.1874,
          averagePerAcre: 0.539_386_500_591_413_7,
          method: 'projection',
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 249.897_743_783_456_26,
      grandfatheredTonnesPerYearPerAcreAverage: 0.419_993_548_656_116_8,
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
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
      tenYearProjectedTonnesTotalEstimate: 641.874,
      tenYearProjectedTonnesPerYear: 64.1874,
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
          '2024': Number.NaN,
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
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.539_386_500_591_413_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2019': {
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.539_386_500_591_413_7,
          totalAcres: 119.000_753_503_510_62,
        },
        '2020': {
          amount: 64.1874,
          averagePerAcre: 0.539_386_500_591_413_7,
          method: 'projection',
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 234.370_367_405_031_03,
      grandfatheredTonnesPerYearPerAcreAverage: 0.492_371_603_760_721,
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 3 grandfatherable years and a custom quantifyAsOfYear value', async () => {
    expect(
      await getQuantificationSummary({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 3,
        quantifyAsOfYear: 2019,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2016,
      grandfatherableYears: [2016, 2017, 2018],
      numberOfGrandfatheredYears: 3,
      modeledYears: [
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      totalAcres: 119.000_753_503_510_62,
      totalM2: 481_578.963_586_112_2,
      tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
      tenYearProjectedTonnesTotalEstimate: 641.874,
      tenYearProjectedTonnesPerYear: 64.1874,
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
          '2024': Number.NaN,
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
          amount: 64.1874,
          method: 'projection',
          averagePerAcre: 0.539_386_500_591_413_7,
          totalAcres: 119.000_753_503_510_62,
        },
      },
      grandfatheredTonnes: 121.522_943_783_456_27,
      grandfatheredTonnesPerYearPerAcreAverage: 0.340_398_247_365_919,
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
        tenYearProjectedTonnesPerYearPerAcre: 0.385_568_987_163_147_8,
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
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 74.456_714_162_597_9,
      tenYearProjectedTonnesPerYear: 78.0638,
      tenYearProjectedTonnesPerYearPerAcre: 0.538_345_502_963_806_6,
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
          '2024': Number.NaN,
        },
        {
          '2015': 5.746_271_717_264_432,
          '2016': 3.406_406_770_065_806,
          '2017': 8.966_450_274_935_438,
          '2018': 15.973_293_814_577_158,
          '2019': 15.374_521_744_567_634,
          '2020': 22.520_523_764_079_58,
          '2021': 19.785_112_030_788_145,
          '2022': 12.365_248_164_545_722,
          '2023': 16.370_102_302_508_144,
          '2024': Number.NaN,
        },
      ],
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 18.933_783_148_491_03,
        '2017': 50.774_617_679_966_475,
        '2018': 89.302_338_441_014_2,
        '2019': 86.091_799_263_308_13,
        '2020': 127.181_032_280_209_73,
      },
      grandfatherableYears: [2016, 2017, 2018, 2019, 2020],
      grandfatheredTonnes: 303.899_800_828_457_5,
      unadjustedGrandfatheredTonnesPerYear: {
        '2016': {
          amount: 18.933_783_148_491_03,
          method: 'somsc',
          averagePerAcre: 0.130_571_622_340_727_06,
          totalAcres: 145.006_876_755_220_7,
        },
        '2017': {
          amount: 50.774_617_679_966_475,
          method: 'somsc',
          averagePerAcre: 0.350_153_170_774_629_7,
          totalAcres: 145.006_876_755_220_7,
        },
        '2018': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.538_345_502_963_806_6,
          totalAcres: 145.006_876_755_220_7,
        },
        '2019': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.538_345_502_963_806_6,
          totalAcres: 145.006_876_755_220_7,
        },
        '2020': {
          amount: 78.0638,
          method: 'projection',
          averagePerAcre: 0.538_345_502_963_806_6,
          totalAcres: 145.006_876_755_220_7,
        },
      },
      totalM2: 586_822.010_489_019_1,
      totalAcres: 145.006_876_755_220_7,
      numberOfGrandfatheredYears: 5,
      switchYear: 2016,
      grandfatheredTonnesPerYearPerAcreAverage: 0.419_152_260_401_355_3,
      methodologyVersion: '1.0.0',
    });
  });
});

describe('getQuantificationSummaries', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file for 5 grandfatherable years', async () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    expect(
      await getQuantificationSummaries({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 5,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummaries>>({
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
        tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
        tenYearProjectedTonnesTotalEstimate: 641.874,
        tenYearProjectedTonnesPerYear: 64.1874,
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
            '2024': Number.NaN,
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
            amount: 64.1874,
            method: 'projection',
            averagePerAcre: 0.539_386_500_591_413_7,
            totalAcres: 119.000_753_503_510_62,
          },
          '2019': {
            amount: 64.1874,
            method: 'projection',
            averagePerAcre: 0.539_386_500_591_413_7,
            totalAcres: 119.000_753_503_510_62,
          },
          '2020': {
            amount: 64.1874,
            averagePerAcre: 0.539_386_500_591_413_7,
            method: 'projection',
            totalAcres: 119.000_753_503_510_62,
          },
        },
        grandfatheredTonnes: 249.897_743_783_456_26,
        grandfatheredTonnesPerYearPerAcreAverage: 0.419_993_548_656_116_8,
      },
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 4 grandfatherable years', async () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    expect(
      await getQuantificationSummaries({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 4,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummaries>>({
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
        tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
        tenYearProjectedTonnesTotalEstimate: 641.874,
        tenYearProjectedTonnesPerYear: 64.1874,
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
            '2024': Number.NaN,
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
            amount: 64.1874,
            method: 'projection',
            averagePerAcre: 0.539_386_500_591_413_7,
            totalAcres: 119.000_753_503_510_62,
          },
          '2019': {
            amount: 64.1874,
            method: 'projection',
            averagePerAcre: 0.539_386_500_591_413_7,
            totalAcres: 119.000_753_503_510_62,
          },
          '2020': {
            amount: 64.1874,
            averagePerAcre: 0.539_386_500_591_413_7,
            method: 'projection',
            totalAcres: 119.000_753_503_510_62,
          },
        },
        grandfatheredTonnes: 234.370_367_405_031_03,
        grandfatheredTonnesPerYearPerAcreAverage: 0.492_371_603_760_721,
      },
    });
  });
  it('will get the tonnes that are grandfatherable given a COMET output file for 3 grandfatherable years and a custom quantifyAsOfYear value', async () => {
    let modelRun = GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    expect(
      await getQuantificationSummaries({
        data: GRANDFATHERABLE_YEARS_OUTPUT,
        maxNumberGrandfatheredYearsForProject: 3,
        quantifyAsOfYear: 2019,
      })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummaries>>({
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
        tenYearProjectedTonnesPerYearPerAcre: 0.539_386_500_591_413_7,
        tenYearProjectedTonnesTotalEstimate: 641.874,
        tenYearProjectedTonnesPerYear: 64.1874,
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
            '2024': Number.NaN,
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
            amount: 64.1874,
            method: 'projection',
            averagePerAcre: 0.539_386_500_591_413_7,
            totalAcres: 119.000_753_503_510_62,
          },
        },
        grandfatheredTonnes: 121.522_943_783_456_27,
        grandfatheredTonnesPerYearPerAcreAverage: 0.340_398_247_365_919,
      },
    });
  });
  describe('When there are no grandfatherable years', () => {
    let modelRun = NO_GRANDFATHERABLE_YEARS_OUTPUT.Day.Cropland.ModelRun;
    modelRun = Array.isArray(modelRun) ? modelRun[0] : modelRun;
    const modelRunName = modelRun['@name'];
    it('will still return quantification for given a COMET output file', async () => {
      expect(
        await getQuantificationSummaries({
          data: NO_GRANDFATHERABLE_YEARS_OUTPUT,
          maxNumberGrandfatheredYearsForProject: 5,
        })
      ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummaries>>({
        [modelRunName]: {
          modeledYears: [
            2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
          ],
          tenYearProjectedTonnesTotalEstimate: 458.83,
          somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
          tenYearProjectedTonnesPerYear: 45.883,
          tenYearProjectedTonnesPerYearPerAcre: 0.385_568_987_163_147_8,
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
