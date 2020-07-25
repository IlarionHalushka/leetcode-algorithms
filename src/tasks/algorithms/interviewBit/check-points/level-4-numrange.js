module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  numRange : function(A, B, C){
    var i = 0;
    var j = 0;
    var count = 0;
    var sum = 0;

    while (i < A.length) {
      sum += A[j];

      if (sum <= C && sum >= B) {
        count++;
        j++;
      } else if (sum > C) {
        sum = 0;
        i++;
        j = i;
      } else if (sum < B) {
        j++;
      }
      if (j===A.length) {
        sum = 0;
        i++;
        j = i;
      }
    }

    return count;
  }
};
