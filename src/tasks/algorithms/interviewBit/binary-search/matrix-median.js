// var countLEQ = function (matrix, x) {
//   var n = matrix.length;
//   var count = 0;
//   var j;
//
//   matrix.forEach(function(row){
//     for(j = 0; j < n && row[j] <= x; j++){ ;}
//     count += j
//   });
//   return count;
// };

module.exports = {
  // getCountOfElementsLessThan: function(n, arr){
  //   var start = 0;
  //   var end = arr.length - 1;
  //   var count = 0;
  //
  //   while (start <= end) {
  //     var mid = Math.floor((start + end) / 2);
  //
  //     if (arr[mid] === n) {
  //       return mid;
  //     } else if (arr[mid] < n) {
  //       count = mid + 1;
  //       start = mid + 1;
  //     } else if (arr[mid] > n) {
  //       end = mid - 1;
  //     }
  //   }
  //   return count;
  // },

  findMedian : function(A){
    // checkc that N*M is odd
    if ((A.length * A[0].length) % 2 === 0 && A.length !== 1) {
      return 0;
    }

    // find start = min
    var start = Number.MAX_VALUE;
    for (var i = 0; i < A.length; i++) {
      start = Math.min(start, A[i][0]);
    }
    // find end = max
    var end = Number.MIN_VALUE;
    for (var j = 0; j < A.length; j++) {
      end = Math.max(end, A[j][A[0].length - 1]);
    }

    var expectedCount = Math.floor(((A.length * A[0].length) + 1) / 2);

    while (start < end) {
      var mid = (start + (end - start) / 2) >> 0;
      var place = 0;

      for(var i = 0; i < A.length; i++) {
        for(var j = 0; j < A[0].length; j++) {
          if (A[i][j] <= mid) {
            place++
          } else {
            break;
          }
        }
      }

      if (place < expectedCount) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  }
};
