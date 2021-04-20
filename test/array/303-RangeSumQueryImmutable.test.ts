import { test, expect } from '@jest/globals';
import {NumArray1 } from '@src/array/303-RangeSumQueryImmutable';

test('range sum query immutable', () => {
    const arr = new NumArray1([-2, 0, 3, -5, 2, -1]);
    expect(arr.sumRange(0,2)).toBe(1);
    expect(arr.sumRange(2,5)).toBe(-1);
    expect(arr.sumRange(0,5)).toBe(-3);
})