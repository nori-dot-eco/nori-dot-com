import { getNetQuantificationProjection } from '../net-quantification';

/**
 * If you'd like to see the output from the algorithm, add `console` as the second
 * parameter to `getNetQuantificationProjection`
 */

it('should return a total of 18 NRT', () => {
  const testData = [
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -30,
        '2015': 10,
        '2017': 9,
        '2014': 0,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 10,
        '2017': 9,
        '2018': 0,
        '2015': 10,
      },
    },
  ];

  expect(getNetQuantificationProjection(testData)).toStrictEqual([
    {
      '2014': 0,
      '2015': 0,
      '2016': 0,
      '2017': 0,
      '2018': 0,
    },
    {
      '2014': 0,
      '2015': 10,
      '2016': 0,
      '2017': 8,
      '2018': 0,
    },
  ]);
});

it('should handle a single year', () => {
  const testData = [
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 5,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 10,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 15,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -20,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 2,
      },
    },
  ];

  expect(getNetQuantificationProjection(testData)).toStrictEqual([
    {
      '2016': 0,
    },
    {
      '2016': 0,
    },
    {
      '2016': 12,
    },
    {
      '2016': 0,
    },
    {
      '2016': 0,
    },
  ]);
});

it('should persist a negative amount in the column it originated from', () => {
  const testData = [
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 0,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -50,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -40,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': -20,
      },
    },
    {
      somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
        '2016': 0,
      },
    },
  ];

  expect(getNetQuantificationProjection(testData)).toStrictEqual([
    {
      '2016': 0,
    },
    {
      '2016': -50,
    },
    {
      '2016': -40,
    },
    {
      '2016': -20,
    },
    {
      '2016': 0,
    },
  ]);
});
