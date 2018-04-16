const getIntersection = require('./2.7.intersection');
const LinkedList = require('./linked.list');
const Node = require('./node');
const expect = require('chai').expect;

describe('Sum Lists', () => {
    let linkedList1;
    let linkedList2;
    let intersection;

    it.only('should find the intersection node', () => {
        linkedList1 = new LinkedList();
        linkedList2 = new LinkedList();
        intersection = new Node(7);

        linkedList1.add(3);
        linkedList1.add(1);
        linkedList1.add(5);
        linkedList1.add(9);

        linkedList2.add(4);
        linkedList2.add(6);

        intersection.setNext(new Node(2));
        intersection.getNext().setNext(new Node(1));

        linkedList1.getLast().setNext(intersection);
        linkedList2.getLast().setNext(intersection);

        expect(getIntersection(linkedList1, linkedList2)).to.equal(intersection);
    });

});