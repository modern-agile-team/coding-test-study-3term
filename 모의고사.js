function solution(answers) {
    const answer = [];
    

    let pik1 = [1,2,3,4,5];
    let pik2 = [2,1,2,3,2,4,2,5];
    let pik3 = [3,3,1,1,2,2,4,4,5,5];
    

    let num1 = answers.filter ( (a, i) => a === pik1[i%5] ).length;
    let num2 = answers.filter ( (a, i) => a === pik2[i%8] ).length;
    let num3 = answers.filter ( (a, i) => a === pik3[i%10] ).length;
    

    let max = Math.max (num1, num2, num3);
    

    if (num1 === max) answer.push(1);
    if (num2 === max) answer.push(2);
    if (num3 === max) answer.push(3);
    
    return answer;
}