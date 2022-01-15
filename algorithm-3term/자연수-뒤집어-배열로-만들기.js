function solution(n) {
    const numToStr = Array.from(`${n}`).reverse();
    const finish = [...numToStr];
    const result = finish.map((el) => +el);
    
    return result;
}