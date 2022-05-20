import type { Output } from '@nori-dot-com/ggit';

export const parseYearlyMapUnitData = ({
  rawJsonOutput,
}: {
  rawJsonOutput: Output.OutputFile<Output.MapUnit>;
}): { parsedJsonOutput: Output.OutputFile<Output.ParsedMapUnit> } => {
  const {
    Day: {
      Cropland: { ModelRun: runs },
    },
  } = rawJsonOutput;
  const parsedRuns = (Array.isArray(runs) ? runs : [runs]).map(
    ({ Scenario: [...scenarios], ...modelRun }) => {
      const scenarioResults = scenarios.filter(({ '@name': scenarioName }) => {
        return scenarioName.includes('FILE RESULTS');
      });
      const otherResults = scenarios.filter(({ '@name': scenarioName }) => {
        return !scenarioName.includes('FILE RESULTS');
      });
      return {
        ...modelRun,
        Scenario: scenarioResults
          .map(({ MapUnit: mapUnits, ...rest }) => {
            return {
              MapUnit: (Array.isArray(mapUnits) ? mapUnits : [mapUnits]).map(
                (mapUnit) => {
                  return Object.entries(mapUnit).reduce(
                    (
                      parsedMapUnit,
                      [key, value]: [keyof Output.ParsedMapUnit, any]
                    ) => {
                      if (
                        !['Year', '@area', '@id'].includes(key) &&
                        value.includes(',')
                      ) {
                        const data = value.split(',').filter(Boolean);
                        const annualData = Array.from(
                          { length: Math.ceil(data.length / 2) },
                          (v, index) => data.slice(index * 2, index * 2 + 2)
                        ).reduce((accumulator, [year, annualMeasurement]) => {
                          accumulator[year] = Number.isNaN(
                            Number(annualMeasurement)
                          )
                            ? annualMeasurement
                            : Number(annualMeasurement);
                          return accumulator;
                        }, {} as Output.ParsedMapUnit);
                        parsedMapUnit[key] = annualData;
                      } else if (key === 'Year') {
                        const data = value.split(',').filter(Boolean);
                        parsedMapUnit[key] = data.map(Number);
                      } else if (key === '@area') {
                        parsedMapUnit[key] = value;
                      } else if (key === '@id') {
                        parsedMapUnit[key] = value;
                      } else {
                        parsedMapUnit[key] = Number.isNaN(Number(value))
                          ? value
                          : Number(value);
                      }
                      return parsedMapUnit;
                    },
                    {} as Output.ParsedMapUnit
                  );
                }
              ),
              ...rest,
            };
          })
          .concat(...(otherResults as any)),
      };
    }
  );
  return {
    parsedJsonOutput: {
      ...rawJsonOutput,
      Day: {
        ...rawJsonOutput.Day,
        Cropland: { ModelRun: parsedRuns },
      },
    },
  };
};
