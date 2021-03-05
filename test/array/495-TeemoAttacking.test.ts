import { test, expect } from '@jest/globals';
import findPoisonedDuration from '@src/array/495-teemoAttacking'

test('teemo attacking', () => {
  expect(findPoisonedDuration([1, 4], 2)).toBe(4);
  expect(findPoisonedDuration([1, 2], 2)).toBe(3);
})