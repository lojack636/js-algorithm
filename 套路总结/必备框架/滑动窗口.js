/* 
! 滑动窗口
*/
// !  1.滑动窗口基础模板
function slideWindow(){
  let left = 0, right = 0;
  while (right < s.size()) {
      // 增大窗口
      window.push(s[right]);
      right++;

      while ('window needs shrink') {
          // 缩小窗口
          window.pop(s[left]);
          left++;
      }
  }
}

// ! 2 终极模板！！！

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