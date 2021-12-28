function solution(board, moves){
    const basket = [];
    let count = 0;
 
for (let col = 0; col < moves.length; col++) {
        for (let row = 0; row < board.length; row++) {
            if (!board[row][moves[col]-1] == 0) {
            //배열의 첫번째 index = 0 이므로 -1해주어야 함.
                basket.push(board[row][moves[col]-1]);
                if (basket[basket.length-2] === basket[basket.length-1]) {
                    basket.pop();
                    basket.pop();
                    count += 2;
                }
                board[row][moves[col]-1] = 0;
                break;
                //break 안찍으면 배열 a안을 모두 돌기때문에 배열 a의 모든 요소가 0이됨.
            }
        }
    }
    return count;
}
/*
  for (let index = 0; index < basket.length - 1 ; index++) {
        if (basket[index] === basket[index + 1]) {
            basket.splice(index,2);
            index = 0;
        }
    }
    return totalBasket - basket.length;
    처음에는 배열 basket를 만들어서 위의 과정에서 넣어주면서 없애지 않고 일단 다 넣어준다음에 반복문으로 앞에서 넣어주었던 basket돌면서 앞뒤 비교하면서 없애주려고 했는데
    basket 이 [1,1,1,1] 같이 나오는 케이스에서 걸림 >> 왜냐면 splice로 잘라주면 배열의 크기까지 작아지기 때문에 basket.length 를 맞춰주기가 어렵고 잘못하면 무한루프가 되거나,
    배열의 인덱스가 안맞아서 0번째 인덱스는 값이 존재해도 1번째 인덱스는 undefined로 나올 수 있게 됨.
    따라서 basket에 인형을 넣어주자마자 앞에 넣어준 인형이랑 같으면 바로 터트려 주는 방식으로 해결
    하지만 [1,1,1,1] 인 경우 for문으로 앞뒤 비교하면서 같은 값들 삭제해 주는 방법 찾아 볼 필요가 있음.
*/  
   
