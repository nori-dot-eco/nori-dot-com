import { Parser } from 'xml2js';

import type { OutputFile, MapUnit, ParsedMapUnit } from './index';

export const generateJsonData = async ({
  xmlData,
}: {
  xmlData: string;
}): Promise<{ rawJsonOutput: OutputFile<MapUnit> }> => {
  const parser = new Parser();
  return { rawJsonOutput: await parser.parseStringPromise(xmlData) };
};

export const parseYearlyMapUnitData = ({
  rawJsonOutput,
}: {
  rawJsonOutput: OutputFile<MapUnit>;
}): { parsedJsonOutput: OutputFile<ParsedMapUnit> } => {
  const {
    Day: {
      Cropland: [{ ModelRun: runs }],
    },
  } = rawJsonOutput;
  const parsedRuns = runs.map(({ Scenario: [...scenarios], ...modelRun }) => {
    const scenarioResults = scenarios.filter(
      ({ $: { name: scenarioName } }) => {
        return scenarioName.includes('FILE RESULTS');
      }
    );
    const otherResults = scenarios.filter(({ $: { name: scenarioName } }) => {
      return !scenarioName.includes('FILE RESULTS');
    });
    return {
      ...modelRun,
      Scenario: scenarioResults
        .map(({ MapUnit: mapUnits, ...rest }) => {
          return {
            MapUnit: mapUnits.map((mapUnit) => {
              return Object.entries(mapUnit).reduce(
                (parsedMapUnit, [key, value]: [keyof ParsedMapUnit, any]) => {
                  if (!['Year', '$'].includes(key)) {
                    const data = value[0].split(',').filter((e: string) => e);
                    const annualData = Array.from(
                      { length: Math.ceil(data.length / 2) },
                      (v, i) => data.slice(i * 2, i * 2 + 2)
                    ).reduce((acc, [year, annualMeasurement]) => {
                      acc[year] = Number.isNaN(Number(annualMeasurement))
                        ? annualMeasurement
                        : Number(annualMeasurement);
                      return acc;
                    }, {} as ParsedMapUnit);
                    parsedMapUnit[key] = annualData;
                  } else if (key === 'Year') {
                    const data = value[0].split(',').filter((e: string) => e);
                    parsedMapUnit[key] = data.map((y: string) => Number(y));
                  } else if (key === '$') {
                    parsedMapUnit[key] = {
                      id: Number(value.id),
                      area: Number(value.area),
                    };
                  } else {
                    parsedMapUnit[key] = Number.isNaN(Number(value))
                      ? value
                      : Number(value);
                  }
                  return parsedMapUnit;
                },
                {} as ParsedMapUnit
              );
            }),
            ...rest,
          };
        })
        .concat(...(otherResults as any)),
    };
  });
  return {
    parsedJsonOutput: {
      ...rawJsonOutput,
      Day: {
        ...rawJsonOutput.Day,
        Cropland: [{ ModelRun: parsedRuns }],
      },
    },
  };
};
