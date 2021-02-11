exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let arraySum = 0;
        for (let i = 0; i < array.length; i++) {
            arraySum += array[i];
        }
        return arraySum / array.length;
    }
};
