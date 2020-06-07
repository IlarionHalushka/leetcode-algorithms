module.exports = {
  //param A : array of integers
  //return a array of integers
  maxset : function(A){
    var max = 0;
    var subArrMax = 0;
    var res = [];
    var end = 0;

    // reverse order because if subarray sums are equal then return first
    for (var i = A.length - 1; i >= 0; i--) {
      if (A[i] < 0) {
        // if A[i] negative then reset subArrMax
        subArrMax = 0;
      } else {
        // if A[i] positive then increase subArrMax
        subArrMax += A[i];

        if (subArrMax > max) {
          end = i;
          max = subArrMax;
        }
      }
    }

    for (var j = end; j < A.length; j++) {
      if (A[j] < 0) {
        break;
      }
      res.push(A[j]);
    }

    return res;
  }
};
