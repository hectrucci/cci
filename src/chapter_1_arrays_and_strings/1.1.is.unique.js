const isUnique = str => {
    const chars = {};

    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i);

        if (chars[currentChar]) {
            return false;
        }

        chars[currentChar] = currentChar;
    }

    return true;
};

module.exports = isUnique;