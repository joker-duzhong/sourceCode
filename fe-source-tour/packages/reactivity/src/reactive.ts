import { getActiveEffect } from './effect';

let bucket = new Set<Function>();
export function reactive(data: object): any {
  return new Proxy(data, {
    get(target, key) {
      // 需要知道 effect 干了啥
      bucket.add(getActiveEffect());
      return target[key];
    },
    set(target, key, val) {
      target[key] = val;
      bucket.forEach(fn => fn())
      return true;
    }
  })
}