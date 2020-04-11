/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(A, k) {
  let i = 0;
  let j = A.length - 1;

  while (i !== j) {
    if (A[i] + A[j] === k) {
      return [i + 1, j + 1];
    }
    if (A[i] + A[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
};
