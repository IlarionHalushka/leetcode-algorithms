
module.exports = {
  //param A : array of integers
  //return an integer
  maxSubArray : function(A){
    var max = A[0];
    var tempMax = 0;

    for (var i = 0; i < A.length; i++) {
      tempMax += A[i];

      if (tempMax > max) {
        max = tempMax;
      }

      if (tempMax < 0) {
        tempMax = 0;
      }
    }

    return max;
  }
};
