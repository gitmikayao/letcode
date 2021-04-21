/**
 * @param {number[][]} matrix
 */
 export class NumMatrix {
     matrix;
    constructor(matrix:Array<Array<number>>) {
        this.matrix = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1:number, col1:number, row2:number, col2:number) {
        let sum = 0;
        const row = this.matrix.length;
        const col = this.matrix[0].length;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j];
            }
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */