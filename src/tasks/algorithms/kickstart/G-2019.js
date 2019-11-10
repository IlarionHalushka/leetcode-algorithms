// N - number of pages
// M - torn pages []
// Q - readers []
const pagesRead = (N, M, Q) => {
  const tornPages = new Set(M);
  let count = 0;

  for (let i = 1; i <= N ; i++) {
    for (let j = 0; j <= Q.length ; j++) {
      if (i % Q[j] === 0 && !tornPages.has(i)) {
        count++;
      }
    }
  }

  return count;
};
