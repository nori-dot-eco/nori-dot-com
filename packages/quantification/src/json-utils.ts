import type { Output } from '@nori-dot-com/ggit';

/**
 * Parses the output of a Soil Metrics response:
 * 1. Separates scenarios in to results and others, denoted by presence of `FILE RESULTS` being
 *    present in the name property
 * 2. For each scenario result, transforms the following properties and filters out empty values:
 *     1. `@area`, `@id` are copied without transformation
 *     2. `Year` is split by `,`
 *     3. Any other property that also contains a `,` character is assumed to be an annual data
 *        property and is split by the `,` character, then transformed in to a
 *        `{ [year: number]: number }`.
 *     4. Any other properties are parsed as numbers
 *
 *
 * Other notes:
 * * Handles Soil Metrics weirdness where sometimes Scenario and MapUnit are objects instead of
 *   arrays
 * * If properties can't be parsed as numbers, they are defaulted to their string values
 *
 * @todo Refactor assignment of `parsedMapUnit` property to return new shallow copy
 * @returns A shallow copy of the original object with parsed fields
 */
export const parseYearlyMapUnitData = ({
  rawJsonOutput,
}: {
  /**
   * The response from Soil Metrics
   *
   */
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
