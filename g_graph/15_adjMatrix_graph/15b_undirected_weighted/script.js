/* Graph dengan Adjacency Matrix versi undirected dan weighted
-> undirected (tidak punya arah) = matrixnya akan simetris (A -> B berarti B -> A)
-> weighted (punya bobot) = value matrixnya berupa weight. 'w' jika saling terhubung, 0 jika tidak */

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    addEdge(v1, v2, weight) {
        // karena weighted -> bobotnya dari argument 'weight'
        this.adjMatrix[v1][v2] = weight;
        this.adjMatrix[v2][v1] = weight;    // karena undirected -> 2 arah
    }

    removeEdge(v1, v2) {
        this.adjMatrix[v1][v2] = 0;
        this.adjMatrix[v2][v1] = 0;
    }

    display() {
        for (let i = 0; i < this.adjMatrix.length; i++) {
            if (i === 0) console.log("   " + Array.from({ length: this.adjMatrix.length}, (_, i) => i).join("  "));
            console.log(`${i}| ` + this.adjMatrix[i].join("  "));
        }
    }
}

module.exports = Graph;