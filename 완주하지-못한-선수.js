function solution(participant, completion) {
    const runners = {};

    for (let p of participant) {
    runners[p] = runners[p] ? runners[p] + 1 : 1;
       //console.log(p)
    }
    for (let c of completion) {
    runners[c] -= 1;
    }
    for (let key in runners){
        if (runners[key] === 1)
        return key;
    }
}


