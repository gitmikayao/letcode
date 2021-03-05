var findPoisonedDuration = function (timeSeries: Array<number>, duration: number) {
  const len = timeSeries.length;
  let time = 0;
  let cur = 0;

  if (len === 0) {
    return 0;
  }

  while (cur < len - 1) {
    time += Math.min(timeSeries[cur + 1] - timeSeries[cur], duration);
    cur++;
  }

  time += duration;
  return time;
};

export default findPoisonedDuration;