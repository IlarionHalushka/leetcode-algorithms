module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums : function(A, k) {
    var hash = {};

    // first window
    for (var i = 0; i < k; i++) {
      var curr = A[i];
      if (!hash.hasOwnProperty(curr)) {
        hash[curr] = 1;
      } else {
        hash[curr]++;
      }
    }

    var res = [Object.keys(hash).length];

    // starting from second window
    for (var start = 1; start <= A.length - k; start++) {
      // move window start +1
      var prevStart = A[start - 1];

      if (hash.hasOwnProperty(prevStart)) {
        if (hash[prevStart] === 1) {
          delete hash[prevStart];
        } else {
          hash[prevStart]--;
        }
      } else {
        hash[prevStart] = 1;
      }

      // move window end +1
      var nextEnd = A[start + k - 1];

      if (hash.hasOwnProperty(nextEnd)) {
        hash[nextEnd]++;
      } else {
        hash[nextEnd] = 1;
      }

      res.push(Object.keys(hash).length);
    }

    return res;
  }
};
