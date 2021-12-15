function solution(n, lost, reserve) {
  const student = [];

  // 여벌 체육복이 있는 학생 번호에서 도난학생 번호를 뺐을 때 절댓값이 1이 되는 번호가 있는지
  for (let lostStudent in lost) {
    for (let reserveStudent in reserve) {
      // 있다면 reserve에서 원소 삭제
      if (Math.abs(lost[lostStudent] - reserve[reserveStudent]) === 1) {
        console.log(lost[lostStudent], reserve[reserveStudent]);
        reserve.splice(reserve[reserveStudent], 1);
        console.log(lost, reserve);
        break;

        // 없다면 전체 학생 수 - 1 => 마지막 return은 n
      } else {
        n - 1;
      }
    }
  }
  return n;
}

// 코드 출처 - https://laycoder.tistory.com/202
// 참고 - 원 코드에서 18번 테스트 케이스 통과가 안 돼서 lost와 reserve를 정렬하는 코드를 넣었더니 통과됨
// function solution(n, lost, reserve) {
//     lost = lost.sort();
//     reserve = reserve.sort();
//     // 체육복을 잃어버렸으면서 여벌이 없는 경우
//     const realLost = lost.filter((element) => !reserve.includes(element));

//     // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
//     let realReserve = reserve.filter((element) => !lost.includes(element));

//     // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
//     return (
//         // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
//         n -
//         realLost.filter((lost) => {
//             // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
//             const lend = realReserve.find(
//                 // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
//                 (reverse) => Math.abs(reverse - lost) == 1,
//             );

//             // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
//             if (!lend) return lost;
//             // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
//             realReserve = realReserve.filter((reverse) => reverse !== lend);
//         }).length
//     );
// }
