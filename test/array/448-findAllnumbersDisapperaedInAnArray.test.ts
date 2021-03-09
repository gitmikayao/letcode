import { test, expect } from '@jest/globals';
import { findDisappearedNumbers, findDisappearedNumbers2 } from '@src/array/448-findAllNumbersDisappearedInAnArray';

test('find all numbers disappeared in an array', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  expect(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
});