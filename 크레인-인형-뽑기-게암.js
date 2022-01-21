function solution(board, moves) {
    const backet = [];
    let result = 0;
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i]-1] === 0) {
                continue
            }
            else {
                if(backet[backet.length-1] === board[j][moves[i]-1]){
                    board[j][moves[i]-1] = 0;
                    result += 2;
                    backet.pop();
                    break;
                }
                backet.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return result;
}