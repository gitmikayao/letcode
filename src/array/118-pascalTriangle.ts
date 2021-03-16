/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = function (numRows: number) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    let rows = [];
    rows[0] = rows[i] = 1;
    for (let j = 1; j < rows.length - 1; j++) {
      rows[j] = res[i - 1][j] + res[i - 1][j - 1];
    }
    res.push(rows);
  }

  return res;
};