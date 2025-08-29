const Graph = require("./script");

let gr = new Graph();

gr.addVertex(0); 
gr.addVertex(3);
gr.addVertex(5);

gr.addEdge(0, 1);
gr.addEdge(0, 2);
gr.addEdge(0, 3);
gr.addEdge(0, 9);
gr.addEdge(1, 2);    
gr.addEdge(2, 3);
gr.addEdge(3, 4);
gr.addEdge(4, 5);

gr.removeEdge(2, 0);
gr.removeVertex(4);

gr.addVertex(99);    // adjList = dinamis, bisa menambah vertex atau edge tanpa batasan
gr.addEdge(5, 6);
gr.addEdge(6, 7);

gr.display();
