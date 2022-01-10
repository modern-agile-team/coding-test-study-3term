function solution(numbers, hand) {
    const newHand = hand === "left" ? "L" : "R";
    const pad = Array(4)
        .fill()
        .map((item, index) =>
            index !== 3
                ? [index * 3 + 1, index * 3 + 2, index * 3 + 3]
                : ["*", 0, "#"]
        );

    const padIndex = {};
    pad.forEach((item1, row) => {
        item1.forEach((item2, col) => {
            padIndex[item2] = [row, col];
        });
    });

    console.log(pad);
    console.log(padIndex);

    const judgeFinger = {
        1: "L",
        2: "M",
        0: "R",
        "*": "L",
        "#": "R",
    };

    let finger = {};
    pad.forEach((item1) => {
        item1.forEach((item2) => {
            if (typeof item2 === "string") {
                finger[item2] = judgeFinger[item2];
            } else if (item2 === 0) {
                finger[item2] = "M";
            } else {
                finger[item2] = judgeFinger[item2 % 3];
            }
        });
    });

    let latest = {
        L: padIndex["*"],
        R: padIndex["#"],
    };

    let arr1 = numbers.map((number, index) => {
        const ROW = 0;
        const COL = 1;
        const LEFTROWDISTANCE = Math.abs(
            padIndex[number][ROW] - latest["L"][ROW]
        );
        const RIGHTROWDISTANCE = Math.abs(
            padIndex[number][ROW] - latest["R"][ROW]
        );
        const LEFTCOLDISTANCE = Math.abs(
            padIndex[number][COL] - latest["L"][COL]
        );
        const RIGHTCOLDISTANCE = Math.abs(
            padIndex[number][COL] - latest["R"][COL]
        );
        if (finger[number] === "M") {
            if (
                LEFTROWDISTANCE + LEFTCOLDISTANCE >
                RIGHTROWDISTANCE + RIGHTCOLDISTANCE
            ) {
                latest["R"] = padIndex[number];
                return judgeFinger[0];
            } else if (
                LEFTROWDISTANCE + LEFTCOLDISTANCE <
                RIGHTROWDISTANCE + RIGHTCOLDISTANCE
            ) {
                latest["L"] = padIndex[number];
                return judgeFinger[1];
            } else {
                latest[newHand] = padIndex[number];
                return newHand;
            }
        } else {
            latest[finger[number]] = padIndex[number];
            return finger[number];
        }
    });
    return arr1.join("");
}
