function solution(absolutes, signs) {
  let answer = 0;

  answer = absolutes.reduce((total, nowValue, idx) => {
    if (signs[idx] === false) {
      nowValue *= -1;
    }
    return total + nowValue;
  }, 0);
  return answer;
}
