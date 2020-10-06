let list=[2,1,3,6,10,100,-20,-1]
const mergeSort=(arr)=>{
  const len=arr.length
  if(len<2) return arr
  let middle=Math.floor(arr.length /2);
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  // console.log(right);
  // 一直分到只有一位时候才return从而进行merge
  // left先进行分解，直到分解为最后个位的时候return,然后开始分解right的数组，直到分解到最后一位
  // * 第一次拆分后，迭代的时候都是先进行左边的迭代，迭代到return之后再进行右边数组的迭代
//  console.log(mergeSort(right));
  const res=merge(mergeSort(left),mergeSort(right))
  // console.log(res);
  return res //只要return就会进merge,
  // 先return了[1,2],[3,6]，左子数组的left和right都筛选完成之后再进行merge
/*
第一轮Left
输入([1],[2]) =>得到[1,2]
第二轮Left
输入([3],[6]) =>得到[3,6]
第二轮结束,Left分完了
当左为[1,2]， 右为[3,6]时， concat之后就是[1,2,3,6],
接下来迭代的时候，都是mergeSort(Left)大于两个形参，因此[1,2,3,6]一直空闲直到最后仅剩一项时继续合并
*/

}
const merge=(left,right)=>{
  const result=[];let result1=[]
  while(left.length && right.length){
    if(left[0]<=right[0]){
      // 删除left第一位
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  // console.log(result);
  result1=result.concat(left).concat(right)
  return result1
};


mergeSort(list);



// ! 归并排序的框架
/* 
先对左右子数组排序，然后合并（类似合并有序链表的逻辑），
你看这是不是二叉树的后序遍历框架？另外，这不就是传说中的分治算法嘛，不过如此呀。
*/
function sort(nums,low,high) {
  let mid = (low + high) / 2;
  sort(nums, low, mid);
  sort(nums, mid + 1, high);

  /****** 后序遍历位置 ******/
  // 合并两个排好序的子数组
  merge(nums, low, mid, high);
  /************************/
}

// ! 只要涉及递归，都可以抽象成二叉树的问题