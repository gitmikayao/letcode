import { test, expect } from '@jest/globals';

import { checkPossibility } from '@src/array/665-non-decreasingArray';

test('non-decreasing array', () => {
  expect(checkPossibility([1, 2, 3])).toBe(true);
  expect(checkPossibility([4, 2, 3])).toBe(true);
  expect(checkPossibility([4, 2, 1])).toBe(false);
})
