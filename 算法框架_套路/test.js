for(let i=0;i<10;i++){
  if(i<3) 
  // console.log(333);
    continue
  else console.log(i);
}
for(let i=0;i<10;i++){
  if(i<3) continue;
  // if(i<3) console.log(2222);   continue; //报错
  else console.log(i);
}

// 可见，if()与continue中间没有语句时，后面内容会继续执行
// 最好加括号或者直接写在一行内