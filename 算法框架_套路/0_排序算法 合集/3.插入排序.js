// function insertSort(arr){
//   for(let i = 1;i < arr.length;i++){
//       let j = i-1;
//       // 之前的值大？
//       if(arr[j]>arr[i]){
//           let temp = arr[i];
//           while(j >= 0 && temp < arr[j]){
//               arr[j+1] = arr[j];
//               j--;
//           }
//           arr[j+1] = temp;
//       }
//   }
//   return arr;
// }

// > 每一步将一个待排序的记录，插入到前面已经排好序的有序序列中去，直到插完所有元素为止。

function insertSort(array) {
    let length = array.length;
    if (!Array.isArray(array) || length <= 1) return;
  
    // 循环从 1 开始，0 位置为默认的已排序的序列
    for (let i = 1; i < length; i++) {
      let temp = array[i]; // 保存当前需要排序的元素
      let j = i;
  
      // 在当前已排序序列中比较，如果比需要排序的元素大，就依次往后移动位置
      while (j -1 >= 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
  
      // 将找到的位置插入元素
      array[j] = temp;
    }
  
    return array;
  }


let list = [-11, 200, 20, 30, 10, 2, 3, 4, -10, -200]
console.log(insertSort(list))
