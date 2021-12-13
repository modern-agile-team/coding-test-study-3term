function solution(s) {
    const str = s.split(" ").map(word => {
        let strs = '';
        
        for (let i = 0; i < word.length; i++) {
            i % 2 ? strs += word[i].toLowerCase() : strs += word[i].toUpperCase();
        }; 
        
        return strs;
    });
    
    return str.join(" ");
};