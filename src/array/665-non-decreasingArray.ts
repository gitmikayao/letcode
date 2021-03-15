/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const checkPossibility = (nums: Array<number>): boolean => {
  const len = nums.length;
  if (len === 1) {
    return true;
  }

  let count = 0;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      if (i - 1 >= 0) {
        if (nums[i + 1] >= nums[i - 1]) {
          nums[i] = nums[i + 1];
          count++;
        } else {
          nums[i + 1] = nums[i];
          count++;
        }
      } else {
        nums[i] = nums[i + 1];
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }

  return true;
};