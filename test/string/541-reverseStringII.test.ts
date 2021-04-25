import { test, expect } from '@jest/globals';
import { reverseStr} from '@src/string/541-reverseStringII';

test('reverse string II', () => {
  expect(reverseStr("abcdefg",2)).toEqual("bacdfeg");
  expect(reverseStr("abcdefgh",3)).toEqual("cbadefhg");
})
