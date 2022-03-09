import { maxProfit } from '../../src/leetcode/122';
describe('maxProfit', () => {
  it('maxProfit', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const prices2 = [1, 2, 3, 4, 5];
    const prices3 = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(7);
    expect(maxProfit(prices2)).toBe(4);
  });
});
