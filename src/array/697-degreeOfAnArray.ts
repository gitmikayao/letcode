const findShortestSubArray = function (nums: Array<number>) {
  if (nums.length === 1) {
    return 1;
  }
  const map = new Map();
  const maxSet = new Set();
  let maxLen = 0;
  nums.forEach((num, index) => {
    let val = map.get(num); ``
    if (val) {
      const dis = index - val.cur;
      val.len += dis;
      val.cur = index;
      val.count++;
      if (val.count > maxLen) {
        maxSet.clear();
      }

      if (val.count >= maxLen) {
        maxSet.add(num);
        maxLen = val.count;
      }
    } else {
      if (maxLen === 0) {
        maxLen = 1;
        maxSet.add(num);
      }

      map.set(num, { count: 1, cur: index, len: 1 })
    }
  })

  const mins: Array<number> = [];
  maxSet.forEach(num => {
    mins.push(map.get(num).len);
  })

  return Math.min(...mins);
};

export { findShortestSubArray };