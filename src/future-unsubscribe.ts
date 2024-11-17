import type { IUnsubscribe } from './unsubscribe.type.js';
import { noop } from './noop.constant.private.js';

export interface IRunning {
  (): boolean;
}

export interface IFutureUnsubscribeFunction {
  (
    unsubscribe: IUnsubscribe,
    running: IRunning,
  ): IUnsubscribe;
}

export function futureUnsubscribe(
  callback: IFutureUnsubscribeFunction,
): IUnsubscribe {
  let unsubscribeResult: IUnsubscribe | undefined;

  let unsubscribeRef: IUnsubscribe = (): void => {
    unsubscribeRef = noop;

    if (unsubscribeResult !== void 0) {
      unsubscribeResult();
    }
  };

  const unsubscribe: IUnsubscribe = (): void => {
    unsubscribeRef();
  };

  const running: IRunning = (): boolean => {
    return unsubscribeRef !== noop;
  };

  unsubscribeResult = callback(
    unsubscribe,
    running,
  );

  if (!running()) {
    unsubscribe();
  }

  return unsubscribe;
}

