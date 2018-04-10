const getKthToLast = (list, k) => {
    let index = 0;

    const kthToLast = (list, k) => {
        return _kthToLast(list.head, k);
    };

    const _kthToLast = (node, k) => {
        if (node === null) {
            return node;
        }

        const newNode = _kthToLast(node.next, k);
        index++;

        if (index === k) {
            return node;
        }

        return newNode;
    };

    return kthToLast(list, k);
};

module.exports = getKthToLast;