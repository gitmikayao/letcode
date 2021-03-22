/**
 * @param {number[]} A
 * @return {number}
 */
 export const maxRotateFunction = function (A:Array<number>) {
    const len = A.length;
    let sum = 0;
    let max = 0; // f0
    A.forEach((item, index) => {
        sum += item;
        max += (index * item);
    })

    let last = max;  // f0
    for (let i = 1; i < len; i++) {
        // Bk+m[x] = Bk((k-m+len)%len)   -n*Bk[n-1] 
        last = last + sum - len * A[len - i];
        if (last > max) {
            max = last;
        }
    }

    return max;
};