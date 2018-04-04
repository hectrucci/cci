const isOneAway = (str1, str2) => {
    const shorterStr = str1.length < str2.length ? str1 : str2;
    const largerStr = str1 === shorterStr ? str2 : str1;

    if (largerStr.length - shorterStr.length > 2) {
        return false;
    }

    const shorterStrSet = getCharSet(shorterStr);
    const largerStrSet = getCharSet(largerStr);
    let diffCount = 0;

    for (let prop in largerStrSet) {
        if (!shorterStrSet[prop] || shorterStrSet[prop] !== largerStrSet[prop]) {
            diffCount++;
        }
    }

    return diffCount < 2;
};

const getCharSet = str => {
    const charSet = {};

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        charSet[currentChar] = (charSet[currentChar] || 0) + 1;
    }

    return charSet;
};

module.exports = isOneAway;