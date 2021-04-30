import { lengthOfLastWord } from "./58-lengthOfLastWord";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 export const groupAnagrams = function(strs:string[]) {
    let res = [];
    let mapArr = [];

    for (let str of strs) {
        const same = true;
        const curMap = new Map();
        for (let char of str) {
            curMap.set(char, curMap.has(char) ? curMap.get(char) + 1 : 1);
        }

        let exist = false;
        for (let i = 0; i < mapArr.length; i++) {
            const map = mapArr[i];
            if (map.size === curMap.size) {
                let same = true;
                for (let [key, val] of curMap) {
                    if (map.get(key) !== val) {
                        same = false;
                        break;
                    }
                }
                if (same) {
                    res[i].push(str);
                    exist = true;
                    break;
                }
            }
        }

        if (!exist) {
            res.push([str]);
            mapArr.push(curMap);
        }
    }

    return res;
};
