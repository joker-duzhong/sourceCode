import { describe, it, expect } from 'vitest';
import { effect, reactive } from '../src'


describe('测试一下响应式', () => {
  it('测试一下 reactive 和 effect', () => {
    const data = {
      name: "withhope"
    }
    let obj = reactive(data);
    let dummy;
    effect(() => {
      dummy = obj.name;
    })
    expect(dummy).toBe('withhope');

    obj.name = '1111';
    expect(dummy).toBe('1111');

    obj.name = '2222';
    expect(dummy).toBe('2222');
  })


})