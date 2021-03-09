export const findDisappearedNumbers = (nums: Array<number>): Array<number> => {
  const result: Array<number> = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    let next = nums[cur - 1];
    while (cur !== next) {
      nums[cur - 1] = cur;
      cur = next;
      next = nums[cur - 1];
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
}

export const findDisappearedNumbers2 = (nums: Array<number>): Array<number> => {
  const result: Array<number> = [];
  const len = nums.length;
  let index = null;
  let next = null;
  for (let i = 0; i < len; i++) {
    index = nums[i];
    next = Math.abs(index) - 1;
    if (nums[next] > 0) {
      nums[next] *= -1;
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}