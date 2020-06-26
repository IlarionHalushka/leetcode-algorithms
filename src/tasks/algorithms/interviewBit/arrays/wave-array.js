module.exports = {
  //param A : array of integers
  //return a array of integers
  wave : function(A){
    var wavedArr = [];
    var sortedA = A.sort(function(a,b) {return a-b});

    for (var i = 0; i < sortedA.length; i += 2) {
      if (i !== sortedA.length - 1) {
        wavedArr.push(sortedA[i+1]);
        wavedArr.push(sortedA[i]);
      } else {
        wavedArr.push(sortedA[i]);
      }
    }

    return wavedArr;
  }
};
