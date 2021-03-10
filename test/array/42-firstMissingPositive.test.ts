import { test, expect } from '@jest/globals';
import { firstMissingPositive } from '@src/array/42-firstMissingPositive';

test('first missing positive', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
  expect(firstMissingPositive([])).toBe(1);
  expect(firstMissingPositive([1, 2, 3])).toBe(4);
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive([7, 8, 9, 10])).toBe(1);
})