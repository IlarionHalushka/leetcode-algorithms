var exist = function(A, word) {
  if (!A || !A.length || !A[0].length || !word) {
    return false;
  }

  const directions = [[0,1], [1,0], [-1,0], [0,-1]];

  const search = (M, i, j, start) => {
    if (start >= word.length) {
      return true;
    }

    // if i,j are invalid boundaries
    if (i < 0 || j < 0 || i === M.length || j === M[0].length) {
      return false;
    }
    // if letters don't match
    if (M[i][j] !== word[start]) {
      return false;
    }

    // set i,j cell to null to avoid using same element twice
    M[i][j] = null;

    // check each direction up, down, left, right
    for (const d of directions) {
      // if any of search returns true - then word is found
      if (search(M, i + d[0], j + d[1], start + 1)) {
        return true;
      }
    }
    // trick to avoid copying matrix
    M[i][j] = word[start];
  }


  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (search(A, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
