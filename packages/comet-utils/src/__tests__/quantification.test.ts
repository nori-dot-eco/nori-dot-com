import {
  getQuantificationSummary,
  getUnadjustedGrandfatheredTonnesPerYear,
  getAdjustedGrandfatheredTonnesPerYear,
  METHODOLOGY_VERSION,
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

// todo test where negative distribution rolls over multiple vintage years
// todo test where negative distribution rolls over multiple vintage years and ends in a negative final year

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
          },
          '2016': {
            amount: 12.34,
            method: 'somsc',
            averagePerAcre: 0.7314759928867812,
          },
          '2017': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
          },
          '2018': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
          },
          '2019': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
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
          },
          '2016': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
          },
          '2017': {
            amount: 251.8,
            method: 'somsc',
            averagePerAcre: 1.072356373237937,
          },
          '2018': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
          },
          '2019': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
          },
        },
      });
    });
  });
});

describe('getAdjustedGrandfatheredTonnesPerYear', () => {
  describe('When all annuals are net positive', () => {
    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 17.54,
                method: 'somsc',
                averagePerAcre: 1.039715471250741,
              },
              '2016': {
                amount: 12.34,
                method: 'somsc',
                averagePerAcre: 0.7314759928867812,
              },
              '2017': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2018': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2019': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                amount: 17.54,
                method: 'somsc',
                averagePerAcre: 1.039715471250741,
              },
              '2016': {
                amount: 12.34,
                method: 'somsc',
                averagePerAcre: 0.7314759928867812,
              },
              '2017': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2018': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2019': {
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
            },
          ],
        }
      );
    });
  });
  describe('When the ten year projection is net negative', () => {
    // todo
    it.todo('should create the correct quantification numbers');
  });
  describe('When some annuals are net negative', () => {
    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': { amount: 154.77, method: null, averagePerAcre: null },
              '2016': { amount: 154.77, method: null, averagePerAcre: null },
              '2017': { amount: 154.77, method: null, averagePerAcre: null },
              '2018': { amount: 154.77, method: null, averagePerAcre: null },
              '2019': { amount: 154.77, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 213.06, method: null, averagePerAcre: null },
              '2016': { amount: 180.22, method: null, averagePerAcre: null },
              '2017': { amount: 213.06, method: null, averagePerAcre: null },
              '2018': { amount: 213.06, method: null, averagePerAcre: null },
              '2019': { amount: 213.06, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 46.03, method: null, averagePerAcre: null },
              '2016': { amount: 45.4, method: null, averagePerAcre: null },
              '2017': { amount: 17.93, method: null, averagePerAcre: null },
              '2018': { amount: 55.09, method: null, averagePerAcre: null },
              '2019': { amount: 55.09, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 145.06, method: null, averagePerAcre: null },
              '2016': { amount: 145.06, method: null, averagePerAcre: null },
              '2017': { amount: 145.06, method: null, averagePerAcre: null },
              '2018': { amount: 145.06, method: null, averagePerAcre: null },
              '2019': { amount: 145.06, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 66.91, method: null, averagePerAcre: null },
              '2016': { amount: -91.07, method: null, averagePerAcre: null },
              '2017': { amount: 347.93, method: null, averagePerAcre: null },
              '2018': { amount: 347.93, method: null, averagePerAcre: null },
              '2019': { amount: 347.93, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 109.27, method: null, averagePerAcre: null },
              '2017': { amount: 109.27, method: null, averagePerAcre: null },
              '2018': { amount: 82.27, method: null, averagePerAcre: null },
              '2019': { amount: 109.27, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 18.76, method: null, averagePerAcre: null },
              '2016': { amount: 27.12, method: null, averagePerAcre: null },
              '2017': { amount: 19.66, method: null, averagePerAcre: null },
              '2018': { amount: 26.58, method: null, averagePerAcre: null },
              '2019': { amount: 27.12, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 169.96, method: null, averagePerAcre: null },
              '2016': { amount: 169.87, method: null, averagePerAcre: null },
              '2017': { amount: 125.74, method: null, averagePerAcre: null },
              '2018': { amount: 166.48, method: null, averagePerAcre: null },
              '2019': { amount: 169.96, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 20.81, method: null, averagePerAcre: null },
              '2017': { amount: 67.13, method: null, averagePerAcre: null },
              '2018': { amount: 67.13, method: null, averagePerAcre: null },
              '2019': { amount: 67.13, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 345.32, method: null, averagePerAcre: null },
              '2016': { amount: 337.4, method: null, averagePerAcre: null },
              '2017': { amount: 345.32, method: null, averagePerAcre: null },
              '2018': { amount: 345.32, method: null, averagePerAcre: null },
              '2019': { amount: 345.32, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 41.89, method: null, averagePerAcre: null },
              '2017': { amount: 42.97, method: null, averagePerAcre: null },
              '2018': { amount: 42.43, method: null, averagePerAcre: null },
              '2019': { amount: 42.97, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 19.62, method: null, averagePerAcre: null },
              '2016': { amount: 19.56, method: null, averagePerAcre: null },
              '2017': { amount: 7.7, method: null, averagePerAcre: null },
              '2018': { amount: 25.75, method: null, averagePerAcre: null },
              '2019': { amount: 25.75, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 204.32, method: null, averagePerAcre: null },
              '2016': { amount: 176.95, method: null, averagePerAcre: null },
              '2017': { amount: 204.32, method: null, averagePerAcre: null },
              '2018': { amount: 204.32, method: null, averagePerAcre: null },
              '2019': { amount: 204.32, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 15.77, method: null, averagePerAcre: null },
              '2017': { amount: 28.96, method: null, averagePerAcre: null },
              '2018': { amount: 28.96, method: null, averagePerAcre: null },
              '2019': { amount: 28.96, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 96.32, method: null, averagePerAcre: null },
              '2016': { amount: 55.42, method: null, averagePerAcre: null },
              '2017': { amount: 96.32, method: null, averagePerAcre: null },
              '2018': { amount: 31.34, method: null, averagePerAcre: null },
              '2019': { amount: 96.32, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 144.6, method: null, averagePerAcre: null },
              '2016': { amount: 201.3, method: null, averagePerAcre: null },
              '2017': { amount: 202.05, method: null, averagePerAcre: null },
              '2018': { amount: 202.05, method: null, averagePerAcre: null },
              '2019': { amount: 202.05, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 28.75, method: null, averagePerAcre: null },
              '2016': { amount: 5.3, method: null, averagePerAcre: null },
              '2017': { amount: 75.96, method: null, averagePerAcre: null },
              '2018': { amount: 75.96, method: null, averagePerAcre: null },
              '2019': { amount: 75.96, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 80.3, method: null, averagePerAcre: null },
              '2016': { amount: 74.16, method: null, averagePerAcre: null },
              '2017': { amount: 80.3, method: null, averagePerAcre: null },
              '2018': { amount: 80.3, method: null, averagePerAcre: null },
              '2019': { amount: 72.04, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 17.64, method: null, averagePerAcre: null },
              '2016': { amount: 20.4, method: null, averagePerAcre: null },
              '2017': { amount: 20.4, method: null, averagePerAcre: null },
              '2018': { amount: 20.4, method: null, averagePerAcre: null },
              '2019': { amount: 4.34, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 8.95, method: null, averagePerAcre: null },
              '2017': { amount: 26.67, method: null, averagePerAcre: null },
              '2018': { amount: 26.67, method: null, averagePerAcre: null },
              '2019': { amount: 26.67, method: null, averagePerAcre: null },
            },
            {
              '2016': { amount: 51.31, method: null, averagePerAcre: null },
              '2017': { amount: 63.43, method: null, averagePerAcre: null },
              '2018': { amount: 41.83, method: null, averagePerAcre: null },
              '2019': { amount: 63.43, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 346.54, method: null, averagePerAcre: null },
              '2016': { amount: 346.54, method: null, averagePerAcre: null },
              '2017': { amount: 346.54, method: null, averagePerAcre: null },
              '2018': { amount: 346.54, method: null, averagePerAcre: null },
              '2019': { amount: 346.54, method: null, averagePerAcre: null },
            },
            {
              '2015': { amount: 45.09, method: null, averagePerAcre: null },
              '2016': { amount: 34.64, method: null, averagePerAcre: null },
              '2017': { amount: 29.21, method: null, averagePerAcre: null },
              '2018': { amount: 45.09, method: null, averagePerAcre: null },
              '2019': { amount: 20.79, method: null, averagePerAcre: null },
            },
            {
              '2017': { amount: 22.33, method: null, averagePerAcre: null },
              '2018': { amount: 39.26, method: null, averagePerAcre: null },
              '2019': { amount: 41.95, method: null, averagePerAcre: null },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                amount: 154.77,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 150.63045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 154.77,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 154.77,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 154.77,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 213.06,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 176.08045454545456,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 213.06,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 213.06,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 213.06,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 46.03,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 41.26045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 17.93,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 55.09,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 55.09,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 145.06,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 140.92045454545453,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 145.06,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 145.06,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 145.06,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 66.91,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 0,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 347.93,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 347.93,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 347.93,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 105.13045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 109.27,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 82.27,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 109.27,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 18.76,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 22.980454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 19.66,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 26.58,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 27.12,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 169.96,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 165.73045454545453,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 125.74,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 166.48,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 169.96,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 16.670454545454547,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 67.13,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 67.13,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 67.13,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 345.32,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 333.26045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 345.32,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 345.32,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 345.32,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 37.750454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 42.97,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 42.43,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 42.97,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 19.62,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 15.420454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 7.7,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 25.75,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 25.75,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 204.32,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 172.81045454545455,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 204.32,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 204.32,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 204.32,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 11.630454545454546,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 28.96,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 28.96,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 28.96,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 96.32,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 51.280454545454546,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 96.32,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 31.34,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 96.32,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 144.6,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 197.16045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 202.05,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 202.05,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 202.05,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 28.75,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 1.160454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 75.96,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 75.96,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 75.96,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 80.3,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 70.02045454545454,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 80.3,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 80.3,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 72.04,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 17.64,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 16.260454545454547,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 20.4,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 20.4,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 4.34,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 4.810454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 26.67,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 26.67,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 26.67,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2016': {
                amount: 47.17045454545455,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 63.43,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 41.83,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 63.43,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 346.54,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 342.4004545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 346.54,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 346.54,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 346.54,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2015': {
                amount: 45.09,
                averagePerAcre: null,
                method: null,
              },
              '2016': {
                amount: 30.500454545454545,
                averagePerAcre: null,
                method: null,
              },
              '2017': {
                amount: 29.21,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 45.09,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 20.79,
                averagePerAcre: null,
                method: null,
              },
            },
            {
              '2017': {
                amount: 22.33,
                averagePerAcre: null,
                method: null,
              },
              '2018': {
                amount: 39.26,
                averagePerAcre: null,
                method: null,
              },
              '2019': {
                amount: 41.95,
                averagePerAcre: null,
                method: null,
              },
            },
          ],
        }
      );
    });
    // it('should format the output as csv', () => {
    //   const output = getAdjustedGrandfatheredTonnesPerYear({
    //     unadjustedGrandfatheredTonnesPerYearForProject: [
    //       {
    //         '2015': { amount: 154.77, method: null, averagePerAcre: null },
    //         '2016': { amount: 154.77, method: null, averagePerAcre: null },
    //         '2017': { amount: 154.77, method: null, averagePerAcre: null },
    //         '2018': { amount: 154.77, method: null, averagePerAcre: null },
    //         '2019': { amount: 154.77, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 213.06, method: null, averagePerAcre: null },
    //         '2016': { amount: 180.22, method: null, averagePerAcre: null },
    //         '2017': { amount: 213.06, method: null, averagePerAcre: null },
    //         '2018': { amount: 213.06, method: null, averagePerAcre: null },
    //         '2019': { amount: 213.06, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 46.03, method: null, averagePerAcre: null },
    //         '2016': { amount: 45.4, method: null, averagePerAcre: null },
    //         '2017': { amount: 17.93, method: null, averagePerAcre: null },
    //         '2018': { amount: 55.09, method: null, averagePerAcre: null },
    //         '2019': { amount: 55.09, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 145.06, method: null, averagePerAcre: null },
    //         '2016': { amount: 145.06, method: null, averagePerAcre: null },
    //         '2017': { amount: 145.06, method: null, averagePerAcre: null },
    //         '2018': { amount: 145.06, method: null, averagePerAcre: null },
    //         '2019': { amount: 145.06, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 66.91, method: null, averagePerAcre: null },
    //         '2016': { amount: -91.07, method: null, averagePerAcre: null },
    //         '2017': { amount: 347.93, method: null, averagePerAcre: null },
    //         '2018': { amount: 347.93, method: null, averagePerAcre: null },
    //         '2019': { amount: 347.93, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 109.27, method: null, averagePerAcre: null },
    //         '2017': { amount: 109.27, method: null, averagePerAcre: null },
    //         '2018': { amount: 82.27, method: null, averagePerAcre: null },
    //         '2019': { amount: 109.27, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 18.76, method: null, averagePerAcre: null },
    //         '2016': { amount: 27.12, method: null, averagePerAcre: null },
    //         '2017': { amount: 19.66, method: null, averagePerAcre: null },
    //         '2018': { amount: 26.58, method: null, averagePerAcre: null },
    //         '2019': { amount: 27.12, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 169.96, method: null, averagePerAcre: null },
    //         '2016': { amount: 169.87, method: null, averagePerAcre: null },
    //         '2017': { amount: 125.74, method: null, averagePerAcre: null },
    //         '2018': { amount: 166.48, method: null, averagePerAcre: null },
    //         '2019': { amount: 169.96, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 20.81, method: null, averagePerAcre: null },
    //         '2017': { amount: 67.13, method: null, averagePerAcre: null },
    //         '2018': { amount: 67.13, method: null, averagePerAcre: null },
    //         '2019': { amount: 67.13, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 345.32, method: null, averagePerAcre: null },
    //         '2016': { amount: 337.4, method: null, averagePerAcre: null },
    //         '2017': { amount: 345.32, method: null, averagePerAcre: null },
    //         '2018': { amount: 345.32, method: null, averagePerAcre: null },
    //         '2019': { amount: 345.32, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 41.89, method: null, averagePerAcre: null },
    //         '2017': { amount: 42.97, method: null, averagePerAcre: null },
    //         '2018': { amount: 42.43, method: null, averagePerAcre: null },
    //         '2019': { amount: 42.97, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 19.62, method: null, averagePerAcre: null },
    //         '2016': { amount: 19.56, method: null, averagePerAcre: null },
    //         '2017': { amount: 7.7, method: null, averagePerAcre: null },
    //         '2018': { amount: 25.75, method: null, averagePerAcre: null },
    //         '2019': { amount: 25.75, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 204.32, method: null, averagePerAcre: null },
    //         '2016': { amount: 176.95, method: null, averagePerAcre: null },
    //         '2017': { amount: 204.32, method: null, averagePerAcre: null },
    //         '2018': { amount: 204.32, method: null, averagePerAcre: null },
    //         '2019': { amount: 204.32, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 15.77, method: null, averagePerAcre: null },
    //         '2017': { amount: 28.96, method: null, averagePerAcre: null },
    //         '2018': { amount: 28.96, method: null, averagePerAcre: null },
    //         '2019': { amount: 28.96, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 96.32, method: null, averagePerAcre: null },
    //         '2016': { amount: 55.42, method: null, averagePerAcre: null },
    //         '2017': { amount: 96.32, method: null, averagePerAcre: null },
    //         '2018': { amount: 31.34, method: null, averagePerAcre: null },
    //         '2019': { amount: 96.32, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 144.6, method: null, averagePerAcre: null },
    //         '2016': { amount: 201.3, method: null, averagePerAcre: null },
    //         '2017': { amount: 202.05, method: null, averagePerAcre: null },
    //         '2018': { amount: 202.05, method: null, averagePerAcre: null },
    //         '2019': { amount: 202.05, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 28.75, method: null, averagePerAcre: null },
    //         '2016': { amount: 5.3, method: null, averagePerAcre: null },
    //         '2017': { amount: 75.96, method: null, averagePerAcre: null },
    //         '2018': { amount: 75.96, method: null, averagePerAcre: null },
    //         '2019': { amount: 75.96, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 80.3, method: null, averagePerAcre: null },
    //         '2016': { amount: 74.16, method: null, averagePerAcre: null },
    //         '2017': { amount: 80.3, method: null, averagePerAcre: null },
    //         '2018': { amount: 80.3, method: null, averagePerAcre: null },
    //         '2019': { amount: 72.04, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 17.64, method: null, averagePerAcre: null },
    //         '2016': { amount: 20.4, method: null, averagePerAcre: null },
    //         '2017': { amount: 20.4, method: null, averagePerAcre: null },
    //         '2018': { amount: 20.4, method: null, averagePerAcre: null },
    //         '2019': { amount: 4.34, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 8.95, method: null, averagePerAcre: null },
    //         '2017': { amount: 26.67, method: null, averagePerAcre: null },
    //         '2018': { amount: 26.67, method: null, averagePerAcre: null },
    //         '2019': { amount: 26.67, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2016': { amount: 51.31, method: null, averagePerAcre: null },
    //         '2017': { amount: 63.43, method: null, averagePerAcre: null },
    //         '2018': { amount: 41.83, method: null, averagePerAcre: null },
    //         '2019': { amount: 63.43, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 346.54, method: null, averagePerAcre: null },
    //         '2016': { amount: 346.54, method: null, averagePerAcre: null },
    //         '2017': { amount: 346.54, method: null, averagePerAcre: null },
    //         '2018': { amount: 346.54, method: null, averagePerAcre: null },
    //         '2019': { amount: 346.54, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2015': { amount: 45.09, method: null, averagePerAcre: null },
    //         '2016': { amount: 34.64, method: null, averagePerAcre: null },
    //         '2017': { amount: 29.21, method: null, averagePerAcre: null },
    //         '2018': { amount: 45.09, method: null, averagePerAcre: null },
    //         '2019': { amount: 20.79, method: null, averagePerAcre: null },
    //       },
    //       {
    //         '2017': { amount: 22.33, method: null, averagePerAcre: null },
    //         '2018': { amount: 39.26, method: null, averagePerAcre: null },
    //         '2019': { amount: 41.95, method: null, averagePerAcre: null },
    //       },
    //     ],
    //   });
    //   const csv = output.adjustedGrandfatheredTonnesPerYear.map((field) => {
    //     let row = Object.entries(field).map(([year, vintage]) => {
    //       return vintage.amount;
    //     });
    //     if (row.length === 4) {
    //       row = [null, ...row];
    //     } else if (row.length === 3) {
    //       row = [null, null, ...row];
    //     } else if (row.length === 2) {
    //       row = [null, null, null, ...row];
    //     } else if (row.length === 1) {
    //       row = [null, null, null, null, ...row];
    //     }
    //     return row;
    //   });
    //   console.log('csv==', csv);
    // });
  });
});

