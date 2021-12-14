function solution(arr) {
    const minNum = Math.min.apply(null,arr);
    const deleteMinArr = arr.filter(element => element !== minNum);
    console.log(Math.min(arr))
    if (deleteMinArr.length === 0 || deleteMinArr.length === 1) {
        return [-1];
    }
    return deleteMinArr

}
console.log(solution([10,20,50,6]))

//Math.min(arr)했는데 NaN나와서 구글링해 본 결과 앞에 null을 넣어주어야 배열이 Math함수를 거칠수 있나봄
//3번째 줄은 filter함수를 통하여 요소가 minNum이 아닌 녀석들을 모아 deleteMinArr에 넣어주었음.
/*
function solution(arr) {
    arr.sort();
    const minNumCount = arr.filter(element => arr[0] === element).length;
    console.log(minNumCount);
    const arr2 = arr.slice(minNumCount,arr.length).reverse();
    if (arr2.length === 0 || arr2.length === 1) {
        return [-1];
    }
    return arr2
}
이거 왜 안되는지 모르겠음...>> 알아냄 sort하면 안됨 문제에서 제시한 처음 배열을 건드리지 말고 제일작은 놈 쏙 빼내는거라 sort쓰는 풀이는 다 나가리임.. 
*/
