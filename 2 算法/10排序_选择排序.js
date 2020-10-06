const swapSort=(arr)=>{
  const len=arr.length
  for(let j=0;j<len;j++){
    let minIndex=j
    for(let i=j+1;i<len;i++){
    if(arr[i]<arr[minIndex]){
      minIndex =i;
    }
    }
    if(minIndex===j) continue
    let temp=arr[j]
    arr[j]=arr[minIndex];
    arr[minIndex]=temp
  }
  return arr
}
// const findMin=Math.min.apply(null,arr)
let list=[10,1,3,4,100,-20,30,7]
console.log(swapSort(list))