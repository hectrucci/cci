const isRotation = (str1, str2) => {
    return str1.length && str1.length === str2.length && isSubstring(str1 + str1, str2);
};

const isSubstring = (str1, str2) => {
    return str1.indexOf(str2) > -1;
};

module.exports = isRotation;