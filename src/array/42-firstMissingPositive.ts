export const firstMissingPositive = (nums:Array<number>) => {
  const len = nums.length;
  // handle empty array
  if (len === 0) {
      return 1;
  }

  for (let i = 0; i < len; i++) {
      while (nums[i] !== nums[nums[i] - 1] && nums[i] > 0 && nums[i] <= len) {
          const temp = nums[nums[i] - 1];
          nums[nums[i] - 1] = nums[i];
          nums[i] = temp;
      }
  }

  for (let i = 0; i < len; i++) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  // handle [1,2,3..len]
  return len + 1;
};