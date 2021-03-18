/**
 * @param {number[][]} M
 * @return {number[][]}
 */
export const imageSmoother = function (M: number[][]) {
  const rows = M.length;
  const cols = M[0].length;
  const RES = [];
  for (let i = 0; i < rows; i++) {
    const r = [];
    for (let j = 0; j < cols; j++) {
      let count = 0;
      let sum = 0;

      for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
          if (i + m > -1 && i + m < rows && j + n > -1 && j + n < cols) {
            count++;
            sum += M[i + m][j + n];
          }
        }
      }

      r.push(Math.floor(sum / count));
    }

    RES.push(r);
  }

  return RES;
};