function solution(new_id) {
    let getTarget = new_id.toLowerCase();

    getTarget = getTarget.match(/[a-z0-9\.\-\_]/g).join("");

    getTarget = getTarget.replace(/\.{2,}/g, ".");

    getTarget = getTarget.replace(/^\./g, "");

    if (getTarget === "") {
        getTarget = "a";
    }

    getTarget = getTarget.slice(0, 15);

    getTarget = getTarget.replace(/\.$/g, "");

    while (getTarget.length < 3) {
        getTarget = getTarget + getTarget[getTarget.length - 1];
    }

    return getTarget;
}
