const findBeginningOfLoop = list => {
    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    if (!fast || fast.next === null) return null;

    slow = list.head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
};

module.exports = findBeginningOfLoop;