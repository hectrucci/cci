class Stack {
    constructor() {
        this._stack = [];
    }

    pop() {
        return this._stack.pop();
    }

    push(item) {
        this._stack.push(item);
    }

    peek() {
        return this._stack[this._stack.length - 1] || null;
    }

    isEmpty() {
        return !this._stack.length;
    }
}

module.exports = Stack;