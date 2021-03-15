/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = (nums: Array<number>): Array<number> => {
  const len = nums.length;
  let cur = -1;
  if (len == 1) {
    return nums;
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      if (cur < 0) {
        cur = i
      }
      continue;
    }

    if (cur >= 0) {
      nums[cur] = nums[i];
      nums[i] = 0;
      cur++
    }
  }

  return nums;
};