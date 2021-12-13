function solution(arr) {
  const answer = [];

  arr.forEach((el) => {
    if (el !== Math.min(...arr)) {
      answer.push(el);
    }
  });
  if (arr.length === 1) {
    answer.push(-1);
  }
  return answer;
}
