const Graph = require("./script");

const gr = new Graph(5);

gr.addEdge(0, 1, 3);
gr.addEdge(0, 3, 2);
gr.addEdge(0, 4, 6);
gr.addEdge(1, 0, 8);
gr.addEdge(1, 2, 9);
gr.addEdge(1, 4, 2);
gr.addEdge(2, 0, 3);
gr.addEdge(2, 1, 1);
gr.addEdge(2, 4, 4);
gr.addEdge(3, 0, 1);
gr.addEdge(3, 2, 6);
gr.addEdge(3, 4, 8);
gr.addEdge(4, 0, 3);
gr.addEdge(4, 1, 6);
gr.addEdge(4, 2, 7);
gr.addEdge(4, 3, 4);
gr.display();

/* 0 1 2 3 4
0| 0 3 0 2 6 
1| 8 0 9 0 2
2| 3 1 0 0 4
3| 1 0 6 0 8
4| 3 6 7 4 0  */