function solution(dartResult) {
    let newResult = dartResult
        .replace(/\*/g, " *2 ")
        .replace(/S/g, "**1 ")
        .replace(/D/g, "**2 ")
        .replace(/T/g, "**3 ")
        .replace(/\#/g, "(-1) ")
        .replace(/ \(/g, "(")
        .replace(/ {1,}\*/g, "*")
        .replace(/ {1,}$/g, "");
    let newArray = newResult.split(" ");
    let getStarIndex = [];
    newArray.forEach((item, index) => {
        console.log(item);
        if (item.match(/\*{1,}/g).length > 1) {
            getStarIndex.push(index);
        }
    });
    getStarIndex.forEach((item) => {
        if (item > 0) {
            newArray[item - 1] = newArray[item - 1] + "*2";
        }
    });
    const result = newArray.join(" ").replace(/ /g, "+").replace(/\(/g, "*(");
    return eval(result);
}
