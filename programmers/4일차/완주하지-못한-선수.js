function solution(participant, completion) {
    const objectCompletion = {};
    
    for (let  person of participant) {
        objectCompletion[person] = objectCompletion[person] ? objectCompletion[person] + 1 : 1;
        //이럴때 삼항 연산자 써본다 objectCompletion[person] 이 여러번 나오게 된다면 두번째 세번째 나오는 놈은 그 앞번에 나온녀석의 value값에 +1 해준값을 value로 주고
        //조건이 거짓일때 즉, 한번만 나오는경우 1을 value에 넣어줌
        console.log(objectCompletion)
    }
    for (let comPerson of completion) {
        objectCompletion[comPerson] -= 1;
        console.log(objectCompletion)
    }
    for (let key of participant) {
        if (objectCompletion[key] == 1) {
            return key
        }
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
/*
처음에 했던 생각
>객체를 이용하여 문제를 풀라고 주어졌으므로 객체의 key,value속성을 활용하는 것으로 보임,
objectCompletion이라는 객체를 생성하고 for문 을 돌려 참여자에 key속성을 넣어주면서 value에 아무 숫자를 찍어준다.
이제 참여자 목록이 들어있는 objectCompletion라는 객체를 다시 for문을 돌려 completion라는 key를 가진 녀석들의 value만 없앤다.
그러면 참여하지 않는 사람은 value값을 끝까지 가지고 있게 되고 value값을 가진 사람을 return해 주면 됨
처음에 했던 생각을 실행하면
>value값을 가지고 key를 가져오는것이 어려울 뿐더러 중복된 이름을 가진 참가자가 같은 value를 가지기 때문에 오류남.(삽질 오지게함..)
두번째 했던 생각
>처음에 했던 풀이에다 동명이인들의 각 key의 value를 앞전의 동명이인의 key에다 + 1 해 줄수만 있다면??
삼항연산자를 사용하여 준다면 위의 조건을 한줄로 추가해 줄 수도 있음.(조건에는 objectCompletion[person] 의 값이 있다면 
objectCompletion[person]에 +1 한 값을 objectCompletion[person]에 넣어주고 없다면 1을 넣어준다는 조건)
처음에는 if문을 사용해 보았으나 if 문을 사용하면 
--------------------------------------------
하다가 의문점 objectCompletion에 요소 추가해줄때
objectCompletion[person] = "1"; 로 요소 넣어줄때는 들어가는데
objectCompletion.person = "1";
>> 아마 . 으로 요소 추가해줄 때는 걍 . 뒤에 오는 변수가 아니라 문자 자체라고 인식하나봄
*/