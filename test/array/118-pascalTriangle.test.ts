import { test, expect } from '@jest/globals';
import { generate } from '@src/array/118-pascalTriangle';

test('pascal triangle', () => {
  expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);

})