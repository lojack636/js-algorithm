

const arr=[1,2,3,4,5,6,7,8,9,10];
[arr[1],arr[9]] = [arr[9],arr[1]];

console.log(arr);

let a=new Map();
a.set("3",123);
a.set("b",2121);
console.log(a["3"]);