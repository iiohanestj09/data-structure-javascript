const Graph = require("./script");

const gr = new Graph(5);

gr.addEdge(0, 1);
gr.addEdge(0, 2);
gr.addEdge(1, 2);
gr.addEdge(2, 1);
gr.addEdge(2, 3);
gr.addEdge(2, 4);
gr.addEdge(3, 0);
gr.addEdge(3, 2);
gr.addEdge(3, 4);
gr.addEdge(4, 0);
gr.addEdge(4, 1);
gr.addEdge(4, 3);

gr.removeEdge(0, 1);
gr.removeEdge(2, 1);
gr.removeEdge(3, 0);
gr.removeEdge(4, 3);

gr.display();

/* 0 1 2 3 4
0| 0 0 1 0 0 
1| 0 0 1 0 0
2| 0 0 0 1 1
3| 0 0 1 0 1
4| 1 1 0 0 0  */