const Graph = require("./script");

const gr = new Graph(5);

gr.addEdge(0, 1, 5);
gr.addEdge(0, 2, 7);
gr.addEdge(1, 2, 3);
gr.addEdge(1, 3, 8);
gr.addEdge(1, 4, 9);
gr.addEdge(2, 3, 5);
gr.addEdge(3, 4, 1);

gr.removeEdge(0, 1);
gr.removeEdge(1, 4);
gr.removeEdge(2, 3);

gr.display();

/* 0  1  2  3  4
0| 0  0  7  0  0
1| 0  0  3  8  0
2| 7  3  0  0  0
3| 0  8  0  0  1
4| 0  0  0  1  0  */