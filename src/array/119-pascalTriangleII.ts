/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export const getRow = function (rowIndex: number) {
  const rows = new Array(rowIndex + 1).fill(1);
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) { // ignore 0 i
      rows[j] += rows[j - 1];
    }
  }

  return rows;
};
