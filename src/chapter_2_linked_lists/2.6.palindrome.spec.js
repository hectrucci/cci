const isPalindrome = require('./2.6.palindrome');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Sum Lists', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('should be a palindrome', () => {
        linkedList.add(0);
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(1);
        linkedList.add(0);

        expect(isPalindrome(linkedList)).to.equal(true);
    });

    it('should not be a palindrome', () => {
        linkedList.add(0);
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(2);
        linkedList.add(0);

        expect(isPalindrome(linkedList)).to.equal(false);
    });
});