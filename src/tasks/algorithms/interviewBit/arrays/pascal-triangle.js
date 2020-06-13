module.exports = {
  //param A : integer
  //return a array of array of integers
  solve : function(N){
    var result = Array(N);
    result[0] = [1];

    for (var i = 0; i < N-1; i++) {
      var next = [1];

      for (var j = 1; j < result[i].length; j++) {
        next.push(result[i][j] + result[i][j-1]);
      }
      next.push(1);
      result[i+1] = next;
    }

    return result;
  }
};
