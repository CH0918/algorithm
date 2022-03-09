import { removeDuplicates } from '../../src/leetcode/26';
describe('removeDuplicates', () => {
  it('removeDuplicates', () => {
    let nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums).toEqual([1, 2]);

    let nums2 = [0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4];
    // removeDuplicates(nums2);
    expect(removeDuplicates(nums2)).toBe(5);
    expect(nums2).toEqual([0, 1, 2, 3, 4]);
  });
});
