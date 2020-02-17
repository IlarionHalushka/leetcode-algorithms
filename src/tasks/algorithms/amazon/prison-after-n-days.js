var prisonAfterNDays = function(cells, N) {
  N = (N-1) % 14 + 1;

  while (N > 0) {
    let prev = cells[0];

    for (let i = 1; i <= 6; i++) {
      const nextPrev = cells[i];
      cells[i] = prev === cells[i+1] ? 1 : 0;
      prev = nextPrev;
    }
    // 0s and last are always = 0
    cells[0] = 0;
    cells[7] = 0;
    N--;
  }

  return cells;
};
