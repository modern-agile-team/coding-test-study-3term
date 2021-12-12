function solution(lottos,winNums){
    const correctCntRank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    }
    let minCount = 0;
    let zeroCount = 0;
    let maxCount = 0;
    //minCount,maxCount 은 로또의 최소,최고 등수일때 zeroCount 은 lottos에 있는 0의 개수
    
    for (let zero of lottos) {
        if (zero == 0) zeroCount += 1;
    }
    // console.log(zeroCount)
    for (let num of lottos) {
        if (winNums.includes(num)) {
            minCount += 1;
        }
    } 
    // console.log(minCount)
    maxCount = minCount + zeroCount
    return [correctCntRank[maxCount],correctCntRank[minCount]]
}

/*완주하지 못한 선수를 객체로 풀어본 김에 객체를 이용해 볼까 생각했던 문제
로또의 맞춘 개수 별 순위가 담긴 객체인 correctCntRank를 만들어 주고, 최고 맞춘개수와 최저 맞춘개수, 0의 개수를 담을 변수들을 만들어주고,
for문과 조건을 이용하여 lottos에 있는 0의 개수를 zeroCount에 담아주어 0의 개수를 찾아주고, 0이 전부다 틀렸다고 가정했을때 최저 맞춘개수를
for문,if문,includes함수를 이용하여 minCount에 담아준다. 이후에 0이 전부 맞았을 때 즉,zeroCount와 minCount를 합한 값을 maxCount 에 넣어주고,
앞서 만들어 주었던 객체를 이용하여 return 해주면 끝.(신기한건 예전에 파이썬으로 풀었을 내 풀이와 지금 내 풀이가 매우 비슷함...)
로또 처럼 맞힌 개수와 등수가 각각 반비례하거나 까다롭다 느껴질 때 다른거 생각하지 말고 JS는 객체, 파이썬은 딕셔너리를 한번 활용해 볼 생각을 하는 연습필요.
*/