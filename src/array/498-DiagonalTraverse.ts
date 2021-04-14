/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const findDiagonalOrder = function (matrix: Array<Array<number>>) {
    const result = [];
    const row = matrix.length;
    const col = matrix[0].length;

    let curRow = 0;
    let curCol = 0;
    let direction = 1;
    while (curCol < col && curRow < row) {
        result.push(matrix[curRow][curCol]);

        let nextRow = curRow;
        let nextCol = curCol;
        if (direction>0) {
            nextRow -= 1;
            nextCol += 1
        } else {
            nextRow += 1;
            nextCol -= 1
        }

        if (nextCol < 0 || nextRow < 0 || nextCol === col || nextRow === row) { // 抵达边界
            if (direction > 0) { // 向上转为向下
                if (curCol === col - 1) { // 最后一列
                    curRow += 1;
                } else {
                    curCol += 1;
                }
            } else { // 向下转为向上
                if (curRow === row - 1) { //最后一行
                    curCol += 1;
                } else {
                    curRow += 1;
                }
            }

            // 抵达边界需要更改方向标志
            direction *= -1;
        } else { // 遍历下一个元素
            curRow = nextRow;
            curCol = nextCol;
        }
    }

    return result;
};
