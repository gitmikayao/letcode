import { test, expect } from '@jest/globals';
import { findShortestSubArray } from '@src/array/697-degreeOfAnArray';

test('degree of an array', () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2);
  expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6);
})
