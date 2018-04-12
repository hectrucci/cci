const Node = require('./node');

const sumLists = (node1, node2, carry) => {
    const result = new Node();
    let value = carry || 0;

    if (!node1 && !node2 && !carry) {
        return null;
    }

    if (node1) {
        value += node1.value;
    }

    if (node2) {
        value += node2.value;
    }

    result.value = value % 10;

    if (node1 || node2) {
        result.setNext(sumLists(node1.next, node2.next, value > 10 ? 1 : 0));
    }

    return result;
};

module.exports = sumLists;