import { getGrandfatherableTonnes } from '../index';

import { outputFile } from './example-output';

type AnyFunction = (...args: any[]) => any;
type Resolved<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
type ResolvedReturnType<T extends AnyFunction> = Resolved<ReturnType<T>>;

describe('getGrandfatherableTonnes', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file', async () => {
    expect(await getGrandfatherableTonnes(outputFile)).toStrictEqual<
      ResolvedReturnType<typeof getGrandfatherableTonnes>
    >({
      consideredYears: ['2018', '2019'],
      totalsForMapUnits: [
        {
          '2018': 12.737037932264577,
          '2019': 12.28984872581657,
          '2020': 105.80975120790006,
          '2021': -8.336564862961673,
          '2022': 259.0016501989785,
          '2023': 41.90594541530139,
          '2024': 8.905676082253411,
          '2025': 6.006453958478474,
          '2026': 153.30090561342666,
          '2027': 41.6559506335108,
        },
      ],
      somscAnnualsConsidered: {
        '2018': 12.737037932264577,
        '2019': 12.28984872581657,
      },
      baselineTotal: -2.7783504,
      co2PerYearPerAcre: 0.3154865794068197,
      futureTotal: -66.10171,
      grandfatheredTonnes: 25.026886658081146,
      grandfatheredYears: 2,
      somscAverage: 12.513443329040573,
      switchYear: '2018',
      grandfatheredTonnesPerYear: 12.513443329040573,
      tenYearSummaryTotal: 63.323359599999996,
      totalAcres: 39.66394815452514,
      totalM2: 160514.55112007097,
      totalType: 'Using value computed from somsc',
    });
  });
});
