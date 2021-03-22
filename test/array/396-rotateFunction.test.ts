import { test, expect } from '@jest/globals';
import { maxRotateFunction } from '@src/array/396-rotateFunction';

test('rotate function', () => {
    expect(maxRotateFunction([4, 3, 2, 6])).toBe(26);
})