function solution(d,budget){
    let count = 0;
    const dLength = d.length;

    d.sort((a,b) => a-b);
    for (let index = 0; index < dLength; index++) {
        if (d[0] <= budget) {
            budget -= d[0];
            d.shift();
            count++;
        }
    }
    return count;
    
}

/*
맨처음에는 for문의 조건을 줄때 for (let index = 0; index< d.length; index++) 이렇게 주었는데 if문에서 d.shift(); 때문에 배열 d의 길이가 if문을 진행 함에 따라
줄어들어서 실패하였고, 같은 이유로 if 문의 d[index] 의 값이 배열 자체가 변형되었기에 d[index]의 값이 내가 원하는 값과 안 맞았음 
따라서 배열 d의 길이는 for문이 시작 되기 이전에 const와 d.length함수를 통해 배열의 길이를 담는 값을 만들어주고, 
if문내부에 있는 d[index]값은 어차피 d.shift 구문으로 인해 d의 배열의 첫번째요소가 삭제되면서 for문이 돌 것이므로 d[0]을 해주면 되고, 배열의 첫째 요소와 '지원을 해주고 남은 예산'을 비교하면 된다. 
*/ 
