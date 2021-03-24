/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function (matrix: Array<Array<number>>) {
    const res: Array<number> = [];

    if (!matrix.length || !matrix[0].length) {
        return res;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;
    let minRow = 0;
    let maxRow = rows - 1;
    let minCol = 0;
    let maxCol = cols - 1;

    while (count !== rows * cols) {
        for (let i = minCol; i <= maxCol; i++) {
            res.push(matrix[minRow][i]);
            count++;
        }

        if (count === rows * cols) {
            return res;
        }

        for (let j = minRow + 1; j <= maxRow; j++) {
            res.push(matrix[j][maxCol]);
            count++;
        }

        if (count === rows * cols) {
            return res;
        }

        for (let i = maxCol - 1; i > minCol; i--) {
            res.push(matrix[maxRow][i]);
            count++;
        }

        if (count === rows * cols) {
            return res;
        }

        for (let j = maxRow; j > minRow; j--) {
            res.push(matrix[j][minCol]);
            count++;
        }

        minRow += 1;
        maxRow -= 1;
        minCol += 1;
        maxCol -= 1;
    }

    return res;
};