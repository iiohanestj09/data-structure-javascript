const Graph = require("./script");

let g = new Graph();

g.addVertex(0); 
g.addVertex(3);
g.addVertex(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(0, 9);
g.addEdge(1, 2);    
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);

g.removeEdge(2, 0);
g.removeVertex(4);

g.addVertex(99);    // adjList = dinamis, bisa menambah vertex atau edge tanpa batasan
g.addEdge(5, 6);
g.addEdge(6, 7);

g.display();
