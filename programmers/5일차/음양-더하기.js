function solution(absolutes,signs) {
    const result = absolutes.reduce( (prev,cur,index) => {
    
        if (signs[index]) {
            return prev + cur;
        }
        return prev - cur;
    },0);
    return result;
}
console.log(solution([1,2,3,4],[true,false,false,true]))

// //for 문을 이용한 풀이
// function solution(absolutes,signs) {
//     let sum = 0;

//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i]) {
//             sum += absolutes[i];
//         }
//         else sum -= absolutes[i]
//     }
//     return sum;
// }

