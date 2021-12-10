function solution(lottos, win_nums) {
    const notSameNum = lottos.filter(x => !win_nums.includes(x));
    const sameNum = lottos.filter(x => win_nums.includes(x));
    const zeroCnt = lottos.filter((num) => num === 0).length
    
    if(zeroCnt === 6){
        return [1, 6];
    } else if(sameNum.length === 0) {
        return [6, 6];
    }
    const result = [7 - (sameNum.length + zeroCnt), 7 - sameNum.length];
    return result;
}