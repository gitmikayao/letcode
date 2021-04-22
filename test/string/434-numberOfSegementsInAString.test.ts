import { test, expect } from '@jest/globals';
import { 
    countSegments
 } from '@src/string/434-numberOfSegementsInAString';

test('detect capital', () => {
  expect(countSegments("Hello, my name is mika")).toBe(5);
  expect(countSegments("Hello")).toBe(1);
  expect(countSegments("love live! mu'sic forever")).toBe(4);
  expect(countSegments("")).toBe(0);
})