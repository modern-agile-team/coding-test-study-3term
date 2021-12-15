function solution(n, lost, reserve) {
    let answer = 0;
    let ptArr = [];
    for (let i = 1 ; i <= n ; i++) {
        ptArr.push(1) 
        if (reserve.includes(i)) { 
            ptArr[i-1]++   
        } 
        if (lost.includes(i)) { 
            ptArr[i-1]-- 
        }       
    }
    for (let i = 0 ; i < n ; i++) {
        if (!ptArr[i]) { 
            if (ptArr[i-1]===2) { 
                ptArr[i]++ 
                ptArr[i-1]-- 
        } else if(ptArr[i+1]===2){ 
            ptArr[i]++ 
            ptArr[i+1]-- 
        }
    }
    }
    for (let i = 0 ; i< n ; i ++) { 
        if (ptArr[i] >= 1) {
            answer++
        }
    }

    return answer;
}