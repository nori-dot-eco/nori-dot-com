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
                  return Object.entries(mapUnit).reduce<Output.ParsedMapUnit>(
                    (
                      parsedMapUnit,
                      [key, value]: [keyof Output.ParsedMapUnit, string]
                    ) => {
                      if (
                        !['Year', '@area', '@id'].includes(key) &&
                        value.includes(',')
                      ) {
                        const data = value.split(',').filter(Boolean);
                        const yearValueTuples = Array.from(
                          { length: Math.ceil(data.length / 2) },
                          (_, index) => data.slice(index * 2, index * 2 + 2)
                        );

                        const annualData = yearValueTuples.reduce<
                          Record<string, any>
                        >((accumulator, [year, providedValue]) => {
                          if (!Number.isNaN(Number(providedValue))) {
                            accumulator[year] = Number(providedValue);
                          } else if (
                            providedValue.toLowerCase() === 'true' ||
                            providedValue.toLowerCase() === 'false'
                          ) {
                            accumulator[year] =
                              providedValue.toLowerCase() === 'true';
                          } else {
                            accumulator[year] =
                              typeof accumulator[year] === 'string'
                                ? (accumulator[year] as string)
                                    .concat(', ')
                                    .concat(providedValue)
                                : providedValue;
                          }
                          return accumulator;
                        }, {});
                        // @ts-expect-error - the keys we are setting here all have values of type Record<string, any>
                        parsedMapUnit[key] = annualData;
                      } else if (key === 'Year') {
                        const data = value.split(',').filter(Boolean);
                        parsedMapUnit[key] = data.map(Number);
                      } else if (key === '@area') {
                        parsedMapUnit[key] = value;
                      } else if (key === '@id') {
                        parsedMapUnit[key] = value;
                      } else {
                        // @ts-expect-error - this statement is intended to handle results of both string and number types
                        parsedMapUnit[key] = Number.isNaN(Number(value))
                          ? value
                          : Number(value);
                      }
                      return parsedMapUnit;
                    },
                    {}
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
