const partition = (list, partition) => {
    let right;
    let currLeft;
    let currRight;
    let node = list.head;

    while (node) {
        if (node.value < partition) {
            if (!currLeft) {
                currLeft = node;
            } else {
                currLeft.next = node;
                currLeft = node;
            }
        } else {
            if (!currRight) {
                right = node;
                currRight = node;
            } else {
                currRight.next = node;
                currRight = node;
            }
        }

        node = node.next;
    }

    currRight.next = null;
    currLeft.next = right;
};

module.exports = partition;