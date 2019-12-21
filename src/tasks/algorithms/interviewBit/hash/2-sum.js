module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  twoSum : function(A, k) {
    var hash = {};

    for (var i = 0; i < A.length; i++) {
      var curr = A[i];

      if (hash[k - curr]) {
        // + 1 because of requirements: start index from 1, not 0
        return [Number(hash[k - curr]) + 1, i + 1];
      } else if (!hash[curr]) {
        hash[curr] = String(i);
      }
    }

    return [];
  }
};
