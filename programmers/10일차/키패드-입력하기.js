function solution(numbers, hand) {
  let answer = "";
  let locationLeft = "*";
  let locationRight = "#";
  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 1 || numbers[index] === 4 || numbers[index] === 7) {
      answer += "L";
      locationLeft = numbers[index];
    } else if (
      numbers[index] === 3 ||
      numbers[index] === 6 ||
      numbers[index] === 9
    ) {
      answer += "R";
      locationRight = numbers[index];
    } else {
      const gpsNum = keys[numbers[index]];
      const gpsLeft = keys[locationLeft];
      const gpsRight = keys[locationRight];
      const distanceLeft =
        Math.abs(gpsLeft[0] - gpsNum[0]) + Math.abs(gpsLeft[1] - gpsNum[1]);
      const distanceRight =
        Math.abs(gpsRight[0] - gpsNum[0]) + Math.abs(gpsRight[1] - gpsNum[1]);

      if (distanceLeft > distanceRight) {
        answer += "R";
        locationRight = numbers[index];
      } else if (distanceLeft < distanceRight) {
        answer += "L";
        locationLeft = numbers[index];
      } else if (distanceLeft === distanceRight) {
        if (hand === "right") {
          answer += "R";
          locationRight = numbers[index];
        } else if (hand === "left") {
          answer += "L";
          locationLeft = numbers[index];
        }
      }
    }
  }

  return answer;
}
