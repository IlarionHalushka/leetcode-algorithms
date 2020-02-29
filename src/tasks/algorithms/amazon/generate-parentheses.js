var generateParentheses = function(n) {
  if (n === 0) {
    return [''];
  }

  const res = [];
  const initial = '(';
  let left = 1;
  let right = 0;

  const recurse = (s, l, r) => {
    if (l === n && r === n) {
      return res.push(s);
    }
    if (l <= n) {
      recurse(s + '(', l + 1, r);
    }
    if (r < l) {
      recurse(s + ')', l, r + 1);
    }
  };

  recurse(initial, left, right);

  return res;
};
