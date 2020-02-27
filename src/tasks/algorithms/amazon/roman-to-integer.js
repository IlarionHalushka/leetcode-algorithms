/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ]);

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map.get(s.charAt(i));
    if (i < s.length - 1 && curr < map.get(s[i+1]) ) {
      res += map.get(s[i+1]) - curr;
      i++;
    } else {
      res += curr;
    }
  }

  return res;
};
