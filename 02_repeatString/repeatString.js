const repeatString = function(str, num) {
    let ret = '';
    if (num < 0) {
        ret = 'ERROR'  
    }
    else {
        for (let i = 1; i <= num; i++) {
            ret += str;
        }
    }
    return ret;
};

module.exports = repeatString;
