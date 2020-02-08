var updateMatrix = function(A) {
  let step = 1;
  let visited = new Set();
  const q = [];
  const directions = [[0,1], [1,0], [-1,0], [0,-1]];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 0) {
        q.push([i,j]);
        visited.add(`${i}_${j}`);
      }
    }
  }

  while (q.length) {
    let size = q.length;

    while (size) {
      const curr = q.shift();

      for (const d of directions) {
        const [x, y] = [curr[0] + d[0], curr[1] + d[1]];

        if (x >= 0 && y >= 0 && x < A.length && y < A[0].length) {
          if (!visited.has(`${x}_${y}`)) {
            visited.add(`${x}_${y}`);
            A[x][y] = step;
            q.push([x,y]);
          }
        }
      }
      size--;
    }
    step++;
  }
  return A;
};
