import * as fs from 'node:fs';
import * as path from 'node:path';

import { getNetQuantificationProjection } from '../net-quantification';

/**
 * If you'd like to see the output from the algorithm, add `console` as the second
 * parameter to `getNetQuantificationProjection`
 *
 */
describe('getNetQuantificationProjection', () => {
  it('should return a total of 18 NRT', () => {
    const testData = [
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: -30,
          },
          '2015': {
            amount: 10,
          },
          '2017': {
            amount: 9,
          },
          '2014': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 10,
          },
          '2017': {
            amount: 9,
          },
          '2018': {
            amount: 0,
          },
          '2015': {
            amount: 10,
          },
        },
      },
    ];

    expect(getNetQuantificationProjection(testData)).toStrictEqual([
      [
        { year: '2014', value: 0 },
        { year: '2015', value: 8 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
      ],
      [
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
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 5,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 10,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 15,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: -20,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 2,
          },
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
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 5,
          },
          '2017': {
            amount: -20,
          },
          '2018': {
            amount: 18,
          },
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
        unadjustedGrandfatheredTonnesPerYear: {
          '2017': {
            amount: -20,
          },
        },
      },
    ];

    expect(getNetQuantificationProjection(negativeTestData)).toStrictEqual([
      [{ year: '2017', value: -20 }],
    ]);

    const positiveTestData = [
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2017': {
            amount: 20,
          },
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
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 0,
          },
          '2016': {
            amount: 0,
          },
          '2017': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 0,
          },
          '2016': {
            amount: -50,
          },
          '2017': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 0,
          },
          '2016': {
            amount: -40,
          },
          '2017': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 0,
          },
          '2016': {
            amount: -20,
          },
          '2017': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: 0,
          },
          '2016': {
            amount: 0,
          },
          '2017': {
            amount: 0,
          },
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

  it('should not return a value for years that are only in other fields', () => {
    const testData = [
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2015': {
            amount: -5,
          },
          '2016': {
            amount: 0,
          },
          '2017': {
            amount: 0,
          },
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 10,
          },
        },
      },
    ];
    expect(getNetQuantificationProjection(testData)).toStrictEqual([
      [
        { year: '2015', value: 0 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
      ],
      [{ year: '2016', value: 5 }],
    ]);
  });
  it.only('should use deducted unadjusted values if they are present', () => {
    const testData = [
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: -30,
          },
          '2015': {
            amount: 10,
          },
          '2017': {
            amount: 9,
          },
          '2014': {
            amount: 0,
          },
        },
        deductedUnadjustedGrandfatheredTonnesPerYear: {
          '2016': -25,
          '2015': 5,
          '2017': 4,
          '2014': 0,
        },
      },
      {
        unadjustedGrandfatheredTonnesPerYear: {
          '2016': {
            amount: 10,
          },
          '2017': {
            amount: 9,
          },
          '2018': {
            amount: 0,
          },
          '2015': {
            amount: 10,
          },
        },
      },
    ];

    expect(getNetQuantificationProjection(testData)).toStrictEqual([
      [
        { year: '2014', value: 0 },
        { year: '2015', value: 0 },
        { year: '2016', value: 3 },
        { year: '2017', value: 0 },
      ],
      [
        { year: '2015', value: 0 },
        { year: '2016', value: 0 },
        { year: '2017', value: 0 },
        { year: '2018', value: 10 },
      ],
    ]);
  });

  /**
   * These examples were established to be correct by a SAM and developer
   *
   */
  describe('IRL examples', () => {
    /**
     * Validation date: 6/20/2022
     * Developer: Dave Martinez
     * SAM: Rebekah Carlson
     *
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

  describe('regression cases', () => {
    it('should not access an index over the row length', () => {
      const negativeTestData = [
        {
          unadjustedGrandfatheredTonnesPerYear: {
            '2018': {
              amount: 10,
            },
            '2019': {
              amount: 18,
            },
            '2020': {
              amount: -5,
            },
            '2021': {
              amount: 11,
            },
          },
        },
        {
          unadjustedGrandfatheredTonnesPerYear: {
            '2018': {
              amount: -10,
            },
            '2019': {
              amount: 18,
            },
            '2020': {
              amount: 5,
            },
            '2021': {
              amount: 11,
            },
          },
        },
      ];
      expect(getNetQuantificationProjection(negativeTestData)).toStrictEqual([
        [
          { year: '2018', value: 0 },
          { year: '2019', value: 18 },
          { year: '2020', value: 0 },
          { year: '2021', value: 11 },
        ],
        [
          { year: '2018', value: 0 },
          { year: '2019', value: 18 },
          { year: '2020', value: 0 },
          { year: '2021', value: 11 },
        ],
      ]);
    });
  });
});
