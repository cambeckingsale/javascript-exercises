const palindromes = function (word) {
    let wordArr = [...word.toLowerCase().replace(/[^\w]/g, "")]
    let len = wordArr.length
    for (let i = 0; i < Math.floor(len/2); i++) {
        if (wordArr[i] != wordArr[len - i -1]) {
            return false
        }
    }
    return true
};

module.exports = palindromes;
