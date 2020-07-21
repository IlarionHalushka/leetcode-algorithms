module.exports = {
  singleNumber : function(A) {
    A.sort(function(a,b) { return a - b });

    for (var i = 0; i < A.length - 2; i += 3) {
      if ((A[i] ^ A[i+1]) || (A[i] ^ A[i+2])) return A[i];
    }

    return A[A.length - 1];
  }
};
