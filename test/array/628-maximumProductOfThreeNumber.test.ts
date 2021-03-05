import { test, expect } from '@jest/globals';
import maximumProduct from '@src/array/628-maximumProductOfThreeNumber';

test('maximum product of three number', () => {
  expect(maximumProduct([1, 2, 3])).toBe(6);
  expect(maximumProduct([-1, -2, -3])).toBe(-6);
  expect(maximumProduct([1, 2, 3, 4])).toBe(24);
  expect(maximumProduct([-1, -2, -3])).toBe(-6);
})