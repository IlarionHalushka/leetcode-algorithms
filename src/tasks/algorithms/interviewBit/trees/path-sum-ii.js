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

// BETTER RUNTIME: 72 ms	46.9 MB
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

// BETTER MEMORY USAGE: 84 ms	37.4 MB
var pathSum = function(root, k) {
  const res = [];

  if (root === null) return res;

  const recurse = (node, sum, arr) => {
    if (node === null) return res;

    arr.push(node.val);

    if (node.left === null && node.right === null) {
      if (sum + node.val === k) {
        res.push([...arr]);
      }
    }
    recurse(node.left, sum + node.val, arr);
    recurse(node.right, sum + node.val, arr);
    arr.pop();
  };

  recurse(root, 0, []);

  return res;
};
