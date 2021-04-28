import { maxCount } from "@src/array/598-rangeAdditionII";

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 export const findTheDifference = function(s:string, t:string) {
    const map = new Map();
    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (let char of t) {
        if (map.has(char)) {
            const val = map.get(char) - 1;
            map.set(char, val);

            if (val < 0) {
                return char;
            }
        } else {
            return char;
        }
    }
};