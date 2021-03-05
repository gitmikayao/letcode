const thirdMax = function (nums: Array<number>) {
  let len = nums.length;
  let max = null;
  let second = null;
  let third = null;

  if (len < 3) {
    return Math.max(...nums);
  }

  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    if (max === null || cur > max) {
      third = second;
      second = max;
      max = cur;
    } else if ((second === null || cur > second) && cur !== max) {
      third = second;
      second = cur;
    } else if ((third === null || cur > third) && cur !== second && cur !== max) {
      third = cur;
    }
  }

  if (third !== null) {
    return third;
  } else {
    return max;
  }
};

export default thirdMax;