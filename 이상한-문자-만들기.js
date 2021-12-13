function solution(s) {
    let newText = s.split(" ");
    newText = newText.map((item) => item.split(""));

    newText = newText.map((item1, index1) =>
        item1.map((item2, index2) =>
            index2 % 2 ? item2.toLowerCase() : item2.toUpperCase()
        )
    );

    const answer = newText.map((item, index) => item.join("")).join(" ");
    return answer;
}
