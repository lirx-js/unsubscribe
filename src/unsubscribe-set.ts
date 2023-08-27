import { IUnsubscribe } from './unsubscribe.type';

export type IUnsubscribeSet = Set<IUnsubscribe>;

export function unsubscribeSet(): IUnsubscribeSet {
  return new Set<IUnsubscribe>();
}

export function cleanUnsubscribeSet(
  set: IUnsubscribeSet,
): void {
  const iterator: Iterator<IUnsubscribe> = set.values();
  let result: IteratorResult<IUnsubscribe>;
  while (!(result = iterator.next()).done) {
    result.value();
  }
  set.clear();
}


