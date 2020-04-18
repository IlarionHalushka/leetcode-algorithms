module.exports = {
  //param A : array of integers
  //return an integer
  repeatedNumber : function(arr){
    var bucket = {};

    for (var i = 0; i < arr.length; i++) {
      if (bucket[arr[i]]) {
        return arr[i];
      } else {
        bucket[arr[i]] = 1;
      }
    }
  }
};
