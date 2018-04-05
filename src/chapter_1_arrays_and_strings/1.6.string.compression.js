const stringCompression = str => {
    let compressedStr = '';
    let currentChar = str[0];
    let charCount = 1;

    for (let i = 1; i <= str.length; i++) {
        if (currentChar === str[i] && str[i]) {
            charCount++;
        } else {
            compressedStr += currentChar + charCount;
            currentChar = str[i];
            charCount = 1;
        }
    }

    return compressedStr.length > str.length ? str : compressedStr;
};

module.exports = stringCompression;