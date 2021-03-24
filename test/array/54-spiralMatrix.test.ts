import { test, expect } from '@jest/globals';
import { spiralOrder } from "@src/array/54-spiralMatrix";

test("spiral matrix", () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    expect(spiralOrder([[1, 2]])).toEqual([1, 2]);
    expect(spiralOrder([[1], [2]])).toEqual([1, 2]);
    expect(spiralOrder([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);
})