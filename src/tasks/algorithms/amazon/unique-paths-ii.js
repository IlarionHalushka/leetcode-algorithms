var uniquePathsWithObstacles = function(grid) {
  const r = grid.length;
  const c = grid[0].length;
  // mark all obstacles as null
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = null;
      }
    }
  }
  // if first or last is obstacle (null) then there is no way to get to the end
  if (grid[0][0] === null || grid[r - 1][c - 1]) {
    return 0;
  }
  grid[0][0] = 1;

  // iterate first: col if previous is obstacle then current is obstacle too
  for (let i = 1; i < r; i++) {
    if (grid[i][0] !== null) {
      grid[i][0] = grid[i-1][0] === null ? null : grid[i-1][0];
    }
  }
  // first row: if previous is obstacle then current is obstacle too
  for (let j = 1; j < c; j++) {
    if (grid[0][j] !== null) {
      grid[0][j] = grid[0][j-1] === null ? null : grid[0][j-1];
    }
  }

  // iterate row x column
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      //check if current is obstacle
      if (grid[i][j] === null) {
        continue;
      }
      // if "upper" and "left" items are obstacles
      // then there is no way to get to current point, so mark current as obstacle
      if (grid[i-1][j] === null && grid[i][j-1] === null) {
        grid[i][j] = null;
      } else {
        // sum "upper" and "left" items
        grid[i][j] = (grid[i][j-1] || 0) + (grid[i-1][j] || 0);
      }
    }
  }

  return grid[r - 1][c - 1];
};

// Best solution among discussions
// public int uniquePathsWithObstacles(int[][] obstacleGrid) {
//   int width = obstacleGrid[0].length;
//   int[] dp = new int[width];
//   dp[0] = 1;
//   for (int[] row : obstacleGrid) {
//     for (int j = 0; j < width; j++) {
//       if (row[j] == 1)
//         dp[j] = 0;
//       else if (j > 0)
//         dp[j] += dp[j - 1];
//     }
//   }
//   return dp[width - 1];
// }
