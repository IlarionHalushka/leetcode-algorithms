/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  if (grid.length === 0 && grid[0].length === 0) return 0;

  const q = [];
  let freshCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) freshCount++;
      if (grid[i][j] === 2) q.push([i, j]);
    }
  }

  let steps = 0;
  const directions = [[0,1], [1, 0], [0,-1], [-1, 0]];

  while (q.length && freshCount > 0) {
    let qSize = q.length;

    // take all oranges that have rotten on previous iteration and check their neighbors
    while (qSize--) {
      const curr = q.shift();

      for (const d of directions) {
        const [x, y] = [curr[0] + d[0], curr[1] + d[1]];

        // if x, y are in valid bounds
        if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
          // if fresh, make it rotten
          if (grid[x][y] === 1) {
            freshCount--;
            grid[x][y] = 2;
            q.push([x, y]);
          }
        }
      }
    }

    steps++;
  }

  return freshCount === 0 ? steps : -1;
};
