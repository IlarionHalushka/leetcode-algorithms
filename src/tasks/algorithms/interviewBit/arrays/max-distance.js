module.exports = {
  //param A : array of integers
  //return an integer
  maximumGap : function(A){
    if (A.length === 1) return 0;

    var objA = [];

    for (var i = 0; i < A.length; i++) {
      objA.push({ value: A[i], index: i })
    }

    objA.sort(function(a,b) {return a.value - b.value});


    const rightMax = new Array(objA.length);

    for (var j = objA.length - 1; j >= 0; j--) {
      rightMax[j] = Math.max(rightMax[j+1] || 0, objA[j].index);
    }

    var max = 0;

    for (var i = 0; i < objA.length; i++) {
      max = Math.max(max, rightMax[i] - objA[i].index);
    }

    // for (var i = 0; i < A.length; i++) {
    //     for (var j = A.length - 1; j >= 0; j--) {
    //         if (A[i] <= A[j]) {
    //             max = Math.max(max, j - i);
    //             break;
    //         }
    //     }
    // }

    return max;
  }
};
