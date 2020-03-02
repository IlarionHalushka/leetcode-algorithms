var numIslands = function(grid) {
  const set = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        set.add(`${i}-${j}`);
      }
    }
  }

  const directions = [[0,1], [1,0], [-1,0], [0,-1]];
  let islands = 0;

  while (set.size) {
    let q = [set.values().next().value];
    set.delete(q[0]);

    const next = [];

    while (q.length && set.size) {
      const curr = q.shift().split('-');

      for (const d of directions) {
        const [x,y] = [Number(curr[0]) + d[0], Number(curr[1]) + d[1]];

        if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
          if (grid[x][y] === '1') {
            grid[x][y] = '0';
            set.delete(`${x}-${y}`);
            next.push(`${x}-${y}`);
          }
        }
      }
      q = next;
    }
    islands++;
  }

  return islands;
};

// A little bit better solution, but still recursive one looks nicer
var numIslands = function(grid) {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0';
        let q = [[i, j]];

        while (q.length) {
          const next = [];
          const curr = q.shift();

          for (const d of directions) {
            const [x, y] = [curr[0] + d[0], curr[1] + d[1]];

            if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
              if (grid[x][y] === '1') {
                grid[x][y] = '0';
                next.push([x, y]);
              }
            }
          }
          q.push(...next);
        }
        islands++;
      }
    }
  }

  return islands;
};
