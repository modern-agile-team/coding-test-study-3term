function solution(n, lost, reserve){
    const trueReserve = reserve.filter( x => !lost.includes(x));
    const trueLost = lost.filter( y => !reserve.includes(y));
    
    trueLost.sort((a,b) => a-b);
    trueReserve.sort((a,b) => a-b);
    console.log(trueLost);

    for (let i of trueReserve) {    
        if (trueLost.includes(i-1)) {
            trueLost.splice(trueLost.indexOf(i-1),1);
            console.log(trueLost);
        }else if (trueLost.includes(i+1)) {
            trueLost.splice(trueLost.indexOf(i+1),1);
            console.log(trueLost);
        }
    }

    return n - trueLost.length;
}
console.log(solution(5,[1,3,2],[2,3]))
/*
sort를 trueLost와 trueReserve모두 해주었어야 했는데 trueLost만 정렬해주어서 완전 삽질 오래한 문제
*/ 