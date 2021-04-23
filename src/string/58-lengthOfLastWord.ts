/**
 * @param {string} s
 * @return {number}
 */
 export const lengthOfLastWord = function(s:string) {
    const len = s.length;
    let lastWordLen = 0;

    for (let i = len - 1; i >= 0; i--) {
        let curChar = s.charCodeAt(i);
        let isLetter = false;
        while (
            (curChar >= 65 && curChar <= 90)
            || (curChar >= 97 && curChar <= 122)
        ) {
            isLetter = true;
            lastWordLen++;
            i--;
            curChar = s.charCodeAt(i);
        }

        if (isLetter) {
            return lastWordLen;
        }
    }

    return lastWordLen;
};