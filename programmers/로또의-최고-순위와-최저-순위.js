function solution(lottos, win_nums) {
    const ranks = [6, 6, 5, 4, 3, 2, 1];
    
    const check = lottos.filter(el => win_nums.includes(el)).length;
    const random = lottos.filter(zero => !zero).length;
    
    const max = check + random;
    
    return [ranks[max], ranks[check]];
};