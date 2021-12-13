function solution(absolutes, signs) {
    return absolutes.reduce((arr, cur, curIndex) => {
       return signs[curIndex] ? arr + cur : arr - cur; 
    }, 0);
};