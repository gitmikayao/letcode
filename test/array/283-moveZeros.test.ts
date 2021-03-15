import { test, expect } from '@jest/globals';
import { moveZeroes } from '@src/array/283-moveZeros';

test('first missing positive', () => {
  expect(moveZeroes([3, 0, 6, 0, 5])).toEqual([3, 6, 5, 0, 0]);
  expect(moveZeroes([0, 1])).toEqual([1, 0]);
  expect(moveZeroes([0])).toEqual([0]);
  expect(moveZeroes([3])).toEqual([3]);
})