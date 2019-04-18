export namespace Timeout {
  export type Timer = () => void;
  export type MutationHook = (mutationArgs: any) => Timer;
}
export namespace State {
  export type DispatchHook = (newState: any, dispatchArgs: any) => void;
}
export type Dispatch = (value: any) => any;
