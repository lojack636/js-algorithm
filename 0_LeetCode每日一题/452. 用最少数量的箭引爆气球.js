function findMinArrowShots(arr) {
  if (arr.length == 0) return 0;
  arr.sort((a,b)=>a[1] - b[1])
  let end = arr[0][1];
  let count = 1;
  for (let interval of arr) {
      let start = interval[0];
      if (start > end) {
          count++;
          // 下一个
          end = interval[1];
      }
  }
  return count;
}