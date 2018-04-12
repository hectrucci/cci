const sumLists = require('./2.5.sum.lists');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Sum Lists', () => {
    let linkedList1;
    let linkedList2;

    beforeEach(() => {
        linkedList1 = new LinkedList();
        linkedList2 = new LinkedList();

        linkedList1.add(7);
        linkedList1.add(1);
        linkedList1.add(6);

        linkedList2.add(5);
        linkedList2.add(9);
        linkedList2.add(2);
    });

    it('should  sum the lists', () => {
        expect(sumLists(linkedList1.head, linkedList2.head).toString()).to.equal('2 -> 1 -> 9');
    });
});