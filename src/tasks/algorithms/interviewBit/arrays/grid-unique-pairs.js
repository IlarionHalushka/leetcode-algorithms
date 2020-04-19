module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  uniquePaths : function(A, B){
    var max = Math.max(A,B);
    var min = Math.max(A,B);

    var arr = [];

    for (var i = 0; i < max; i++) {
      arr[i] = [];
    }

    //init the grid matrix
    for (var i = 0; i < max; i++) {
      arr[0][i] = 1;
    }

    for (var j = 0; j < min; j++) {
      arr[j][0] = 1;
    }


    for (var i = 1; i < max; i++) {
      for (var j = 1; j < min; j++) {
        var prevUp = j === 0 ? 1 : arr[i][j - 1];
        var prevLeft = i === 0 ? 1 : arr[i - 1][j];

        arr[i].push(Number(prevUp) + Number(prevLeft));
      }
    }


    return arr[A-1][B-1];
  }
};
