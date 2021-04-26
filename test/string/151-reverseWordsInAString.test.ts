import { test, expect } from '@jest/globals';
import { reverseWords} from '@src/string/151-reverseWordsInAString';

test('reverse words in a string ', () => {
  expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  expect(reverseWords("  hello world  ")).toBe("world hello");
  expect(reverseWords("a good   example")).toBe("example good a");
  expect(reverseWords("  Bob    Loves  Alice   ")).toBe("Alice Loves Bob");
  expect(reverseWords("Alice does not even like bob")).toBe("bob like even not does Alice");
})
