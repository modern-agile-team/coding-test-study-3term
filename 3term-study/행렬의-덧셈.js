function solution(arr1, arr2) {
  return arr1.map((a, row) => a.map((b, col) => b + arr2[row][col]));
}
