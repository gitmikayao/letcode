import {test,expect} from '@jest/globals';
import {maxCount} from '@src/array/598-rangeAdditionII';

test('range addition ii', ()=>{
    expect(maxCount(3,3,[[2, 2], [3, 3]])).toBe(4)
})