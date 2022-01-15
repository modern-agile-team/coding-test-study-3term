function solution(arr1st, arr2nd) {
    
    arr1st.map((firstEl, i) => 
               firstEl.map((secondEl, j) => 
                           arr2nd[i][j] = arr2nd[i][j] + secondEl));
    
    return arr2nd;
}

    // for (let i = 0; i < arr1st.length; i ++) {
    //     for (let j = 0; j < arr1st[0].length; j++) {
    //         arr1st[i][j] = arr1st[i][j] + arr2nd[i][j];
    //     }
    // }