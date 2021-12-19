// 3기 *이한결*님의 도움을 받음.
function solution(dartResult) {
    const dartPoint = dartResult.replace(/\*/g, '*2 ')          // * => *2
                                .replace(/\#/g, '(-1) ')        // # => (-1)
                                .replace(/S/g, '**1 ')          // S => **1 
                                .replace(/D/g, '**2 ')          // D => **2 
                                .replace(/T/g, '**3 ')          // T => **3
                                .replace(/ $/g, '')             // 맨뒤의 무의미한 공백 제거
                                .replace(/ \*2/g, '\*2')        // 공백/곱셈/2 => 곱셈/2
                                .replace(/ \*/g, '*')           // 공백/곱셈 => 곱셈
                                .replace(/ /g, '+')             // 공백 => 덧샘
                                .replace(/\+\(/g, '\(')         // 덧샘/여는 소괄호 => 여는 소괄호
    const dartPointArr = dartPoint.split('+');                  // 덧샘 기준으로 나눠 배열로
    for (let i =1; i < dartPointArr.length; i++) {              
        if (dartPointArr[i].match(/\*{1,}/g).length === 2) {    // 스타성이 있다면 길이는 2, 아니면 1 => 25line console.log
            dartPointArr[i - 1] = dartPointArr[i - 1] + '*2';   // 있다면 앞에 점수에 *2
        };
    };
    const dartPointjoin = dartPointArr.join('+');               // 배열을 +로 붙임
    const result = dartPointjoin.replace(/\(/g, '*(');          // 아차상은 (-1)이므로 *(-1)로 연산 가능하게 만듦
    return eval(result);
}



// console.log(dartPointArr[1].match(/\*{1,}/g));