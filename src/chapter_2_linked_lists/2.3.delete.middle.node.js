const deleteMiddleNode = node => {
    if (!node || !node.next) return false;

    const nextNode = node.next;

    node.value = nextNode.value;
    node.next = nextNode.next;

    return true;
};

module.exports = deleteMiddleNode;