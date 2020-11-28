var canPlaceFlowers = function(flowerbed, n){
  let sum = 0 ;//花园中能存放花的最大数量
  let index = -2 ;//设置-2为1起始位置
  for(let i=0; i< flowerbed.length; i++){
      if(flowerbed[i] == 1){
          let curr1 = parseInt((i - index) / 2) - 1
          sum += curr1 < 0 ? 0 : curr1
          index = i
      }
  }
  let curr2 = parseInt((flowerbed.length + 1 -index) / 2) - 1; 
  sum += curr2 < 0 ? 0 : curr2;
  return sum >= n ? true : false
}

//调用
let arr = [1,0,0,0,1]
console.log(canPlaceFlowers(arr, 2))
