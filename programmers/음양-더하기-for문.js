function solution(absolutes, signs) {
  let answer = 0;

  for (let num in absolutes) {
    if (signs[num] === false) {
      absolutes[num] *= -1;
    }
    answer += absolutes[num];
  }
  return answer;
}
