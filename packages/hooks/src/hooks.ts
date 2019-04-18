import { useEffect } from 'react';
import { Timeout, State, Dispatch } from 'hooks';

// I think these hooks are good candidates to move to an @nori-dot-com package
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
