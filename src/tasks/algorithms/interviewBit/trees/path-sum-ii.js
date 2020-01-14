/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, k) {
  const res = [];

  if (root === null) return res;

  const recurse = (node, sum, arr) => {
    if (node.left === null && node.right === null) {
      if (sum === k) {
        res.push(arr);
      }
      return;
    }
    if (node.left !== null) {
      recurse(node.left, sum + node.left.val, [...arr, node.left.val]);
    }
    if (node.right !== null) {
      recurse(node.right, sum + node.right.val, [...arr, node.right.val]);
    }
  };

  recurse(root, root.val, [root.val]);

  return res;
};
