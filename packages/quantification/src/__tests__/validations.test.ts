import type { Output } from '@nori-dot-com/ggit';

import { SOIL_METRICS_RESULTS_NAME_SUFFIX } from '../constants';
import { validateParsedModelRunsData } from '../validations';

import { PARSED_SOIL_METRICS_OUTPUT } from './test-fixtures/parsed-model-runs';

// Solving some type uncertainty with model runs being an object or an array
const mockModelRuns = Array.isArray(
  PARSED_SOIL_METRICS_OUTPUT.Day.Cropland.ModelRun
)
  ? PARSED_SOIL_METRICS_OUTPUT.Day.Cropland.ModelRun
  : [PARSED_SOIL_METRICS_OUTPUT.Day.Cropland.ModelRun];

describe('validations', () => {
  describe('validateElevenYearsOfModelRuns', () => {
    describe('throws an error', () => {
      it('when the input does not have 2 scenario results', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: [
              {
                ...mockModelRuns[0],
                Scenario: [
                  {
                    '@name': `Baseline${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                  },
                ],
              },
            ],
          })
        ).toThrow('Expected ModelRun.0 to have 3 results');
      });

      it('when the input does not have a MapUnit property', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: [
              {
                ...mockModelRuns[0],
                Scenario: [
                  {
                    '@name': `Baseline${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                  },
                  {
                    '@name': `Current${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [],
                  },
                  {
                    '@name': `Future${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [],
                  },
                ],
              },
            ],
          })
        ).toThrow(
          'Expected ModelRun.0.Scenario.0 \\"Baseline : FILE RESULTS\\" to have MapUnit property'
        );
      });

      it('when the input crop does not have 10 values', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: [
              {
                ...mockModelRuns[0],
                Scenario: [
                  {
                    '@name': `Baseline${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {},
                      },
                    ],
                  },
                  {
                    '@name': `Current${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                      },
                    ],
                  },
                  {
                    '@name': `Future${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                      },
                    ],
                  },
                ],
              } as Output.ModelRun<Output.ParsedMapUnit>,
            ],
          })
        ).toThrow(
          'Expected ModelRun.0.Scenario.0(\\"Baseline : FILE RESULTS\\").MapUnit.0.InputCrop values to span at least 10 years'
        );
      });

      it('when the input does not have a somsc property', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: [
              {
                ...mockModelRuns[0],
                Scenario: [
                  {
                    '@name': `Baseline${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                      },
                    ],
                  },
                  {
                    '@name': `Current${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                        somsc: {
                          2000: 0,
                          2001: 1,
                          2002: 2,
                          2003: 3,
                          2004: 4,
                          2005: 5,
                          2006: 6,
                          2007: 7,
                          2008: 8,
                          2009: 9,
                          2010: 10,
                        },
                      },
                    ],
                  },
                  {
                    '@name': `Future${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                        somsc: {},
                      },
                    ],
                  },
                ],
              } as unknown as Output.ModelRun<Output.ParsedMapUnit>,
            ],
          })
        ).toThrow(
          'Expected ModelRun.0.Scenario.0(\\"Baseline : FILE RESULTS\\").MapUnit.0 to have somsc property'
        );
      });

      it('when the input does not have 11 values in the somsc property', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: [
              {
                ...mockModelRuns[0],
                Scenario: [
                  {
                    '@name': `Baseline${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                        somsc: {
                          2000: 0,
                          2001: 1,
                          2002: 2,
                          2003: 3,
                          2004: 4,
                          2005: 5,
                          2006: 6,
                          2007: 7,
                          2008: 8,
                          2009: 9,
                          2010: 10,
                        },
                      },
                    ],
                  },
                  {
                    '@name': `Current${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                        somsc: {
                          2000: 0,
                          2001: 1,
                          2002: 2,
                          2003: 3,
                          2004: 4,
                          2005: 5,
                          2006: 6,
                          2007: 7,
                          2008: 8,
                          2009: 9,
                          2010: 10,
                        },
                      },
                    ],
                  },
                  {
                    '@name': `Future${SOIL_METRICS_RESULTS_NAME_SUFFIX}`,
                    MapUnit: [
                      {
                        InputCrop: {
                          2000: 'Corn',
                          2001: 'Soybean',
                          2002: 'Corn',
                          2003: 'Soybean',
                          2004: 'Corn',
                          2005: 'Soybean',
                          2006: 'Corn',
                          2007: 'Soybean',
                          2008: 'Corn',
                          2009: 'Soybean',
                        },
                        somsc: {},
                      },
                    ],
                  },
                ],
              } as unknown as Output.ModelRun<Output.ParsedMapUnit>,
            ],
          })
        ).toThrow(
          'Expected ModelRun.0.Scenario.2(\\"Future : FILE RESULTS\\").MapUnit.0.somsc to have at least 11 values'
        );
      });
    });

    describe('does not throw an error', () => {
      it('with valid input', () => {
        expect(() =>
          validateParsedModelRunsData({
            baselineScenarioName: 'Baseline',
            futureScenarioName: 'Future',
            modelRuns: mockModelRuns,
          })
        ).not.toThrow();
      });
    });
  });
});
