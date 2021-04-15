import { test, expect } from '@jest/globals';
import { rotate, rotate1} from "@src/array/48-rotateImage";

test("rotate image", () => {
    expect(rotate([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
})
test("rotate image", () => {
    expect(rotate1([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
})