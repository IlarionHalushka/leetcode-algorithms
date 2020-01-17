var preorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const res = [];

  while (stack.length !== 0) {
    const curr = stack.pop();

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);

    res.push(curr.val);
  }

  return res;
};
