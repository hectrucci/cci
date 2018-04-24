class MultiStack {
    constructor() {
        this._stack = [];
        this._lengths = [0, 0, 0];
    }

    _getLength(stackNum) {
        return this._lengths[stackNum - 1];
    }

    _getIndex(stackNum) {
        let index = 0;

        while (stackNum > 0) {
            index += this._getLength(stackNum);
            stackNum--;
        }

        return index;
    }

    pop(stackNum) {
        const index = this._getIndex(stackNum);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] - 1;

        return this._stack.splice(index - 1, 1)[0];
    }

    push(stackNum, item) {
        const index = this._getIndex(stackNum);

        this._stack.splice(index, 0, item);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] + 1;
    }

    peek(stackNum) {
        const index = this._getIndex(stackNum);
        return this._stack[index - 1];
    }

    isEmpty(stackNum) {
        return !this._lengths[stackNum - 1];
    }
}

module.exports = MultiStack;