// NOT MY SOLUTION
// public int minPathSum(int[][] grid) {
//   int m = grid.length;
//   int n = grid[0].length;
//   for(int i = 1;i<n;i++){
//     grid[0][i] += grid[0][i-1];
//   }
//   for(int i = 1;i<m;i++){
//     grid[i][0] += grid[i-1][0];
//     for(int j = 1;j<n;j++){
//       grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j]);
//     }
//   }
//   return grid[m-1][n-1];
// }

// MY SOLUTION
var minPathSum = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  let map = new Map();
  map.set('0#0', grid[0][0]);

  while (map.size) {
    const nextMap = new Map();
    let minPath = null;

    for (const [coordinates, count] of map.entries()) {
      const [i, j] = coordinates.split('#').map(item => Number(item));

      // last element
      if (i === grid.length - 1 && j === grid[0].length - 1) {
        minPath = minPath !== null ? Math.min(minPath, count) : count;
      }

      // go down
      if (i < grid.length - 1) {
        // if already seen this element, then put minimum of paths
        const min = Math.min(nextMap.get(`${i+1}#${j}`) || Number.MAX_VALUE, count + grid[i+1][j]);
        nextMap.set(`${i+1}#${j}`, min);
      }
      // go right
      if (j < grid[0].length - 1) {
        // if already seen this element, then put minimum of paths
        const min = Math.min(nextMap.get(`${i}#${j+1}`) || Number.MAX_VALUE, count + grid[i][j+1]);
        nextMap.set(`${i}#${j+1}`, min);
      }
    }

    if (minPath !== null) {
      return minPath;
    }
    map = nextMap;
  }
};

// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3], [4,5,6]]));
