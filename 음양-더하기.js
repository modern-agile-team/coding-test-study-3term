function solution(absolutes, signs) {
    const finalArray = absolutes.map((item, index) =>
        signs[index] ? item : item * -1
    );

    const sum = finalArray.reduce((a, b) => a + b);

    return sum;
}
