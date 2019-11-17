module.exports = {
  //param A : array of integers
  //return an integer
  maxSpecialProduct : function(A){
    var max = 0;

    for (var i = 1; i < A.length - 1; i++) {
      // search left special
      var left = 0;
      var j = i - 1;
      while (j >= 0) {
        if (A[j] > A[i]) {
          left = j;
          break;
        }
        j--;
      }

      // search right special
      var right = 0;
      var k = i + 1;
      while (k <= A.length - 1) {
        if (A[k] > A[i]) {
          right = k;
          break;
        }
        k++;
      }

      max = Math.max(left * right, max);
    }

    return max > 1000000007 ? 1000000007 : max;
  }
};
