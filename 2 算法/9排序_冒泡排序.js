/*
let temp;
function bubbleSort(arr) {
  const len = arr.length-1; //加载不到最后一位
  for(let j=0;j<len;j++){
    let done =true
  for(let i=0;i<len;i++){
    if(arr[i]>arr[i+1]){
      done=false
      temp=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
    }
  }
      if(done){
        break;
      }
}
return arr
}

let list =[1,2,3,100,99,-1,3,10,-200];
console.log(bubbleSort(list));

*/

// 优化办法
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { 
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
      }
    }
  }
  return arr;
}
let list =[1,2,3,100,99,-1,3,10,-200];
console.log(bubbleSort(list));

