export const rotate1 = (nums: number[], k: number) => {
    if (nums.length < 2) {
        return nums;
    }

    for (let i = 0; i < k; i++) {
        let tail = nums.pop() as number;
        nums.unshift(tail);
    }

    return nums;
}

export const rotate2 = (nums: number[], k: number) => {
    nums.splice(nums.length - k, k).reverse().forEach(el => nums.unshift(el));
    return nums;
}

export const rotate3 = (nums: number[], k: number) => {
    const len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let cur = (i + k) % len;
        while (cur !== i) {
            const temp = nums[cur];
            nums[cur] = nums[i];
            nums[i] = temp;
            count++;
            cur = (cur + k) % len;
        }

        if (cur === i) {
            count++;
        }

        if (count === len) {
            return nums;
        }
    }

    return nums;
}