function solution(board, moves) {
    moves = moves.map((x) => x - 1);
    const basket = [];
    let result = 0;
    
    for (let i = 0; i < moves.length; i += 1) {
        for (let j = 0; j < board.length; j += 1) {
                         if (board[j][moves[i]] !== 0) {
                basket.push(board[j][moves[i]]);
                board[j][moves[i]] = 0;
                if (basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    result += 2;
                };   
                break;
            }
        }
    }
    return result
};