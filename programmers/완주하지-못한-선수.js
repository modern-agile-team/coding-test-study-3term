function solution(participant, completion) {
    const obj = {};
    
    for (let same of participant) {
        obj[same] = obj[same] ? obj[same] + 1 : 1;
    };
    
    for (let i of completion) {
        obj[i] = obj[i] - 1;
    };
    
    for (let key in obj) {
        if (obj[key]) {
            return key;
        };
    };
};

// 2번째 for문 이름짓기가 어려워요ㅜㅜ