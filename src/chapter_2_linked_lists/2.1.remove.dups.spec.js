const removeDups = require('./2.1.remove.dups');
const LinkedList = require('./linked.list');
const printList = require('./print.list');
const expect = require('chai').expect;

describe('Remove Dups', () => {
    const linkedList1 = new LinkedList();
    const linkedList2 = new LinkedList();

    linkedList1.add(1);
    linkedList1.add(2);
    linkedList1.add(1);

    linkedList2.add(1);
    linkedList2.add(2);

    removeDups(linkedList1);

    it('should remove the dups', () => {
        expect(linkedList1.length).to.equal(linkedList2.length);
        expect(linkedList1.hasUniqueValues()).to.equal(true);
    });
});