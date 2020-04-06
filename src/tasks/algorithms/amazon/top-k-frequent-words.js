/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const wordsCountMap = new Map(); // word -> count

  for (word of words) {
    wordsCountMap.set(word, (wordsCountMap.get(word) || 0) + 1);
  }

  const wordsCountArray = [...wordsCountMap.entries()];

  // sort by count and alphabetically
  wordsCountArray.sort((a, b) => {
    if (a[1] === b[1]) {
      return ('' + a[0]).localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  return wordsCountArray.slice(0, k).map(entry => entry[0]);
};
