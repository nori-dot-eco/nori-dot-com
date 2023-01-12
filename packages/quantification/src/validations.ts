import type { Output } from '@nori-dot-com/ggit';

import { SOIL_METRICS_RESULTS_NAME_SUFFIX } from './constants';

/**
 * Validates for baseline and future scenarios:
 *
 * 1. Each model run has at least three scenarios with the expected Soil Metrics result suffix
 * 2. Each result scenario has a MapUnit property
 * 3. Each result scenario MapUnit InputCrop has at least 10 years of data
 * 4. Each result scenario MapUnit has a somsc property
 * 5. Each result scenario MapUnit somsc property has at least 11 years of data
 *
 * Eleven years of data are needed to calculate a 10 year-over-year average
 *
 * @throws An error if any validation fails
 */
export const validateParsedModelRunsData = ({
  baselineScenarioName,
  futureScenarioName,
  modelRuns,
}: {
  /**
   * The data returned from Soil Metrics, after being parsed
   */
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
  baselineScenarioName: string;
  futureScenarioName: string;
}): void => {
  for (const [nModelRun, modelRun] of modelRuns.entries()) {
    const scenarioResults = Array.from(modelRun.Scenario.entries()).filter(
      ([_nScenario, scenario]) => {
        return scenario['@name'].includes(SOIL_METRICS_RESULTS_NAME_SUFFIX);
      }
    );

    if (scenarioResults.length < 2) {
      throw new Error(
        `Expected ModelRun.${nModelRun} to have at least 2 results, found ` +
          `${scenarioResults.length}`
      );
    }

    for (const [nScenario, scenario] of scenarioResults) {
      if (
        scenario['@name'].includes(SOIL_METRICS_RESULTS_NAME_SUFFIX) &&
        (scenario['@name'].includes(baselineScenarioName) ||
          scenario['@name'].includes(futureScenarioName))
      ) {
        if (!scenario?.MapUnit) {
          throw new Error(
            `Expected ModelRun.${nModelRun}.Scenario.${nScenario} to have MapUnit property`
          );
        }

        for (const [nMapUnit, mapUnit] of scenario.MapUnit.entries()) {
          if (Object.keys(mapUnit.InputCrop).length < 10) {
            throw new Error(
              `Expected ModelRun.${nModelRun}.Scenario.${nScenario}.MapUnit.${nMapUnit}.InputCrop ` +
                `to have at least 10 values`
            );
          }

          const somsc = mapUnit?.somsc;
          if (!somsc) {
            throw new Error(
              `Expected ModelRun.${nModelRun}.Scenario.${nScenario}.MapUnit.${nMapUnit} to have ` +
                `somsc property`
            );
          }

          if (Object.keys(somsc).length < 11) {
            throw new Error(
              `Expected ModelRun.${nModelRun}.Scenario.${nScenario}.MapUnit.${nMapUnit}.somsc to ` +
                `have at least 11 values`
            );
          }
        }
      }
    }
  }
};
