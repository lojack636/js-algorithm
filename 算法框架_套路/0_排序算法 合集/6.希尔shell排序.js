function shellSort( A) {
  const n=A.length
    let step = Math.floor(n/3);
  while (step>0) {
      if(step == 2)
          step = 1;
      for (let i=step; i<n; ++i) {
          let j = i;
          while (j-step>=0 && A[j-step] > A[j]) {
            //   swap
              [A[j-step],A[j]] = [A[j],A[j-step]];
              j -=step;
          }
      }
      step= Math.floor(step/3);
  }
  return A;
}

console.log(shellSort([3,44,28,6,300,1,2,3,5,1999,39,20,11,5]));