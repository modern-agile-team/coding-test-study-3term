function solution(d, budget) {
    let sum = 0; 
    let result = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i of d) {
        if (sum + i <= budget) { 
            result++;
        };
        
        sum += i;
    };
    
    return result;
};