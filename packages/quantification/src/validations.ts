import type { Output } from '@nori-dot-com/ggit';
import { ContextualError } from '@nori-dot-com/errors';

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
   *
   */
  modelRuns: Output.ModelRun<Output.ParsedMapUnit>[];
  baselineScenarioName: string;
  futureScenarioName: string;
}): void => {
  for (const [modelRunIndex, modelRun] of modelRuns.entries()) {
    const scenarioResults = Array.from(modelRun.Scenario.entries()).filter(
      ([_, scenario]) => {
        return scenario['@name'].includes(SOIL_METRICS_RESULTS_NAME_SUFFIX);
      }
    );

    if (scenarioResults.length !== 3) {
      throw new ContextualError({
        errorKey: 'quantificationError:insufficientData',
        context: {
          message:
            `Expected ModelRun.${modelRunIndex} to have 3 results, found ` +
            `${scenarioResults.length}`,
        },
      });
    }

    for (const [scenarioIndex, scenario] of scenarioResults) {
      if (
        scenario['@name'].includes(SOIL_METRICS_RESULTS_NAME_SUFFIX) &&
        (scenario['@name'].includes(baselineScenarioName) ||
          scenario['@name'].includes(futureScenarioName))
      ) {
        if (!scenario?.MapUnit) {
          throw new ContextualError({
            errorKey: 'quantificationError:schema',
            context: {
              message:
                `Expected ModelRun.${modelRunIndex}.Scenario.${scenarioIndex} "${scenario['@name']}" to have ` +
                `MapUnit property`,
            },
          });
        }

        for (const [mapUnitIndex, mapUnit] of scenario.MapUnit.entries()) {
          const inputCropYears = Object.keys(mapUnit.InputCrop)
            .map(Number)
            .sort();
          if (
            inputCropYears.length === 0 ||
            inputCropYears.at(-1) - inputCropYears[0] + 1 < 10
          ) {
            throw new ContextualError({
              errorKey: 'quantificationError:insufficientData',
              context: {
                message:
                  `Expected ModelRun.${modelRunIndex}.Scenario.${scenarioIndex}("${scenario['@name']}").` +
                  `MapUnit.${mapUnitIndex}.InputCrop values to span at least 10 years`,
              },
            });
          }

          const somsc = mapUnit?.somsc;
          if (!somsc) {
            throw new ContextualError({
              errorKey: 'quantificationError:schema',
              context: {
                message:
                  `Expected ModelRun.${modelRunIndex}.Scenario.${scenarioIndex}("${scenario['@name']}").` +
                  `MapUnit.${mapUnitIndex} to have somsc property`,
              },
            });
          }

          if (Object.keys(somsc).length < 11) {
            throw new ContextualError({
              errorKey: 'quantificationError:insufficientData',
              context: {
                message:
                  `Expected ModelRun.${modelRunIndex}.Scenario.${scenarioIndex}("${scenario['@name']}").` +
                  `MapUnit.${mapUnitIndex}.somsc to have at least 11 values`,
              },
            });
          }
        }
      }
    }
  }
};
