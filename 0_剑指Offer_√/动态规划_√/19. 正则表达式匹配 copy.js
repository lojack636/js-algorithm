/* 
请实现一个函数用来匹配包含'. '和'*'的正则表达式。
字符'.'表示任意一个字符，
而'*'表示它前面的字符可以出现任意次（含0次）。
在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。

输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 
在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

*/
const  tar="aaa" ,reg="ab*ac*a"
// var isMatch = function(target, reg) {
// let pointer=0,flag=true;
// for(let i=0;i<target.length;i++){
//   if(flag===false) break;
//   if(reg.charAt(pointer+1)==="*"){
//     pointer+=2
//     continue
//   }
//   if(reg.charAt(pointer)===target.charAt(i)){
//     pointer++
//     continue 
//   }
//   if(reg.charAt(pointer)==="."){
//     pointer++ 
//     continue}
//   }

// };

/* 
! 方法1:直接使用正则
var isMatch = function(target, reg) {
  let Reg=RegExp("^("+reg+")$");
  console.log(Reg.source);
  return Reg.test(target);
};
*/




  console.log(isMatch(tar,reg))