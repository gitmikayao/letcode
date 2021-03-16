import { test, expect } from '@jest/globals';
import { hIndex } from '@src/array/274-HIndex';

test('h index', () => {
  expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  expect(hIndex([1, 0, 0])).toBe(1);
  expect(hIndex([100])).toBe(1);
  expect(hIndex([5, 100])).toBe(2);
  expect(hIndex([0, 1])).toBe(1);
  expect(hIndex([0])).toBe(0);
})