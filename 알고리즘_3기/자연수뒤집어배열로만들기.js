function solution(n) {
  const arr = [];
  const num = String(n).split("");

  for (let i of num) {
    arr.push(Number(i));
  }

  return arr.reverse();
}
