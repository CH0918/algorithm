export function removeDuplicates(nums) {
  // 删除重复出现的数字,暴力法
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      len = nums.length;
      i--;
    }
  }
  return nums.length;
}
export function removeDuplicates2(nums) {
  // 双指针法
  // [0,1,1,2,3,3]
  let len = nums.length;
  if (len === 0) return;
  let slow = 0;
  for (let fast = 1; fast < len; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
