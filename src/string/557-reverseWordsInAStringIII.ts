/**
 * @param {string} s
 * @return {string}
 */
 export const reverseWords = function(s:string) {
    const len = s.length;
    let res = "";
    for (let i = 0; i < len;) {
        let start = i;
        // 找到单词
        while (i < len && s.charAt(i) !== " ") {
            i++;
        }

        // 反转单词
        for (let j = start; j < i; j++) {
            res += s.charAt(start + i - j - 1);
        }

        // 拼接空格
        while (i < len && s.charAt(i) === " ") {
            i++;
            res += " ";
        }
    }

    return res;
};