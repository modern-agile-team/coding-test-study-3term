function solution(n, lost, reserve) {
    for (let i = 0 ; i < reserve.length; i++) {
        const hasLost = lost.some((st) => st === reserve[i]);  
        
        if (hasLost) {
            lost = lost.filter((st) => st !== reserve[i]);
            reserve[i] = 0;
        };
    };

    reserve = reserve.filter(st => st).sort();
    lost.sort();
    
    for (let i = 0 ; i < reserve.length; i++) {
        for (let j = 0 ; j < lost.length; j++) {
            if (Math.abs(reserve[i] - lost[j]) === 1) {
                reserve[i] = 0;
                lost[j] = 0;
                break;
            };
        };
    };
    
    lost = lost.filter(st => st);
    
    return n - lost.length;
}