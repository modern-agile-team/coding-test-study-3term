function solution(boards, moves) {
  let count = 0;
  let stack = [0];

  moves = moves.map((move) => move - 1);
  for (let move of moves) {
    for (let board of boards) {
      if (board[move] != 0) {
        stack.push(board[move]);
        board[move] = 0;
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          count += 2;
        }
        break;
      }
    }
  }
  return count;
}
