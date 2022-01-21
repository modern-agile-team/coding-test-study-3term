function solution(n) {
    let str = String(n);
    let box = str.split(""); 
    return ((box.reverse()).map(Number));
};