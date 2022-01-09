function solution(board, moves) {
    const LENBOARD = board.length;
    let newBoard = board.map((item) => []);
    let pushedIcon = [];
    let score = 0;
    for (let primary = 0; primary < LENBOARD; primary++) {
        for (let secondary = 0; secondary < LENBOARD; secondary++) {
            newBoard[secondary].push(board[primary][secondary]);
        }
    }
    for (let selectLine in moves) {
        for (let selectedLine = 0; selectedLine < LENBOARD; selectedLine++) {
            if (newBoard[moves[selectLine] - 1][selectedLine]) {
                if (
                    pushedIcon[0] !==
                    newBoard[moves[selectLine] - 1][selectedLine]
                ) {
                    pushedIcon.unshift(
                        newBoard[moves[selectLine] - 1][selectedLine]
                    );
                } else {
                    pushedIcon.shift();
                    score++;
                }
                newBoard[moves[selectLine] - 1][selectedLine] = 0;
                break;
            }
        }
    }
    return score * 2;
}
