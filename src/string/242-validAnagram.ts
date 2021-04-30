/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 export const isAnagram = function(s:string, t:string) {
    const map = new Map();
    for (let char of s) {
        map.set(char, map.has(char) ? map.get(char) + 1 : 1)
    }

    for (let char of t) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1)
        } else {
            return false;
        }
    }

    for (let val of map.values()) {
        if (val !== 0) {
            return false;
        }
    }

    return true;
};