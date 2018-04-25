const StackWithMin = require('./3.2.stack.min');
const expect = require('chai').expect;

describe('Stack Min', () => {
    let stackWithMin;

    beforeEach(() => {
        stackWithMin = new StackWithMin();

        stackWithMin.push(5);
        stackWithMin.push(6);
        stackWithMin.push(3);
        stackWithMin.push(7);
        stackWithMin.push(1);
        stackWithMin.push(1);
        stackWithMin.push(1);
    });

    it('should store the min values', () => {
        expect(stackWithMin.min()).to.equal(1);

        stackWithMin.pop();
        expect(stackWithMin.min()).to.equal(1);

        stackWithMin.pop();
        expect(stackWithMin.min()).to.equal(1);

        stackWithMin.pop();
        expect(stackWithMin.min()).to.equal(3);

        stackWithMin.pop();
        expect(stackWithMin.min()).to.equal(3);

        stackWithMin.pop();
        expect(stackWithMin.min()).to.equal(5);
    });
});