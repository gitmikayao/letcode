/**
 * @param {number[]} nums
 */
 export const NumArray = function (nums:Array<number>) {
    const len = nums.length;
    this.sums = nums.slice();
    for (let i = 1; i < len; i++) {
        this.sums[i] = this.sums[i - 1] + this.sums[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left:number, right:number) {
    if (left === 0) {
        return this.sums[right];
    }
    return this.sums[right] - this.sums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 class NumArray1 {
    sums
    constructor(nums:Array<number>) {
        const len = nums.length;
        this.sums = nums.slice();
        for (let i = 1; i < len; i++) {
            this.sums[i] = this.sums[i - 1] + this.sums[i];
        }
    }

    sumRange(left:number, right:number) {
        if (left === 0) {
            return this.sums[right];
        }
        return this.sums[right] - this.sums[left - 1];
    }
}
