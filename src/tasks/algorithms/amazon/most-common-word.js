var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().match(/\b(\w+)\b/g);
  // const words = paragraph.toLowerCase().replace(/[^a-zA-z ]/g, '').split(' ');
  const bannedHash = new Set(banned);
  const wordsMap = new Map();
  let res = '';
  let maxCount = Number.MIN_VALUE;

  for (let word of words) {
    if (bannedHash.has(word)) {
      continue;
    }

    const count = wordsMap.get(word) + 1 || 1;

    if (count > maxCount) {
      maxCount = count;
      res = word;
    }

    wordsMap.set(word, count);
  }

  return res;
};
