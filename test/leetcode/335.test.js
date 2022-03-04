// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
import { intersect } from '../../src/leetcode/335';
describe('intersect', () => {
  it('intersect', () => {
    let nums1 = [1, 2, 2, 1],
      nums2 = [2, 2];

    let nums3 = [4, 9, 5],
      nums4 = [9, 4, 9, 8, 4];
    expect(intersect(nums1, nums2)).toEqual([2, 2]);
    expect(intersect(nums3, nums4)).toEqual([4, 9]);
  });
});
