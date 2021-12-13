function solution(arr) {
    if(arr.length > 1) {
        return arr.filter((x) => x !== Math.min.apply(null, arr));
    }return [-1];
}