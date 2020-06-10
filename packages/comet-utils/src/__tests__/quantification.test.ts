import { getQuantificationSummary } from '../index';

import { outputFile } from './example-output';

type AnyFunction = (...args: any[]) => any;
type Resolved<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
type ResolvedReturnType<T extends AnyFunction> = Resolved<ReturnType<T>>;

describe('getQuantificationSummary', () => {
  it('will get the tonnes that are grandfatherable given a COMET output file', async () => {
    expect(await getQuantificationSummary(outputFile)).toStrictEqual<
      ResolvedReturnType<typeof getQuantificationSummary>
    >({
      tenYearProjectedTonnesPerYearPerAcre: 1.596496630978367,
      tenYearProjectedTonnesTotalEstimate: 633.2335959999999,
      somscAverageTonnesTotalEstimate: 125.13443329040572,
      grandfatherableYears: ['2018', '2019'],
      somscTenYearTonnesPerMapUnit: [
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
      somscGrandfatherableTonnesPerYear: {
        '2018': 12.737037932264577,
        '2019': 12.28984872581657,
      },
      tenYearProjectedBaselineTonnesPerYear: 2.7783504,
      grandfatheredTonnesPerYearPerAcre: 0.3154865794068197,
      tenYearProjectedFutureTonnesPerYear: 66.10171,
      grandfatheredTonnes: 25.026886658081146,
      grandfatheredYears: 2,
      somscGrandfatherableTonnesPerYearAverage: 12.513443329040573,
      switchYear: '2018',
      grandfatheredTonnesPerYear: 12.513443329040573,
      tenYearProjectedTonnesPerYear: 63.323359599999996,
      totalAcres: 39.66394815452514,
      totalM2: 160514.55112007097,
      grandfatheringMethod: 'Using value computed from somsc',
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.666543878649626,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.07004724767125903,
    });
  });
});
