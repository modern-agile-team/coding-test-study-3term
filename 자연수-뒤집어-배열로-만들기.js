function solution(n) {
    const result = [];
    for (let i = 0; i < `${n}`.length; i++) {
        result.push(parseInt((n % 10 ** (i + 1)) / 10 ** i));
    }
    return result;
}
