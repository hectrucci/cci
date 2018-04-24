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

    _getNumOfItems(stackNum) {
        let items = 0;

        while (stackNum > 0) {
            items += this._getLength(stackNum);
            stackNum--;
        }

        return items;
    }

    pop(stackNum) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        const items = this._getNumOfItems(stackNum);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] - 1;

        return this._stack.splice(items - 1, 1)[0];
    }

    push(stackNum, item) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        const items = this._getNumOfItems(stackNum);

        this._stack.splice(items, 0, item);
        this._lengths[stackNum - 1] = this._lengths[stackNum - 1] + 1;
    }

    peek(stackNum) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        const items = this._getNumOfItems(stackNum);
        return this._stack[items - 1];
    }

    isEmpty(stackNum) {
        if (!stackNum || stackNum > this._lengths.length) return null;

        return !this._lengths[stackNum - 1];
    }
}

module.exports = MultiStack;