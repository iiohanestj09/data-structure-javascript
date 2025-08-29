/* Tree adalah struktur data yang berbasih graph.
Ia merupakan bentuk khusus dari graph:
  - Bersifat hierarkis (ada root, parent, dan child)
  - Tidak mengandung siklus (acyclic)
  - Setiap dua node terhubung oleh tepat satu jalur unik  */

/* General tree membolehkan sebuah node punya jumlah anak tak terbatas.
Struktur ini banyak dipakai utk merepresentasikan data hierarkis seperti folder-file, organisasi, atau DOM  */

class Node {
    constructor(value) {
        this.value = value;     // data node
        this.children = [];     // daftar anak (Array of Node)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);    // inisialisasi tree dgn root
    }

    // Tambah anak baru ke parentNode
    addChild(parentNode, childValue) {
        const child = new Node(childValue);
        parentNode.children.push(child);
        return child;   // supaya bisa dipakai utk tambah anak berikutnya
    }

    // Hapus anak tertentu dari parentNode
    removeChild(parentNode, childValue) {
        parentNode.children = parentNode.children.filter((child) => child.value !== childValue);
    }

    // traversal (DFS - Preorder)
    traverse(node = this.root, depth = 0) {
        console.log(" ".repeat(depth * 2) + node.value);    // indent sesuai kedalaman
        for (let child of node.children) {
            this.traverse(child, depth + 1);
        }
    }
}

module.exports = Tree;