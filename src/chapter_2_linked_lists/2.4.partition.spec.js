const partition = require('./2.4.partition');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Partition', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.add(3);
        linkedList.add(5);
        linkedList.add(8);
        linkedList.add(5);
        linkedList.add(10);
        linkedList.add(2);
        linkedList.add(1);
    });

    it('should partition the linked list given a X node', () => {
        partition(linkedList, 5);

        expect(linkedList.toString()).to.equal('3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10');
    });
});