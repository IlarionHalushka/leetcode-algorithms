module.exports = {
  //param A : integer
  //return a array of array of integers
  prettyPrint : function(A){
    var N = (A * 2) - 1;
    var k = 0;
    var temp = new Array(N);

    for (var i = 0; i < N;  i++) {
      temp[i] = [];
    }


    while (k < A) {
      for (var i = k; i < N - k;  i++) {
        for (var j = k; j < N - k;  j++) {
          temp[i][j] = A - k;
        }
      }
      k++;
    }


    return temp;
  }
};
