function solution (absolutes, signs) {
    let answer = 0;
    
    for (let i = 0; i <=absolutes.length; i++) {
        if (signs[i] === false) {
            absolutes[i] = -absolutes[i]
        } else {
            absolutes[i] 
        }
    }
    answer = absolutes.reduce(function(acc,cur) {
        return acc + cur
    } )
    return answer;
    
}