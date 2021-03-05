const maximumProduct = function (nums: Array<number>) {
  const len = nums.length;
  let maxFirst = -Number.MAX_VALUE;
  let maxSecond = -Number.MAX_VALUE;
  let maxThird = -Number.MAX_VALUE;
  let minFirst = Number.MAX_VALUE;
  let minSecond = Number.MAX_VALUE;
  let cur = null;

  for (let i = 0; i < len; i++) {
    cur = nums[i];
    if (cur >= maxFirst) {
      maxThird = maxSecond;
      maxSecond = maxFirst;
      maxFirst = cur;
    } else if (cur >= maxSecond) {
      maxThird = maxSecond;
      maxSecond = cur;
    } else if (cur >= maxThird) {
      maxThird = cur;
    }

    if (cur <= minFirst) {
      minSecond = minFirst;
      minFirst = cur;
    } else if (cur <= minSecond) {
      minSecond = cur;
    }
  }

  return Math.max(maxThird * maxSecond * maxFirst, minFirst * minSecond * maxFirst);
};

export default maximumProduct;