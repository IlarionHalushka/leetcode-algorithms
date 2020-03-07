/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];

  candidates.sort((a,b) => a-b);

  const recurse = (arr, sum, start) => {
    // i = start to avoid duplicates in answers
    // This way all answers will be sorted asc
    for (let i = start; i < candidates.length; i++) {
      const c = candidates[i];

      if (sum + c < target) {
        recurse(arr.concat(c), sum + c, i);
      } else if (sum + c === target) {
        res.push(arr.concat(c));
      }

    }
  }

  recurse([], 0, 0);

  return res;
};