describe('getQuantificationSummary', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file', async () => {
    expect(
      await getQuantificationSummary({ xmlData: GRANDFATHERABLE_YEARS_OUTPUT })
    ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
      methodologyVersion: METHODOLOGY_VERSION,
      switchYear: 2015,
      grandfatherableYears: [2015, 2016, 2017, 2018, 2019],
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
      totalAcres: 119.00674210689633,
      totalM2: 481603.1986041848,
      tenYearProjectedTonnesPerYearPerAcre: 1.3492473884863634,
      tenYearProjectedTonnesTotalEstimate: 1605.69536,
      tenYearProjectedBaselineTonnesPerYear: 15.897614,
      tenYearProjectedFutureTonnesPerYear: 176.46715,
      tenYearProjectedTonnesPerYear: 160.569536,
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.4828332149576078,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.1335858264712445,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
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
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2015': 120.88957366558826,
        '2016': 43.28736522204999,
        '2017': 105.228401624067,
        '2018': 129.19400878679176,
        '2019': 97.87182257764748,
      },
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 99.2942343752289,
      unadjustedGrandfatheredTonnesPerYear: {
        '2015': {
          amount: 120.88957366558826,
          method: 'somsc',
          averagePerAcre: 1.0158212175659822,
        },
        '2016': {
          amount: 43.28736522204999,
          method: 'somsc',
          averagePerAcre: 0.3637387634993625,
        },
        '2017': {
          amount: 105.228401624067,
          method: 'somsc',
          averagePerAcre: 0.8842221857442908,
        },
        '2018': {
          amount: 129.19400878679176,
          method: 'somsc',
          averagePerAcre: 1.0856024331020242,
        },
        '2019': {
          amount: 97.87182257764748,
          method: 'somsc',
          averagePerAcre: 0.8224056960548952,
        },
      },
      grandfatheredTonnes: 496.47117187614447,
      grandfatheredTonnesPerYearPerAcreAverage: 0.834358059193311,
    });
  });
  describe('When there are no grandfatherable years', () => {
    it('will still return quantification for given a COMET output file', async () => {
      expect(
        await getQuantificationSummary({
          xmlData: NO_GRANDFATHERABLE_YEARS_OUTPUT,
        })
      ).toStrictEqual<ResolvedReturnType<typeof getQuantificationSummary>>({
        methodologyVersion: METHODOLOGY_VERSION,
        grandfatherableYears: [],
        modeledYears: [
          2020,
          2021,
          2022,
          2023,
          2024,
          2025,
          2026,
          2027,
          2028,
          2029,
        ],
        grandfatheredTonnesPerYearPerAcreAverage: 0,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
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
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {},
        tenYearProjectedBaselineTonnesPerYear: 58.102417,
        tenYearProjectedBaselineTonnesPerYearPerAcre: 0.48825251344533616,
        tenYearProjectedFutureTonnesPerYear: 177.79944,
        tenYearProjectedFutureTonnesPerYearPerAcre: 1.4941034805690312,
        tenYearProjectedTonnesPerYear: 119.697023,
        tenYearProjectedTonnesPerYearPerAcre: 1.005850967123695,
        tenYearProjectedTonnesTotalEstimate: 1196.97023,
        totalAcres: 119.00075350355577,
        totalM2: 481578.9635862949,
        grandfatheredTonnes: 0,
        numberOfGrandfatheredYears: 0,
        somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 0,
        switchYear: 2020,
        unadjustedGrandfatheredTonnesPerYear: {},
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
      methodologyVersion: METHODOLOGY_VERSION,
      tenYearProjectedTonnesPerYearPerAcre: 1.1533581913018405,
      tenYearProjectedTonnesTotalEstimate: 1672.448691,
      grandfatherableYears: [2015, 2016, 2017, 2018, 2019],
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
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosPerPolygon: [
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
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2015': 74.16834061575322,
        '2016': 41.83170673686091,
        '2017': 104.21847600750455,
        '2018': 130.58907298914428,
        '2019': 115.54440824672093,
      },
      tenYearProjectedBaselineTonnesPerYear: 2.3572619,
      grandfatheredTonnesPerYearPerAcreAverage: 0.6432136392886346,
      tenYearProjectedFutureTonnesPerYear: 169.602131,
      grandfatheredTonnes: 466.3520045959839,
      numberOfGrandfatheredYears: 5,
      somscAnnualDifferencesBetweenFutureAndBaselineScenariosAverage: 93.27040091919677,
      switchYear: 2015,
      tenYearProjectedTonnesPerYear: 167.2448691,
      totalAcres: 145.00687675458755,
      totalM2: 586822.0104864568,
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.1696143989573538,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.0162562076555133,
      unadjustedGrandfatheredTonnesPerYear: {
        '2015': {
          amount: 74.16834061575322,
          method: 'somsc',
          averagePerAcre: 0.5114815398808786,
        },
        '2016': {
          amount: 41.83170673686091,
          method: 'somsc',
          averagePerAcre: 0.2884808477577081,
        },
        '2017': {
          amount: 104.21847600750455,
          method: 'somsc',
          averagePerAcre: 0.7187140247416398,
        },
        '2018': {
          amount: 130.58907298914428,
          method: 'somsc',
          averagePerAcre: 0.9005715860645407,
        },
        '2019': {
          amount: 115.54440824672093,
          method: 'somsc',
          averagePerAcre: 0.7968201979984062,
        },
      },
    });
  });
});
