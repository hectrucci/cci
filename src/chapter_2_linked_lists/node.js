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

    setNext(next) {
        this.next = next;
    }

    toString() {
        let str = '';
        let n = this;

        while (n.next) {
            str += `${n.value} -> `;
            n = n.next;
        }

        str += `${n.value}`;

        return str;
    }
}

module.exports = Node;