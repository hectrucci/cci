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

        const expectedLoop = linkedList.getItem(3); // 4th item of the list

        linkedList.getLast().setNext(expectedLoop);

        const actualLoop = findBeginningOfLoop(linkedList);

        expect(actualLoop).to.equal(expectedLoop);
        expect(actualLoop).to.deep.equal(expectedLoop);
        expect(actualLoop.value).to.equal(4);
    });
});