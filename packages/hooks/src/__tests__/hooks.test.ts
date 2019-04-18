// useCounter.test.js

import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import { useState, useReducer } from 'react';

import {
  useDispatcher,
  useSetStateAndDispatch,
  useTimeoutMutation,
  useTimeoutMutationOnUpdate,
} from '../index';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

jest.useFakeTimers();

describe('useTimeoutMutation', () => {
  const testMutation = jest.fn(args => jest.fn(args));

  it('should call the mutation after the timeout', () => {
    const mutationArgs = { argument: 'example argument' };
    const timeoutPeriod = 100000;
    const { result } = renderHook(() =>
      useTimeoutMutation(testMutation, timeoutPeriod)
    );
    expect(setTimeout).toHaveBeenCalledTimes(0);
    act(() => {
      result.current(mutationArgs);
    });
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      timeoutPeriod
    );
    expect(testMutation).toHaveBeenCalledTimes(1);
    expect(testMutation).toHaveBeenLastCalledWith(mutationArgs);
  });
});

describe('useDispatcher', () => {
  test('should accept a dispatch function which ', () => {
    const reducer = (state, action): number =>
      action.type === 'inc' ? state + 1 : state;
    const { result } = renderHook(() => useReducer(reducer, 0));
    const [initialState, dispatch] = result.current;
    const { result: dispatcherResult } = renderHook(() =>
      useDispatcher(dispatch)
    );
    const dispatcher = dispatcherResult.current;
    expect(initialState).toBe(0);
    act(() => dispatcher({ type: 'inc' }));
    const [state] = result.current;
    expect(state).toBe(1);
  });
});
describe('useSetStateAndDispatch', () => {
  test('should accept a dispatch function which ', () => {
    const reducer = (state, action): number =>
      action.type === 'inc' ? state + 1 : state;
    const { result } = renderHook(() => useReducer(reducer, 0));
    const { result: setStateResult } = renderHook(() => useState(0));
    const [initialState, dispatch] = result.current;
    const [initialCount, setCount] = setStateResult.current;
    const { result: setAndDispatchStateResult } = renderHook(() =>
      useSetStateAndDispatch(setCount, dispatch)
    );
    const setAndDispatchState = setAndDispatchStateResult.current;
    expect(initialCount).toBe(0);
    expect(initialState).toBe(0);
    act(() => setAndDispatchState(1, { type: 'inc' }));
    const [state] = result.current;
    const [count] = setStateResult.current;
    expect(state).toBe(1);
    expect(count).toBe(1);
  });
});

describe('useTimeoutMutationOnUpdate', () => {
  const testMutation = jest.fn(args => jest.fn(args));

  it('should call the mutation after the timeout', () => {
    const mutationArgs = { argument: 'example argument' };
    const timeoutPeriod = 100000;
    expect(setTimeout).toHaveBeenCalledTimes(0);
    renderHook(() =>
      useTimeoutMutationOnUpdate(testMutation, mutationArgs, timeoutPeriod)
    );
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(2); // it is called once on mount, and then again after the timeout
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      timeoutPeriod
    );
    expect(testMutation).toHaveBeenCalledTimes(1);
    expect(testMutation).toHaveBeenLastCalledWith(mutationArgs);
  });
});
