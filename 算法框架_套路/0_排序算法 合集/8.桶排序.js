// 桶排序
const bucketSort = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  console.time('桶排序耗时');
  let i = 0;
  let minValue = Math.min(...array)
  let maxValue =Math.max(...array)


  //桶的初始化
   //设置桶的默认数量为 5
  bucketSize = 5
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill(0).map(v=>new Array())

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  array=[];
  for (i = 0; i < buckets.length; i++) {
    quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }
  console.timeEnd('桶排序耗时');
  return array;
};

// 快速排序
const quickSort = (arr, left, right) => {
	let len = arr.length;
  let partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};
const swap = (arr, i, j) => [arr[i],arr[j]]=[arr[j],arr[i]];
const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值（pivot）
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (arr[i] < arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};




// console.log(bucketSort([3,44,28,6,300,2,3,5,1999,39,20,11,5]));
console.log(bucketSort([3,44,28,6,300,2,3,5,1999,39,20,11,5]));