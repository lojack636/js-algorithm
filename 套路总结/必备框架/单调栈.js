/* 
单调栈实际上就是栈，只是利用了一些巧妙的逻辑，使得每次新元素入栈后，
栈内的元素都保持有序（单调递增或单调递减）。
*/

// * 寻找下一个更大的数
// 给你一个数组 [2,1,2,4,3]，你返回数组 [4,2,4,-1,-1]。


// ! 使用单调栈， 单调递减
function nextGreaterElement(nums) {
 let ans=new Array(nums.length); // 存放答案的数组
 let stack=[];
  for (let i = nums.length - 1; i >= 0; i--) { // 倒着往栈里放
      while (stack.length!==0 && stack[stack.length-1] <= nums[i]) { // 栈末尾数字小于判定数字
          stack.pop(); // 小值删除
      }
      ans[i] = stack.length==0 ? -1 : stack[stack.length-1]; // 这个元素身后的第一个高个
      stack.push(nums[i]); // 进队，接受之后的身高判定吧！
  }
  return ans;
}
const nums=[2,1,2,4,3]

console.log(nextGreaterElement(nums));

//! 问题2 当前距离 Next Greater Number 的距离

function dailyTemperatures(T) {
  let ans=new Array(T.length); 
  let stack=[];// ! 这里放索引
   for (let i = T.length - 1; i >= 0; i--) { // 倒着往栈里放
       while (stack.length!==0 && T[stack.slice(-1)[0]] <= T[i]) { 
           stack.pop(); // 小值删除
       }
       ans[i] = stack.length==0 ? 0 : stack.slice(-1)[0] - i; //得到索引间距
       stack.push(i); // 索引进栈
   }
   return ans;
 }
console.log(dailyTemperatures( [73, 74, 75, 71, 69, 72, 76, 73]));

// ! 模拟环形数组
function CircularArray(){
  let arr =[1,2,3,4,5];
let n = arr.length, index = 0;
while (true) {
    console.log(arr[index % n]);
    index++;
}}

function nextGreaterElements(nums) {
  let n = nums.length;
  let res=new Array(n); // 存放结果
  let s=[];//始终递减
  // 假装这个数组长度翻倍了
  for (let i=(2*n-1); i>= 0; i--) {
      while (s.length!==0 && s.slice(-1)[0] <= nums[i % n]){
        s.pop();
      }
      res[i % n] = s.length===0 ? -1 : s.slice(-1)[0];
      s.push(nums[i % n]);
  }
  return res;
}
console.log(nextGreaterElements([2,1,2,4,3]));//[ 4, 2, 4, -1, 4 ]