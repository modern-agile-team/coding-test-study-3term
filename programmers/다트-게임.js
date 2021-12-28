function solution(dartResult) {
  const regex = /[1]?[0-9][SDT][*#]?/g;
  const roundResult = dartResult.match(regex);
  for (let round in roundResult) {
    if (roundResult[round] !== 0 && roundResult[round].indexOf('*') !== -1) {
      roundResult[round - 1] += '*2';
      roundResult[round] = roundResult[round].replace('*', '*2');
    }
    roundResult[round] = roundResult[round]
      .replace('S', '**1')
      .replace('D', '**2')
      .replace('T', '**3')
      .replace('#', '*-1');
  }

  return eval(roundResult[0]) + eval(roundResult[1]) + eval(roundResult[2]);
}
