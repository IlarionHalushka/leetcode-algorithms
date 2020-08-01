// MY SOLUTION minutes: 10/28, score: 366/375
module.exports = {
  diffPossible : function(A, k){
    var hash = {};

    for (var i = 0; i < A.length; i++) {
      if (hash.hasOwnProperty(A[i] + k) || hash.hasOwnProperty(A[i] - k)) {
        return 1;
      }
      if (!hash.hasOwnProperty(A[i])) {
        hash[A[i]] = true;
      }
    }

    return 0;
  }
};
