function InsertSort( arr, len) {
  let i, j;
  let temp;
  for (i = 1; i < len; i++) {
      temp = arr[i];
      for (j = i - 1; j >= 0 && arr[j] > temp; j--)
          arr[j + 1] = arr[j];
      arr[j + 1] = temp;
  }
}

let list = [-11, 200, 20, 30, 10, 2, 3, 4, -10, -200]
console.log(insertSort(list))
