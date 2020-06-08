module.exports = {
  //param A : array of integers
  //return an integer
  maxArr : function(A){
    var max1 = -100000000000;
    var max2 = -100000000000;
    var min1 = Number.MAX_VALUE / 2;
    var min2 = Number.MAX_VALUE / 2;

    // BRUTE FORCE SOLUTION

    // for (var i = 0; i < A.length; i++) {
    //     for (var j = i + 1; j < A.length; j++) {
    //         max = Math.max(max, (Math.abs(A[i] - A[j]) + Math.abs(i - j) ));
    //     }
    // }



    // OPTIMAL SOLUTION EXPLANATION

    // Case 1: A[i] > A[j] and i > j
    // |A[i] - A[j]| = A[i] - A[j]
    // |i -j| = i - j
    // hence, f(i, j) = (A[i] + i) - (A[j] + j)

    // Case 2: A[i] < A[j] and i < j
    // |A[i] - A[j]| = -(A[i]) + A[j]
    // |i -j| = -(i) + j
    // hence, f(i, j) = -(A[i] + i) + (A[j] + j)

    // Case 3: A[i] > A[j] and i < j
    // |A[i] - A[j]| = A[i] - A[j]
    // |i -j| = -(i) + j
    // hence, f(i, j) = (A[i] - i) - (A[j] - j)

    // Case 4: A[i] < A[j] and i > j
    // |A[i] - A[j]| = -(A[i]) + A[j]
    // |i -j| = i - j
    // hence, f(i, j) = -(A[i] - i) + (A[j] - j)

    // Note: 1 and 2, 3 and 4 are basically the same
    //   because we can exchange i->j and j->i

    // OPTIMAL SOLUTION
    for (var i = 0; i < A.length; i++) {
      max1 = Math.max(A[i] + i, max1);
      min1 = Math.min(A[i] + i, min1);

      max2 = Math.max(A[i] - i, max2);
      min2 = Math.min(A[i] - i, min2);
    }

    // return [max1, min1, max2, min2]

    return Math.max(max1 - min1, max2 - min2);
  }
};
