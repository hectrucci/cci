const partition = (list, partition) => {
    let left;
    let right;
    let currLeft;
    let currRight;
    let node = list.head;

    while (node) {
        if (node.value < partition) {
            if (!currLeft) {
                left = node;
                currLeft = left;
            } else {
                currLeft.next = node;
                currLeft = currLeft.next;
            }
        } else {
            if (!currRight) {
                right = node;
                currRight = right;
            } else {
                currRight.next = node;
                currRight = currRight.next;
            }
        }
        node = node.next;
    }
    currRight.next = null;
    currLeft.next = right;
};

module.exports = partition;