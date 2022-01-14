function solution(arr1, arr2) {
  return arr1.map((arr, one) => arr.map((arr, two) => arr + arr2[one][two]));
}
