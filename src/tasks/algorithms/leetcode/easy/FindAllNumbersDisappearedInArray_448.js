var findDisappearedNumbers = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const val = Math.abs(nums[i]) - 1;
        if (nums[val] > 0) {
            nums[val] = -nums[val];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i+1);
        }
    }
    return result;
};