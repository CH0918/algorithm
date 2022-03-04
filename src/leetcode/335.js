export function intersect(nums1, nums2) {
  // 1.建立map num->count
  // 2.遍历map，比较两边数字出现次数，取小的次数push到数组
  function covertToMap(arr) {
    let map = new Map();
    arr.forEach((item) => {
      if (map.has(item)) {
        let count = map.get(item) + 1;
        map.set(item, count);
      } else {
        map.set(item, 1);
      }
    });
    return map;
  }
  let map1 = covertToMap(nums1);
  let map2 = covertToMap(nums2);

  let resultArr = [];
  for (let key of map1.keys()) {
    let count1 = map1.get(key) || 0;
    let count2 = map2.get(key) || 0;
    let minCount = count1 < count2 ? count1 : count2;
    for (let i = 0; i < minCount; i++) {
      resultArr.push(key);
    }
  }
  return resultArr;
}
