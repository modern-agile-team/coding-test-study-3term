function getDistance(hand, leftFinger, rightFinger, keys, num) {
  const left =
    Math.abs(keys[num][0] - keys[leftFinger][0]) +
    Math.abs(keys[num][1] - keys[leftFinger][1]);
  const right =
    Math.abs(keys[num][0] - keys[rightFinger][0]) +
    Math.abs(keys[num][1] - keys[rightFinger][1]);

  if (left === right) return hand === "left" ? "L" : "R";

  return left < right ? "L" : "R";
}

function solution(numbers, hand) {
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
  let leftFinger = "*";
  let rightFinger = "#";
  let answer = "";

  for (let num of numbers) {
    if (num % 3 === 1) {
      answer += "L";
      leftFinger = num;
    } else if (num === 0) {
      answer += getDistance(hand, leftFinger, rightFinger, keys, num);
      answer[answer.length - 1] === "L"
        ? (leftFinger = num)
        : (rightFinger = num);
    } else if (num % 3 === 0) {
      answer += "R";
      rightFinger = num;
    } else {
      answer += getDistance(hand, leftFinger, rightFinger, keys, num);
      answer[answer.length - 1] === "L"
        ? (leftFinger = num)
        : (rightFinger = num);
    }
  }
  return answer;
}
