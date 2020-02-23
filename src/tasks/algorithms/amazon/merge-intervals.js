/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(A) {
  A.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i+1][0] <= A[i][1]) {
      A[i+1] = [A[i][0], Math.max(A[i][1], A[i+1][1])];
      A[i] = null;
    }
  }

  return A.filter(a => a);
};
