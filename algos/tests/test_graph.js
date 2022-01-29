const Graph = require('../data_structures/Graph').Graph;

const test = new Graph;
test.addNode('A');
test.addNode('B');
test.addNode('C');
test.addNode('D');
test.addEdge('A', 'B');
test.addEdge('A', 'C');
test.addEdge('B', 'D');
test.addEdge('C', 'D');
test.printGraph();