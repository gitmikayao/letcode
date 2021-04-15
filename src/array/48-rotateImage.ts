/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 export const  rotate = function(matrix:Array<Array<number>>) {
    const n = matrix.length;

    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i - 1; j++) {
            const cur = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i]; // let-> top
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; // bottom -> left
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]; // right -> bottom
            matrix[j][n - i - 1] = cur; // top -> right
        }
    }

    return matrix
};

export const rotate1 = (matrix:Array<Array<number>>) =>{
    const n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n / 2; j++){
            const temp = matrix[i][j] 
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }

    for(let i = 0; i < n-1; i++){
        for(let j=0; j < n-i-1; j++ ){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[n-j-1][n-i-1];
            matrix[n-j-1][n-i-1] = temp;
        }
    }

    return matrix;
}