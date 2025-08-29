const Graph = require("./script");

const gr = new Graph(5);

gr.addEdge(0, 1);
gr.addEdge(3, 4);
gr.addEdge(2, 2);
gr.addEdge(2, 1);
gr.addEdge(4, 1);
gr.addEdge(3, 2);
gr.addEdge(4, 4);
gr.addEdge(0, 3);

gr.removeEdge(0, 1);
gr.removeEdge(2, 2);
gr.removeEdge(3, 4);
gr.removeEdge(4, 4);

gr.display();

/* 0 1 2 3 4
0| 0 0 0 1 0 
1| 0 0 1 0 1
2| 0 1 0 1 0
3| 1 0 1 0 0
4| 0 1 0 0 0  */