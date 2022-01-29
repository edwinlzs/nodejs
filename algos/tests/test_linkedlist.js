const LinkedList = require("../data_structures/LinkedList").LinkedList;

const test = new LinkedList();
test.addAtHead(10);
test.addAtHead(15);
test.addAtTail(9);
test.addAtIndex(2, 12);
test.deleteAtIndex(2);
console.log(test.getArray());