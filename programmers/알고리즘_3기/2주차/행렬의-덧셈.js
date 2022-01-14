function solution(arr1, arr2) {
  const arrTotal = [];

  for (let indexOut = 0; indexOut < arr1.length; indexOut++) {
    const arrIn = [];
    for (let indexIn = 0; indexIn < arr1[indexOut].length; indexIn++) {
      arrIn.push(arr1[indexOut][indexIn] + arr2[indexOut][indexIn]);
    }
    arrTotal.push(arrIn);
  }
  return arrTotal;
}
/*
배열 안에 배열을 for문을 이용하여 넣어줄 때는 넣어주려는 배열을 초기화 하는 과정이 꼭 들어가야한다.
*/
/*
SOL.2
function solution(arr1, arr2) {
  const arrTotal = [[]];
  

for (let indexOut = 0; indexOut < arr1.length; indexOut++) {
    arrTotal[indexOut] = [];
    for (let indexIn = 0; indexIn < arr1[indexOut].length; indexIn++) {
      arrTotal[indexOut].push(arr1[indexOut][indexIn] + arr2[indexOut][indexIn]);
    }
  }
     return arrTotal;
  }
  이 문제도 이중 for문 사이에 arrTotal[indexOut] = [];로 배열을 초기화한다음에 arrTotal에 넣어주어야
  push하는 과정에서 [[],[]] 처럼 다음 배열이 들어갈 공간이 생기게 됨.
 */
/*
sol.3
MAP을 이용한 풀이
function solution(arr1, arr2) {    
     return arr1.map((E, I) => E.map((a, J) => arr2[I][J] + a));
  }
*/
