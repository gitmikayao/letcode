const findErrorNums1 = function (nums: Array<number>) {
  nums.sort((a, b) => a - b);
  let miss = null;
  let db = null;
  let len = nums.length;
  // 边界值
  if (nums[0] !== 1) {
    miss = 1;
  }

  for (let i = 0; i < len - 1; i++) {
    if (db === null && nums[i] === nums[i + 1]) {
      db = nums[i];
    }

    if (miss === null && nums[i + 1] - nums[i] > 1) {
      miss = nums[i + 1] - 1;
    }

    if (miss !== null && db !== null) {
      return [db, miss];
    }
  }
  // 边界值
  return [db, nums[len - 1] + 1];
};

const findErrorNums2 = function (nums: Array<number>) {
  let map = new Map();
  let len = nums.length;
  const result: [any, any] = [null, null];
  nums.forEach(num => {
    const res = map.get(num);
    if (!res) {
      map.set(num, 1);
    } else {
      map.set(num, res + 1);
    }
  })

  for (let i = 1; i <= len; i++) {
    const res = map.get(i);
    if (res === undefined) {
      result[1] = i;
    } else if (res === 2) {
      result[0] = i;
    }

    if (result.every(item => item !== null)) {
      return result;
    }
  }
  // result[1] = len;
  // return result;
};

export { findErrorNums1, findErrorNums2 }