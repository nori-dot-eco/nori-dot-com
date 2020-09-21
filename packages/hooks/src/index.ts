import { useEffect } from 'react';
import { requestSubscription } from 'react-relay';
import type { GraphQLSubscriptionConfig, OperationType } from 'relay-runtime';

type RequestSubscriptionParams = Parameters<typeof requestSubscription>;
type RequestSubscriptionConfig = Omit<
  RequestSubscriptionParams[1],
  'subscription'
>;

/**
 * Builds and requests relay subscription
 * @see [Relay Subscriptions Docs](https://facebook.github.io/relay/docs/en/subscriptions.html)
 * @param {string} subscription - the graphql tagged subscription query.
 * @param {Environment} relayEnvironment - an initialized relay environment
 * @param {Object} options
 * @param {Object} options.variables - an object that contains the variables needed for the subscription.
 * @param {function} options.onCompleted - a callback function executed when the subscription is closed by the peer without error.
 * @param {function} options.onNext - a callback function executed each time a response is received from the server, with the raw GraphQL response payload.
 * @param {function} options.updater - an optional function that can supply custom logic for updating the in-memory Relay store based on the server response.
 * @param {function} options.configs - an array containing the updater configurations. It is the same as configs in commitMutation
 * @param {array} options.onError - a callback function executed when Relay or the server encounters an error processing the subscription.
 * @returns An executed [requestSubscription](https://github.com/facebook/relay/blob/af5de14dc0a72ed305cae92acdcc825cfdf50caa/packages/react-relay/index.js#L62) call
 */
const buildSubscription = (
  subscription: GraphQLSubscriptionConfig<OperationType>['subscription'],
  relayEnvironment: RequestSubscriptionParams[0],
  options: RequestSubscriptionConfig = ({
    onError: (error: Error) => console.error('An error occurred:', error), // eslint-disable-line no-console
  } as unknown) as RequestSubscriptionConfig
): ReturnType<typeof requestSubscription> => {
  const subscriptionConfig = {
    subscription,
    ...options,
  };
  return requestSubscription(relayEnvironment, subscriptionConfig);
};

/**
 * A hook that creates a subscription for a component's fragment
 * @see [Relay Subscriptions Docs](https://facebook.github.io/relay/docs/en/subscriptions.html)
 * @param {string} subscription - the graphql tagged subscription query.
 * @param {Environment} relayEnvironment - an initialized relay environment
 * @param {Object} options
 * @param {Object} options.variables - an object that contains the variables needed for the subscription.
 * @param {function} options.onCompleted - a callback function executed when the subscription is closed by the peer without error.
 * @param {function} options.onNext - a callback function executed each time a response is received from the server, with the raw GraphQL response payload.
 * @param {function} options.updater - an optional function that can supply custom logic for updating the in-memory Relay store based on the server response.
 * @param {function} options.configs - an array containing the updater configurations. It is the same as configs in commitMutation
 * @param {array} options.onError - a callback function executed when Relay or the server encounters an error processing the subscription.
 * @example
 * useSubscription(graphql`subscription viewerSubscription { viewer { id } }`) // Subscribes to changes in the viewer ID. If it changes, the component will update.
 */
export const useSubscription = (
  subscription: GraphQLSubscriptionConfig<OperationType>['subscription'],
  relayEnvironment: Parameters<typeof requestSubscription>[0],
  options?: RequestSubscriptionConfig
): void => {
  if (!subscription) {
    throw new Error('You must specify a subscription');
  }
  useEffect(() => {
    const observable = buildSubscription(
      subscription,
      relayEnvironment,
      options
    );
    return () => {
      if (observable) observable.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
