function solution(absolutes, signs) {
    const result = absolutes.reduce((arr, cur, curIndex) => {
       return signs[curIndex] ? arr + cur : arr - cur; 
    }, 0);
    
    return result;
};