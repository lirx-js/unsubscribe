import type { IUnsubscribe } from './unsubscribe.type.js';
import { noop } from './noop.constant.private.js';

export function unsubscribeOnce(
  unsubscribe: IUnsubscribe,
): IUnsubscribe {
  return (): void => {
    unsubscribe();
    unsubscribe = noop;
  };
}

