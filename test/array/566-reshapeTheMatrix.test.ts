import { test, expect } from '@jest/globals';
import {matrixReshape} from '@src/array/566-reshapeTheMatrix'

test('reshape the matrix', () => {
  expect(matrixReshape([[1, 2, 3], [4, 5, 6]], 3, 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
})