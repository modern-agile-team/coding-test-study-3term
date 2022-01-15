function solution(numbers, hand) {
  let answer = '';
  let leftHandLocation = 10;
  let rightHandLocation = 12;
  const handNumber = {
    leftHand: [1, 4, 7],
    rightHand: [3, 6, 9],
    middleNumber: [2, 5, 8, 10],
  };

  for (let i in numbers) {
    // 0을 10으로 변경
    if (numbers[i] === 0) numbers[i] = 10;

    console.log(numbers[i]);

    if (handNumber.leftHand.includes(numbers[i])) {
      console.log(numbers[i]);
      leftHandLocation = numbers[i];
      answer += 'L';
    }
    if (handNumber.rightHand.includes(numbers[i])) {
      console.log(numbers[i]);
      rightHandLocation = numbers[i];
      answer += 'R';
    }

    // 가운데 숫자 거리 계산
    if (handNumber.middleNumber.includes(numbers[i])) {
      // answer += 'M';
      if (leftHandLocation === numbers[i] || rightHandLocation === numbers[i]) {
        if (leftHandLocation === numbers[i]) {
          leftHandLocation = numbers[i];
          answer += 'L';
        } else {
          rightHandLocation = numbers[i];
          answer += 'R';
        }
      } else {
        let distanceToLeftHand = Math.abs(leftHandLocation - numbers[i]);
        let distanceToRightHand = Math.abs(rightHandLocation - numbers[i]);

        if (distanceToLeftHand > distanceToRightHand) {
          answer += 'R';
          rightHandLocation = numbers[i];
        } else if (distanceToLeftHand < distanceToRightHand) {
          answer += 'L';
          leftHandLocation = numbers[i];
        } else {
          if (hand === 'left') {
            leftHandLocation = numbers[i];
            answer += 'L';
          } else {
            rightHandLocation = numbers[i];
            answer += 'R';
          }
        }
      }
    }
  }
  return answer;
}
