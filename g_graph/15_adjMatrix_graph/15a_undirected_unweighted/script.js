/* 1. Adjacency Matrix
   + Kelebihan:
     - Implementasi sederhana (array 2D).
     - Cek apakah ada edge antara dua vertex (u, v) → O(1).
     - Cocok untuk graph padat (dense graph) di mana jumlah edge mendekati V^2.
   - Kekurangan:
     - Boros memori, selalu butuh O(V^2), meskipun edge sedikit.
     - Susah ditambah vertex baru (harus buat matrix baru lebih besar).
     - Traversal semua edge lebih lambat (butuh cek semua kolom/baris).  */ 

/* Graph dengan Adjacency Matrix versi undirected dan unweighted
-> undirected (tidak punya arah) = matrixnya akan simetris (A -> B berarti B -> A)
-> unweighted (tidak berbobot) = value matrixnya akan 1 jika terhubung, 0 jika tidak  */

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array.from({ length: vertices}, () => Array(vertices).fill(0));
        // Membuat matrix (array dalam array)
        // Array luar (baris) dibuat dengan Array.from(), dengan jumlah baris sama dengan jumlah 'vertices' ({length: vertices})
        // Array dalam (kolom) dibuat dengan (Array(vertices)). -> Setiap kali fungsi(baris) dipangil, ia akan membuat array dengan jumlah kolom sebanyak 'vertices'. Lalu tiap kolom(value) diisi nilai awal 0 (.fill(0))
    }

    addEdge(v1, v2) {
        // karena unweighted -> bobotnya bernilai 1
        this.adjMatrix[v1][v2] = 1;
        this.adjMatrix[v2][v1] = 1;  // karena undirected -> 2 arah
    }

    removeEdge(v1, v2) {
        this.adjMatrix[v1][v2] = 0;
        this.adjMatrix[v2][v1] = 0;
    }

    display() {
        for (let i = 0; i < this.adjMatrix.length; i++) {
            if (i === 0) console.log("   " + Array.from({length: this.adjMatrix.length}, (_, i) => i).join("  "));
            console.log(`${i}| ` + this.adjMatrix[i].join("  "));
        }
    }
}

module.exports = Graph;