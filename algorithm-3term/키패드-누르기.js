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
    
    let result = '';
    let left = [3, 0];
    let right = [3, 2];
    
    for (let i = 0; i < numbers.length; i++) {
        
        const nextStep = location[numbers[i]];
        const leftToNextStep = Math.abs(left[0] - nextStep[0]) + Math.abs(left[1] - nextStep[1]);
        const rightToNextStep = Math.abs(right[0] - nextStep[0]) + Math.abs(right[1] - nextStep[1]);
        
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] == 7) {
            left = location[numbers[i]];
            result += 'L';
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] == 9) {
            right = location[numbers[i]];
            result += 'R';
        } else {
            if (leftToNextStep === rightToNextStep) {
                if (hand === "right") {
                    right = location[numbers[i]];
                    result += 'R';
                } else { 
                    left = location[numbers[i]];
                    result += 'L';
                };
            } else if (leftToNextStep > rightToNextStep) {
                right = location[numbers[i]];
                result += 'R';
            } else {
                left = location[numbers[i]];
                result += 'L';
            };
        }
    }
    return result;
}