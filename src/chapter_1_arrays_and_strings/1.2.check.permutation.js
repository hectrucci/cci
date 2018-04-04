const checkPermutation = (str1, str2) => {
    if (str1.length === str2.length) {
        const charsOfStr1 = getCharSet(str1);
        const charsOfStr2 = getCharSet(str2);

        for (let currentChar in charsOfStr1) {

            // will omit the hasOwnProperty check >:)
            if (charsOfStr1[currentChar] !== charsOfStr2[currentChar]) {
                return false;
            }
        }
        return true;
    }
    return false;
};

const getCharSet = str => {
    const charSet = {};

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        charSet[currentChar] = (charSet[currentChar] || 0) + 1;
    }

    return charSet;
};

module.exports = checkPermutation;