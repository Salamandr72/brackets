module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.join('').replace(/[\,]/g, '');
    let indexBrackets = [];
    for (let i = 0; i < str.length; i++) {
        let iB = config.indexOf(str[i]);
        if (iB % 2 === 0) {
            if (config[iB] === config[iB + 1]) {
                if (iB === indexBrackets[indexBrackets.length - 1]) {
                    indexBrackets.pop();
                } else { indexBrackets.push(iB); }
            } else {
                indexBrackets.push(iB + 1);
            }
        } else {
            if (indexBrackets.pop() !== iB) return false;
        }
    }
    return indexBrackets.length === 0;
}
