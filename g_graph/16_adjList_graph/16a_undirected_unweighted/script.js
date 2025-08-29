/* 2. Adjacency List (Map atau Object berisi array tetangga)
   + Kelebihan:
     - Hemat memori, hanya simpan edge yang benar-benar ada → O(V + E).
     - Penambahan vertex lebih mudah (tinggal tambah key baru di Map/Object).
     - Traversal edge lebih cepat untuk graph jarang (sparse graph).
   + Kekurangan:
     - Cek apakah ada edge antara dua vertex (u, v) → O(degree(u)) (tidak langsung O(1)).
     - Implementasi sedikit lebih rumit dibanding matrix.
     - Kurang efisien untuk graph padat (dense graph). */

/* Graph dengan Adjacency List versi undirected dan unweighted
-> undirected (tidak punya arah) = adjList nya simetris (A -> B berarti B -> A)
-> unweighted (tidak berbobot) = adjList akan menyimpan vertex ketetanggannya saj tanpa menyimpan value 1 atau 0 */

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
        /* rupa adjList Graph(x):
        adjList {
            0: [...],
            1: [...],
            .
            .
            x: [...]
        }
        */ 
    }

    addVertex(v) {
        if (!this.adjList.has(v)) return this.adjList.set(v, []);   
        // Buat vertex baru dengan key 'v' di Map dan value array kosong
    }

    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) this.addVertex(v1);
        if (!this.adjList.has(v2)) this.addVertex(v2);

        // karena unweighted -> adjList hanya menyimpan ketetanggaan vertexnya tanpa menyimpan bobot
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);  // karena undirected -> 2 vertex saling menyimpan ketetanggaan
    }

    removeEdge(v1, v2) {
        // karena undirected -> hapus edge sama-sama (di v1 hapus v2, di v2 hapus v1)
        if (this.adjList.has(v1)) this.adjList.set(v1, this.adjList.get(v1).filter(x => x !== v2)); 
        if (this.adjList.has(v2)) this.adjList.set(v2, this.adjList.get(v2).filter(x => x !== v1));
        // overwrite, buat properti baru dengan key yg sama hanya value(ketetanggannya) difilter utk menghilangkan vertex satunya
    }

    removeVertex(v) {
        if (this.adjList.has(v)) {
            // hapus semua edge yg muncul
            for (let neighbor of this.adjList.get(v)) {
                this.removeEdge(v, neighbor);   
                // karena undirected, selain hapus vertex dan tetangganya, juga harus hapus edge yg bertetangga dengan vertex ini
            }
            // hapus vertex-nya sendiri
            this.adjList.delete(v);
        }
    }

    display() {
        for (let [vertex, neighbors] of this.adjList) {
            console.log(`[${vertex}]: ${neighbors.join(" -> ")}`);
        }
    }
}

module.exports = Graph;