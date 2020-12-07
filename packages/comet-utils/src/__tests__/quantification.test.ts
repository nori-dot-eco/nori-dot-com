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

const sortAnnualValues = ({
  unadjustedValues,
}: {
  unadjustedValues: number[][];
}): {
  negativeValues: number[];
  positiveValues: number[];
  zeroValues: number[];
  totalNegative: number;
  totalPositive: number;
  deficit: number;
}[] => {
  let deficit = 0;

  const sortedAnnualValues = unadjustedValues.map((annualUnadjustedValues) => {
    const sorted = annualUnadjustedValues.reduce(
      (sortedValues, nextUnadjustedValue, i) => {
        if (deficit) {
          deficit = 0;
        }
        if (nextUnadjustedValue < 0) {
          sortedValues.totalNegative += nextUnadjustedValue;
          sortedValues.negativeValues.push(nextUnadjustedValue);
        } else if (nextUnadjustedValue > 0) {
          sortedValues.totalPositive += nextUnadjustedValue;
          sortedValues.positiveValues.push(nextUnadjustedValue);
        } else if (nextUnadjustedValue === 0) {
          sortedValues.zeroValues.push(nextUnadjustedValue);
        } else {
          throw new Error(`Invalid value ${nextUnadjustedValue}`);
        }
        if (
          sortedValues.totalNegative * -1 > sortedValues.totalPositive &&
          i === annualUnadjustedValues.length - 1
        ) {
          deficit =
            sortedValues.totalPositive * -1 + sortedValues.totalNegative;
          sortedValues.totalNegative = sortedValues.totalPositive;
        }
        return sortedValues;
      },
      {
        negativeValues: [],
        positiveValues: [],
        zeroValues: [],
        totalNegative: deficit,
        totalPositive: deficit,
        deficit,
      }
    );
    return sorted;
  });

  return sortedAnnualValues;
};

