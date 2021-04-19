/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 export const gameOfLife = function (board:Array<Array<number>>) {
    const row = board.length;
    const col = board[0].length;
    const pos = [0, 1, -1];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 计算相邻的活细胞数量
            let live = 0;
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if (pos[m] === 0 && pos[n] === 0) { // 排除当前位置
                        continue;
                    }
                    // 相邻的八个位置
                    const curRow = i + pos[m];
                    const curCol = j + pos[n];

                    if (
                        curRow >= 0
                        && curRow < row
                        && curCol >= 0
                        && curCol < col
                        && (board[curRow][curCol] === 1 || board[curRow][curCol] === 2) // 2 表示原来是活细胞，结果会变为死细胞
                    ) {
                        live += 1;
                    }
                }
            }

            // 活细胞变为死细胞 1 -> 2
            if (board[i][j] === 1 && (live < 2 || live > 3)) {
                board[i][j] = 2;
            }

            // 死细胞变活细胞 0 -> 3
            if (board[i][j] === 0 && live === 3) {
                board[i][j] = 3;
            }
        }
    }

    // 将 2 3 换为 0 1
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const cur = board[i][j];
            if (cur === 2) {
                board[i][j] = 0;
            } else if (cur === 3) {
                board[i][j] = 1;
            }
        }
    }

    return board;
};
