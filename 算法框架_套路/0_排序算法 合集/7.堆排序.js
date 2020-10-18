// //堆调整
// function HeapAdjust(arr, first, end){
//   let father = first;
//   let son = father * 2 + 1;
//   while (son < end) {
//       if (son + 1 < end && arr[son] < arr[son+1]) 
//           ++son;
//       if (arr[father] > arr[son]) 
//           break;//如果父节点大于子节点则表示调整完毕
//       else {
//         [arr[father],arr[son]] = [arr[son],arr[father]];   //不然就交换父节点和子节点的元素
//           father = son;   //父和子节点变成下一个要比较的位置
//           son = 2 * father + 1;
//       }
//   }
// }

// //堆排序
// function HeapSort( arr,len) {
//   let i; 
//   for (i = len/2 - 1; i >= 0; --i) {
//       HeapAdjust(arr, i, len); //初始化堆，从最后一个父节点开始
//   }
//   for (i = len - 1; i > 0; --i) {
//     [arr[0],arr[i]] = [arr[i],arr[0]];   //从堆中的取出最大的元素再调整堆
//       HeapAdjust(arr, 0, i);  //调整成堆
//   }
// }

function adjustMaxHeap(heap,head,heapSize){
  let temp = heap[head];
  let child = head * 2 + 1;
  while(child < heapSize){
      if(child+1 < heapSize && heap[child] < heap[child+1]) child++;
      if(heap[head] < heap[child]){
          heap[head] = heap[child];
          head = child;
          child = head * 2 + 1;
      }else break;
      heap[head] = temp;
  }
}

function buildHeap(heap){
  for(let i = (heap.length-1) >> 1;i >= 0;i--){
      adjustMaxHeap(heap,i,heap.length);
  }
}

function heapSort(arr){
  buildHeap(arr);
  for(let i = arr.length-1;i > 0;i--){
      [arr[i],arr[0]] = [arr[0],arr[i]];
      adjustMaxHeap(arr,0,i);
  }
  return arr;
}

