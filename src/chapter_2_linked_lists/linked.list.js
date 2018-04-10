class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(value) {
        if (this.head) {
            this.head.appendToTail(value);
        } else {
            this.head = new Node(value);
        }

        this.length++;
        return value;
    }

    remove(value) {
        let n = this.head;

        if (n.value === value) {
            this.head = n.next;
            this.length--;
            return this.head;
        }

        while (n.next) {
            if (n.next.value === value) {
                n.next = n.next.next;
                this.length--;
                return this.head;
            }

            n = n.next;
        }

        return this.head;
    }

    hasUniqueValues() {
        const dups = {};
        let n = this.head;

        while (n) {
            if (dups[n.value]) {
                return false;
            } else {
                dups[n.value] = n.value;
            }

            n = n.next;
        }

        return true;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    appendToTail(value) {
        let n = this;

        while (n.next) {
            n = n.next;
        }

        n.next = new Node(value);
    }
}

module.exports = LinkedList;