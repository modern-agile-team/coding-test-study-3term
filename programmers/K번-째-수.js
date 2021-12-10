// ������ �ٽ� ���� �����ϱ�.
// �ִ��� ���� ��԰� �ٽ� Ǯ��.
function solution(array, commands) {
    const result = [];
    for(let x = 0; x < commands.length; x += 1) {
        let i = commands[x][0];
        let j = commands[x][1];
        let k = commands[x][2];
        
        const extRactArr = array.slice(i - 1, j)
        const sortedArr = extRactArr.sort((a, b) => a < b ? -1 : 0);
        result.push(sortedArr[k - 1])
    }
    return result
}