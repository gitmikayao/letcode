import { test, expect } from '@jest/globals';
import findMaxConsecutiveOnes from '@src/array/485-maxConsecutiveOnes';
test('max consecutive ones', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  expect(findMaxConsecutiveOnes([1])).toBe(1);
  expect(findMaxConsecutiveOnes([1, 1, 1, 0, 0, 1, 1, 1])).toBe(3);
  expect(findMaxConsecutiveOnes([0, 1, 0, 1, 1, 1, 1, 0])).toBe(4);
});