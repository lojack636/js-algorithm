

// 单调站解决
function removeKdigits(num, k) {
  let result=''
  // 维护单调栈
  for (let i = 0; i < num.length; i++) {
    while (result.length && k>0 && result[result.length - 1] > num[i]) {
      result=result.substr(0,result.length-1);//pop最后一位
      k--
    }
    if (result.length == 0 && num[i] == '0') continue;
    result += num[i]
  }

  if(k > 0 && result.length !== 0) {
    result=result.substr(0,result.length-k)//消耗掉最后的剩余k位
  }
  return result == '' ? '0' : result
}
