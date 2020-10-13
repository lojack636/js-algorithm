function shellSort( arr) {
    //控制增量序列,增量序列为1的时候为最后一趟
    for (let i =Math.floor(arr.length/2); i >0; i=Math.floor(i/2)) {
        //根据增量序列，找到每组比较序列的最后一个数的位置
        for (let j = i; j < arr.length; j++) {
            //根据该比较序列的最后一个数的位置，依次向前执行插入排序
            for (let k = j-i; k >=0; k-=i) {
                // 序列前后比较
                if(arr[k]>arr[k+i]){
                    [arr[k],arr[k+i]]=[arr[k+i],arr[k]];
                }
            }
        }
    }
    return arr
}

console.log(shellSort([3,44,28,6,300,1,2,3,5,1999,39,20,11,5]));