const containsDuplicate = function(nums) {
    const obj = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (obj.has(nums[i])) return true;
        obj.add(nums[i]);
    }
    return false;
};