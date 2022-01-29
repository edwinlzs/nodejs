// directed graph
function GraphNode(val, inNodes, outNodes) {
    this.val = val;
    this.inNodes = inNodes;
    this.outNodes = outNodes;
    this.inDegree = inNodes.length;
    this.outDegree = outNodes.length;
}

function Graph() {
    this.nodes = {};
    this.size = 0;
}

Graph.prototype.addNode = function(name, val = 0, inNodes = [], outNodes = []) {
    this.nodes[name] = new GraphNode(val, inNodes, outNodes);
    this.size += 1;
}

Graph.prototype.addEdge = function(from, to) {
    this.nodes[from].outNodes += to;
    this.nodes[from].outDegree += 1;
    this.nodes[to].inNodes += from;
    this.nodes[to].inDegree += 1;
}

Graph.prototype.printGraph = function() {

    console.log("Printing Graph:");
    
    for (let name in this.nodes) {
        let outNodes = "";
        for (let outNode of this.nodes[name].outNodes) {
            outNodes += `${outNode} `
        }
        console.log(`${name} -> ${outNodes}`)
    }
}

module.exports = { GraphNode, Graph }