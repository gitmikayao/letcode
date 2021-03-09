import { test, expect } from '@jest/globals';
import { findDuplicates, findDuplicates1 } from '@src/array/442-findAllDuplicatesInAnArray';

test('find all numbers disappeared in an array', () => {
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  expect(findDuplicates1([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([3, 2])
});