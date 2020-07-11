module.exports = {
  //param A : integer
  //return an integer
  sqrt : function(A){
    if (A === 1) return 1;

    var start = 0;
    var end = 0;

    // find startinitial start and end boundaries for binary search
    // example A = 125:
    //   125 / 2 = 62 / 2 = 31 / 2 = 15 / 2 = 7
    //   if 7*7 = 49 < 125
    //   then end = 15, start = 7
    var k = Math.floor(A / 2);
    end = k;

    while ((k * k) > A) {
      end = k;
      k = Math.floor(k / 2);
      start = k;
    }

    if (start * start === A) {
      return start;
    }
    if (end * end === A) {
      return end;
    }

    // do binary search
    var minDiff = Number.MAX_VALUE;
    var sqrt = 1;

    while (start <= end) {
      var mid = Math.floor((end + start) / 2);

      if (mid * mid === A) {
        return mid;
      }

      var diff = A - (mid * mid);
      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        sqrt = mid;
      }

      if (mid * mid > A) {
        end = end - 1;
      } else if (mid * mid < A) {
        start = start + 1;
      }
    }

    return sqrt;
  }
};
