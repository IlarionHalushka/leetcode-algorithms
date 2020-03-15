function getPairs(A, B, target) {
  A.sort((a, b) => a[1] - b[1]);
  B.sort((a, b) => a[1] - b[1]);

  let res = [];
  let max = -Infinity;
  let l = 0;
  let r = B.length - 1;

  while (l < A.length && r >= 0) {
    let sum = A[l][1] + B[r][1];
    if (sum > target) {
      r--;
    } else {
      if (max <= sum) {
        if (max < sum) {
          max = sum;
          res = [];
        }
        res.push([A[l][0], B[r][0]]);
        let i = r - 1;
        while (i >= 0 && B[i][1] === B[i + 1][1]) {
          res.push([A[l][0], B[i][0]]);
          i--;
        }
      }
      l++;
    }
  }
  return res;
}
