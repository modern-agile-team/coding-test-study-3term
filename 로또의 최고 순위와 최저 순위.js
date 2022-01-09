function solution(lottos, win_nums) {
    let minScore = 0;
    let maxScore = 0;
    const score = {
        0: 6,
        1: 6,
        2: 5,
        3: 4,
        4: 3,
        5: 2,
        6: 1,
    };

    lottos.forEach((item, index) => {
        if (item) {
            win_nums.includes(item) ? minScore++ : 0;
        } else {
            maxScore++;
        }
    });
    const answer = [score[minScore + maxScore], score[minScore]];
    return answer;
}
