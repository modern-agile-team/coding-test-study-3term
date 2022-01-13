// 다시 제출 ㅎㅎ
function solution(n, arr1, arr2) {
    const LEN_MAP = n;

    const firstArray = arr1.map((item) => item.toString(2));
    const secondArray = arr2.map((item) => item.toString(2));

    let mergedMap = firstArray.map((item, index) =>
        String(Number(item) + Number(secondArray[index]))
    );

    mergedMap = mergedMap.map((item) => {
        while (item.length < LEN_MAP) {
            item = `0${item}`;
        }
        return item;
    });

    mergedMap = mergedMap.map((item) =>
        item.split("").map((each) => (each !== "0" ? "#" : " "))
    );
    mergedMap = mergedMap.map((item) => item.join(""));

    return mergedMap;
}
