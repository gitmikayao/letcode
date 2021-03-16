import { test, expect } from '@jest/globals';
import { getRow } from '@src/array/119-pascalTriangleII';

test('pascal triangle', () => {
  expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
})