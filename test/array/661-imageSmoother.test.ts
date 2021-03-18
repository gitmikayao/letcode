import { test, expect } from '@jest/globals';
import { imageSmoother } from '@src/array/661-imageSmoother';

test('pascal triangle', () => {
  expect(imageSmoother(
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]
  ))
    .toEqual(
      [[0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]]
    );
})