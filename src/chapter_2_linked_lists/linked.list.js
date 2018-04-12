const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        if (this.head) {
            this.head.appendToTail(value);
        } else {
            this.head = new Node(value);
        }

        return value;
    }

    remove(value) {
        let n = this.head;

        if (n.value === value) {
            this.head = n.next;
            return this.head;
        }

        while (n.next) {
            if (n.next.value === value) {
                n.next = n.next.next;
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

    getFirst() {
        return this.head;
    }

    getLast() {
        let n = this.head;

        while (n.next) {
            n = n.next;
        }

        return n;
    }

    getItem(index) {
        let i = 0;
        let n = this.head;

        if (index >= this.length) return null;

        while (i < index && n.next) {
            n = n.next;
            i++;
        }

        return n;
    }

    getLength() {
        let len = 0;
        let n = this.head;

        while (n) {
            len++;
            n = n.next;
        }

        return len;
    }

    toString() {
        let str = '';
        let n = this.head;

        while (n.next) {
            str += `${n.value} -> `;
            n = n.next;
        }

        str += `${n.value}`;

        return str;
    }
}

module.exports = LinkedList;