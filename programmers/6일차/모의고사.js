function solution(answers) {
    const patternNo1 = [1,2,3,4,5];
    const patternNo2 = [2,1,2,3,2,4,2,5];
    const patternNo3 = [3,3,1,1,2,2,4,4,5,5];
    let maxNum = 0
    let result = [];
    let countNo1 = 0;
    let countNo2 = 0;
    let countNo3 = 0;

    for (let index = 0; index < answers.length; index++) {
        if (patternNo1[index % 5]  === answers[index]) countNo1++;
        if (patternNo2[index % 8]  === answers[index]) countNo2++;
        if (patternNo3[index % 10]  === answers[index]) countNo3++;
    }
    maxNum = Math.max(countNo1,countNo2,countNo3)    
    if (maxNum === countNo1) result.push(1);
    if (maxNum === countNo2) result.push(2)
    if (maxNum === countNo3) result.push(3)
    
    return result;
}  
console.log(solution([1,3,2,4,2]));

/*
1번 수포자 패턴(5 단위로 반복) 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ..
2번 수포자 패턴(8 단위로 반복) 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, .
3번 수포자 패턴(10 단위로 반복) 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
1,2,3 의 각기 다른 단위로 반복되는 패턴을 반복을 하여 문제의 개수에 맞게 패턴을 만들어주는것이 핵심1.
반복되는 패턴은 % 나머지 연산자를 이용하여 만들면됨.

두번째 핵심은 1,2,3학생의 맞은 문제들을 비교하는 부분에서 맞은 문제의 개수가 같을때가 두번째 핵심임.
다른 좋은 방법으로도 풀수 있을 것도 같은데 이것저것 찾아보다가 결국 if문 여러개 써서 해결...
*/