import { describe, it, expect } from 'vitest';

function add(a, b) {
  return a + b;
}

describe('学习vitest测试', () => {
  it("test add", () => {
    expect(add(1, 2)).toBe(3)
  })
})