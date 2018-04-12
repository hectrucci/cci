const partition = (list, partition) => {
    let right;
    let currentLeft;
    let currentRight;
    let node = list.head;

    while (node) {
        if (node.value < partition) {
            if (!currentLeft) {
                currentLeft = node;
            } else {
                currentLeft.next = node;
                currentLeft = node;
            }
        } else {
            if (!currentRight) {
                right = node;
                currentRight = node;
            } else {
                currentRight.next = node;
                currentRight = node;
            }
        }

        node = node.next;
    }

    currentRight.next = null;
    currentLeft.next = right;
};

module.exports = partition;