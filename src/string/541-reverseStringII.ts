/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 export const reverseStr = function(s:string, k:number) {
    const len = s.length;
    let res = ""

    for (let i = 0; i < len; i++) {
        let cur = i % (2 * k)
        let delta = k;
        // 判断需要反转的长度是否小于k
        if (k >= len - i + cur) {
            delta = len - i + cur;
        }
        if (cur < delta) { // 反转
            res += s.charAt(i - cur + delta - cur - 1)
        } else {
            res += s.charAt(i);
        }
    }

    return res;
};
