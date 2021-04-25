import { test, expect } from '@jest/globals';
import { reverseWords} from '@src/string/557-reverseWordsInAStringIII';

test('reverse words in a string III', () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
})
