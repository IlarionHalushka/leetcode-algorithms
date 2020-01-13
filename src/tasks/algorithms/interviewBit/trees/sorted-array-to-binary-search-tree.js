/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Runtime: 64 ms, faster than 85.28% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.7 MB, less than 32.69%
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length === 0) {
    return null;
  }

  var middle = Math.floor(nums.length / 2);
  var root = new TreeNode(nums[middle]);

  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));

  return root;
};
