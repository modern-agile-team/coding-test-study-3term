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
    newArray = newArray.forEach((item, index) => {
      if (item.match(/\*{1,}/g).length > 1 && index > 0) {
          newArray[index - 1] = newArray[index - 1] + '*2'
        }
    });
    const result = newArray.join(' ').replace(/ /g, '+').replace(/\(/g, '*(');
    return (eval(result));
}
