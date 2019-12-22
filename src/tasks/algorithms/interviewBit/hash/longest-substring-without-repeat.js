module.exports = {
  //param A : string
  //return an integer
  lengthOfLongestSubstring : function(A) {
    var start = -1;
    var end = 0;
    var max = Number.MIN_VALUE;
    var hash = {};

    for (var i = 0; i < A.length; i++) {
      var curr = hash[A[i]];

      if (curr && curr > start) {
        start = curr - 1;
      }

      hash[A[i]] = i + 1;
      max = Math.max(i - start, max);
    }

    return max;
  }
};
