var searchMatrix = function(A, k) {
  if (!A.length || !A[0].length) {
    return false;
  }
  let r = 0;
  let c = A[0].length - 1;

  while (r !== A.length - 1 || c !== 0) {
    if (A[r][c] === k) return true;

    if (A[r][c] < k) {
      if (r === A.length - 1) {
        return false;
      }
      r++;
    } else if (A[r][c] > k) {
      if (c === 0) {
        return false;
      }
      c--;
    }
  }
  // check edge case when row = A.length-1 AND column = 0
  return A[A.length -1][0] === k;
};

// CLEANER SOLUTION
var searchMatrix = function(A, k) {
  if (!A.length || !A[0].length) {
    return false;
  }
  let r = 0;
  let c = A[0].length - 1;

  while (r <= A.length - 1 && c >= 0) {
    if (A[r][c] === k) return true;

    if (A[r][c] < k) {
      r++;
    } else if (A[r][c] > k) {
      c--;
    }
  }
  return false;
};
