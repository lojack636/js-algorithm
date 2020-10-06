/* 
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、
直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，
请计算你最多能拿到多少价值的礼物？
! 时间复杂度：O(m∗n)，空间复杂度：O(1)
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

*/
// ! 果然是动态规划

// 横向纵向的话就是单独累加，其他的则取Math.max();
var maxValue1 = function(grid) {
  let height = grid.length;
  let width = grid[0].length;
  for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
          if(i == 0 && j == 0) {
              continue;
          } else if(i == 0) {
              grid[i][j] += grid[i][j - 1] ;
          } else if(j == 0) {
              grid[i][j] += grid[i - 1][j];
          } else {
              grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
          }
      }
  }
  return grid[height - 1][width - 1];
};


/* 
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

*/
// ! 机器人的方法可以完全遍历所有可能性，但由于本题是求最大值，而不是针对每一个子元素进行筛选，所以需要更换规则

/* const directionAry = [
  // [-1, 0], // 上
  [0, 1], // 右
  [1, 0], // 下
  // [0, -1] // 左
];
const grid=[
  [1,3,1],
  [1,5,1],
  [4,2,1]
];

var maxValue = function(grid) {
  let height = grid.length;
  let width = grid[0].length;
  // let Grid=[]
  // for(let i=0;i<height;i++){
  //   Grid.push(new Array(width).fill(0))
  // }
  let Grid=Array.from(grid);
  let set = new Set(['0-0']);
  let queue = [[0,0]];
  // if(set.has(`${i}-${j}`)) continue;
  let res=0;
  while(queue.length){
    let [x, y] = queue.shift();
    for(let i=0;i<2;++i){
      let offsetX = x + directionAry[i][0];
      let offsetY = y + directionAry[i][1];
      if(offsetX>=width||offsetY>=height|| set.has(`${offsetX}-${offsetY}`)){
        continue}
      // console.log(grid[offsetX][offsetY]);
      Grid[i][j] += Math.max(Grid[i][j - 1], Grid[i - 1][j]);
      // res= res!==Math.max(grid[offsetX][offsetY],res) ? res+grid[offsetX][offsetY] : res
      set.add(`${offsetX}-${offsetY}`);
      queue.push([offsetX,offsetY]);
    }
  }
  console.log(set);
  console.log(res);
};

console.log(maxValue(grid)); */