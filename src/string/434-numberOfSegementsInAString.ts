/**
 * @param {string} s
 * @return {number}
 */
 export const countSegments = function(s:string) {
    const len = s.length;
    let count = 0;
    for(let i=0; i<len; i++) {

        let isStr = false;
        let curStr = s.charAt(i);
        while(curStr&&curStr!==" "){
            isStr = true;
            i++;
            curStr = s.charAt(i);
        }

        if(isStr){
            count++;
        }
    }

    return count;
};