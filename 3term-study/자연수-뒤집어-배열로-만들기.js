function solution(n) {
  let answer = [];
  n = String(n);
  for (let num of n) {
    answer.push(Number(num));
  }
  return answer.reverse();
}
