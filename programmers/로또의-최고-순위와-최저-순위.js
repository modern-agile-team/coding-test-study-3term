function solution(lottos, win_nums) {
  const lottoGrade = [6, 6, 5, 4, 3, 2, 1];
  const myGrades = [];
  const answer = [];
  let zeroCount = 0;
  let correctAnswerCount = 0;

  lottos.forEach((myNumber) => {
    win_nums.forEach((winNumber) => {
      if (myNumber === winNumber) {
        correctAnswerCount += 1;
      }
    });
    if (myNumber === 0) {
      zeroCount += 1;
    }
  });

  myGrades.push(lottoGrade[correctAnswerCount]);
  if (zeroCount) {
    for (let zero = 0; zero < zeroCount + 1; zero++) {
      myGrades.push(lottoGrade[correctAnswerCount]);
      correctAnswerCount += 1;
    }
  }
  answer.push(Math.min(...myGrades), Math.max(...myGrades));
  return answer;
}
