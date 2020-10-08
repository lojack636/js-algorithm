// 1、输入一个非负整数 n，请你计算阶乘 n! 的结果末尾有几个 0。

function trailingZeroes(n) {
  let res = 0;
  let divisor = 5;
  while (divisor <= n) {
      res += Math.floor(n / divisor);
      divisor *= 5;
  }
  return res;
}
// ! 简化后
function trailingZeroes(n) {
  let res = 0;
  for (let d = n; d / 5 > 0; d = d / 5) {
      res += Math.floor(d / 5);
  }
  return res;
}
