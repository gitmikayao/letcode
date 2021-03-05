var findPoisonedDuration = function (timeSeries, duration) {
  const len = timeSeries.length;
  let time = 0;
  let cur = 0;

  if (len === 0) {
    return 0;
  }

  while (cur + 1 < len) {
    time += Math.min(timeSeries[cur + 1] - timeSeries[cur], duration);
    cur++;
  }

  time += duration;
  return time;
};

export default findPoisonedDuration;