import { test, expect } from '@jest/globals';
import { rotate1, rotate2, rotate3 } from '@src/array/189-rotateArray';

test('rotate array', () => {
    expect(rotate1([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate2([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate3([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
})