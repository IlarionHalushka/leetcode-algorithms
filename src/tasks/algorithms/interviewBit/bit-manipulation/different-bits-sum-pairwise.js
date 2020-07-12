module.exports = {
  cntBits1 : function(A){
    var res = 0;
    var a = []

    for (var i = 0; i < A.length - 1; i++) {
      for (var j = i + 1; j < A.length; j++) {
        var tempI = A[i];
        var tempJ = A[j];
        var countDiff = 0;

        while (tempI > 0 || tempJ > 0) {
          if (tempI === 0 && (tempJ & 1)) {
            countDiff++;
          } else if (tempJ === 0 && (tempI & 1)) {
            countDiff++;
          } else if ((tempI & 1) !== (tempJ & 1)) {
            countDiff++;
          }

          tempI = tempI >> 1;
          tempJ = tempJ >> 1;
        }

        res += countDiff * 2;
      }
    }

    return res;
  },
  cntBits2 : function(A){
    var res = 0;
    var a = []

    for (var i = 0; i < A.length - 1; i++) {
      for (var j = i + 1; j < A.length; j++) {
        var temp = A[i] ^ A[j];
        var countDiff = 0;

        while (temp > 0) {
          if ((temp & 1)) {
            countDiff++;
          }
          temp = temp >> 1;
        }

        res += countDiff * 2;
      }
    }

    return res;
  },
  cntBits3 : function(A){
    var res = 0;
    var mask = 1;

    for (var b = 0; b < 32; b++) {
      var bitCount = 0;

      for (var i = 0; i < A.length; i++) {
        if ((A[i] & (1 << b))) {
          bitCount++;
        }
      }

      res += bitCount*(A.length - bitCount) *2;
      res = res % 1000000007;
    }

    return res;
  }
};
