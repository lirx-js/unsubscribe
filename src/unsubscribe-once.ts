import { noop } from '../misc/noop';
import { IUnsubscribe } from './unsubscribe.type';

export function unsubscribeOnce(
  unsubscribe: IUnsubscribe,
): IUnsubscribe {
  return (): void => {
    unsubscribe();
    unsubscribe = noop;
  };
}

