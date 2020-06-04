/* eslint graphql/template-strings: "off" */
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { requestSubscription, graphql } from 'react-relay';
import { createMockEnvironment } from 'relay-test-utils';

import { useSubscription } from '../index';

jest.mock('react-relay', () => ({
  // idea taken from https://www.npmjs.com/package/eslint-plugin-graphql#identity-template-literal-tag
  graphql: jest.fn((literals, ...substitutions): string => {
    let result = '';
    for (let i = 0; i < substitutions.length; i += 1) {
      result += literals[i];
      result += substitutions[i];
    }
    result += literals[literals.length - 1];
    return result;
  }),
  requestSubscription: jest.fn(),
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('useSubscription', () => {
  const subscription = graphql`
    subscription hooksSubscription {
      root {
        field
      }
    }
  `;
  const environment = createMockEnvironment();

  it('should request a subscription', () => {
    renderHook(() => useSubscription(subscription, environment));
    expect(requestSubscription).toHaveBeenCalledTimes(1);
    expect(requestSubscription).toHaveBeenCalledWith(environment, {
      subscription,
      onError: expect.any(Function),
    });
  });
  it('should not build a subscription when a subscription is not passed as an arg', () => {
    renderHook(() => useSubscription(null, environment));
    expect(requestSubscription).toHaveBeenCalledTimes(0);
  });
});
