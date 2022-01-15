function solution(numbers, hand) {
  let answer = '';
  let leftHandLocation = '*';
  let rightHandLocation = '#';
  const numbersLocation = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const handNumber = {
    leftHand: [1, 4, 7, '*'],
    rightHand: [3, 6, 9, '#'],
    middleNumber: [2, 5, 8, 0],
  };

  numbers.forEach((number) => {
    const LEFTDISTANCE1D =
      numbersLocation[leftHandLocation][0] - numbersLocation[number][0];
    const LEFTDISTANCE2D =
      numbersLocation[leftHandLocation][1] - numbersLocation[number][1];
    const RIGHTDISTANCE1D =
      numbersLocation[rightHandLocation][0] - numbersLocation[number][0];
    const RIGHTDISTANCE2D =
      numbersLocation[rightHandLocation][1] - numbersLocation[number][1];

    if (handNumber.leftHand.includes(number)) {
      leftHandLocation = number;
      answer += 'L';
    } else if (handNumber.rightHand.includes(number)) {
      rightHandLocation = number;
      answer += 'R';
    } else {
      // 가운데 숫자 거리 계산
      // 현재 왼손 위치와 눌러야 하는 번호의 좌표 차이
      // 현재 오른손 위치와 눌러야 하는 번호의 좌표 차이 => 왼손, 오른손 비교 -> 차이가 적은 손으로 누르기

      if (
        // 현재 왼손 위치와 눌러야 하는 번호의 거리가 오른손보다 멀다면
        Math.abs(LEFTDISTANCE1D) + Math.abs(LEFTDISTANCE2D) >
        Math.abs(RIGHTDISTANCE1D) + Math.abs(RIGHTDISTANCE2D)
      ) {
        rightHandLocation = number;
        answer += 'R';
      } else if (
        // 현재 오른손 위치와 눌러야 하는 번호의 거리가 왼손보다 멀다면
        Math.abs(LEFTDISTANCE1D) + Math.abs(LEFTDISTANCE2D) <
        Math.abs(RIGHTDISTANCE1D) + Math.abs(RIGHTDISTANCE2D)
      ) {
        leftHandLocation = number;
        answer += 'L';
      } else {
        if (hand === 'left') {
          leftHandLocation = number;
          answer += 'L';
        } else {
          rightHandLocation = number;
          answer += 'R';
        }
      }
    }
  });
  return answer;
}
