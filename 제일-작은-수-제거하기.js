function solution(arr) {
    const answer = [];

    if (arr.length <= 1 ) return [-1];
    arr.splice (arr.indexOf (Math.min (...arr)), 1);

    return arr;
}