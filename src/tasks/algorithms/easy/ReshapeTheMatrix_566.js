var matrixReshape = function(nums, r, c) {
    const allNums = [];
    const result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = nums[i].length - 1; j >= 0; j--) {
            allNums.push(nums[i][j]);
        }
    }

    if (allNums.length !== r * c) return nums;

    for (let i = 0; i < r; i++) {
        result.push([]);
        for (let j = 0; j < c; j++) {
            result[i].push(allNums.pop());
        }
    }

    return result;
};