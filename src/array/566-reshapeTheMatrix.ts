/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 export const matrixReshape = (nums:Array<Array<number>>, r:number, c:number) => {
    const row = nums.length;
    const col = nums[0].length;

    if(r*c!==row*col){
        return nums;
    }
    const result = [];
    let curRow = [];
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            curRow.push(nums[i][j]);
            if(curRow.length===c){
                result.push(curRow);
                curRow = [];
            }
        }
    }

    return result;
};