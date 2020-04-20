module.exports = {
  //param A : integer
  //return a array of integers
  getRow : function(N){
    var result = [1];

    for (var i = 0; i < N; i++) {
      var next = [1];

      for (var j = 1; j < result.length; j++) {
        next.push(result[j] + result[j-1]);
      }
      next.push(1);
      result = next.slice();
    }

    return result;
  }
};
