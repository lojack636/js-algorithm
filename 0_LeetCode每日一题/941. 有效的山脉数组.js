var validMountainArray = function(A) {
  const len=A.length;
  let left=0, right=0;
  let i=0;
  let res=0;
    while(i<len-1){
      // 山峰上升
      while(i<len-1 && A[i+1]>=A[i]){
        i++
        right=Math.max(right,i)
      }
      // 山峰下降
      while(right<len-1 && A[right]>A[right+1]){
        right++
      }
      if(i>left && i<right){
        res=Math.max(res,right-left+1)
      }
      left=i+1
      i++
    }
   return res===len ? true : false
  }

  const a=[0,1,2,2,5,2,1,0]
  console.log(validMountainArray(a));