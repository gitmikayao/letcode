import { test, expect } from '@jest/globals';
import { 
    longestCommonPrefix
 } from '@src/string/14-longestCommonPrefix';

test('detect capital', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
})