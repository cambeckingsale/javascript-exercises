const sumAll = function(first, second) {
    if (typeof first == 'number' && typeof second == 'number' &&
        first >= 0 && second >= 0) {
        let ret = 0;
        if (first > second) {
            let temp = first;
            first = second;
            second = temp;
        }
        for (let i = first; i <= second; i++) {
            ret += i;
        }
        return ret;
    }
    else {
        return 'ERROR';
    }

};

module.exports = sumAll;
