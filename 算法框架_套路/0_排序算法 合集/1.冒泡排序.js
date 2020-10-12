
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {//减i 是因为之前的排序已经完成了，
      if (arr[j] > arr[j + 1]) { 
        // 交换
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  return arr;
}
let list =[1,2,3,100,99,-1,3,10,-200];
console.log(bubbleSort(list));

