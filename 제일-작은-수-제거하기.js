function solution(arr) {
    arr = arr.filter((item) => item !== Math.min.apply(null, arr));

    arr = arr.length ? arr : [-1];

    return arr;
}
