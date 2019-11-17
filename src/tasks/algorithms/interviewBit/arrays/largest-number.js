module.exports = {
  // FIRST APPROACH (CORRECT)
  largestNumber : function(A){
    var S = [];

    // convert values to strings because will need to concat and result may exceed MAX_INTEGER value
    for (var k = 0; k < A.length; k++) {
      S.push(String(A[k]));
    }

    S.sort(function(a,b) {
      // concat two strings and see which sum is bigger
      return Number(b + a) - Number(a + b);
    });

    var res = S.join('');

    // handle case when all zeros
    return res[0] === '0' ? 0 : res;
  },


  // SECOND APPROACH - WRONG RESULTS IN SOME CASES :(
  largestNumberWRONG : function(A){
    var S = [];

    for (var k = 0; k < A.length; k++) {
      S.push(String(A[k]));
    }

    S.sort(function(a,b) {
      // 9 and 5
      if (a.length === b.length) {
        return Number(b) - Number(a);
      }

      var maxLength = Math.max(a.length, b.length);

      for (var i = 0; i < maxLength; i++) {
        var ai = Number(a[i] || a[0]);
        var bi = Number(b[i] || b[0]);

        // 300 and 30 -> 30300, 30 goes first
        if (i === maxLength - 1 && ai === 0 && bi === 0) {
          return ai - bi;
        }

        // 34 and 35 -> 3534
        if (ai !== bi) {
          return bi - ai;
        }
        // ai === bi -> continue to next index
      }

      return Number(b) - Number(a);
    });

    var res = S.join('');

    return res[0] === '0' ? 0 : res;
  }
};
