// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// !动态规划思想   --由底向上通过迭代解决问题

const numWays=(n)=>{
  let over=1000000007;
  if(n<=1) return 1; 
  let arr=[1,1,2];
  // 每加一级，可以一步跳上也可以两步跳上
  for(let i=2;i<=n;i++){
      arr[i]=(arr[i-1]+arr[i-2])%over;
  }
  return arr[n];
}

//!  也是斐波那契数列变形
var numWays = function(n) {
  let n1 = 1, n2 = 1, sum;
  for(let i = 0; i < n; i++){
      sum = (n1 + n2) % 1000000007;
      n1 = n2;
      n2 = sum;
  }
  return n1;
};