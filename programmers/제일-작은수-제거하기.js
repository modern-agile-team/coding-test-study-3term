function solution(arrs) {
    const min = Math.min.apply(null, arrs);
    
    return arrs.length < 2 ? [-1] : arrs.filter(arr => arr !== min); 
    
};