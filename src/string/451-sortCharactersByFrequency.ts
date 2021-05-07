/**
 * @param {string} s
 * @return {string}
 */
 export const frequencySort = function(s:string) {
    // 先统计频次
    const map = new Map();
    for (let char of s) {
        map.set(char, map.get(char) ? map.get(char) + 1 : 1);
    }

    // 根据频次排序
    const arr = [];
    for (let [key, val] of map.entries()) {
        if (arr[val]) {
            arr[val].push(key);
        } else {
            arr[val] = [key];
        }
    }

    // 生成结果字符串
    let res = "";
    let len = arr.length;
    for (let i = len - 1; i > 0; i--) {
        if (arr[i]) {
            arr[i].forEach(char => {
                res += char.repeat(i);
            })
        }
    }

    return res;
};