import { SoilMetricsClient } from '../index';

const setupTest = (): { client: SoilMetricsClient } => {
  return { client: new SoilMetricsClient() };
};

describe('SoilMetricsClient', () => {
  it('will create a soil metrics API client', () => {
    const { client } = setupTest();
    expect(client).toBeInstanceOf(SoilMetricsClient);
  });
});
