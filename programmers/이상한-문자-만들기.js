function solution(s) {
  let answer = '';
  const words = s.split(' ');

  for (let word = 0; word < words.length; word++) {
    for (let alphabet = 0; alphabet < words[word].length; alphabet++) {
      answer =
        alphabet % 2 === 0
          ? answer + words[word][alphabet].toUpperCase()
          : answer + words[word][alphabet].toLowerCase();
    }
    answer += ' ';
  }
  return answer.slice(0, -1);
}
