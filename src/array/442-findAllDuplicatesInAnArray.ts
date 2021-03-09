export const findDuplicates = (nums: Array<number>): Array<number> => {
  const len = nums.length;
  const result: Array<number> = [];
  for (let i = 0; i < len; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    } else {
      result.push(index + 1);
    }
  }

  return result;
}

export const findDuplicates1 = (nums: Array<number>): Array<number> => {
  const len = nums.length;
  const result: Array<number> = [];
  for (let i = 0; i < len; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      result.push(nums[i])
    }
  }

  return result;
}


