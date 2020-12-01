  // 最大公约数
// 辗转相除
  function gcd(a,b){
    if(b == 0){return a};
    var r = a % b;
    return gcd(b,r);
}
  // 最小公倍数
function scm(a,b){
  return (a*b)/gcd(a,b)
}