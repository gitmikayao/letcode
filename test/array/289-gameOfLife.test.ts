import { test, expect } from '@jest/globals';
import { gameOfLife } from '@src/array/289-gameOfLife';

test('game of life', () => {
  expect(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]]);
  expect(gameOfLife([[1,1],[1,0]])).toEqual([[1,1],[1,1]]);

})