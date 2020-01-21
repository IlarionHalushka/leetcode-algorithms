/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;

  const s = [root];
  let sum = 0;

  while (s.length !== 0) {
    const curr = s.pop();

    if (!curr.left && !curr.right) {
      sum += Number(curr.val);
      continue;
    }

    if (curr.left) {
      curr.left.val = '' + curr.val + curr.left.val;
      s.push(curr.left);
    }
    if (curr.right) {
      curr.right.val = '' + curr.val + curr.right.val;
      s.push(curr.right);
    }
  }

  return sum;
};
