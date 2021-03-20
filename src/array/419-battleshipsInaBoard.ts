export const countBattleships = function (board: Array<Array<string>>) {
    let count = 0;
    const rows = board.length;
    for (let i = 0; i < rows; i++) {
        const cols = board[i].length;
        for (let j = 0; j < cols; j++) {
            if (
                board[i][j] === "."
                || (i > 0 && board[i - 1][j] === "X")
                || (j > 0 && board[i][j - 1] === "X")
            ) {
                continue;
            }

            count++;
        }
    }

    return count;
}