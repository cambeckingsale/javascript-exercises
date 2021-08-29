const reverseString = function(str) {
    let strArr = str.split('');
    let ret = '';
    for (let i = 0; i < str.length; i++) {
        ret += strArr.pop();
    }
    return ret;
};

module.exports = reverseString;
