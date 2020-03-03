// my solution recursively
var permute = function(A) {
  const res = [];

  const recurse = (arr) => {
    if (arr.length === A.length) {
      return res.push(arr);
    }

    for (let i = 0; i < A.length; i++) {
      if (!arr.includes(A[i])) {
        recurse(arr.concat(A[i]));
      }
    }
  }

  recurse([]);
  return res;
};

// my solution iteratively
var permute2 = function(A) {
  const res = [];
  const q = [[]];

  while (q.length) {
    const curr = q.shift();

    if (curr.length === A.length) {
      res.push(curr);
      continue;
    }

    for (let i = 0; i < A.length; i++) {
      if (!curr.includes(A[i])) {
        q.push(curr.concat(A[i]));
      }
    }
  }

  return res;
};
