export const maxCount = function (m: number, n: number, ops: Array<Array<number>>) {
    const len = ops.length;
    if (len === 0) {
        return m * n;
    }

    let minM = Number.MAX_SAFE_INTEGER;
    let minN = Number.MAX_SAFE_INTEGER;
    ops.forEach((op) => {
        if (op[0] < minM) {
            minM = op[0];
        }

        if (op[1] < minN) {
            minN = op[1];
        }
    });

    return minM * minN;
}