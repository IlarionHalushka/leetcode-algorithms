/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;

  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      const profit = prices[i] - min;

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};
