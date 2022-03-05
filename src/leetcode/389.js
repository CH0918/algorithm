export function findTheDifference(s, t) {
  // t 在 s重排后添加了一个字母
  // 遍历t数组，如果在s中存在则把当前项去掉
  let strArr = s.split('');
  for (let i = 0, len = strArr.length; i < len; i++) {
    t = t.replace(strArr[i], '');
  }
  return t;
}
export function findTheDifference2(s, t) {
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
  let sMap = covertToMap(s.split(''));
  let tMap = covertToMap(t.split(''));
  for (let key of tMap.keys()) {
    if (!sMap.has(key) || sMap.get(key) !== tMap.get(key)) {
      return key;
    }
  }
}
