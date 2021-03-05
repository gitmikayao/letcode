import { test, expect } from '@jest/globals';
import { findErrorNums1, findErrorNums2 } from '@src/array/645-setMismatch';

test('set mismatch 1', () => {
  expect(findErrorNums1([1, 2, 2, 4])).toEqual([2, 3]);
  expect(findErrorNums1([2, 2])).toEqual([2, 1]);
  expect(findErrorNums1([1, 3, 3])).toEqual([3, 2]);
  expect(findErrorNums1([3, 2, 2])).toEqual([2, 1]);
  expect(findErrorNums1([3, 2, 3, 4, 6, 5])).toEqual([3, 1]);
  expect(findErrorNums1([1, 5, 3, 2, 2, 7, 6, 4, 8, 9])).toEqual([2, 10]);
})

test('set mismatch 2', () => {
  expect(findErrorNums2([1, 2, 2, 4])).toEqual([2, 3]);
  expect(findErrorNums2([2, 2])).toEqual([2, 1]);
  expect(findErrorNums2([1, 3, 3])).toEqual([3, 2]);
  expect(findErrorNums2([3, 2, 2])).toEqual([2, 1]);
  expect(findErrorNums2([3, 2, 3, 4, 6, 5])).toEqual([3, 1]);
  expect(findErrorNums2([1, 5, 3, 2, 2, 7, 6, 4, 8, 9])).toEqual([2, 10]);
})
