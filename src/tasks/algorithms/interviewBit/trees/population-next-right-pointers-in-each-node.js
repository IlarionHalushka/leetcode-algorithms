/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

// Using nextLevel array
var connect = function(root) {
  if (!root) return root;

  let level = [root];

  while (level.length) {
    const nextLevel = [];

    for (let i = 0; i < level.length; i++) {
      if (i === level.length - 1) {
        // last node of level points to null
        level[level.length - 1].next = null;
      } else {
        level[i].next = level[i + 1];
      }

      if (level[i].left) nextLevel.push(level[i].left);
      if (level[i].right) nextLevel.push(level[i].right);
    }

    level = nextLevel;
  }

  return root;
};

// Using queue
var connect = function(root) {
  if (!root) return root;

  let level = [root];

  while (level.length) {
    const levelLength = level.length;

    for (let i = 0; i < levelLength; i++) {
      const curr = level.shift();

      if (i === levelLength - 1) {
        // last node of level points to null
        curr.next = null;
      } else {
        curr.next = level[0];
      }

      if (curr.left) level.push(curr.left);
      if (curr.right) level.push(curr.right);
    }
  }

  return root;
};
