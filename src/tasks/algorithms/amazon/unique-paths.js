/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // init matrix m * n
  const grid = new Array(m);
  for (let i = 0; i < m; i++) {
    grid[i] = new Array(n);
  }

  // first row
  for (let i = 0; i < n; i++) {
    grid[0][i] = 1;
  }

  // first column
  for (let j = 0; j < m; j++) {
    grid[j][0] = 1;
  }

  // starting from [1][1], curr = sum(i - 1, j - 1)
  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      grid[j][i] = grid[j-1][i] + grid[j][i-1];
    }
  }
  return grid[m-1][n-1];
};
