module.exports = {
  //param A : array of integers
  //return an integer
  findMinXor : function(A){
    var min = Number.MAX_VALUE;
    A = A.sort(function(a,b) { return a - b; });

    for (var i = 1; i < A.length; i++) {
      min = Math.min(A[i] ^ A[i-1], min);
    }
    return min;
  }
};
