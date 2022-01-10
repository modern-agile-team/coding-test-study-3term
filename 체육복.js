function solution(n, lost, reserve) {
    const ALL = Array(n)
        .fill()
        .map((item, index) => index + 1);

    let objAll = {};
    ALL.forEach((item) => {
        objAll[item] = 1;
    });

    reserve.forEach((item) => {
        objAll[item] += 1;
    });

    lost.forEach((item) => {
        objAll[item] -= 1;
    });

    Object.values(objAll).forEach((item, index) => {
        if (item === 2) {
            if (objAll[index + 1 - 1] === 0) {
                objAll[index + 1 - 1] += 1;
            } else if (objAll[index + 1 + 1] === 0) {
                objAll[index + 1 + 1] += 1;
            }
        }
    });

    Object.values(objAll).forEach((item, index) => {
        if (item === 0) {
            delete objAll[index + 1];
        }
    });

    const answer = Object.keys(objAll).length;

    return answer;
}
