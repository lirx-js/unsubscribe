import { IUnsubscribe } from './unsubscribe.type';
import { noop } from './noop.constant.private';

export function unsubscribeOnce(
  unsubscribe: IUnsubscribe,
): IUnsubscribe {
  return (): void => {
    unsubscribe();
    unsubscribe = noop;
  };
}

