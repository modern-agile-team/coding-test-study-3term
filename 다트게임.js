function solution(dartResult) {
    const object =
    {
        "S": 1,
        "D": 2,
        "T": 3,
        "*": 2, 
        "#": -1,
        'undefined': 1
    }
    let darts = dartResult.match(/\d.?\D/g)

    for(let i = 0; i < darts.length; i++) {
        const dart = darts[i].match(/(\d{1,})(\S|D|T)(\*|#)?/)
        const score = Math.pow(dart[1], object[dart[2]]) * object[dart[3]]
        if(darts[i-1] && dart[3] === '*') {
            darts[i-1] *= object['*']
        }
        darts[i] = score;
    }
    return darts.reduce((a, b) => a + b);
}