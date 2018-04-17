const getIntersection = (list1, list2) => {
    if (!list1 || !list2) return null;

    const result1 = getTailAndSize(list1);
    const result2 = getTailAndSize(list2);

    if (result1.tail !== result2.tail) return null;

    let shorter = result1.size < result2.size ? list1 : list2;
    let longer = result1.size < result2.size ? list2 : list1;

    longer = getKthNode(longer.getFirst(), Math.abs(result1.size - result2.size));
    shorter = shorter.getFirst();

    while (shorter !== longer) {
        shorter = shorter.getNext();
        longer = longer.getNext();
    }

    return longer;
};

const getTailAndSize = list => {
    let tail = list.getFirst();
    let size = 0;

    while (tail) {
        tail = tail.getNext();
        size++;
    }

    return { tail, size };
};

const getKthNode = (head, k) => {
    let n = head;

    while (k > 0 && n) {
        n = n.getNext();
        k--;
    }

    return n;
};

module.exports = getIntersection;