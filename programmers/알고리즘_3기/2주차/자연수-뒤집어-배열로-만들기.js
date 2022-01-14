function solution(n) {
  let newN = String(n).split("").reverse();
  const arr = [];

  newN.forEach((element) => arr.push(Number(element)));
  return arr;
}

/*
sol.2
let n = 10000000;
const arr2 = [];
let a = n;
console.log((n + "").length);
for (let index = 0; index < (n + "").length; index++) {
  arr2.push(Math.floor(a % 10));
  a = a / 10;
  console.log(arr2);
}
*/
