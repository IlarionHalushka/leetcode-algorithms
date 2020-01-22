/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let level = [root];
  const res = [];
  let forth = true;

  while (level.length) {
    res.push(level.map(node => node.val));
    const nextLevel = [];

    if (forth) {
      for (let i = level.length - 1; i >= 0; i--) {
        if (level[i].right) nextLevel.push(level[i].right);
        if (level[i].left) nextLevel.push(level[i].left);
      }
      forth = false;
    } else {
      for (let i = level.length - 1; i >= 0; i--) {
        if (level[i].left) nextLevel.push(level[i].left);
        if (level[i].right) nextLevel.push(level[i].right);
      }
      forth = true;
    }
    level = nextLevel;
  }

  return res;
};
