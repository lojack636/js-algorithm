/* 
「最优子结构」是某些问题的一种特定性质，并不是动态规划问题专有的。
也就是说，很多问题其实都具有最优子结构，只是其中大部分不具有重叠子问题，
所以我们不把它们归为动态规划系列问题而已。

! 想满足最优子结，子问题之间必须互相独立。全校的最大分数差可能出现在两个班之间，
! 显然子问题不独立，所以这个问题本身不符合最优子结构。

* 那么遇到这种最优子结构失效情况，怎么办？策略是：改造问题。

前文 动态规划：不同的定义产生不同的解法 和 经典动态规划：
高楼扔鸡蛋（进阶篇） 就展示了如何改造问题，
不同的最优子结构，可能导致不同的解法和效率。

! 最优子结构并不是动态规划独有的一种性质，能求最值的问题大部分都具有这个性质；
! 但反过来，最优子结构性质作为动态规划问题的必要条件，一定是让你求最值的，

动态规划不就是从最简单的 base case 往后推导吗，可以想象成一个链式反应，
不断以小博大。但只有符合最优子结构的问题，才有发生这种链式反应的性质。

找最优子结构的过程，其实就是证明状态转移方程正确性的过程，
方程符合最优子结构就可以写暴力解了，写出暴力解就可以看出有没有重叠子问题了，
有则优化，无则 OK。这也是套路，经常刷题的朋友应该能体会。

*/
//* 关于dp遍历
//! 1、遍历的过程中，所需的状态必须是已经计算出来的。

//! 2、遍历的终点必须是存储结果的那个位置。

/* 

主要就是看 base case 和最终结果的存储位置，
保证遍历过程中使用的数据都是计算完毕的就行，有时候确实存在多种方法可以得到正确答案，
可根据个人口味自行选择。
*/
// > 

//! dp 数组的遍历方向
// 我相信读者做动态规问题时，肯定会对 dp 数组的遍历顺序有些头疼。我们拿二维 dp 数组来举例，

//* 1.有时候我们是正向遍历：

let dp=new Array(m).fill(0).map(v=>new Array(n).fill(0));

for (let i = 0; i < m; i++){
  for (let j = 0; j < n; j++){
    // 计算 dp[i][j]
  }
}
        
//* 2.有时候我们反向遍历：
for (let i = m - 1; i >= 0; i--){
  for (let j = n - 1; j >= 0; j--){
    // 计算 dp[i][j]
  }
}
   
//* 3.有时候可能会斜向遍历：
/* 
\
 \
  \
   \  向右下遍历
    
*/
for (let l = 2; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
        let j = l + i - 1;
        // 计算 dp[i][j]
    }
}


/* 
[
  [ 1, ?, ?, ?, ? ],
  [ 0, 1, ?, ?, ? ],
  [ 0, 0, 1, ?, ? ],
  [ 0, 0, 0, 1, ? ],
  [ 0, 0, 0, 0, 1 ]
]
      ^
      |
----> |  反着遍历
*/
//> 反向斜着遍历  从右下到左上
for (let i = n - 1; i >= 0; i--) {
  for (let j = i + 1; j < n; j++) {
      // 状态转移方程
  }
}
// 甚至更让人迷惑的是，有时候发现正向反向遍历都可以得到正确答案，
// 比如我们在「团灭股票问题」中有的地方就正反皆可。