const isPalindrome = (list) => {
    const len = list.getLength();

    if (len === 0 || !list) {
        return false;
    }

    if (len === 1) {
        return true;
    }

    const first = list.getFirst();
    const last = list.getLast();

    if (first.value === last.value) {
        list.getItem(len - 2).next = null;
        list.head = list.getItem(1);
        return isPalindrome(list);
    }

    return false;
};

module.exports = isPalindrome;