import { test, expect } from '@jest/globals';
import { firstUniqChar} from '@src/string/387-firstUniqueCharaterInAString';

test('reverse string II', () => {
  expect(firstUniqChar("leetcode")).toBe(0);
  expect(firstUniqChar("loveleetcode")).toEqual(2);
  expect(firstUniqChar("aabb")).toEqual(-1);
})
