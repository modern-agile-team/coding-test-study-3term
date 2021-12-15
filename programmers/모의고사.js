function solution(answers) {
    const result = [];
    let oneAnswer = 0;
    let twoAnswer = 0;
    let threeAnswer = 0;
    
    const oneCheck = [1,2,3,4,5];
    const twoCheck = [2,1,2,3,2,4,2,5];
    const threeCheck = [3,3,1,1,2,2,4,4,5,5];
    
    for (let i = 0; i < answers.length; i++){
        if (oneCheck[i % 5] === answers[i]) oneAnswer += 1;
        if (twoCheck[i % 8] === answers[i]) twoAnswer += 1;
        if (threeCheck[i % 10] === answers[i]) threeAnswer += 1;
    }
    
    const top = Math.max(oneAnswer, twoAnswer, threeAnswer);
    
    if (top === oneAnswer) result.push(1);
    if (top === twoAnswer) result.push(2);
    if (top === threeAnswer) result.push(3);
    
    return result;
}