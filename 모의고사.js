function solution(answers) {
    const QUIZLEN = answers.length;
    // 문제 길이
    const firstPattern = [1, 2, 3, 4, 5];
    const FIRST = Array(QUIZLEN)
        .fill()
        .map((item, index) => (index % firstPattern.length) + 1);
    // FIRST >> 1번이 쓴 답지
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const SECOND = Array(QUIZLEN)
        .fill()
        .map((item, index) => secondPattern[index % secondPattern.length]);
    // 2번이 쓴 답지
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const THIRD = Array(QUIZLEN)
        .fill()
        .map((item, index) => thirdPattern[index % thirdPattern.length]);
    // 3번이 쓴 답지
    const firstAnswers = answers.map((item, index) => {
        if (item === FIRST[index]) {
            return 1;
        }
    });
    const secondAnswers = answers.map((item, index) => {
        if (item === SECOND[index]) {
            return 1;
        }
    });
    const thirdAnswers = answers.map((item, index) => {
        if (item === THIRD[index]) {
            return 1;
        }
    });
    // 답과 같으면 요소 1로 배열 생성
    const firstScore = firstAnswers.filter((item) => item !== undefined).length;
    const secondScore = secondAnswers.filter((item) => item !== undefined)
        .length;
    const thirdScore = thirdAnswers.filter((item) => item !== undefined).length;
    // 맞춘 요소 갯수 (몇 문제 맞췄는지)

    const Score = [firstScore, secondScore, thirdScore];
    // 1번, 2번, 3번의 점수
    const highScore = Math.max.apply(null, Score);
    // 최고 점수
    const result = Score.map((item, index) =>
        item === highScore ? index + 1 : undefined
    ).filter((item) => item !== undefined);
    // 최고 점수를 받은 번호
    return result;
}
