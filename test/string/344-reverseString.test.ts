import { test, expect } from '@jest/globals';
import { reverseString} from '@src/string/344-reverseString';

test('reverse string', () => {
  expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
})
