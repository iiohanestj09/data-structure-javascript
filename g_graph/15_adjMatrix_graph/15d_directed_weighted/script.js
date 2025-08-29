/* Graph dengan Adjacency Matrix versi directed dan weighted
-> directed (berarah) = A -> B != B -> A
-> weighted (punya bobot) = value matrixnya berupa weight. 'w' jika saling terhubung, 0 jika tidak */

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    addEdge(source, destination, weight) {
        // karena weighted -> bobotnya dari argument 'weight'
        this.adjMatrix[source][destination] = weight;   // karena directed -> 1 arah
    }

    display() {
        console.log("   " + Array.from({ length: this.adjMatrix.length }, (_, i) => i).join("  "));
        for (let i = 0; i < this.adjMatrix.length; i++) {
            console.log(`${i}| ` + this.adjMatrix[i].join("  "));
        }
    }
}

module.exports = Graph;