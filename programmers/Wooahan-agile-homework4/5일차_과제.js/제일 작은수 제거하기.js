//제일 작은 수 제거하기
const solution = (arr) => {
    return arr.filter((a) => a !== Math.min(...arr)) === [] ? [-1] : arr.filter((a) => a !== Math.min(...arr))
}