module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  searchMatrix : function(A, B){
    var arr = [];

    // matrix to array
    for (var i = 0; i < A.length; i++) {
      for (var j = 0; j < A[0].length; j++) {
        arr.push(A[i][j]);
      }
    }

    // binary search
    var start = 0;
    var end = arr.length - 1;

    while (start <= end) {
      var mid = start + Math.floor((end - start) / 2);
      if (arr[mid] === B) {
        return 1;
      }
      if (arr[mid] > B) {
        end = mid - 1;
      }
      if (arr[mid] < B) {
        start = mid + 1;
      }

    }
    return 0;
  }
};
