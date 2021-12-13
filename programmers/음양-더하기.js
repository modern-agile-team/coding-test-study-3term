// reduce 사용.
//
function solution(absolutes, signs) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    for (let i = 0; i < absolutes.length; i += 1) {
        signs[i] === false ? 
            absolutes.push(-absolutes[i] * 2)
            :
            absolutes[i] = absolutes[i];
    }
    return absolutes.reduce(reducer);
}


// for문 사용.
// 
// function solution(absolutes, signs) {
// let result = 0;
//     for (let i = 0; i < absolutes.length; i += 1) {
//         signs[i] === false ? 
//             absolutes.push(-absolutes[i] * 2)
//             :
//             absolutes[i] = absolutes[i];
//     }
    
//     for (let i = 0; i < absolutes.length; i += 1) {
//             result += absolutes[i];
//         }
//     return result;
// }