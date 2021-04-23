import { test, expect } from '@jest/globals';
import { lengthOfLastWord} from '@src/string/58-lengthOfLastWord';

test('length of last word', () => {
  expect(lengthOfLastWord("")).toBe(0);
  expect(lengthOfLastWord(" ")).toBe(0);
  expect(lengthOfLastWord("Hello")).toBe(5);
  expect(lengthOfLastWord("Hello World")).toBe(5);
  expect(lengthOfLastWord("Hello World ")).toBe(5);
})
