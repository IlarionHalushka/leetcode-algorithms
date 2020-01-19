var findTarget = function(root, k) {
  if (!root) return false;

  const s = [root];
  const set = new Set();

  while (s.length) {
    const curr = s.pop();

    if (set.has(k - curr.val)) return true;

    set.add(curr.val);

    if (curr.left) s.push(curr.left);
    if (curr.right) s.push(curr.right);
  }

  return false;
};
