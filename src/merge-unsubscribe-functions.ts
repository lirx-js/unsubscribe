import type { IUnsubscribe } from './unsubscribe.type.js';

export function mergeUnsubscribeFunctions(
  unsubscribeFunctions: IUnsubscribe[],
): IUnsubscribe {
  return (): void => {
    for (let i = 0, l = unsubscribeFunctions.length; i < l; i++) {
      unsubscribeFunctions[i]();
    }
  };
}

