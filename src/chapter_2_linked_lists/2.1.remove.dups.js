const removeDups = list => {
    const dups = {};
    let n = list.head;

    while (n) {
        if (dups[n.value]) {
            list.remove(n.value);
        } else {
            dups[n.value] = n.value;
        }
        n = n.next;
    }
};

module.exports = removeDups;