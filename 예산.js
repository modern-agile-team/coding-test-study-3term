function solution(d, budget) {
    let finalBudget = budget;
    const part = d.sort((a, b) => a - b);
    const useBudget = part.map((item) => {
        finalBudget -= item;
        return finalBudget;
    });
    const finalPart = useBudget.filter((item) => item >= 0);
    const answer = finalPart.length;
    return answer;
}
