module.exports = {
  // OvERFLOWS on large inputs :(
  // repeatedNumber : function(A){
  //     var len = A.length;
  //     var Sum_N = (len * (len + 1) ) / 2;
  //     var Sum_NSq = (len * (len + 1) * (2 * len + 1) ) / 6;

  //     for(var i = 0; i < A.length; i++) {
  //       Sum_N -= A[i];
  //       Sum_NSq -= (A[i] * A[i]);
  //     }

  //     missingNumber = (Sum_N + Sum_NSq / Sum_N) / 2;
  //     repeating= missingNumber - Sum_N;

  //     return [repeating, missingNumber];
  // }
  repeatedNumber : function(A){
    var len = A.length;
    // var Sum_N = (len * (len + 1) ) / 2;
    var Sum_N = 0;
    var bucket = new Array(len);
    var repeating;

    for (var i = 0; i < A.length; i++) {
      if (bucket[A[i]] === 1) {
        repeating = A[i];
      } else {
        bucket[A[i]] = 1;
      }
      Sum_N += i + 1 - A[i];
    }

    var missingNumber = repeating + Sum_N;

    return [repeating, missingNumber];
  }
};
