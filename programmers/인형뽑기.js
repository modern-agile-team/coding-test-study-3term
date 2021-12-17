function solution(board, moves) {
    const result = [];
    let cnt = 0;
    moves = moves.map(el => el - 1);
      
    for (let move of moves) {
      for (let j = 0 ; j < board.length; j++) {
        if (board[j][move] > 0) {
          if (result[result.length - 1] === board[j][move]) {
            result.pop();
            cnt += 2;
          } else {
            result.push(board[j][move]);
          };
          board[j][move] = 0;
          break;
        };
      };
    };
      
    return cnt;
}