function solution(newId) {
    newId = newId.toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g,'.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/,'a')
        .slice(0, 15).replace(/\.$/, '');
    
    const idLen = newId.length;

    return idLen > 2 ? newId : newId + newId.slice(-1).repeat(3 - idLen);
}