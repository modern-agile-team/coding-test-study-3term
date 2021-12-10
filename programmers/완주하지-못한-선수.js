function solution(participant, completion) {
  const marathon = {};

  for (let player of participant) {
    player in marathon ? (marathon[player] += 1) : (marathon[player] = 1);
  }

  for (let finishPlayer of completion) {
    marathon[finishPlayer] -= 1;
  }

  for (let noCompletion in marathon) {
    if (marathon[noCompletion] === 1) return noCompletion;
  }
}
