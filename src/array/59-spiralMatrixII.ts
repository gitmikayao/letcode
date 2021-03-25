/**
 * @param {number} n
 * @return {number[][]}
 */
 export const generateMatrix = function (n:number) {
    if (n === 0) {
        return [[]]
    }
    let res = new Array(n);
    for(let i=0; i<n; i++){
        res[i] = new Array(n);
    }
    // const res = new Array(n).fill(new Array(n).fill(0));
    let count = 0;
    let minRow = 0;
    let maxRow = n - 1;
    let minCol = 0;
    let maxCol = n - 1;
    while (count !== n ** 2) {
        for (let i = minCol; i <= maxCol; i++) {
            count++;
            res[minRow][i] = count;
        }

        if (count === n ** 2) {
            return res;
        }

        for (let j = minRow + 1; j <= maxRow; j++) {
            count++;
            res[j][maxCol] = count;
        }

        if (count === n ** 2) {
            return res;
        }

        for (let i = maxCol - 1; i > minCol; i--) {
            count++;
            res[maxRow][i] = count;
        }

        if (count === n ** 2) {
            return res;
        }

        for (let j = maxRow; j > minRow; j--) {
            count++;
            res[j][minCol] = count;
        }

        minRow +=1;
        minCol +=1;
        maxRow -=1;
        maxCol -=1;
    }

    return res;
};