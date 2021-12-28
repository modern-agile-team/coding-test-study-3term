function solution(dartResult) {
    const one = /[1-9]?[0]?[SDT][\W]?/g;
    const two = /[0-9][0]?/g;
    const arrOne = dartResult.match(one); 
    const arrTwo = dartResult.match(two);
    const arrThree = [];
    
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i].includes('S')) {
            arrThree.push(arrTwo[i]);
        } else if (arrOne[i].includes('D')) {
            arrThree.push(Math.pow(arrTwo[i], 2));
        } else if (arrOne[i].includes('T')) {
            arrThree.push(Math.pow(arrTwo[i], 3));
        }; 
        if (arrOne[i].includes('#')) {
            arrThree[i] *= -1;
        } else if (arrOne[i].includes('*')) {
            if (arrThree.indexOf(arrThree[i]) === 0) {
                arrThree[i] *= 2;
            } else if (arrThree.indexOf(arrThree[i]) !== 0) {
                arrThree[i] *= 2;
                arrThree[i-1] *= 2;
            };
        };
    }; 
    
    return eval(arrThree.join("+"));
}