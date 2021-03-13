
export const hIndex = (nums: Array<number>) => {
  const len = nums.length;
  let h = 0;
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0) {
      if (nums[i] > len) {
        nums[i] = len;
      }

      // 如果nums[i]-1对应位置的元素不小于0，则设为-1，如果小于0，则减 1.
      const temp = nums[nums[i] - 1];
      if (temp >= 0) {
        nums[nums[i] - 1] = -1;
      } else if (temp < 0) {
        nums[nums[i] - 1] -= 1;
      }

      if (temp > 0) {
        if (temp === i + 1) {
          nums[i] = -1;
        } else {
          nums[i] = temp;
        }
      } else {
        nums[i] = 0;
      }
    }
  }

  let count = 0;
  for (let i = len - 1; i >= 0; i--) {
    count += Math.abs(nums[i]);
    if (count >= i + 1) {
      return i + 1;
    }
  }

  return h;
}