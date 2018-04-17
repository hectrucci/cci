const findBeginningOfLoop = require('./2.8.loop.detection');
const LinkedList = require('./linked.list');
const expect = require('chai').expect;

describe('Loop Detection', () => {
    let linkedList;

    it('should find the beginning of the loop', () => {
        linkedList = new LinkedList();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);
        linkedList.add(6);
        linkedList.add(7);
        linkedList.add(8);
        linkedList.add(9);
        linkedList.add(10);
        linkedList.add(11);

        const loop = linkedList.getItem(3);

        linkedList.getLast().setNext(loop);

        expect(findBeginningOfLoop(linkedList)).to.equal(loop);
    });
});