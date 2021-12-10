//자릿수 더하기
function solution(n)
{
    let answer = 0;
    let m=String(n);
    for(let i=0; i<m.length; i++){
        answer+=parseInt(m[i]);
    }
    return answer;
}