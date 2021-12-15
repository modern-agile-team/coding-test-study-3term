function solution(d, budget) {
  let answer = 0;
  let totalPrice = 0;

  d.sort((a, b) => {
    return a - b;
  });
  for (let part in d) {
    if (totalPrice + d[part] <= budget) {
      totalPrice += d[part];
      answer += 1;
    }
  }
  return answer;
}
