class MultiStack {
    constructor(stackNum = 3) {
        this._stack = [];
        this._lengths = [];

        for (let i = 0; i < stackNum; i++) {
            this._lengths.push(0);
        }
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
        if (!stackNum || stackNum > this._lengths.length) return null;

        const index = this._getIndex(stackNum);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] - 1;

        return this._stack.splice(index - 1, 1)[0];
    }

    push(stackNum, item) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        const index = this._getIndex(stackNum);

        this._stack.splice(index, 0, item);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] + 1;
    }

    peek(stackNum) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        const index = this._getIndex(stackNum);
        return this._stack[index - 1];
    }

    isEmpty(stackNum) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        return !this._lengths[stackNum - 1];
    }
}

module.exports = MultiStack;