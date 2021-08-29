const removeFromArray = function(arr, ...toRem) {
    let ret = [];
    let remArr = Array.from(toRem);
    for (let i = 0; i < arr.length; i++) {
        if (!remArr.includes(arr[i])) {
            ret.push(arr[i]);
        }
    }
    return ret;
};

module.exports = removeFromArray;
