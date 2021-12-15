function solution(answers) {
  const result = [];
  const supoza = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];

  for (let answer = 0; answer < answers.length; answer++) {
    for (let supozaNum = 0; supozaNum < supoza.length; supozaNum++) {
      if (
        answers[answer] === supoza[supozaNum][answer % supoza[supozaNum].length]
      ) {
        score[supozaNum] += 1;
      }
    }
  }

  for (let supozaNum in score) {
    if (score[supozaNum] === Math.max(...score)) {
      result.push(Number(supozaNum) + 1);
    }
  }
  return result;
}
