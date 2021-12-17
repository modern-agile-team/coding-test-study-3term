function solution(dartResult) {
    let answer = 0;
    let num = 0;
    const result = [];
    
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] === '1' && dartResult[i+1] === '0') {
                num = 10;
                i++;
            } else {
                num = dartResult[i];
            };
        };
         if (dartResult[i] === "S") {
             result.push(parseInt(num));
        } else if (dartResult[i] === "D") {
            result.push(Math.pow(num, 2));
        } else if (dartResult[i] === "T") {
            result.push(Math.pow(num, 3));
        } else if (dartResult[i] === "#") {
            result[result.length - 1] *= -1;
        } else if (dartResult[i] === "*") {
            result[result.length - 1] *= 2;
            if (result[result.length - 2]) {
                result[result.length - 2] *= 2;   
            };   
        };
    };
    return result.reduce((acc, crr) => acc + crr, 0);
}