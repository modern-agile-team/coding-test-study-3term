function solution(s) {
    const Arr = s.split(" ");
    const result = [];
    const wordArr = [];
    
    for (let i = 0; i < Arr.length; i += 1) {
        wordArr.push(Arr[i].split(""));

        for (let j = 0; j < Arr[i].length; j += 1) {
            
            j % 2 === 0 ? 
                result.push(wordArr[i][j].toUpperCase())
                :
                result.push(wordArr[i][j].toLowerCase());
        }
        result.push(" ");
    }
    result.length = s.length;
    return result.join("");
}