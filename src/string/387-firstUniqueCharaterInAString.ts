/**
 * @param {string} s
 * @return {number}
 */
 export const firstUniqChar = function(s:string) {
    const len = s.length;
    const map = new Map();
    for(let i=0; i<len; i++ ){
        let cur = s.charAt(i);
        if(map.get(cur)!==undefined){
            map.set(cur,-1);
        }else{
            map.set(cur,i);
        }
    }

    let min = -1;
    for(let [key, val] of map.entries()){
        if(val>-1){
            if(min<0 || min>val){
                min = val;
            }
        }
    }

    return min;
};