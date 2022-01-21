function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1: [0,0], 2: [0,1], 3:[0,2],
        4: [1,0], 5: [1,1], 6:[1,2],
        7: [2,0], 8: [2,1], 9:[2,2],
        '*': [3,0], 0: [3,1], '#':[3,2] 
    };

    let Left = [3,0]; 
    let Right = [3,2];

    numbers.forEach(num => {
        let numLocation = keypad[num];//num이 key 이기에 value가 나옴
        if(numLocation[1] === 0) {
            Left = numLocation;
            answer += 'L';
        } else if (numLocation[1] === 2) {
            Right = numLocation;
            answer += 'R';
        } else {
            let guliLeft = ixiy(Left,numLocation);
            let guliRight = ixiy(Right,numLocation);
        
            if (guliLeft < guliRight){
                Left = numLocation;
                answer += 'L';
            }
            else if (guliLeft > guliRight){
                Right = numLocation;
                answer += 'R';
            }
            else {
                if(hand === "left"){
                    Left = numLocation;
                    answer += 'L';
                }
                else {
                    Right = numLocation;
                    answer += "R";
                }
            }
        }         
});
    function ixiy(pos,han){
        const row = Math.abs(pos[0] - han[0]);
        const col = Math.abs(pos[1] - han[1]);
        return row + col;
        }
    return answer;
}