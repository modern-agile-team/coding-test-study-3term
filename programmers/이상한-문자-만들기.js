function solution(s) {
    const Arr = s.split(" ");
    const result = [];
    const wordArr = [];
    
    for (let i = 0; i < Arr.length; i += 1) {
        wordArr.push(Arr[i].split(""));
        
        for (let j = 0; j < Arr[i].length; j += 1) { 
            
            j % 2 ? result.push(wordArr[i][j]) 
            : result.push(wordArr[i][j].toUpperCase());       
        }
        result.push(" ");
    }
    
    return result.length.join("") = s.length;     
}