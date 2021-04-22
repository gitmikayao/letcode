import { test, expect } from '@jest/globals';
import { isPalindrome, isPalindrome1} from '@src/string/125-validPalindrome';

test('valid palindrome', () => {
  expect(isPalindrome(" ")).toBe(true);
  expect(isPalindrome("0P")).toBe(false);
  expect(isPalindrome("a a")).toBe(true);
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
})

test('valid palindrome', () => {
    expect(isPalindrome1(" ")).toBe(true);
    expect(isPalindrome1("0P")).toBe(false);
    expect(isPalindrome1("a a")).toBe(true);
  expect(isPalindrome1("race a car")).toBe(false);
  expect(isPalindrome1("A man, a plan, a canal: Panama")).toBe(true);
})