// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    let answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    // correct = lottos배열을 순회하며 당첨배열에있는 숫자를 return하고 총 갯수
    const zeros = lottos.filter(lotto => lotto === 0).length;
    // zeros = lottos배열을 순회하며 로또가 0과 같은 숫자를 return하고 총 갯수
    console.log(correct, zeros);
    
    let min = 7-correct >= 6 ? 6 : 7-correct;
    //7인 이유 맞은 갯수가 0일 경우 7위가 됨으로 6위로 해야함.
    //최소순위: 7-(당첨 배열의 숫자)가 6위보다 높거나 같다가 참일때 6위가 나오고 거짓일때 (그런데 이것은 참 일 수 밖에 없음)
    let max = min-zeros < 1 ? 1 : min-zeros;
    //최대순위: 최고 순위는 최저 순위에서 0의 갯수를 빼주면 됨 
    //모두 다 0일 경우 min은 6, max는 0이 되므로 0을 1로 바꿔주면 된다.
    
    answer = [max, min]
    return answer;
}