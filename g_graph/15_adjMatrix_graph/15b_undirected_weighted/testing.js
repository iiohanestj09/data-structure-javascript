const Graph = require("./script");

const gr = new Graph(5);

gr.addEdge(0, 1, 5);
gr.addEdge(0, 2, 7);
gr.addEdge(1, 2, 3);
gr.addEdge(1, 3, 8);
gr.addEdge(1, 4, 9);
gr.addEdge(2, 3, 5);
gr.addEdge(3, 4, 1);

gr.display();

/* 0  1  2  3  4
0| 0  5  7  0  0
1| 5  0  3  8  9
2| 7  3  0  5  0
3| 0  8  5  0  1
4| 0  9  0  1  0  */