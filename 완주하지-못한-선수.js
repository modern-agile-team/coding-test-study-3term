function solution(participant, completion) {
    const obj1 = {};
    const obj2 = {};
    participant.forEach((x) => {
        obj1[x] = (obj1[x] || 0) + 1;
    });
    completion.forEach((x) => {
        obj2[x] = (obj2[x] || 0) + 1;
    });
    let answer = "";
    participant.forEach((item, index) => {
        if (obj1[item] !== obj2[item]) {
            answer = item;
        }
    });
    return answer;
}
