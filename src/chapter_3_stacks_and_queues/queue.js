class Queue {
    constructor() {
        this._queue = [];
    }

    add(item) {
        this._queue.push(item);
    }

    remove() {
        return this._queue.shift();
    }

    peek() {
        return this._queue[0] || null;
    }

    isEmpty() {
        return !this._queue.length;
    }
}

module.exports = Queue;