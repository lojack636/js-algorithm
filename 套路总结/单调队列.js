/* 

单调队列，就是一个「队列」，只是使用了一点巧妙的方法，使得队列中的元素单调递增（或递减）。
这个数据结构有什么用？可以解决滑动窗口的一系列问题

deque，即双端队列
*/
// ! 一般用于解决滑动窗口问题


/* 滑动窗口算法框架 */
function slidingWindow(s, t) {
  let queue=[];
/* 
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;
*/
  let left = 0, right = 0;
  let valid = 0; 
  while (right < s.length) {
      // c 是将移入窗口的字符
      // 右移窗口
      queue.push(s[right])
      right++;

      // 进行窗口内数据的一系列更新
      //!   ...

      /*** debug 输出的位置 ***/
      console.log("window: [%d, %d)\n", left, right);
      /********************/

      // 判断左侧窗口是否要收缩
      while ('window needs shrink') {
          // d 是将移出窗口的字符
          // let del = s[left];
          let del=s.shift()
          // 左移窗口
          left++;
          // 进行窗口内数据的一系列更新
          // !   ...
      }
  }
  return valid
}
// 滑动窗口的解答框架============

function maxSlidingWindow(nums,k) {
  let window=[];
  let res=[];
  for (let i = 0; i < nums.length; i++) {
      if (i < k - 1) { //先把窗口的前 k - 1 填满
          window.push(nums[i]);
      } else { // 窗口开始向前滑动
          window.push(nums[i]);
          res.push(Math.max(window));
          window.shift(nums[i - k + 1]);// nums[i - k + 1] 就是窗口最后的元素
      }
  }
  return res;
}