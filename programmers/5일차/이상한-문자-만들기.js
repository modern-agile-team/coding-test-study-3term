function solution(s) {
    const splitS = s.split(" ");
    let changeWord = ""

    for (let word of splitS) {
        for (let index = 0; index<word.length; index++) {
            if (index % 2 == 0) {
                changeWord += word[index].toUpperCase();
            }
            else changeWord += word[index].toLowerCase();
        }
        changeWord += " ";
    }
    return changeWord.slice(0,changeWord.length-1)
    
}

/*마지막에 slice해준 이유는 바깥 for문에서 단어마다 대소문자 변환하는 for문이 끝나고 공백을 넣어주는 부분이있는데 그렇게 되면 그냥 changeWord해주었을 때
문장 마지막에 공백이 붙어서 나온다 따라서 문자열 슬라이싱 함수를 이요해서 마지막에 붙는 공백을 없애 주었다.*/