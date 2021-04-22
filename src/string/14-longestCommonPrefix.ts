/**
 * @param {string[]} strs
 * @return {string}
 */
 export const longestCommonPrefix = function(strs:Array<string>) {
    const len = strs.length;
    let com = "";
    let firstStr = strs[0];
    let firstLen = firstStr.length;
    for( let cur = 0; cur < firstLen; cur++){
        let curChar = firstStr.charAt(cur);
        for(let i = 1; i < len; i++) {
            if(strs[i].charAt(cur)!==curChar){
                return com;
            }
        }

        com += curChar;
    }

    return com;
};