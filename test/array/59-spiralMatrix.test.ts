import { test, expect } from '@jest/globals';
import { generateMatrix } from "@src/array/59-spiralMatrixII";

test("spiral matrix ii", () => {
    expect(generateMatrix(3)).toEqual( [[1,2,3],[8,9,4],[7,6,5]]);
})