const getKthToLast = require('./2.2.return.kth.to.last');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Return kth to last', () => {
    it('should return the Kth to last node', () => {
        const linkedList = new LinkedList();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);

        const node = getKthToLast(linkedList, 2);
        const node2 = getKthToLast(linkedList, 3);

        expect(node.value).to.equal(4);
        expect(node2.value).to.equal(3);
    });
});