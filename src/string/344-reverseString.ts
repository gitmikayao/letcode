/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 export const reverseString = function(s:Array<string>) {
    const len = s.length;
    const half = Math.floor(len/2)
    let temp = null;
    for(let i=0; i<half; i++){
        temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }

    return s;
};