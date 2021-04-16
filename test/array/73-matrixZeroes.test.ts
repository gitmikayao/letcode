import { test, expect } from '@jest/globals';
import { setZeroes } from "@src/array/73-matrixZeroes";

test("matrix zeroes", () => {
    expect(setZeroes([[1,1,1],[1,0,1],[1,1,1]])).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
    expect(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);
})