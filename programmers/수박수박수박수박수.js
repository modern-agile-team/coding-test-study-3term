function solution(n) {
    if(n % 2 === 0) {
        return('����'.repeat(n / 2));
    } 
    return('����'.repeat(n / 2) + '��');
}