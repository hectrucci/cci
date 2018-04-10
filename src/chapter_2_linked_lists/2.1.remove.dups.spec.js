const removeDups = require('./2.1.remove.dups');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Remove Dups', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(1);
    });

    it('should have repeated items', () => {
        expect(linkedList.length).to.equal(3);
        expect(linkedList.hasUniqueValues()).to.equal(false);
    });

    it('should remove the dups', () => {
        removeDups(linkedList);
        expect(linkedList.length).to.equal(2);
        expect(linkedList.hasUniqueValues()).to.equal(true);
    });
});