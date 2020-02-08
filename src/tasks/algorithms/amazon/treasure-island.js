const assert = require('assert');

const treasureIsland = (A) => {
  const directions = [[0,1], [1,0], [-1,0], [0,-1]];
  const visited = new Set();
  visited.add(`0_0`);
  let next = [[0,0]];
  let steps = 1;

  while (next.length) {
    const temp = [];

    for (const item of next) {
     for (const d of directions) {
       const [x, y] = [item[0] + d[0], item[1] + d[1]];

       // check boundaries
       if (x >= 0 && y >= 0 && x < A[0].length && y < A.length) {
         const curr = A[x][y];

         if (curr === 'T') {
           return steps;
         }
         if (!visited.has(`${x}_${y}`) && curr !== 'X') {
           visited.add(`${x}_${y}`);
           temp.push([x, y]);
         }
       }
     }
    }
    steps++;
    next = temp;
  }

  return -1;
};

assert.strictEqual(treasureIsland([
  ['O', 'O', 'O', 'O'],
  ['X', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O'],
  ['T', 'X', 'X', 'O']]
), 5);

assert.strictEqual(treasureIsland([
  ['O', 'O', 'O', 'T'],
  ['X', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O'],
  ['T', 'X', 'X', 'O']]
), 3);

assert.strictEqual(treasureIsland([
  ['O', 'O', 'X', 'T'],
  ['X', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O'],
  ['T', 'X', 'X', 'O']]
), 5);

assert.strictEqual(treasureIsland([
  ['O', 'O', 'X', 'T'],
  ['X', 'O', 'X', 'O'],
  ['O', 'O', 'T', 'O'],
  ['T', 'X', 'X', 'O']]
), 4);

assert.strictEqual(treasureIsland([
  ['O', 'T', 'X', 'T'],
  ['X', 'O', 'X', 'O'],
  ['O', 'O', 'T', 'O'],
  ['T', 'X', 'X', 'O']]
), 1);

assert.strictEqual(treasureIsland([
  ['O', 'O', 'X', 'T'],
  ['X', 'O', 'X', 'O'],
  ['X', 'O', 'X', 'O'],
  ['T', 'X', 'X', 'O']]
), -1);

