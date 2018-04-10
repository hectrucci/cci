const deleteMiddleNode = require('./2.3.delete.middle.node');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Delete Middle Node', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
    });

    it('should delete a node between the head and the tail', () => {
        const n = linkedList.getItem(1);

        expect(deleteMiddleNode(n)).to.equal(true);
        expect(linkedList.getFirst().value).to.equal(1);
        expect(linkedList.getItem(1).value).to.equal(3);
        expect(linkedList.getLast().value).to.equal(3);
    });

    it('should delete a tail node', () => {
        const n = linkedList.getLast();

        expect(deleteMiddleNode(n)).to.equal(false);
        expect(linkedList.getFirst().value).to.equal(1);
        expect(linkedList.getItem(1).value).to.equal(2);
        expect(linkedList.getLast().value).to.equal(3);
    });
});