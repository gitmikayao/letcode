/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 export const setZeroes = function(matrix:Array<Array<number>>) {
    const row = matrix.length;
    const col = matrix[0].length;

    let isZeroRow = false;
    let isZeroCol = false;

    // 第一列是否存在0
    for(let i = 0; i < row; i++) {
        if(matrix[i][0] === 0) {
            isZeroCol = true;
        }
    }

    // 第一行是否存在0
    for(let j = 0; j < col; j++) {
        if(matrix[0][j] === 0) {
            isZeroRow = true;
        }
    }

    // 将行列是否为零的信息存在第一行与第一列
    for(let i = 1; i < row; i++){
        for( let j = 1; j < col; j++) {
            if(!matrix[i][j]){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // 第二次遍历根据行列是否存在0来将当前元素置零
    for(let i = 1; i < row; i++) {
        for(let j = 1; j < col; j++) {
            if(!matrix[0][j] || !matrix[i][0]){
                matrix[i][j] = 0;
            }
        }
    }

    // 处理第一行
    if(isZeroRow) {
        for(let j = 0; j < col; j++){
            matrix[0][j] = 0;
        }
    }

    // 处理第一列
    if(isZeroCol) {
        for(let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};