const URLify = (str, length) => {
    const strArr = [...str];
    let spaceCount = 0;

    for (let i = 0; i < length; i++) {
        if (strArr[i] === ' ') {
            spaceCount++;
        }
    }

    let index = length - 1 + (spaceCount * 2);

    for (let i = length - 1; i >= 0; i--) {
        if (strArr[i] === ' ') {
            strArr[index] = '0';
            strArr[index - 1] = '2';
            strArr[index - 2] = '%';
            index = index - 3;
        } else {
            strArr[index] = strArr[i];
            index = index - 1;
        }
    }

    return strArr.join('');
};


module.exports = URLify;
