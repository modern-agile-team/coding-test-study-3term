function solution(lottos, win_nums) {
    
    const answer = [];
    let num = 0;
    let countzero = 0;
    let countmin = 0;

    for (let i = 0; i <= 5; i++){
        num = lottos[i];// lottos의 요소를 num에 넣는다. 

        if (win_nums.indexOf(num) != -1) { //win_nums의 요소와 num이 동일하면
            countmin += 1;
        }else if (num === 0) {
            countzero += 1;
        }
    }
    //console.log(countmin,countzero)
    let top = 0; 
    let bottom = 0;

    top = Math.min(7 - (countmin + countzero), 6) // top bottom 이 7이면 6으로 변경
    bottom = Math.min(7 - countmin, 6)

    answer.push(top, bottom)

    return answer;
}
//배열을 const로 바꿔 봤는데 배열 이외에 다른 것도 바꿔야 하는 것이 있는지 감이 안잡힙니다. ㅜㅜ 