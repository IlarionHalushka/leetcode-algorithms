module.exports = {
  isValidSudoku : function(A) {
    // THIS SOLUTION WORKS FOR DIFFERENT INPUT WHERE EACH
    // ELEMENT IN ARRAY IS A "BOX":

    // // check each box for uniquness
    // for (var i = 0; i < A.length; i++) {
    //     var boxHash = {};

    //     for (var j = 0; j < A[i].length; j++) {
    //         if (A[i][j] === '.') continue;
    //         if (boxHash[A[i][j]]) return 0;
    //         boxHash[A[i][j]] = true;
    //     }
    // }

    // // check rows and columns
    // var rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    // var columns = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    // // 0 1 2
    // // 3 4 5
    // // 6 7 8
    // var box = 0;

    // for (var i = 0; i < 3; i++) {
    //     for (var j = 0; j < 3; j++) {
    //         var index = 0;

    //         for (var l = i * 3; l < (i * 3) + 3; l++) {
    //             for (var k = j * 3; k < (j * 3) + 3; k++) {
    //                 var curr = A[box][index];
    //                 if (curr === '.') {
    //                     index++;
    //                     continue;
    //                 }
    //                 // row or column already have this digit
    //                 if (rows[l][curr] || columns[k][curr]) {
    //                     return [l,k,curr, index, box]
    //                     return 0;
    //                 }
    //                 // add to row and column current digit
    //                 rows[l][curr] = 1;
    //                 columns[k][curr] = 1;
    //                 index++;
    //             }
    //         }
    //         box++;
    //     }
    // }

    // THIS SOLUTION WORKS IF EACH ELEMENT IN ARRAY IS A ROW
    // Improvement rows and cols check could be done in a single loop: rows - [i][j], cols - [j][i]
    // rows have unique values
    for (var i = 0; i < A.length; i++) {
      var boxHash = {};
      for (var j = 0; j < A[i].length; j++) {
        if (A[i][j] === '.') continue;
        if (boxHash[A[i][j]]) return 0;
        boxHash[A[i][j]] = true;
      }
    }
    // cols have unique values
    for (var i = 0; i < A[0].length; i++) {
      var boxHash = {};
      for (var j = 0; j < A[0].length; j++) {
        if (A[j][i] === '.') continue;
        if (boxHash[A[j][i]]) return 0;
        boxHash[A[j][i]] = true;
      }
    }
    // boxes have unique values
    for (var i = 0; i < 9; i += 3) {
      for (var j = 0; j < 9; j += 3) {
        var boxHash = {};
        // check that each box has unique digits
        for (var l = i; l < i + 3; l++) {
          for (var k = j; k < j + 3; k++) {
            if (A[l][k] === '.') continue;
            if (boxHash[A[l][k]]) return 0;
            boxHash[A[l][k]] = true;
          }
        }
      }
    }

    return 1;
  }
};
