const findMaxConsecutiveOnes = function (nums: Array<number>) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  let count = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }

  // the last element is '1'; 
  return Math.max(count, max);

};

export default findMaxConsecutiveOnes;