const assert = require('assert').strict;

const pairWithGivenSum = (A, k) => {
  let max = Number.MIN_SAFE_INTEGER;
  const map = new Map();
  let res = [];
  const target = k - 30; // -30 is a requirement in problem

  for (let i = 0; i < A.length; i++) {
    const curr = A[i];

    if (map.has(target - curr)) {
      if (curr > max || target - curr > max) {
        max = Math.max(curr, target - curr);
        res = [map.get(target - curr)[0], i];
      }
    }

    if (map.has(curr)) {
      map.get(curr).push(i);
    } else {
      map.set(curr, [i]);
    }
  }

  return res;
};

assert.deepEqual(pairWithGivenSum([1, 10, 25, 35, 60], 90), [2,3]);
assert.deepEqual(pairWithGivenSum([20, 50, 40, 25, 30, 10], 90), [1,5]);
assert.deepEqual(pairWithGivenSum([20, 50, 40, 25, 30, 10], 91), []);
assert.deepEqual(pairWithGivenSum([0,0], 30), [0,1]);
