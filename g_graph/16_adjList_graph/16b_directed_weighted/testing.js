const Graph = require("./script");

let gr = new Graph();

gr.addVertex(0); 
gr.addVertex(3);
gr.addVertex(5);

gr.addEdge(0, 1, 9);
gr.addEdge(0, 3, 2);
gr.addEdge(0, 4, 3);
gr.addEdge(1, 2, 7);    
gr.addEdge(2, 3, 1);
gr.addEdge(3, 1, 5);
gr.addEdge(3, 4, 3);
gr.addEdge(3, 9, 5);
gr.addEdge(4, 5, 2);

gr.removeEdge(0, 2);
gr.removeVertex(7);

gr.addEdge(5, 6, 7);
gr.addEdge(6, 7, 2);

gr.display();