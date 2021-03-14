import { test, expect } from '@jest/globals';

import { minMoves } from '@src/array/453-minimumMovesToEqualArrayElements';

test('minimum moves to equal elements', () => {
  expect(minMoves([1, 2, 3])).toBe(3);
  expect(minMoves([2, 4, 5])).toBe(5);
  expect(minMoves([2, 4, 5, 7])).toBe(10);
})
