import { test, expect } from '@jest/globals';
import { isPalindrome} from '@src/string/125-validPalindrome';

test('detect capital', () => {
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
})