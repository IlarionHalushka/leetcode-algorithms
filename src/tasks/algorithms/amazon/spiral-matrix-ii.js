var generateMatrix = function(k) {
  if (k < 1) return [];

  const moves = [k - 1, k - 1, k - 1];
  let move = k - 2;

  while (move > 0) {
    moves.push(...[move, move]);
    move--;
  }

  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(Array(k));
  }
  let val = 2;
  const directions = [[0,1], [1,0], [0,-1], [-1,0]]; // right, down, left, up
  let i = 0;
  let j = 0;
  res[0][0] = 1;

  for (let m = 0; m < moves.length; m++) {
    let steps = moves[m];
    const direction = directions[m % directions.length];

    while (steps > 0) {
      i += direction[0];
      j += direction[1];
      res[i][j] = val;
      val++;
      steps--;
    }
  }

  return res;
};

console.log(generateMatrix(0));
console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
