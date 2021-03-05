import { test, expect } from '@jest/globals';
import thirdMax from '@src/array/414-thirdMaximumNumber';

test('third maximum number', () => {
  expect(thirdMax([3, 2, 1])).toBe(1);
  expect(thirdMax([2, 1])).toBe(2);
  expect(thirdMax([2, 2, 3, 1])).toBe(1);
  expect(thirdMax([1, 2, 2, 5, 3, 5])).toBe(2);
})