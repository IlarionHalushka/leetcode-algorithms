var constructMaximumBinaryTree = function(nums) {
    // find max value in array and its index
    // const root = new TreeNode(maxNumber)

   // recursive call for root.left
    // recursive call root.right

    // check if start index == end index then return null
    return helper(nums, 0, nums.length);
};


var helper = function(nums, start, end) {
    if (start === end) return null;
    const maxValueIndex = max(nums, start, end);
    const node = new TreeNode(nums[maxValueIndex]);

    node.left = helper(nums, start, maxValueIndex);
    node.right = helper(nums, maxValueIndex + 1, end);

    return node;
}

var max = function(nums, start, end) {
    let maxIndex = start;
    for (let i = start; i < end; i++) {
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    return maxIndex;
}