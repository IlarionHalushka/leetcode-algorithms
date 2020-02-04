/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  const res = Array(searchWord.length).fill([]);
  let currRes = products.sort((a, b) => a.localeCompare(b));
  let i = 0;
  const WORDS_IN_RESULT = 3;

  while (i < searchWord.length && currRes.length) {
    const nextRes = [];

    for (const product of currRes) {
      if (product[i] === searchWord[i]) {
        nextRes.push(product);
      }
    }

    res[i] = nextRes.slice(0, WORDS_IN_RESULT);
    currRes = nextRes; // on next steps search only among previous step results
    i++; // to next letter in searchWord
  }

  return res;
};
