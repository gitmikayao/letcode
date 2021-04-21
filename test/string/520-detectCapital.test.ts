import { test, expect } from '@jest/globals';
import { 
    detectCapitalUse1,
    detectCapitalUse2,
    detectCapitalUse3,
    detectCapitalUse4
 } from '@src/string/520-detectCapital';

test('detect capital', () => {
  expect(detectCapitalUse1("MikA")).toBe(false);
  expect(detectCapitalUse2("MikA")).toBe(false);
  expect(detectCapitalUse3("MikA")).toBe(false);
  expect(detectCapitalUse4("MikA")).toBe(false);
  expect(detectCapitalUse1("MIKA")).toBe(true);
  expect(detectCapitalUse2("MIKA")).toBe(true);
  expect(detectCapitalUse3("MIKA")).toBe(true);
  expect(detectCapitalUse4("MIKA")).toBe(true);
})