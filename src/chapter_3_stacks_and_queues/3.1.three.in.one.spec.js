const MultiStack = require('./3.1.three.in.one');
const expect = require('chai').expect;

describe('Three In One', () => {
    let multiStack;

    beforeEach(() => {
        multiStack = new MultiStack(3);

        multiStack.push(1, 1);
        multiStack.push(1, 1);
        multiStack.push(2, 2);
        multiStack.push(2, 2);
        multiStack.push(3, 3);
        multiStack.push(3, 3);
        multiStack.push(1, 4);
        multiStack.push(2, 5);
        multiStack.push(3, 6);
    });

    it('should push each stack', () => {
        multiStack.push(1, 7);
        multiStack.push(2, 8);
        multiStack.push(3, 9);

        expect(multiStack.peek(1)).to.equal(7);
        expect(multiStack.peek(2)).to.equal(8);
        expect(multiStack.peek(3)).to.equal(9);

        expect(multiStack._lengths[0]).to.equal(4);
        expect(multiStack._lengths[1]).to.equal(4);
        expect(multiStack._lengths[2]).to.equal(4);
    });

    it('should peek the 3 stacks', () => {
        expect(multiStack.peek(1)).to.equal(4);
        expect(multiStack.peek(2)).to.equal(5);
        expect(multiStack.peek(3)).to.equal(6);
    });

    it('should pop each stack', () => {
        expect(multiStack.pop(1)).to.equal(4);
        expect(multiStack.pop(2)).to.equal(5);
        expect(multiStack.pop(3)).to.equal(6);

        expect(multiStack._lengths[0]).to.equal(2);
        expect(multiStack._lengths[1]).to.equal(2);
        expect(multiStack._lengths[2]).to.equal(2);
    });

    it('should not have empty stacks', () => {
        expect(multiStack.isEmpty(1)).to.equal(false);
        expect(multiStack.isEmpty(2)).to.equal(false);
        expect(multiStack.isEmpty(3)).to.equal(false);
    });
});