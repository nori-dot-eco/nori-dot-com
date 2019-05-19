export namespace Timeout {
  export type Timer = () => void;
  export type MutationHook = (mutationArgs: any) => Timer;
}
export namespace State {
  export type DispatchHook = (newState: any, dispatchArgs: any) => void;
}
export type Dispatch = (value: any) => any;

export namespace Subscription {
  export interface Options {
    variables?: object;
    onCompleted?: Function;
    onNext?: Function;
    updater?: Function;
    configs?: object[];
    onError?: Function;
  }
}