const calculateAndApplyDeficit = ({
  positiveValues,
  amountToSubtract,
  zeroValues,
}: {
  positiveValues: number[];
  amountToSubtract: number;
  zeroValues: number[];
}): {
  adjustedValues: number[];
  deficit: number;
  remainingPositiveValues: number[];
} => {
  const { deficit, adjustedValues } = positiveValues.reduce(
    (acc, nextPositiveValue, i) => {
      const postSubtractionValue = nextPositiveValue - amountToSubtract;
      if (postSubtractionValue < 0) {
        acc.deficit += postSubtractionValue;
      }
      acc.adjustedValues.push(Math.max(0, postSubtractionValue));
      if (i !== positiveValues.length - 1) acc.adjustedValues.push(0); // todo why do I need to do it like this?
      return acc;
    },
    { deficit: 0, adjustedValues: zeroValues }
  );
  return {
    deficit,
    adjustedValues,
    remainingPositiveValues: adjustedValues.filter((e) => e > 0),
  };
};
it.only('use this func', () => {
  const makeAdjustments = ({
    unadjustedValues,
  }: {
    unadjustedValues: number[][];
  }): number[][] => {
    const sortedAnnualValues = sortAnnualValues({ unadjustedValues });
    const adjustedAnnualValues = sortedAnnualValues.map(
      ({ negativeValues, positiveValues, zeroValues, totalNegative }) => {
        let deficit: number = totalNegative;
        let adjustedValues: number[] = positiveValues;
        let iteration = 0;
        let remainingPositiveValues = positiveValues;
        do {
          if (iteration >= 10) {
            throw new Error(
              `Reached max iteration count. Bailing! ${JSON.stringify({
                deficit,
                adjustedValues,
                iteration,
              })}`
            );
          }
          ({
            deficit,
            adjustedValues,
            remainingPositiveValues,
          } = calculateAndApplyDeficit({
            amountToSubtract: (deficit / remainingPositiveValues.length) * -1,
            positiveValues: remainingPositiveValues,
            zeroValues: [
              ...zeroValues,
              ...Array(negativeValues.length).fill(0),
            ],
          }));
          iteration++;
        } while (deficit < 0 && iteration <= 50);
        return [...adjustedValues];
      }
    );
    return adjustedAnnualValues;
  };
  expect(
    makeAdjustments({
      unadjustedValues: [
        [100000, 100000, -10000, 10000, 1000, 100],
        [0, 0, -10000, 0, 0, 0],
        [100000, 100000, 0, 10000, 1000, 100],
        [100000, 100000, -10000, 10000, 1000, 100],
        [0, 0, -10000, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        // [100000, 100000, 0, 10000, 1000, 100],
      ],
    }).map((e) => e.sort())
  ).toStrictEqual([
    [0, 0, 0, 7033.333333333333, 97033.33333333333, 97033.33333333333],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7033.333333333333, 97033.33333333333, 97033.33333333333],
    [0, 0, 0, 7033.333333333333, 97033.33333333333, 97033.33333333333],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 7033.333333333333, 97033.33333333333, 97033.33333333333], // todo it breaks here
  ]);
});
it('maybe use this function', () => {
  const makeAdjustments = ({
    unadjustedValues,
  }: {
    unadjustedValues: number[][];
  }): number[][] => {
    let rollingNegative = 0;
    const adjustedVals = unadjustedValues.map((vals) => {
      let totalNegative = vals
        .filter((v) => v < 0)
        .reduce((acc, next) => acc + next, rollingNegative);
      const totalPositive = vals
        .filter((v) => v > 0)
        .reduce((acc, next) => acc + next, 0);

      if (totalPositive < totalNegative * -1) {
        rollingNegative += totalNegative;
        totalNegative = totalPositive;
      }
      let remainingNegative = totalNegative;
      let updatedVals = vals;
      let iter = 0;
      const zeroVals = vals.filter((v) => v === 0);

      do {
        console.log(iter);
        console.log(updatedVals.sort());
        const positiveVals = updatedVals.filter((v) => v > 0);
        const [smallestNumber] = positiveVals.sort().slice(0, 1);

        if (Number(smallestNumber) < Number(remainingNegative) * -1) {
          console.log('if tick');

          const positiveValsWithoutSmallest = positiveVals.sort().slice(1);
          const amountToSubtract =
            smallestNumber / positiveValsWithoutSmallest.length;
          const updatedPositiveVals = [0]
            .concat(zeroVals)
            .concat(
              positiveValsWithoutSmallest.map((p) => p - amountToSubtract)
            );
          remainingNegative += Number(smallestNumber) * 2;
          console.log('smalls=', {
            updatedVals,
            updatedPositiveVals,
            positiveVals,
            zeroVals,
            smallestNumber,
            remainingNegative: remainingNegative * -1,
            rm: Number(smallestNumber) * 2,
            amountToSubtract,
            smaller: Number(smallestNumber) < Number(remainingNegative) * -1,
          });
          updatedVals = updatedPositiveVals;
        } else {
          console.log('else tick');

          const amountToSubtract =
            (remainingNegative / positiveVals.length) * -1;
          const updatedPositiveVals = zeroVals.concat(
            positiveVals.map((p) => p - amountToSubtract)
          );
          remainingNegative += Number(smallestNumber ?? 0) * 2;
          console.log('else tick remainingNegative', {
            updatedPositiveVals,
            remainingNegative,
            amountToSubtract,
            end: [remainingNegative]
              .concat(zeroVals)
              .concat(updatedPositiveVals),
          });

          updatedVals = [remainingNegative]
            .concat(zeroVals)
            .concat(updatedPositiveVals);
        }
        iter += 1;
      } while (remainingNegative < 0 && iter < 5);
      console.log('rollingNegative=', rollingNegative);

      return updatedVals.sort();
      // todo, roll remaining forward, the above only handles per-year basis
      // todo replace negativeTonneDistribution portion of asjustment function with the above
    });
    return adjustedVals;
  };
  expect(
    makeAdjustments({
      unadjustedValues: [
        [100000, 100000, -10000, 10000, 1000, 100],
        [0, 0, -10000, 0, 0, 0],
        [100000, 100000, 0, 10000, 1000, 100],
      ],
    })
  ).toStrictEqual([
    [0, 0, 11450, 7033.333333333334, 97033.33333333333, 97033.33333333333],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 11450, 7033.333333333334, 97033.33333333333, 97033.33333333333],
  ]);
});
it('temp test', () => {
  const unadjustedGrandfatheredTonnesPerYearForProject = [
    {
      '2015': {
        amount: 23.542452197669117,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 35.32298528849414,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 65.609562,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 65.609562,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 54.167304841100595,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 141.82067877981723,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 147.378617,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 147.378617,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 82.67723749640933,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 147.378617,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 29.485162817693393,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 16.90772248277581,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 3.3632861613433356,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: -9.740548732337487,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -14.287617838576649,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 9.049881844624924,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 33.86410308343063,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 33.898524675332936,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 12.717403202702787,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -22.17402295567053,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 16.676294798098233,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 18.09538910394769,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 13.703782233656398,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 5.063479117188404,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -7.029955471710445,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 532.4090882,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 532.4090882,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 532.4090882,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 532.4090882,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 151.69631600603603,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 187.36158371111406,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 164.54468342029486,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 128.9233190863107,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 199.2869124,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -142.37629174736085,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 40.059501438922595,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 16.998053298799476,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 48.600866,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 48.600866,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 48.600866,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 7.568467244992582,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 9.489593797288313,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 6.589340261766937,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 2.3216351443206062,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -1.8779788816596281,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 30.70970702580323,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 16.075040331088,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 26.71656351986492,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 29.683407665690094,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -6.103553767664823,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 45.820274801790816,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 47.230313813585816,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 39.24789473586641,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 29.47948047136941,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 65.3160026,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 6.438435551770477,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 7.3468400792721,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 6.266153827185397,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 2.112896480837628,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -5.673202750577855,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 14.853751308152294,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: -22.207693825681297,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 147.523632,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 45.748314164871424,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 6.97176653801145,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 10.462004955019008,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 9.530182721901394,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 8.084713802409842,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: 6.802441014291196,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 13.282923376554102,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 9.285707647160367,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 0.3670536780045426,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: -1.0746478697258746,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: -4.803920650485327,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: -6.522352360032913,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
    {
      '2015': {
        amount: 163.26235727837354,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2016': {
        amount: 65.62910877772744,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2017': {
        amount: 54.892697784949235,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2018': {
        amount: -50.19146664359011,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
      '2019': {
        amount: 114.00564808897568,
        method: 'somsc',
        averagePerAcre: 0,
        totalAcres: 0,
      },
    },
  ] as any;
  console.log(
    JSON.stringify(
      getAdjustedGrandfatheredTonnesPerYear({
        unadjustedGrandfatheredTonnesPerYearForProject,
      }).adjustedGrandfatheredTonnesPerYear,
      null,
      2
    ),
    [0, 1, 2, 3, 4].map((iter) => {
      return [
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject,
        }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
          const v = Object.entries(next).map(([k, v]) => next[k]);

          return (
            acc +
            v.reduce((a, n, i) => {
              return i === iter ? n.unadjusted + a : a;
            }, 0)
          );
        }, 0),
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject,
        }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
          const v = Object.entries(next).map(([k, v]) => next[k]);

          return (
            acc +
            v.reduce((a, n, i) => {
              return i === iter ? n.adjustment + a : a;
            }, 0)
          );
        }, 0),
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject,
        }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
          const v = Object.entries(next).map(([k, v]) => next[k]);

          return (
            acc +
            v.reduce((a, n, i) => {
              return i === iter ? n.adjusted + a : a;
            }, 0)
          );
        }, 0),
      ];
    }),
    getAdjustedGrandfatheredTonnesPerYear({
      unadjustedGrandfatheredTonnesPerYearForProject,
    }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
      const v = Object.entries(next).map(([k, v]) => next[k]);

      return (
        acc +
        v.reduce((a, n, i) => {
          return n.adjusted + a;
        }, 0)
      );
    }, 0),
    getAdjustedGrandfatheredTonnesPerYear({
      unadjustedGrandfatheredTonnesPerYearForProject,
    }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
      const v = Object.entries(next).map(([k, v]) => next[k]);

      return (
        acc +
        v.reduce((a, n, i) => {
          return n.unadjusted + a;
        }, 0)
      );
    }, 0),
    getAdjustedGrandfatheredTonnesPerYear({
      unadjustedGrandfatheredTonnesPerYearForProject,
    }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
      const v = Object.entries(next).map(([k, v]) => next[k]);

      return (
        acc +
        v.reduce((a, n, i) => {
          return n.adjustment + a;
        }, 0)
      );
    }, 0)
  );
});
it('remove me test', () => {
  const unadjustedGrandfatheredTonnesPerYearForProject = [
    {} as any,
    {
      '2017': {
        averagePerAcre: -0.13124319577684926,
        totalAcres: 53.248900726463525,
        amount: -6.988555902945263,
        method: 'somsc',
      },
      '2018': {
        method: 'somsc',
        totalAcres: 53.248900726463525,
        amount: 40.0480536567148,
        averagePerAcre: 0.7520916509138714,
      },
      '2019': {
        method: 'somsc',
        averagePerAcre: 0.6540594970124187,
        amount: 34.82794922561495,
        totalAcres: 53.248900726463525,
      },
    },
    {
      '2015': {
        method: 'somsc',
        averagePerAcre: 0.7755225742155976,
        totalAcres: 51.90134310246551,
        amount: 40.250663208071,
      },
      '2016': {
        averagePerAcre: 0.8315573436085084,
        amount: 43.158943,
        method: 'projection',
        totalAcres: 51.90134310246551,
      },
      '2017': {
        amount: 43.158943,
        totalAcres: 51.90134310246551,
        method: 'projection',
        averagePerAcre: 0.8315573436085084,
      },
      '2018': {
        amount: 43.158943,
        method: 'projection',
        totalAcres: 51.90134310246551,
        averagePerAcre: 0.8315573436085084,
      },
      '2019': {
        averagePerAcre: 0.8315573436085084,
        method: 'projection',
        totalAcres: 51.90134310246551,
        amount: 43.158943,
      },
    },
    {
      '2017': {
        totalAcres: 122.3965254379269,
        averagePerAcre: -0.16050551314821745,
        amount: -19.645317122973307,
        method: 'somsc',
      },
      '2018': {
        amount: 83.53676775425542,
        averagePerAcre: 0.6825093069869936,
        totalAcres: 122.3965254379269,
        method: 'somsc',
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 1.3124520873876275,
        totalAcres: 122.3965254379269,
        amount: 160.6395753,
      },
    },
    {
      '2015': {
        totalAcres: 223.63585015223705,
        method: 'projection',
        averagePerAcre: 0.826603515823426,
        amount: 184.85818,
      },
      '2016': {
        method: 'projection',
        averagePerAcre: 0.826603515823426,
        totalAcres: 223.63585015223705,
        amount: 184.85818,
      },
      '2017': {
        amount: 157.7624051212383,
        method: 'somsc',
        averagePerAcre: 0.7054432686612799,
        totalAcres: 223.63585015223705,
      },
      '2018': {
        totalAcres: 223.63585015223705,
        amount: 184.85818,
        averagePerAcre: 0.826603515823426,
        method: 'projection',
      },
      '2019': {
        amount: 184.85818,
        averagePerAcre: 0.826603515823426,
        method: 'projection',
        totalAcres: 223.63585015223705,
      },
    },
    {} as any,
    {
      '2015': {
        averagePerAcre: 0.7851680472312024,
        method: 'somsc',
        totalAcres: 251.5936183852012,
        amount: 197.54327004334075,
      },
      '2016': {
        averagePerAcre: 0.7431455365514354,
        method: 'somsc',
        amount: 186.97067452778745,
        totalAcres: 251.5936183852012,
      },
      '2017': {
        amount: 221.20590292616095,
        method: 'somsc',
        totalAcres: 251.5936183852012,
        averagePerAcre: 0.8792190531139972,
      },
      '2018': {
        averagePerAcre: 1.0068611864891412,
        amount: 253.3198491204199,
        method: 'somsc',
        totalAcres: 251.5936183852012,
      },
      '2019': {
        amount: 197.8843662737357,
        method: 'somsc',
        averagePerAcre: 0.7865237900063339,
        totalAcres: 251.5936183852012,
      },
    },
    {
      '2015': {
        totalAcres: 44.149832082550304,
        amount: 27.2912872,
        method: 'projection',
        averagePerAcre: 0.6181515514933648,
      },
      '2016': {
        averagePerAcre: 0.6181515514933648,
        amount: 27.2912872,
        totalAcres: 44.149832082550304,
        method: 'projection',
      },
      '2017': {
        averagePerAcre: 0.6181515514933648,
        amount: 27.2912872,
        method: 'projection',
        totalAcres: 44.149832082550304,
      },
      '2018': {
        method: 'projection',
        averagePerAcre: 0.6181515514933648,
        totalAcres: 44.149832082550304,
        amount: 27.2912872,
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 0.6181515514933648,
        amount: 27.2912872,
        totalAcres: 44.149832082550304,
      },
    },
    {
      '2015': {
        averagePerAcre: -0.050359221487705205,
        method: 'somsc',
        totalAcres: 88.0515428402932,
        amount: -4.434207148228489,
      },
      '2016': {
        averagePerAcre: 0.6455637335173366,
        method: 'somsc',
        totalAcres: 88.0515428402932,
        amount: 56.84288273794139,
      },
      '2017': {
        method: 'projection',
        averagePerAcre: 0.6974813049146965,
        totalAcres: 88.0515428402932,
        amount: 61.414305,
      },
      '2018': {
        averagePerAcre: 0.6974813049146965,
        method: 'projection',
        totalAcres: 88.0515428402932,
        amount: 61.414305,
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 0.6974813049146965,
        totalAcres: 88.0515428402932,
        amount: 61.414305,
      },
    },
    {
      '2015': {
        amount: 46.9230503,
        totalAcres: 56.95937149691593,
        method: 'projection',
        averagePerAcre: 0.8237985965582617,
      },
      '2016': {
        method: 'projection',
        averagePerAcre: 0.8237985965582617,
        totalAcres: 56.95937149691593,
        amount: 46.9230503,
      },
      '2017': {
        amount: 25.97828268405686,
        method: 'somsc',
        averagePerAcre: 0.45608443354160705,
        totalAcres: 56.95937149691593,
      },
      '2018': {
        amount: 44.146975236093255,
        averagePerAcre: 0.7750607858881238,
        totalAcres: 56.95937149691593,
        method: 'somsc',
      },
      '2019': {
        averagePerAcre: 0.8237985965582617,
        totalAcres: 56.95937149691593,
        method: 'projection',
        amount: 46.9230503,
      },
    },
    {
      '2015': {
        method: 'projection',
        averagePerAcre: 0.7244941811473976,
        amount: 61.002124,
        totalAcres: 84.19960516920864,
      },
      '2016': {
        amount: 61.002124,
        method: 'projection',
        averagePerAcre: 0.7244941811473976,
        totalAcres: 84.19960516920864,
      },
      '2017': {
        amount: 61.002124,
        method: 'projection',
        totalAcres: 84.19960516920864,
        averagePerAcre: 0.7244941811473976,
      },
      '2018': {
        amount: 61.002124,
        totalAcres: 84.19960516920864,
        method: 'projection',
        averagePerAcre: 0.7244941811473976,
      },
      '2019': {
        method: 'projection',
        amount: 61.002124,
        totalAcres: 84.19960516920864,
        averagePerAcre: 0.7244941811473976,
      },
    },

    {
      '2015': {
        totalAcres: 284.72976494958635,
        method: 'projection',
        amount: 182.5148234,
        averagePerAcre: 0.6410106910751522,
      },
      '2016': {
        amount: 182.5148234,
        totalAcres: 284.72976494958635,
        method: 'projection',
        averagePerAcre: 0.6410106910751522,
      },
      '2017': {
        amount: 182.5148234,
        averagePerAcre: 0.6410106910751522,
        totalAcres: 284.72976494958635,
        method: 'projection',
      },
      '2018': {
        amount: 182.5148234,
        method: 'projection',
        averagePerAcre: 0.6410106910751522,
        totalAcres: 284.72976494958635,
      },
      '2019': {
        method: 'projection',
        amount: 182.5148234,
        totalAcres: 284.72976494958635,
        averagePerAcre: 0.6410106910751522,
      },
    },
    {
      '2016': {
        method: 'somsc',
        amount: -18.119879281306197,
        totalAcres: 120.80887950487616,
        averagePerAcre: -0.14998797568166197,
      },
      '2017': {
        method: 'somsc',
        amount: 62.81936878909896,
        averagePerAcre: 0.519989665052422,
        totalAcres: 120.80887950487616,
      },
      '2018': {
        totalAcres: 120.80887950487616,
        amount: 65.88387,
        method: 'projection',
        averagePerAcre: 0.5453561879724309,
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 0.5453561879724309,
        totalAcres: 120.80887950487616,
        amount: 65.88387,
      },
    },
    {
      '2018': {
        method: 'somsc',
        averagePerAcre: -0.6331207884759128,
        amount: -97.95167367520466,
        totalAcres: 154.71245844098712,
      },
      '2019': {
        amount: 133.04758,
        averagePerAcre: 0.8599668141835463,
        totalAcres: 154.71245844098712,
        method: 'projection',
      },
    },
    {
      '2015': {
        method: 'somsc',
        averagePerAcre: 0.7558989899301859,
        totalAcres: 136.70948224791587,
        amount: 103.33855954507828,
      },
      '2016': {
        method: 'projection',
        averagePerAcre: 0.7956830222115651,
        totalAcres: 136.70948224791587,
        amount: 108.777414,
      },
      '2017': {
        method: 'projection',
        totalAcres: 136.70948224791587,
        amount: 108.777414,
        averagePerAcre: 0.7956830222115651,
      },
      '2018': {
        method: 'projection',
        totalAcres: 136.70948224791587,
        averagePerAcre: 0.7956830222115651,
        amount: 108.777414,
      },
      '2019': {
        method: 'projection',
        totalAcres: 136.70948224791587,
        amount: 108.777414,
        averagePerAcre: 0.7956830222115651,
      },
    },
    {
      '2015': {
        averagePerAcre: 0.9678398455617663,
        amount: 56.1371746,
        totalAcres: 58.002545418468614,
        method: 'projection',
      },
      '2016': {
        amount: 56.1371746,
        method: 'projection',
        totalAcres: 58.002545418468614,
        averagePerAcre: 0.9678398455617663,
      },
      '2017': {
        amount: 51.38154553117478,
        method: 'somsc',
        averagePerAcre: 0.8858498391833397,
        totalAcres: 58.002545418468614,
      },
      '2018': {
        method: 'projection',
        averagePerAcre: 0.9678398455617663,
        amount: 56.1371746,
        totalAcres: 58.002545418468614,
      },
      '2019': {
        method: 'projection',
        totalAcres: 58.002545418468614,
        amount: 56.1371746,
        averagePerAcre: 0.9678398455617663,
      },
    },
    {
      '2015': {
        totalAcres: 277.7213527771729,
        amount: 237.6358804,
        method: 'projection',
        averagePerAcre: 0.8556629802630441,
      },
      '2016': {
        amount: 237.6358804,
        totalAcres: 277.7213527771729,
        method: 'projection',
        averagePerAcre: 0.8556629802630441,
      },
      '2017': {
        totalAcres: 277.7213527771729,
        amount: 237.6358804,
        method: 'projection',
        averagePerAcre: 0.8556629802630441,
      },
      '2018': {
        averagePerAcre: 0.8556629802630441,
        amount: 237.6358804,
        totalAcres: 277.7213527771729,
        method: 'projection',
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 0.8556629802630441,
        amount: 237.6358804,
        totalAcres: 277.7213527771729,
      },
    },
    {
      '2015': {
        amount: 318.387391,
        averagePerAcre: 0.7022603550129165,
        method: 'projection',
        totalAcres: 453.37514602279373,
      },
      '2016': {
        averagePerAcre: 0.7022603550129165,
        method: 'projection',
        amount: 318.387391,
        totalAcres: 453.37514602279373,
      },
      '2017': {
        amount: 318.387391,
        averagePerAcre: 0.7022603550129165,
        method: 'projection',
        totalAcres: 453.37514602279373,
      },
      '2018': {
        amount: 318.387391,
        method: 'projection',
        totalAcres: 453.37514602279373,
        averagePerAcre: 0.7022603550129165,
      },
      '2019': {
        method: 'projection',
        averagePerAcre: 0.7022603550129165,
        amount: 318.387391,
        totalAcres: 453.37514602279373,
      },
    },
    {
      '2015': {
        averagePerAcre: 0.46666973024184094,
        totalAcres: 214.88171473659935,
        amount: 100.27879185003303,
        method: 'somsc',
      },
      '2016': {
        method: 'projection',
        amount: 149.075569,
        averagePerAcre: 0.6937564193525535,
        totalAcres: 214.88171473659935,
      },
      '2017': {
        totalAcres: 214.88171473659935,
        method: 'projection',
        averagePerAcre: 0.6937564193525535,
        amount: 149.075569,
      },
      '2018': {
        averagePerAcre: 0.5600969783611351,
        amount: 120.35459912902871,
        method: 'somsc',
        totalAcres: 214.88171473659935,
      },
      '2019': {
        amount: 149.075569,
        totalAcres: 214.88171473659935,
        averagePerAcre: 0.6937564193525535,
        method: 'projection',
      },
    },
    {
      '2015': {
        averagePerAcre: -0.27422977845205854,
        totalAcres: 356.5727986750373,
        method: 'somsc',
        amount: -97.78287958268595,
      },
      '2016': {
        method: 'projection',
        averagePerAcre: 0.7333741944749949,
        totalAcres: 356.5727986750373,
        amount: 261.501289,
      },
      '2017': {
        amount: 261.501289,
        method: 'projection',
        averagePerAcre: 0.7333741944749949,
        totalAcres: 356.5727986750373,
      },
      '2018': {
        amount: 261.501289,
        method: 'projection',
        averagePerAcre: 0.7333741944749949,
        totalAcres: 356.5727986750373,
      },
      '2019': {
        method: 'projection',
        amount: 261.501289,
        totalAcres: 356.5727986750373,
        averagePerAcre: 0.7333741944749949,
      },
    },
    {
      '2017': {
        averagePerAcre: -0.6880716591125755,
        amount: -171.46877608106655,
        method: 'somsc',
        totalAcres: 249.20191641407587,
      },
      '2018': {
        averagePerAcre: 0.8034274357959594,
        amount: 200.2156567,
        method: 'projection',
        totalAcres: 249.20191641407587,
      },
      '2019': {
        averagePerAcre: 0.6009804659050472,
        amount: 149.76548383096193,
        method: 'somsc',
        totalAcres: 249.20191641407587,
      },
    },
    {
      '2015': {
        method: 'somsc',
        totalAcres: 85.82357064206671,
        amount: 70.06785259424962,
        averagePerAcre: 0.816417355629173,
      },
      '2016': {
        method: 'somsc',
        amount: 101.76303838739084,
        totalAcres: 85.82357064206671,
        averagePerAcre: 1.1857236610651032,
      },
      '2017': {
        method: 'somsc',
        totalAcres: 85.82357064206671,
        amount: 98.276755115448,
        averagePerAcre: 1.1451021482818302,
      },
      '2018': {
        amount: 121.02339399104794,
        method: 'somsc',
        averagePerAcre: 1.4101416788609809,
        totalAcres: 85.82357064206671,
      },
      '2019': {
        amount: 87.68432091490092,
        method: 'somsc',
        averagePerAcre: 1.0216811099668015,
        totalAcres: 85.82357064206671,
      },
    },
    {
      '2015': {
        totalAcres: 178.28867771442498,
        method: 'projection',
        averagePerAcre: 0.7740091618214684,
        amount: 137.99707,
      },
      '2016': {
        averagePerAcre: 0.7117575346875803,
        amount: 126.89830971272767,
        method: 'somsc',
        totalAcres: 178.28867771442498,
      },
      '2017': {
        amount: 137.99707,
        method: 'projection',
        totalAcres: 178.28867771442498,
        averagePerAcre: 0.7740091618214684,
      },
      '2018': {
        method: 'projection',
        averagePerAcre: 0.7740091618214684,
        totalAcres: 178.28867771442498,
        amount: 137.99707,
      },
      '2019': {
        averagePerAcre: 0.7740091618214684,
        amount: 137.99707,
        method: 'projection',
        totalAcres: 178.28867771442498,
      },
    },
    {
      '2015': {
        totalAcres: 33.69583723819914,
        averagePerAcre: 0.03668912358665362,
        method: 'somsc',
        amount: 1.2362707367880534,
      },
      '2016': {
        amount: 15.554514129374727,
        method: 'somsc',
        averagePerAcre: 0.4616153033806033,
        totalAcres: 33.69583723819914,
      },
      '2017': {
        method: 'projection',
        amount: 22.514978,
        averagePerAcre: 0.6681827740572058,
        totalAcres: 33.69583723819914,
      },
      '2018': {
        amount: 22.514978,
        method: 'projection',
        totalAcres: 33.69583723819914,
        averagePerAcre: 0.6681827740572058,
      },
      '2019': {
        method: 'projection',
        amount: 22.514978,
        totalAcres: 33.69583723819914,
        averagePerAcre: 0.6681827740572058,
      },
    },
    {
      '2019': {
        averagePerAcre: -0.18775566221500878,
        amount: -54.19156784664386,
        method: 'somsc',
        totalAcres: 288.62814152888916,
      },
    },
    {
      '2017': {
        averagePerAcre: -0.1196107824661502,
        method: 'somsc',
        totalAcres: 88.23942930538301,
        amount: -10.554387183583406,
      },
      '2018': {
        amount: 60.5452617,
        averagePerAcre: 0.686147475982219,
        method: 'projection',
        totalAcres: 88.23942930538301,
      },
      '2019': {
        averagePerAcre: 0.686147475982219,
        method: 'projection',
        amount: 60.5452617,
        totalAcres: 88.23942930538301,
      },
    },
    {
      '2015': {
        method: 'somsc',
        totalAcres: 39.603311038932986,
        amount: 33.11359115755761,
        averagePerAcre: 0.8361318861699341,
      },
      '2016': {
        amount: 41.15513485992534,
        totalAcres: 39.603311038932986,
        averagePerAcre: 1.039184193954561,
        method: 'somsc',
      },
      '2017': {
        averagePerAcre: 1.0782755616154267,
        method: 'somsc',
        totalAcres: 39.603311038932986,
        amount: 42.70328245233589,
      },
      '2018': {
        averagePerAcre: 1.2823610540424426,
        totalAcres: 39.603311038932986,
        method: 'somsc',
        amount: 50.78574368745681,
      },
      '2019': {
        averagePerAcre: 0.9419351467340258,
        amount: 37.303750594610605,
        totalAcres: 39.603311038932986,
        method: 'somsc',
      },
    },
    {
      '2017': {
        averagePerAcre: -0.279950647989203,
        amount: -34.875675948331974,
        method: 'somsc',
        totalAcres: 124.57794328690763,
      },
      '2018': {
        amount: 45.339094291648415,
        averagePerAcre: 0.363941586250391,
        method: 'somsc',
        totalAcres: 124.57794328690763,
      },
      '2019': {
        amount: 85.704459,
        totalAcres: 124.57794328690763,
        method: 'projection',
        averagePerAcre: 0.6879585321345324,
      },
    },
  ];
  console.log(
    // unadjustedGrandfatheredTonnesPerYearForProject.length
    getAdjustedGrandfatheredTonnesPerYear({
      unadjustedGrandfatheredTonnesPerYearForProject,
    }).adjustedGrandfatheredTonnesPerYear.reduce((acc, next) => {
      const v = Object.entries(next).map(([k, v]) => next[k]);

      return (
        acc +
        v.reduce((a, n) => {
          return a + n.adjusted;
        }, 0)
      );
    }, 0)
  );
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
            averagePerAcre: 1.039715471250741,
            totalAcres: 16.87,
          },
          '2016': {
            amount: 12.34,
            method: 'somsc',
            averagePerAcre: 0.7314759928867812,
            totalAcres: 16.87,
          },
          '2017': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
            totalAcres: 16.87,
          },
          '2018': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
            totalAcres: 16.87,
          },
          '2019': {
            amount: 25.6,
            method: 'projection',
            averagePerAcre: 1.5174866627148784,
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
            averagePerAcre: -0.7722413866530387,
            totalAcres: 234.81,
          },
          '2016': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
          },
          '2017': {
            amount: 251.8,
            method: 'somsc',
            averagePerAcre: 1.072356373237937,
            totalAcres: 234.81,
          },
          '2018': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
          },
          '2019': {
            amount: 444.75,
            method: 'somsc',
            averagePerAcre: 1.8940845790213363,
            totalAcres: 234.81,
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
                totalAcres: 16.87,
                amount: 17.54,
                method: 'somsc',
                averagePerAcre: 1.039715471250741,
              },
              '2016': {
                totalAcres: 16.87,
                amount: 12.34,
                method: 'somsc',
                averagePerAcre: 0.7314759928867812,
              },
              '2017': {
                totalAcres: 16.87,
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2018': {
                totalAcres: 16.87,
                amount: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2019': {
                totalAcres: 16.87,
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
                adjustment: 0,
                totalAcres: 16.87,
                unadjusted: 17.54,
                adjusted: 17.54,
                method: 'somsc',
                averagePerAcre: 1.039715471250741,
              },
              '2016': {
                adjustment: 0,
                totalAcres: 16.87,
                unadjusted: 12.34,
                adjusted: 12.34,
                method: 'somsc',
                averagePerAcre: 0.7314759928867812,
              },
              '2017': {
                adjustment: 0,
                totalAcres: 16.87,
                unadjusted: 25.6,
                adjusted: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2018': {
                adjustment: 0,
                totalAcres: 16.87,
                unadjusted: 25.6,
                adjusted: 25.6,
                method: 'projection',
                averagePerAcre: 1.5174866627148784,
              },
              '2019': {
                adjustment: 0,
                totalAcres: 16.87,
                unadjusted: 25.6,
                adjusted: 25.6,
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
    describe('When the negative annuals in a past year totaled up require the negative amount to span across multiple years', () => {
      it('should adjust multiple successive vintage years', () => {
        expect(
          getAdjustedGrandfatheredTonnesPerYear({
            unadjustedGrandfatheredTonnesPerYearForProject: [
              {
                '2015': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2016': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2017': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2018': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2019': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
              },
              {
                '2015': {
                  amount: 10,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2016': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2017': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2018': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2019': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
              },
              {
                '2015': {
                  amount: -570,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2016': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2017': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2018': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
                '2019': {
                  amount: 50,
                  method: null,
                  averagePerAcre: null,
                  totalAcres: 119.00674210689633,
                },
              },
            ],
          })
        ).toStrictEqual<
          ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>
        >({
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2016': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2017': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2018': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2019': {
                unadjusted: 50,
                adjustment: -20,
                adjusted: 30,
                averagePerAcre: 0.25208655802923224,
                method: null,
                totalAcres: 119.00674210689633,
              },
            },
            {
              '2015': {
                unadjusted: 10,
                adjustment: -10,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2016': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2017': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2018': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2019': {
                unadjusted: 50,
                adjustment: -20,
                adjusted: 30,
                averagePerAcre: 0.25208655802923224,
                method: null,
                totalAcres: 119.00674210689633,
              },
            },
            {
              '2015': {
                unadjusted: -570,
                adjustment: 570,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2016': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2017': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2018': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: 119.00674210689633,
              },
              '2019': {
                unadjusted: 50,
                adjustment: -20,
                adjusted: 30,
                averagePerAcre: 0.25208655802923224,
                method: null,
                totalAcres: 119.00674210689633,
              },
            },
          ],
        });
      });
    });

    it('should take the lesser of either the somsc annual difference or the ten year projection average per year', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 154.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 125.321625,
              },
              '2016': {
                amount: 154.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 125.321625,
              },
              '2017': {
                amount: 154.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 125.321625,
              },
              '2018': {
                amount: 154.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 125.321625,
              },
              '2019': {
                amount: 154.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 125.321625,
              },
            },
            {
              '2015': {
                amount: 213.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 208.6568353,
              },
              '2016': {
                amount: 180.22,
                method: null,
                averagePerAcre: null,
                totalAcres: 208.6568353,
              },
              '2017': {
                amount: 213.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 208.6568353,
              },
              '2018': {
                amount: 213.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 208.6568353,
              },
              '2019': {
                amount: 213.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 208.6568353,
              },
            },
            {
              '2015': {
                amount: 46.03,
                method: null,
                averagePerAcre: null,
                totalAcres: 56.60445956,
              },
              '2016': {
                amount: 45.4,
                method: null,
                averagePerAcre: null,
                totalAcres: 56.60445956,
              },
              '2017': {
                amount: 17.93,
                method: null,
                averagePerAcre: null,
                totalAcres: 56.60445956,
              },
              '2018': {
                amount: 55.09,
                method: null,
                averagePerAcre: null,
                totalAcres: 56.60445956,
              },
              '2019': {
                amount: 55.09,
                method: null,
                averagePerAcre: null,
                totalAcres: 56.60445956,
              },
            },
            {
              '2015': {
                amount: 145.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 115.4574361,
              },
              '2016': {
                amount: 145.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 115.4574361,
              },
              '2017': {
                amount: 145.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 115.4574361,
              },
              '2018': {
                amount: 145.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 115.4574361,
              },
              '2019': {
                amount: 145.06,
                method: null,
                averagePerAcre: null,
                totalAcres: 115.4574361,
              },
            },
            {
              '2015': {
                amount: 66.91,
                method: null,
                averagePerAcre: null,
                totalAcres: 328.6262857,
              },
              '2016': {
                amount: -91.07,
                method: null,
                averagePerAcre: null,
                totalAcres: 328.6262857,
              },
              '2017': {
                amount: 347.93,
                method: null,
                averagePerAcre: null,
                totalAcres: 328.6262857,
              },
              '2018': {
                amount: 347.93,
                method: null,
                averagePerAcre: null,
                totalAcres: 328.6262857,
              },
              '2019': {
                amount: 347.93,
                method: null,
                averagePerAcre: null,
                totalAcres: 328.6262857,
              },
            },
            {
              '2016': {
                amount: 109.27,
                method: null,
                averagePerAcre: null,
                totalAcres: 118.5723544,
              },
              '2017': {
                amount: 109.27,
                method: null,
                averagePerAcre: null,
                totalAcres: 118.5723544,
              },
              '2018': {
                amount: 82.27,
                method: null,
                averagePerAcre: null,
                totalAcres: 118.5723544,
              },
              '2019': {
                amount: 109.27,
                method: null,
                averagePerAcre: null,
                totalAcres: 118.5723544,
              },
            },
            {
              '2015': {
                amount: 18.76,
                method: null,
                averagePerAcre: null,
                totalAcres: 25.76358104,
              },
              '2016': {
                amount: 27.12,
                method: null,
                averagePerAcre: null,
                totalAcres: 25.76358104,
              },
              '2017': {
                amount: 19.66,
                method: null,
                averagePerAcre: null,
                totalAcres: 25.76358104,
              },
              '2018': {
                amount: 26.58,
                method: null,
                averagePerAcre: null,
                totalAcres: 25.76358104,
              },
              '2019': {
                amount: 27.12,
                method: null,
                averagePerAcre: null,
                totalAcres: 25.76358104,
              },
            },
            {
              '2015': {
                amount: 169.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 173.5382959,
              },
              '2016': {
                amount: 169.87,
                method: null,
                averagePerAcre: null,
                totalAcres: 173.5382959,
              },
              '2017': {
                amount: 125.74,
                method: null,
                averagePerAcre: null,
                totalAcres: 173.5382959,
              },
              '2018': {
                amount: 166.48,
                method: null,
                averagePerAcre: null,
                totalAcres: 173.5382959,
              },
              '2019': {
                amount: 169.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 173.5382959,
              },
            },
            {
              '2016': {
                amount: 20.81,
                method: null,
                averagePerAcre: null,
                totalAcres: 132.8031858,
              },
              '2017': {
                amount: 67.13,
                method: null,
                averagePerAcre: null,
                totalAcres: 132.8031858,
              },
              '2018': {
                amount: 67.13,
                method: null,
                averagePerAcre: null,
                totalAcres: 132.8031858,
              },
              '2019': {
                amount: 67.13,
                method: null,
                averagePerAcre: null,
                totalAcres: 132.8031858,
              },
            },
            {
              '2015': {
                amount: 345.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 281.4691098,
              },
              '2016': {
                amount: 337.4,
                method: null,
                averagePerAcre: null,
                totalAcres: 281.4691098,
              },
              '2017': {
                amount: 345.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 281.4691098,
              },
              '2018': {
                amount: 345.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 281.4691098,
              },
              '2019': {
                amount: 345.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 281.4691098,
              },
            },
            {
              '2016': {
                amount: 41.89,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.27622171,
              },
              '2017': {
                amount: 42.97,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.27622171,
              },
              '2018': {
                amount: 42.43,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.27622171,
              },
              '2019': {
                amount: 42.97,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.27622171,
              },
            },
            {
              '2015': {
                amount: 19.62,
                method: null,
                averagePerAcre: null,
                totalAcres: 23.97870944,
              },
              '2016': {
                amount: 19.56,
                method: null,
                averagePerAcre: null,
                totalAcres: 23.97870944,
              },
              '2017': {
                amount: 7.7,
                method: null,
                averagePerAcre: null,
                totalAcres: 23.97870944,
              },
              '2018': {
                amount: 25.75,
                method: null,
                averagePerAcre: null,
                totalAcres: 23.97870944,
              },
              '2019': {
                amount: 25.75,
                method: null,
                averagePerAcre: null,
                totalAcres: 23.97870944,
              },
            },
            {
              '2015': {
                amount: 204.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 176.0693818,
              },
              '2016': {
                amount: 176.95,
                method: null,
                averagePerAcre: null,
                totalAcres: 176.0693818,
              },
              '2017': {
                amount: 204.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 176.0693818,
              },
              '2018': {
                amount: 204.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 176.0693818,
              },
              '2019': {
                amount: 204.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 176.0693818,
              },
            },
            {
              '2016': {
                amount: 15.77,
                method: null,
                averagePerAcre: null,
                totalAcres: 72.42407128,
              },
              '2017': {
                amount: 28.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 72.42407128,
              },
              '2018': {
                amount: 28.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 72.42407128,
              },
              '2019': {
                amount: 28.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 72.42407128,
              },
            },
            {
              '2015': {
                amount: 96.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 134.6658747,
              },
              '2016': {
                amount: 55.42,
                method: null,
                averagePerAcre: null,
                totalAcres: 134.6658747,
              },
              '2017': {
                amount: 96.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 134.6658747,
              },
              '2018': {
                amount: 31.34,
                method: null,
                averagePerAcre: null,
                totalAcres: 134.6658747,
              },
              '2019': {
                amount: 96.32,
                method: null,
                averagePerAcre: null,
                totalAcres: 134.6658747,
              },
            },
            {
              '2015': {
                amount: 144.6,
                method: null,
                averagePerAcre: null,
                totalAcres: 137.655968,
              },
              '2016': {
                amount: 201.3,
                method: null,
                averagePerAcre: null,
                totalAcres: 137.655968,
              },
              '2017': {
                amount: 202.05,
                method: null,
                averagePerAcre: null,
                totalAcres: 137.655968,
              },
              '2018': {
                amount: 202.05,
                method: null,
                averagePerAcre: null,
                totalAcres: 137.655968,
              },
              '2019': {
                amount: 202.05,
                method: null,
                averagePerAcre: null,
                totalAcres: 137.655968,
              },
            },
            {
              '2015': {
                amount: 28.75,
                method: null,
                averagePerAcre: null,
                totalAcres: 84.77541193,
              },
              '2016': {
                amount: 5.3,
                method: null,
                averagePerAcre: null,
                totalAcres: 84.77541193,
              },
              '2017': {
                amount: 75.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 84.77541193,
              },
              '2018': {
                amount: 75.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 84.77541193,
              },
              '2019': {
                amount: 75.96,
                method: null,
                averagePerAcre: null,
                totalAcres: 84.77541193,
              },
            },
            {
              '2015': {
                amount: 80.3,
                method: null,
                averagePerAcre: null,
                totalAcres: 75.99211011,
              },
              '2016': {
                amount: 74.16,
                method: null,
                averagePerAcre: null,
                totalAcres: 75.99211011,
              },
              '2017': {
                amount: 80.3,
                method: null,
                averagePerAcre: null,
                totalAcres: 75.99211011,
              },
              '2018': {
                amount: 80.3,
                method: null,
                averagePerAcre: null,
                totalAcres: 75.99211011,
              },
              '2019': {
                amount: 72.04,
                method: null,
                averagePerAcre: null,
                totalAcres: 75.99211011,
              },
            },
            {
              '2015': {
                amount: 17.64,
                method: null,
                averagePerAcre: null,
                totalAcres: 17.26689633,
              },
              '2016': {
                amount: 20.4,
                method: null,
                averagePerAcre: null,
                totalAcres: 17.26689633,
              },
              '2017': {
                amount: 20.4,
                method: null,
                averagePerAcre: null,
                totalAcres: 17.26689633,
              },
              '2018': {
                amount: 20.4,
                method: null,
                averagePerAcre: null,
                totalAcres: 17.26689633,
              },
              '2019': {
                amount: 4.34,
                method: null,
                averagePerAcre: null,
                totalAcres: 17.26689633,
              },
            },
            {
              '2016': {
                amount: 8.95,
                method: null,
                averagePerAcre: null,
                totalAcres: 64.6119642,
              },
              '2017': {
                amount: 26.67,
                method: null,
                averagePerAcre: null,
                totalAcres: 64.6119642,
              },
              '2018': {
                amount: 26.67,
                method: null,
                averagePerAcre: null,
                totalAcres: 64.6119642,
              },
              '2019': {
                amount: 26.67,
                method: null,
                averagePerAcre: null,
                totalAcres: 64.6119642,
              },
            },
            {
              '2016': {
                amount: 51.31,
                method: null,
                averagePerAcre: null,
                totalAcres: 70.81278014,
              },
              '2017': {
                amount: 63.43,
                method: null,
                averagePerAcre: null,
                totalAcres: 70.81278014,
              },
              '2018': {
                amount: 41.83,
                method: null,
                averagePerAcre: null,
                totalAcres: 70.81278014,
              },
              '2019': {
                amount: 63.43,
                method: null,
                averagePerAcre: null,
                totalAcres: 70.81278014,
              },
            },
            {
              '2015': {
                amount: 346.54,
                method: null,
                averagePerAcre: null,
                totalAcres: 311.2786352,
              },
              '2016': {
                amount: 346.54,
                method: null,
                averagePerAcre: null,
                totalAcres: 311.2786352,
              },
              '2017': {
                amount: 346.54,
                method: null,
                averagePerAcre: null,
                totalAcres: 311.2786352,
              },
              '2018': {
                amount: 346.54,
                method: null,
                averagePerAcre: null,
                totalAcres: 311.2786352,
              },
              '2019': {
                amount: 346.54,
                method: null,
                averagePerAcre: null,
                totalAcres: 311.2786352,
              },
            },
            {
              '2015': {
                amount: 45.09,
                method: null,
                averagePerAcre: null,
                totalAcres: 53.98577334,
              },
              '2016': {
                amount: 34.64,
                method: null,
                averagePerAcre: null,
                totalAcres: 53.98577334,
              },
              '2017': {
                amount: 29.21,
                method: null,
                averagePerAcre: null,
                totalAcres: 53.98577334,
              },
              '2018': {
                amount: 45.09,
                method: null,
                averagePerAcre: null,
                totalAcres: 53.98577334,
              },
              '2019': {
                amount: 20.79,
                method: null,
                averagePerAcre: null,
                totalAcres: 53.98577334,
              },
            },
            {
              '2017': {
                amount: 22.33,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.51041284,
              },
              '2018': {
                amount: 39.26,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.51041284,
              },
              '2019': {
                amount: 41.95,
                method: null,
                averagePerAcre: null,
                totalAcres: 45.51041284,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                adjusted: 154.77,
                adjustment: 0,
                averagePerAcre: 1.234982390309733,
                method: null,
                totalAcres: 125.321625,
                unadjusted: 154.77,
              },
              '2016': {
                adjusted: 150.63045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 1.201951016398443,
                method: null,
                totalAcres: 125.321625,
                unadjusted: 154.77,
              },
              '2017': {
                adjusted: 154.77,
                adjustment: 0,
                averagePerAcre: 1.234982390309733,
                method: null,
                totalAcres: 125.321625,
                unadjusted: 154.77,
              },
              '2018': {
                adjusted: 154.77,
                adjustment: 0,
                averagePerAcre: 1.234982390309733,
                method: null,
                totalAcres: 125.321625,
                unadjusted: 154.77,
              },
              '2019': {
                adjusted: 154.77,
                adjustment: 0,
                averagePerAcre: 1.234982390309733,
                method: null,
                totalAcres: 125.321625,
                unadjusted: 154.77,
              },
            },
            {
              '2015': {
                adjusted: 213.06,
                adjustment: 0,
                averagePerAcre: 1.0211024225191054,
                method: null,
                totalAcres: 208.6568353,
                unadjusted: 213.06,
              },
              '2016': {
                adjusted: 176.08045454545456,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.8438758035043128,
                method: null,
                totalAcres: 208.6568353,
                unadjusted: 180.22,
              },
              '2017': {
                adjusted: 213.06,
                adjustment: 0,
                averagePerAcre: 1.0211024225191054,
                method: null,
                totalAcres: 208.6568353,
                unadjusted: 213.06,
              },
              '2018': {
                adjusted: 213.06,
                adjustment: 0,
                averagePerAcre: 1.0211024225191054,
                method: null,
                totalAcres: 208.6568353,
                unadjusted: 213.06,
              },
              '2019': {
                adjusted: 213.06,
                adjustment: 0,
                averagePerAcre: 1.0211024225191054,
                method: null,
                totalAcres: 208.6568353,
                unadjusted: 213.06,
              },
            },
            {
              '2015': {
                adjusted: 46.03,
                adjustment: 0,
                averagePerAcre: 0.8131868117424351,
                method: null,
                totalAcres: 56.60445956,
                unadjusted: 46.03,
              },
              '2016': {
                adjusted: 41.26045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.7289258631949129,
                method: null,
                totalAcres: 56.60445956,
                unadjusted: 45.4,
              },
              '2017': {
                adjusted: 17.93,
                adjustment: 0,
                averagePerAcre: 0.3167594945588065,
                method: null,
                totalAcres: 56.60445956,
                unadjusted: 17.93,
              },
              '2018': {
                adjusted: 55.09,
                adjustment: 0,
                averagePerAcre: 0.9732448720158755,
                method: null,
                totalAcres: 56.60445956,
                unadjusted: 55.09,
              },
              '2019': {
                adjusted: 55.09,
                adjustment: 0,
                averagePerAcre: 0.9732448720158755,
                method: null,
                totalAcres: 56.60445956,
                unadjusted: 55.09,
              },
            },
            {
              '2015': {
                adjusted: 145.06,
                adjustment: 0,
                averagePerAcre: 1.2563937404114935,
                method: null,
                totalAcres: 115.4574361,
                unadjusted: 145.06,
              },
              '2016': {
                adjusted: 140.92045454545453,
                adjustment: -4.139545454545455,
                averagePerAcre: 1.2205403073683405,
                method: null,
                totalAcres: 115.4574361,
                unadjusted: 145.06,
              },
              '2017': {
                adjusted: 145.06,
                adjustment: 0,
                averagePerAcre: 1.2563937404114935,
                method: null,
                totalAcres: 115.4574361,
                unadjusted: 145.06,
              },
              '2018': {
                adjusted: 145.06,
                adjustment: 0,
                averagePerAcre: 1.2563937404114935,
                method: null,
                totalAcres: 115.4574361,
                unadjusted: 145.06,
              },
              '2019': {
                adjusted: 145.06,
                adjustment: 0,
                averagePerAcre: 1.2563937404114935,
                method: null,
                totalAcres: 115.4574361,
                unadjusted: 145.06,
              },
            },
            {
              '2015': {
                adjusted: 66.91,
                adjustment: 0,
                averagePerAcre: 0.20360513723811352,
                method: null,
                totalAcres: 328.6262857,
                unadjusted: 66.91,
              },
              '2016': {
                adjusted: 0,
                adjustment: 91.07,
                averagePerAcre: 0,
                method: null,
                totalAcres: 328.6262857,
                unadjusted: -91.07,
              },
              '2017': {
                adjusted: 347.93,
                adjustment: 0,
                averagePerAcre: 1.0587406276977558,
                method: null,
                totalAcres: 328.6262857,
                unadjusted: 347.93,
              },
              '2018': {
                adjusted: 347.93,
                adjustment: 0,
                averagePerAcre: 1.0587406276977558,
                method: null,
                totalAcres: 328.6262857,
                unadjusted: 347.93,
              },
              '2019': {
                adjusted: 347.93,
                adjustment: 0,
                averagePerAcre: 1.0587406276977558,
                method: null,
                totalAcres: 328.6262857,
                unadjusted: 347.93,
              },
            },
            {
              '2016': {
                adjusted: 105.13045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.886635464712123,
                method: null,
                totalAcres: 118.5723544,
                unadjusted: 109.27,
              },
              '2017': {
                adjusted: 109.27,
                adjustment: 0,
                averagePerAcre: 0.9215470212506803,
                method: null,
                totalAcres: 118.5723544,
                unadjusted: 109.27,
              },
              '2018': {
                adjusted: 82.27,
                adjustment: 0,
                averagePerAcre: 0.6938379558734645,
                method: null,
                totalAcres: 118.5723544,
                unadjusted: 82.27,
              },
              '2019': {
                adjusted: 109.27,
                adjustment: 0,
                averagePerAcre: 0.9215470212506803,
                method: null,
                totalAcres: 118.5723544,
                unadjusted: 109.27,
              },
            },
            {
              '2015': {
                adjusted: 18.76,
                adjustment: 0,
                averagePerAcre: 0.7281596440678652,
                method: null,
                totalAcres: 25.76358104,
                unadjusted: 18.76,
              },
              '2016': {
                adjusted: 22.980454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.8919743924486107,
                method: null,
                totalAcres: 25.76358104,
                unadjusted: 27.12,
              },
              '2017': {
                adjusted: 19.66,
                adjustment: 0,
                averagePerAcre: 0.7630926760327414,
                method: null,
                totalAcres: 25.76358104,
                unadjusted: 19.66,
              },
              '2018': {
                adjusted: 26.58,
                adjustment: 0,
                averagePerAcre: 1.031688877362679,
                method: null,
                totalAcres: 25.76358104,
                unadjusted: 26.58,
              },
              '2019': {
                adjusted: 27.12,
                adjustment: 0,
                averagePerAcre: 1.0526486965416046,
                method: null,
                totalAcres: 25.76358104,
                unadjusted: 27.12,
              },
            },
            {
              '2015': {
                adjusted: 169.96,
                adjustment: 0,
                averagePerAcre: 0.9793803674200998,
                method: null,
                totalAcres: 173.5382959,
                unadjusted: 169.96,
              },
              '2016': {
                adjusted: 165.73045454545453,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.9550079634350871,
                method: null,
                totalAcres: 173.5382959,
                unadjusted: 169.87,
              },
              '2017': {
                adjusted: 125.74,
                adjustment: 0,
                averagePerAcre: 0.7245662944187065,
                method: null,
                totalAcres: 173.5382959,
                unadjusted: 125.74,
              },
              '2018': {
                adjusted: 166.48,
                adjustment: 0,
                averagePerAcre: 0.9593271567904108,
                method: null,
                totalAcres: 173.5382959,
                unadjusted: 166.48,
              },
              '2019': {
                adjusted: 169.96,
                adjustment: 0,
                averagePerAcre: 0.9793803674200998,
                method: null,
                totalAcres: 173.5382959,
                unadjusted: 169.96,
              },
            },
            {
              '2016': {
                adjusted: 16.670454545454547,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.1255275198786274,
                method: null,
                totalAcres: 132.8031858,
                unadjusted: 20.81,
              },
              '2017': {
                adjusted: 67.13,
                adjustment: 0,
                averagePerAcre: 0.5054848616440345,
                method: null,
                totalAcres: 132.8031858,
                unadjusted: 67.13,
              },
              '2018': {
                adjusted: 67.13,
                adjustment: 0,
                averagePerAcre: 0.5054848616440345,
                method: null,
                totalAcres: 132.8031858,
                unadjusted: 67.13,
              },
              '2019': {
                adjusted: 67.13,
                adjustment: 0,
                averagePerAcre: 0.5054848616440345,
                method: null,
                totalAcres: 132.8031858,
                unadjusted: 67.13,
              },
            },
            {
              '2015': {
                adjusted: 345.32,
                adjustment: 0,
                averagePerAcre: 1.2268486593266654,
                method: null,
                totalAcres: 281.4691098,
                unadjusted: 345.32,
              },
              '2016': {
                adjusted: 333.26045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 1.184003654192303,
                method: null,
                totalAcres: 281.4691098,
                unadjusted: 337.4,
              },
              '2017': {
                adjusted: 345.32,
                adjustment: 0,
                averagePerAcre: 1.2268486593266654,
                method: null,
                totalAcres: 281.4691098,
                unadjusted: 345.32,
              },
              '2018': {
                adjusted: 345.32,
                adjustment: 0,
                averagePerAcre: 1.2268486593266654,
                method: null,
                totalAcres: 281.4691098,
                unadjusted: 345.32,
              },
              '2019': {
                adjusted: 345.32,
                adjustment: 0,
                averagePerAcre: 1.2268486593266654,
                method: null,
                totalAcres: 281.4691098,
                unadjusted: 345.32,
              },
            },
            {
              '2016': {
                adjusted: 37.750454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.8337810249991937,
                method: null,
                totalAcres: 45.27622171,
                unadjusted: 41.89,
              },
              '2017': {
                adjusted: 42.97,
                adjustment: 0,
                averagePerAcre: 0.9490632914386795,
                method: null,
                totalAcres: 45.27622171,
                unadjusted: 42.97,
              },
              '2018': {
                adjusted: 42.43,
                adjustment: 0,
                averagePerAcre: 0.9371365011808976,
                method: null,
                totalAcres: 45.27622171,
                unadjusted: 42.43,
              },
              '2019': {
                adjusted: 42.97,
                adjustment: 0,
                averagePerAcre: 0.9490632914386795,
                method: null,
                totalAcres: 45.27622171,
                unadjusted: 42.97,
              },
            },
            {
              '2015': {
                adjusted: 19.62,
                adjustment: 0,
                averagePerAcre: 0.8182258536095761,
                method: null,
                totalAcres: 23.97870944,
                unadjusted: 19.62,
              },
              '2016': {
                adjusted: 15.420454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.6430894283130587,
                method: null,
                totalAcres: 23.97870944,
                unadjusted: 19.56,
              },
              '2017': {
                adjusted: 7.7,
                adjustment: 0,
                averagePerAcre: 0.3211181994288346,
                method: null,
                totalAcres: 23.97870944,
                unadjusted: 7.7,
              },
              '2018': {
                adjusted: 25.75,
                adjustment: 0,
                averagePerAcre: 1.0738693032847393,
                method: null,
                totalAcres: 23.97870944,
                unadjusted: 25.75,
              },
              '2019': {
                adjusted: 25.75,
                adjustment: 0,
                averagePerAcre: 1.0738693032847393,
                method: null,
                totalAcres: 23.97870944,
                unadjusted: 25.75,
              },
            },
            {
              '2015': {
                adjusted: 204.32,
                adjustment: 0,
                averagePerAcre: 1.1604516237359788,
                method: null,
                totalAcres: 176.0693818,
                unadjusted: 204.32,
              },
              '2016': {
                adjusted: 172.81045454545455,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.9814906645253784,
                method: null,
                totalAcres: 176.0693818,
                unadjusted: 176.95,
              },
              '2017': {
                adjusted: 204.32,
                adjustment: 0,
                averagePerAcre: 1.1604516237359788,
                method: null,
                totalAcres: 176.0693818,
                unadjusted: 204.32,
              },
              '2018': {
                adjusted: 204.32,
                adjustment: 0,
                averagePerAcre: 1.1604516237359788,
                method: null,
                totalAcres: 176.0693818,
                unadjusted: 204.32,
              },
              '2019': {
                adjusted: 204.32,
                adjustment: 0,
                averagePerAcre: 1.1604516237359788,
                method: null,
                totalAcres: 176.0693818,
                unadjusted: 204.32,
              },
            },
            {
              '2016': {
                adjusted: 11.630454545454546,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.1605882455915774,
                method: null,
                totalAcres: 72.42407128,
                unadjusted: 15.77,
              },
              '2017': {
                adjusted: 28.96,
                adjustment: 0,
                averagePerAcre: 0.39986705370424735,
                method: null,
                totalAcres: 72.42407128,
                unadjusted: 28.96,
              },
              '2018': {
                adjusted: 28.96,
                adjustment: 0,
                averagePerAcre: 0.39986705370424735,
                method: null,
                totalAcres: 72.42407128,
                unadjusted: 28.96,
              },
              '2019': {
                adjusted: 28.96,
                adjustment: 0,
                averagePerAcre: 0.39986705370424735,
                method: null,
                totalAcres: 72.42407128,
                unadjusted: 28.96,
              },
            },
            {
              '2015': {
                adjusted: 96.32,
                adjustment: 0,
                averagePerAcre: 0.7152517311054156,
                method: null,
                totalAcres: 134.6658747,
                unadjusted: 96.32,
              },
              '2016': {
                adjusted: 51.280454545454546,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.38079769399407126,
                method: null,
                totalAcres: 134.6658747,
                unadjusted: 55.42,
              },
              '2017': {
                adjusted: 96.32,
                adjustment: 0,
                averagePerAcre: 0.7152517311054156,
                method: null,
                totalAcres: 134.6658747,
                unadjusted: 96.32,
              },
              '2018': {
                adjusted: 31.34,
                adjustment: 0,
                averagePerAcre: 0.23272414091407523,
                method: null,
                totalAcres: 134.6658747,
                unadjusted: 31.34,
              },
              '2019': {
                adjusted: 96.32,
                adjustment: 0,
                averagePerAcre: 0.7152517311054156,
                method: null,
                totalAcres: 134.6658747,
                unadjusted: 96.32,
              },
            },
            {
              '2015': {
                adjusted: 144.6,
                adjustment: 0,
                averagePerAcre: 1.0504448306956078,
                method: null,
                totalAcres: 137.655968,
                unadjusted: 144.6,
              },
              '2016': {
                adjusted: 197.16045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 1.4322695732701871,
                method: null,
                totalAcres: 137.655968,
                unadjusted: 201.3,
              },
              '2017': {
                adjusted: 202.05,
                adjustment: 0,
                averagePerAcre: 1.4677896130155432,
                method: null,
                totalAcres: 137.655968,
                unadjusted: 202.05,
              },
              '2018': {
                adjusted: 202.05,
                adjustment: 0,
                averagePerAcre: 1.4677896130155432,
                method: null,
                totalAcres: 137.655968,
                unadjusted: 202.05,
              },
              '2019': {
                adjusted: 202.05,
                adjustment: 0,
                averagePerAcre: 1.4677896130155432,
                method: null,
                totalAcres: 137.655968,
                unadjusted: 202.05,
              },
            },
            {
              '2015': {
                adjusted: 28.75,
                adjustment: 0,
                averagePerAcre: 0.33913135124296645,
                method: null,
                totalAcres: 84.77541193,
                unadjusted: 28.75,
              },
              '2016': {
                adjusted: 1.160454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.013688574541079732,
                method: null,
                totalAcres: 84.77541193,
                unadjusted: 5.3,
              },
              '2017': {
                adjusted: 75.96,
                adjustment: 0,
                averagePerAcre: 0.8960145196666341,
                method: null,
                totalAcres: 84.77541193,
                unadjusted: 75.96,
              },
              '2018': {
                adjusted: 75.96,
                adjustment: 0,
                averagePerAcre: 0.8960145196666341,
                method: null,
                totalAcres: 84.77541193,
                unadjusted: 75.96,
              },
              '2019': {
                adjusted: 75.96,
                adjustment: 0,
                averagePerAcre: 0.8960145196666341,
                method: null,
                totalAcres: 84.77541193,
                unadjusted: 75.96,
              },
            },
            {
              '2015': {
                adjusted: 80.3,
                adjustment: 0,
                averagePerAcre: 1.0566886468050993,
                method: null,
                totalAcres: 75.99211011,
                unadjusted: 80.3,
              },
              '2016': {
                adjusted: 70.02045454545454,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.9214174266788832,
                method: null,
                totalAcres: 75.99211011,
                unadjusted: 74.16,
              },
              '2017': {
                adjusted: 80.3,
                adjustment: 0,
                averagePerAcre: 1.0566886468050993,
                method: null,
                totalAcres: 75.99211011,
                unadjusted: 80.3,
              },
              '2018': {
                adjusted: 80.3,
                adjustment: 0,
                averagePerAcre: 1.0566886468050993,
                method: null,
                totalAcres: 75.99211011,
                unadjusted: 80.3,
              },
              '2019': {
                adjusted: 72.04,
                adjustment: 0,
                averagePerAcre: 0.9479931521275137,
                method: null,
                totalAcres: 75.99211011,
                unadjusted: 72.04,
              },
            },
            {
              '2015': {
                adjusted: 17.64,
                adjustment: 0,
                averagePerAcre: 1.0216080332486712,
                method: null,
                totalAcres: 17.26689633,
                unadjusted: 17.64,
              },
              '2016': {
                adjusted: 16.260454545454547,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.941712641038052,
                method: null,
                totalAcres: 17.26689633,
                unadjusted: 20.4,
              },
              '2017': {
                adjusted: 20.4,
                adjustment: 0,
                averagePerAcre: 1.1814514670222729,
                method: null,
                totalAcres: 17.26689633,
                unadjusted: 20.4,
              },
              '2018': {
                adjusted: 20.4,
                adjustment: 0,
                averagePerAcre: 1.1814514670222729,
                method: null,
                totalAcres: 17.26689633,
                unadjusted: 20.4,
              },
              '2019': {
                adjusted: 4.34,
                adjustment: 0,
                averagePerAcre: 0.2513480081802286,
                method: null,
                totalAcres: 17.26689633,
                unadjusted: 4.34,
              },
            },
            {
              '2016': {
                adjusted: 4.810454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.07445145191011768,
                method: null,
                totalAcres: 64.6119642,
                unadjusted: 8.95,
              },
              '2017': {
                adjusted: 26.67,
                adjustment: 0,
                averagePerAcre: 0.41277185007788386,
                method: null,
                totalAcres: 64.6119642,
                unadjusted: 26.67,
              },
              '2018': {
                adjusted: 26.67,
                adjustment: 0,
                averagePerAcre: 0.41277185007788386,
                method: null,
                totalAcres: 64.6119642,
                unadjusted: 26.67,
              },
              '2019': {
                adjusted: 26.67,
                adjustment: 0,
                averagePerAcre: 0.41277185007788386,
                method: null,
                totalAcres: 64.6119642,
                unadjusted: 26.67,
              },
            },
            {
              '2016': {
                adjusted: 47.17045454545455,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.666129114719073,
                method: null,
                totalAcres: 70.81278014,
                unadjusted: 51.31,
              },
              '2017': {
                adjusted: 63.43,
                adjustment: 0,
                averagePerAcre: 0.8957422639613369,
                method: null,
                totalAcres: 70.81278014,
                unadjusted: 63.43,
              },
              '2018': {
                adjusted: 41.83,
                adjustment: 0,
                averagePerAcre: 0.5907125792448797,
                method: null,
                totalAcres: 70.81278014,
                unadjusted: 41.83,
              },
              '2019': {
                adjusted: 63.43,
                adjustment: 0,
                averagePerAcre: 0.8957422639613369,
                method: null,
                totalAcres: 70.81278014,
                unadjusted: 63.43,
              },
            },
            {
              '2015': {
                adjusted: 346.54,
                adjustment: 0,
                averagePerAcre: 1.1132791037115162,
                method: null,
                totalAcres: 311.2786352,
                unadjusted: 346.54,
              },
              '2016': {
                adjusted: 342.4004545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 1.099980582751715,
                method: null,
                totalAcres: 311.2786352,
                unadjusted: 346.54,
              },
              '2017': {
                adjusted: 346.54,
                adjustment: 0,
                averagePerAcre: 1.1132791037115162,
                method: null,
                totalAcres: 311.2786352,
                unadjusted: 346.54,
              },
              '2018': {
                adjusted: 346.54,
                adjustment: 0,
                averagePerAcre: 1.1132791037115162,
                method: null,
                totalAcres: 311.2786352,
                unadjusted: 346.54,
              },
              '2019': {
                adjusted: 346.54,
                adjustment: 0,
                averagePerAcre: 1.1132791037115162,
                method: null,
                totalAcres: 311.2786352,
                unadjusted: 346.54,
              },
            },
            {
              '2015': {
                adjusted: 45.09,
                adjustment: 0,
                averagePerAcre: 0.8352200442888015,
                method: null,
                totalAcres: 53.98577334,
                unadjusted: 45.09,
              },
              '2016': {
                adjusted: 30.500454545454545,
                adjustment: -4.139545454545455,
                averagePerAcre: 0.5649720779836577,
                method: null,
                totalAcres: 53.98577334,
                unadjusted: 34.64,
              },
              '2017': {
                adjusted: 29.21,
                adjustment: 0,
                averagePerAcre: 0.5410684740225303,
                method: null,
                totalAcres: 53.98577334,
                unadjusted: 29.21,
              },
              '2018': {
                adjusted: 45.09,
                adjustment: 0,
                averagePerAcre: 0.8352200442888015,
                method: null,
                totalAcres: 53.98577334,
                unadjusted: 45.09,
              },
              '2019': {
                adjusted: 20.79,
                adjustment: 0,
                averagePerAcre: 0.3851014575463336,
                method: null,
                totalAcres: 53.98577334,
                unadjusted: 20.79,
              },
            },
            {
              '2017': {
                adjusted: 22.33,
                adjustment: 0,
                averagePerAcre: 0.49065694214871464,
                method: null,
                totalAcres: 45.51041284,
                unadjusted: 22.33,
              },
              '2018': {
                adjusted: 39.26,
                adjustment: 0,
                averagePerAcre: 0.8626597200518825,
                method: null,
                totalAcres: 45.51041284,
                unadjusted: 39.26,
              },
              '2019': {
                adjusted: 41.95,
                adjustment: 0,
                averagePerAcre: 0.9217670722408678,
                method: null,
                totalAcres: 45.51041284,
                unadjusted: 41.95,
              },
            },
          ],
        }
      );
    });
  });
  describe('Misc. adjustment tests', () => {
    it('should adjust quantification correctly #1', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 50,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: -50,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 50,
                adjustment: 0,
                adjusted: 50,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: -50,
                adjustment: 50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
          ],
        }
      );
    });
    it('should adjust quantification correctly #2', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: -50,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 50,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: -50,
                adjustment: 50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 50,
                adjustment: -50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
          ],
        }
      );
    });
    it('should adjust quantification correctly #3', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: -50,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: -50,
                adjustment: 50,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -25,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -25,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
          ],
        }
      );
    });
    it('should adjust quantification correctly #4', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: -60,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: -60,
                adjustment: 60,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -20,
                adjusted: 5,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -20,
                adjusted: 5,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -20,
                adjusted: 5,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
          ],
        }
      );
    });
    it('should adjust quantification correctly #5', () => {
      expect(
        getAdjustedGrandfatheredTonnesPerYear({
          unadjustedGrandfatheredTonnesPerYearForProject: [
            {
              '2015': {
                amount: 10,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: -10,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 10,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: -11,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: -60,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 10,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 10,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 5,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2016': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2017': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2018': {
                amount: 0,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
              '2019': {
                amount: 25,
                method: null,
                averagePerAcre: null,
                totalAcres: null,
              },
            },
          ],
        })
      ).toStrictEqual<ReturnType<typeof getAdjustedGrandfatheredTonnesPerYear>>(
        {
          adjustedGrandfatheredTonnesPerYear: [
            {
              '2015': {
                unadjusted: 10,
                adjustment: 0,
                adjusted: 10,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: -10,
                adjustment: 10,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 10,
                adjustment: 0,
                adjusted: 10,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: -11,
                adjustment: 11,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: -60,
                adjustment: 60,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 10,
                adjustment: 0,
                adjusted: 10,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 10,
                adjustment: -10,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 5,
                adjustment: -5,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -22,
                adjusted: 3,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -22,
                adjusted: 3,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
            {
              '2015': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2016': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2017': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2018': {
                unadjusted: 0,
                adjustment: 0,
                adjusted: 0,
                averagePerAcre: 0,
                method: null,
                totalAcres: null,
              },
              '2019': {
                unadjusted: 25,
                adjustment: -22,
                adjusted: 3,
                averagePerAcre: Infinity,
                method: null,
                totalAcres: null,
              },
            },
          ],
        }
      );
    });
    it('should adjust quantification correctly #6', () => {});
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
          totalAcres: 119.00674210689633,
        },
        '2016': {
          amount: 43.28736522204999,
          method: 'somsc',
          averagePerAcre: 0.3637387634993625,
          totalAcres: 119.00674210689633,
        },
        '2017': {
          amount: 105.228401624067,
          method: 'somsc',
          averagePerAcre: 0.8842221857442908,
          totalAcres: 119.00674210689633,
        },
        '2018': {
          amount: 129.19400878679176,
          method: 'somsc',
          averagePerAcre: 1.0856024331020242,
          totalAcres: 119.00674210689633,
        },
        '2019': {
          amount: 97.87182257764748,
          method: 'somsc',
          averagePerAcre: 0.8224056960548952,
          totalAcres: 119.00674210689633,
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
          totalAcres: 145.00687675458755,
        },
        '2016': {
          amount: 41.83170673686091,
          method: 'somsc',
          averagePerAcre: 0.2884808477577081,
          totalAcres: 145.00687675458755,
        },
        '2017': {
          amount: 104.21847600750455,
          method: 'somsc',
          averagePerAcre: 0.7187140247416398,
          totalAcres: 145.00687675458755,
        },
        '2018': {
          amount: 130.58907298914428,
          method: 'somsc',
          averagePerAcre: 0.9005715860645407,
          totalAcres: 145.00687675458755,
        },
        '2019': {
          amount: 115.54440824672093,
          method: 'somsc',
          averagePerAcre: 0.7968201979984062,
          totalAcres: 145.00687675458755,
        },
      },
    });
  });
});
