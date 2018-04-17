const getIntersection = require('./2.7.intersection');
const LinkedList = require('./linked.list');
const Node = require('./node');
const expect = require('chai').expect;

describe('Intersection', () => {
    let linkedList1;
    let linkedList2;
    let expectedIntersection;

    it('should find the intersection node', () => {
        linkedList1 = new LinkedList();
        linkedList2 = new LinkedList();
        expectedIntersection = new Node(7);

        linkedList1.add(3);
        linkedList1.add(1);
        linkedList1.add(5);
        linkedList1.add(9);

        linkedList2.add(4);
        linkedList2.add(6);

        expectedIntersection.setNext(new Node(2));
        expectedIntersection.getNext().setNext(new Node(1));

        linkedList1.getLast().setNext(expectedIntersection);
        linkedList2.getLast().setNext(expectedIntersection);

        const actualIntersection = getIntersection(linkedList1, linkedList2);

        expect(actualIntersection).to.equal(expectedIntersection);
        expect(actualIntersection).to.deep.equal(expectedIntersection);
        expect(actualIntersection.value).to.equal(7);
    });
});