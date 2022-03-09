export function maxProfit(prices) {
  // 贪心算法求买卖股票的最佳时机
  // 求出局部最优解
  let totalProfit = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
}
