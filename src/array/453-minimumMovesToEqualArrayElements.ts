export const minMoves = (nums: Array<number>): number => {
  const len = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  let moves = 0;
  for (let i = 0; i < len; i++) {
    min = Math.min(min, nums[i]);
  }

  for (let i = 0; i < len; i++) {
    moves += (nums[i] - min);
  }

  return moves;
};
