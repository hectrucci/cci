const palindromePermutation = str => {
    const charSet = {};
    let oddCharCount = 0;

    str = str.split(' ').join('').toLowerCase();

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        charSet[currentChar] = (charSet[currentChar] || 0) + 1;

        oddCharCount = charSet[currentChar] % 2 === 0
            ? Math.max(0, oddCharCount - 1)
            : oddCharCount + 1;
    }

    return oddCharCount < 2;
};