const str: number[][] = [
  [1, 8, 4, 6],
  [0, 4, 3, 2],
  [6, 7, 8, 5],
  [1, 2, 3, 4]
];

const str2: number[][] = [
  [1, 6, 0, 1],
  [2, 7, 4, 8],
  [3, 8, 3, 4],
  [4, 5, 2, 6]
];

// 0-0 0-3 3-3 3-0

// START = 0; END = N;

// repeat N-1 times:
// start =START till end < END - 1; (4-1=3)
//    lt -> rt -> rb -> lb -> lt
//
// START++, END--

const rotateMatrix = (s: number[][]): number[][] => {
  for (let n = 0; n < s.length / 2; n++) {
    const first = n;
    const last = s.length - 1 - n;

    for (let i = first; i < last; i++) {
      const offset = i - first;
      const tmp = s[first][i];
      s[first][i] = s[last - offset][first];
      s[last - offset][first] = s[last][last - offset];
      s[last][last - offset] = s[i][last];
      s[i][last] = tmp;
    }
  }

  return s;
};

console.log(str);
console.log(rotateMatrix(str));

console.time();
for (let i = 1; i < 10000000; i++) {
  // rotateMatrix(str);
}
console.timeEnd();
