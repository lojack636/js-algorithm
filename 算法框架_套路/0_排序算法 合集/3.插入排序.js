function insertSort(arr){
  for(let i = 1;i < arr.length;i++){
      let j = i-1;
      // 小的在后，
      if(arr[i]<arr[j]){
          let temp = arr[i];
          while(j >= 0 && temp < arr[j]){
              arr[j+1] = arr[j];
              j--;
          }
          arr[j+1] = temp;
      }
  }
  return arr;
}


let list = [-11, 200, 20, 30, 10, 2, 3, 4, -10, -200]
console.log(insertSort(list))
