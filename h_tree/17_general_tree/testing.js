const Tree = require("./script");

const myTree = new Tree("A");

// Tambah anak ke root
const B = myTree.addChild(myTree.root, "B");
const C = myTree.addChild(myTree.root, "C");
const D = myTree.addChild(myTree.root, "D");

// Tambah anak ke node B
myTree.addChild(B, "E");
myTree.addChild(B, "F");

// Tambah anak ke node C
const G = myTree.addChild(C, "G");
myTree.addChild(G, "H");

// Traversal
myTree.traverse();

/* Output:
A
  B    
    E  
    F  
  C    
    G  
      H
  D  
*/