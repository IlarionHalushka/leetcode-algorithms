module.exports = {
  prevSmaller : function(A) {
    var s = [];
    var r = [];

    for (var i = 0; i < A.length; i++) {
      var curr = A[i];

      for (var j = s.length - 1; j >= -1; j--) {
        if (j === -1) {
          r.push(-1);
          break;
        } else if (curr > s[j]) {
          r.push(s[j]);
          break;
        } else if (curr < s[j]) {
          // for case [4 5 2] when we reach "2" then we don't care about 4 and 5
          s.pop();
        }
      }

      if (curr !== s[s.length - 1]) s.push(curr);
    }

    return r;
  }
};
