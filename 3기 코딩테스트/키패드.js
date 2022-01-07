function solution(numbers, hand) {
  let result = "";

  function location(arr1, arr2) {
    const load = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
    return load;
  }

  const key = {
    1: [0, 1],
    2: [0, 2],
    3: [0, 3],
    4: [1, 1],
    5: [1, 2],
    6: [1, 3],
    7: [2, 1],
    8: [2, 2],
    9: [2, 3],
    "*": [3, 1],
    0: [3, 2],
    "#": [3, 3],
  };
  let right = [3, 1];
  let left = [3, 3];

  numbers.forEach((num) => {
    const number = key[num];
    if (number[1] === 1) {
      left = number;
      result += "L";
    } else if (number[1] === 3) {
      right = number;
      result += "R";
    } else {
      const leftLoad = location(left, number);
      const rightLoad = location(right, number);
      if (leftLoad === rightLoad) {
        if (hand === "left") {
          left = number;
          result += "L";
        } else {
          right = number;
          result += "R";
        }
      } else if (leftLoad < rightLoad) {
        left = number;
        result += "L";
      } else {
        right = number;
        result += "R";
      }
    }
  });
  return result;
}
