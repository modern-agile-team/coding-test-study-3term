function solution(new_id) {
    const conditionFirst = new_id.replace(/[A-Z]/g, x => x.toLowerCase());
    const conditionSecond = conditionFirst.replace(/[\{\}\[\]\/?,;:|\)*~`!^+<>@\#$%&\\\=\(\'\"]/g, "");
    const conditionThird = conditionSecond.replace(/\.+/g, ".");
    const conditionFourth = conditionThird.replace(/^\.|\.$/g, "");
    let   conditionFifth = conditionFourth;
    
    if (conditionFourth.length === 0) {
        conditionFifth = conditionFourth + 'a';
    }
    const conditionSixth = conditionFifth.length > 15 ? 
          conditionFifth.slice(0, 15).replace(/^\.|\.$/g, "") : conditionFifth;
    
    const coditionAllpass = conditionSixth;
    
    if (coditionAllpass.length === 1) {
         return coditionAllpass.repeat(3);
    } else if(coditionAllpass.length === 2) {
        return coditionAllpass.concat(coditionAllpass[1]);
    } else {
        return coditionAllpass;
    }
}



