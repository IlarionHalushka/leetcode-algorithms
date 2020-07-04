module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  searchRange : function(A, B){
    var res = [-1, -1];

    // binary 1
    var start = 0;
    var end = A.length - 1;

    while (start <= end) {
      var mid = Math.floor((end + start) / 2);

      if (B === A[mid]) {
        res[0] = mid;
        end = mid - 1;
      } else if (B < A[mid]) {
        end = mid - 1;
      } else if (B > A[mid]) {
        start = mid + 1;
      }
    }

    // binary 2
    start = 0;
    end = A.length - 1;

    while (start <= end) {
      var mid = Math.floor((end + start) / 2);

      if (B === A[mid]) {
        res[1] = mid;
        start = mid + 1;
      } else if (B < A[mid]) {
        end = mid - 1;
      } else if (B > A[mid]) {
        start = mid + 1;
      }
    }


    return res;
  }
};
