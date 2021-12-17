function solution(new_id) {
    //1단계 대문자 > 소문자 변환
    const lowerId = new_id.toLowerCase();
    //2단계 소문자,숫자,-,_,.빼고 전부 없애기(정규표현식+join함수)
    const regex1 = /[a-z0-9._\-]/g;
    const removeId = lowerId.match(regex1).join("");
    //3단계 마침표가 2번이상 연속된 부분을 하나의 마침표로 만들기 (정규 표현식+replace함수를 이용하기)
    const regex2 = /\.{2,}/g;
    const dotOneId = removeId.replace(regex2,".")
    //4단계 마침표가 처음이나 끝에 위치한다면 제거 
    const regex3 = /^\.+|\.+$/g;
    let removeDotOneId = dotOneId.replace(regex3,"");
    //5단계 빈 문자열이라면, 아이디에 "a"를 대입하기(if 조건에서 removeDotOneId가 a로 변할 수 있으므로 removeDotOneId는 let으로 선언해야함)
    if (removeDotOneId.length === 0) {
        removeDotOneId += "a";
    }
    //6단계 
    let sliceId = removeDotOneId.slice(0,15)
    let removeDotId = sliceId.replace(regex3,"")
    //7단계 
    while (removeDotId.length <= 2) {
        removeDotId += removeDotId[removeDotId.length-1]
    }
    return removeDotId;
}
/*
변수,상수 선언이 너무 많아고 단계별로 풀다보니 코드가 일차원적으로 작성한코드인것 같다 ㅠㅠ 
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, '');
문제를 다 풀고 난 이후 다른 사람 풀이를 보았는데 단계마다 변수,상수 선언 하지 말고 이런식으로 메소드 끼리 이어 붙일 수 도 있다는 것을 알게 되었음
*/ 