import * as fs from 'fs';
import * as path from 'path';

import { getNetQuantificationProjection } from '../net-quantification';

/**
 * If you'd like to see the output from the algorithm, add `console` as the second
 * parameter to `getNetQuantificationProjection`
 */
describe('getNetQuantificationProjection', () => {
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
      [
        { year: '2014', value: 0 },
        { year: '2015', value: 8 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
        { year: '2018', value: 0 },
      ],
      [
        { year: '2014', value: 0 },
        { year: '2015', value: 10 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
        { year: '2018', value: 0 },
      ],
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
      [{ year: '2016', value: 0 }],
      [{ year: '2016', value: 0 }],
      [{ year: '2016', value: 12 }],
      [{ year: '2016', value: 0 }],
      [{ year: '2016', value: 0 }],
    ]);
  });

  it('should handle a single field', () => {
    const testData = [
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2016': 5,
          '2017': -20,
          '2018': 18,
        },
      },
    ];

    expect(getNetQuantificationProjection(testData)).toStrictEqual([
      [
        { year: '2016', value: 3 },
        { year: '2017', value: 0 },
        { year: '2018', value: 0 },
      ],
    ]);
  });

  it('should handle a single field and a single year', () => {
    const negativeTestData = [
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2017': -20,
        },
      },
    ];

    expect(getNetQuantificationProjection(negativeTestData)).toStrictEqual([
      [{ year: '2017', value: -20 }],
    ]);

    const positiveTestData = [
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2017': 20,
        },
      },
    ];

    expect(getNetQuantificationProjection(positiveTestData)).toStrictEqual([
      [{ year: '2017', value: 20 }],
    ]);
  });

  it('should persist a left-over negative amount in the cell it originated from', () => {
    const testData = [
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2015': 0,
          '2016': 0,
          '2017': 0,
        },
      },
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2015': 0,
          '2016': -50,
          '2017': 0,
        },
      },
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2015': 0,
          '2016': -40,
          '2017': 0,
        },
      },
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2015': 0,
          '2016': -20,
          '2017': 0,
        },
      },
      {
        somscAnnualDifferencesBetweenFutureAndBaselineScenarios: {
          '2015': 0,
          '2016': 0,
          '2017': 0,
        },
      },
    ];

    expect(getNetQuantificationProjection(testData)).toStrictEqual([
      [
        { year: '2015', value: 0 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
      ],
      [
        { year: '2015', value: 0 },
        { year: '2016', value: -50 },
        { year: '2017', value: 0 },
      ],
      [
        { year: '2015', value: 0 },
        { year: '2016', value: -40 },
        { year: '2017', value: 0 },
      ],
      [
        { year: '2015', value: 0 },
        { year: '2016', value: -20 },
        { year: '2017', value: 0 },
      ],
      [
        { year: '2015', value: 0 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
      ],
    ]);
  });

  /**
   * These examples were established to be correct by a SAM and developer
   */
  describe('IRL examples', () => {
    /**
     * Validation date: 6/20/2022
     * Developer: Dave Martinez
     * SAM: Rebekah Carlson
     */
    it('Knuth Farm', () => {
      const testData = JSON.parse(
        fs
          .readFileSync(
            path.resolve(
              __dirname,
              'test-fixtures/net-quantification-knuth.json'
            )
          )
          .toString()
      );

      const expectedResult = JSON.parse(
        fs
          .readFileSync(
            path.resolve(
              __dirname,
              'test-fixtures/net-quantification-knuth-result.json'
            )
          )
          .toString()
      );
      expect(getNetQuantificationProjection(testData)).toStrictEqual(
        expectedResult
      );
    });
  });
});
