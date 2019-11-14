module.exports = {
  //param A : array of integers
  //return a array of integers
  subUnsort : function(A){
    var start = -1;
    var end = -1;
    var mx = -1;

    for (var i = 0 ; i < A.length; i++) {
      if (A[i] >= mx) {
        mx = A[i];
        continue;
      }

      end = i;

      if (start === -1) {
        start = i - 1;
      }

      while (start >= 0 && A[start-1] > A[i]) {
        start--;
      }
    }

    if (start === -1) return [-1];

    return [start, end];

  }
};
