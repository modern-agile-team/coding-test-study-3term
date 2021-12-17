function solution(dartResult) {
    const result = [];
    let num = 0;

    for (let index = 0; index < dartResult.length; index++) {
        if (dartResult[index] >= 0 && dartResult[index] <= 9) {
            // === 이였으면 type까지 비교하여 숫자가 안걸러 졌을 텐데 = 하나여서 문자인 '0-10'이 숫자로 구분됨
            if (dartResult[index] == 1 && dartResult[index+1] == 0) {
                //여기서도 타입 까지는 비교 해주면 안됨 타입까지 비교해주면 못 걸러낸다.
                num = 10;
                index++;
            }
            else {
                num = dartResult[index];
            }
        }
        if (dartResult[index] === 'S') {
            result.push(Math.pow(num,1));
        }
        else if (dartResult[index] === 'D') {
            result.push(Math.pow(num,2))
        }
        else if (dartResult[index] === 'T') {
            result.push(Math.pow(num,3))
        }
        else if (dartResult[index] === '#') {
            result[result.length - 1] *= -1;
        }
        else if (dartResult[index] === '*') {
            result[result.length - 1] *= 2;
            if (result[result.length -2]) {
                //이전의 결과가 존재 하였을 때
                result[result.length - 2] *= 2; 
            }
        }
        console.log(result)
    }
    return result.reduce((a,b) => a + b)
    
}
/*완전하게 풀지는 못한 문제...동기인 승범이 도움을 많이 받음 처음에는 1S2D*3T 이렇게 있으면 [숫자],[보너스],[옵션]따로따로 배열을 만들어주어서
해결하려고 했지만 숫자,보너스 까지는 잘 만들어지지만 옵션을 넣을때 옵션의 위치를 파악하고 보너스 적용된 숫자에 옵션을 적용하기가 매우 복잡하고 어려움
따라서 result 라는 배열을 만들고,dartResult를 for문을 이용하여 돌면서 보너스,옵션을 한번에 누적하면서 적용한다음 옵션 까지 적용된 숫자 3개를 reduce를 이용하여 해결
*/