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
      tenYearProjectedTonnesPerYearPerAcre: 1.3492494713806105,
      tenYearProjectedTonnesTotalEstimate: 1605.69536,
      somscAverageTonnesTotalEstimate: 992.9423437522862,
      grandfatherableYears: ['2015', '2016', '2017', '2018', '2019'],
      somscTenYearTonnesPerMapUnit: [
        {
          '2015': 120.88957366558819,
          '2016': 43.287365222050525,
          '2017': 105.22840162406635,
          '2018': 129.19400878679073,
          '2019': 97.87182257764732,
          '2020': 168.92058104294478,
          '2021': 272.1879037705471,
          '2022': 92.3895080827289,
          '2023': 270.0208473579141,
          '2024': 149.65168144606702,
        },
      ],
      somscGrandfatherableTonnesPerYear: {
        '2015': 120.88957366558819,
        '2016': 43.287365222050525,
        '2017': 105.22840162406635,
        '2018': 129.19400878679073,
        '2019': 97.87182257764732,
      },
      tenYearProjectedBaselineTonnesPerYear: 15.897614,
      grandfatheredTonnesPerYearPerAcre: 0.8343593472295995,
      tenYearProjectedFutureTonnesPerYear: 176.46715,
      grandfatheredTonnes: 496.4711718761431,
      grandfatheredYears: 5,
      somscGrandfatherableTonnesPerYearAverage: 99.29423437522863,
      switchYear: '2015',
      grandfatheredTonnesPerYear: 99.29423437522863,
      tenYearProjectedTonnesPerYear: 160.569536,
      totalAcres: 119.00655839108708,
      totalM2: 481603.1986041848,
      grandfatheringMethod: 'Using value computed from somsc',
      tenYearProjectedFutureTonnesPerYearPerAcre: 1.4828355040743402,
      tenYearProjectedBaselineTonnesPerYearPerAcre: 0.13358603269372962,
    });
  });
});
