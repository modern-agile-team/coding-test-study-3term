//�� ���� Ǯ��*****
// function solution(s) {
//     return s
//         .split("")
//         .sort((a, b) => a > b ? -1 : 0)
//         .join("");
// }
//���� �ߴ� Ǯ��*****
function solution(s) {
    let arr = s.split("");
    arr.sort((a, b) => a > b ? -1 : 0);
    return arr.join("");
}