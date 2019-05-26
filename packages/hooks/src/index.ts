import { useEffect } from 'react';
import { requestSubscription, Environment } from 'react-relay';
import { Dispatch, State, Timeout, Subscription } from 'index';

/**
 * A hook for invoking a reducer's dispatch function with the given arguments
 * @param {Function} dispatchFunc The reducer's dispatch function to invoke
 * @returns {Function} A function that can be used to dispatch the input
 * @example
 * const dispatch = useDispatcher(dispatchFunc);
 * <TextField onChange={e => dispatch(e.target.value) />
 */
export const useDispatcher = (dispatchFunc): Dispatch => (value: any) =>
  dispatchFunc(value);

/**
 * A hook for setting state and dispatching a value
 * @param {Function} setStateFunc
 * @param {Function} dispatchFunc
 * @returns {Function} A function which will call the setState and dispatch functions
 * it was passed
 * @example
 * const [reducerState, dispatch] = useReducer(reducerFunction, { valueToReduce: null });
 * const [state, setState] = useState();
 * const setAndDispatchState = useSetStateAndDispatch(setState,dispatch);
 */
export const useSetStateAndDispatch = (
  setStateFunc: Function,
  dispatchFunc: Function
): State.DispatchHook => {
  const dispatch = useDispatcher(dispatchFunc);
  return (newState, dispatchArgs) => {
    setStateFunc(newState);
    dispatch(dispatchArgs);
  };
};

/**
 * A hook that returns a mutation that will execute after a given time period
 * unless it is reset with a new timeout
 * @param {Function} mutation The mutation to execute
 * @param {Number} timeoutPeriod The period of time after which to execute the mutation
 * @returns {Function} A mutation that when called will execute after the time period specified
 * @example
 * const updateDatastoreOnTimeout = useTimeoutMutation(mutation, 5000);
 * updateDatastoreOnTimeout({argument: 'example argument'}) // will execute after 5 seconds
 */
export const useTimeoutMutation = (
  mutation: Function,
  timeoutPeriod: number
): Timeout.MutationHook => (mutationArgs: any) => {
  const timeoutMutation = setTimeout(
    () => mutation(mutationArgs),
    timeoutPeriod
  );
  return () => {
    clearTimeout(timeoutMutation);
  };
};

/**
 * A hook that will call the given function(i.e., a mutation) after the specified time period.
 * If the component updates, the timeout will be reset without invoking the mutation.
 * @param {Function} mutation The mutation to execute
 * @param {*} mutationArgs The arguments to call the mutation with
 * @param {Number} timeoutPeriod The period of time after which to execute the mutation
 * @example
 * useTimeoutMutationOnUpdate(console.log, "Hello, world!", 5000); // will log "Hello, world!" after 5 seconds
 */
export const useTimeoutMutationOnUpdate = (
  mutation: Function,
  mutationArgs: any,
  timeoutPeriod: number
): void => {
  const updateDatastoreOnTimeout = useTimeoutMutation(mutation, timeoutPeriod);
  useEffect(() => updateDatastoreOnTimeout(mutationArgs));
};

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
  subscription,
  relayEnvironment,
  options: Subscription.Options = {
    onError: error => console.error('An error occurred:', error), // eslint-disable-line no-console
  }
): any => {
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
  subscription: string,
  relayEnvironment: Environment,
  options?: Subscription.Options
): void => {
  if (!subscription) {
    throw new Error('You must specify a subscription');
  }
  useEffect(() => {
    buildSubscription(subscription, relayEnvironment, options);
  }, [options, relayEnvironment, subscription]);
};
