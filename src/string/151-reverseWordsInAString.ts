/**
 * @param {string} s
 * @return {string}
 */
 export const reverseWords = function(s:string) {
    const len = s.length;
    let res = "";
    for (let i = len - 1; i >= 0; ) {
        let end = i;
        // 从尾部开始向前查找单词
        while (i >= 0 && s.charAt(i) !== " ") {
            i--;
        }

        res += s.substring(i + 1, end + 1);
        end = i;

        while (i >= 0 && s.charAt(i) === " ") {
            i--;
        }

        // 排除首部和尾部的空格，中间空格保留一个
        if (i >= 0 && end < len - 1) {
            res += " "
        }
    }

    return res;
};