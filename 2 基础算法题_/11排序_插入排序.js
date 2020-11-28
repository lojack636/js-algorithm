const insertSort=(arr)=>{
  const len=arr.length
  let pointer,current;
  for(let i=1;i<len;i++){
    current=arr[i];
    pointer=i
    // 不能用if判断，这里需要持续的循环而不是条件判断
    while(arr[pointer-1]>current){
      arr[pointer]=arr[pointer-1]
      pointer-=1
    }
    // 插入元素
    // 
    arr[pointer]=current;
  }
  return arr
}

let list=[-11,200,20,30,10,2,3,4,-10,-200]
console.log(insertSort(list));
