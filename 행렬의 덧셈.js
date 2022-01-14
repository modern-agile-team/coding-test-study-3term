function solution(arr1, arr2) {
    let result = arr1.map((item1, index1) =>
        item1.map((item2, index2) => item1[index2] + arr2[index1][index2])
    );
    return result;
}
