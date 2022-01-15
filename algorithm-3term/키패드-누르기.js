// 
//      FOR 문 활용 풀이
//
// function solution(numbers, hand) {
    
//     const location = [
//         [3, 1],
//         [0, 0],
//         [0, 1],
//         [0, 2],
//         [1, 0],
//         [1, 1],
//         [1, 2],
//         [2, 0],
//         [2, 1],
//         [2, 2],
//     ];
    
//     let result = '';
//     let left = [3, 0];
//     let right = [3, 2];
    
//     for (let i = 0; i < numbers.length; i++) {
        
//         const nextStep = location[numbers[i]];
//         const leftToNextStep = Math.abs(left[0] - nextStep[0]) + Math.abs(left[1] - nextStep[1]);
//         const rightToNextStep = Math.abs(right[0] - nextStep[0]) + Math.abs(right[1] - nextStep[1]);
        
//         if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] == 7) {
//             left = nextStep;
//             result += 'L';
//         } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] == 9) {
//             right = nextStep;
//             result += 'R';
//         } else {
//             if (leftToNextStep === rightToNextStep) {
//                 if (hand === "right") {
//                     right = nextStep;
//                     result += 'R';
//                 } else { 
//                     left = nextStep;
//                     result += 'L';
//                 };
//             } else if (leftToNextStep > rightToNextStep) {
//                 right = nextStep;
//                 result += 'R';
//             } else {
//                 left = nextStep;
//                 result += 'L';
//             };
//         }
//     }
//     return result;
// }
// 
//      FOR 문 활용 풀이
//






// 
//      MAP 메서드 활용 풀이
//
function solution(numbers, hand) {
    
    const location = [
        [3, 1],
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ];
    
    let left = [3, 0];
    let right = [3, 2];
    
    const result = numbers.map((num) => {
        const nextStep = location[num];
        const leftToNextStep = Math.abs(left[0] - nextStep[0]) + Math.abs(left[1] - nextStep[1]);
        const rightToNextStep = Math.abs(right[0] - nextStep[0]) + Math.abs(right[1] - nextStep[1]);
        
        if (num === 1 || num === 4 || num == 7) {
            left = nextStep;
            return 'L';
        } else if (num === 3 || num === 6 || num == 9) {
            right = nextStep;
            return 'R';
        } else {
            if (leftToNextStep === rightToNextStep) {
                if (hand === "right") {
                    right = nextStep;
                    return 'R';
                } else { 
                    left = nextStep;
                    return 'L';
                };
            } else if (leftToNextStep > rightToNextStep) {
                right = nextStep;
                return 'R';
            } else {
                left = nextStep;
                return 'L';
            };
        }
    });
    return result.join('');
          
}
// 
//      MAP 메서드 활용 풀이
//