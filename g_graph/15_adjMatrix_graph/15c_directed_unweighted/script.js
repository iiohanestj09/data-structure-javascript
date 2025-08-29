/* Graph dengan Adjacency Matrix versi directed dan unweighted
-> directed (berarah) = A -> B != B -> A
-> unweighted (tidak berbobot) = value matrixnya akan 1 jika terhubung, 0 jika tidak  */

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    addEdge(source, destination) {
        // karena unweighted -> bobot bernilai 1
        this.adjMatrix[source][destination] = 1;    // karena directed -> 1 arah
    }

    display() {
        console.log("   " + Array.from({ length: this.adjMatrix.length }, (_, i) => i).join("  "));
        for (let i = 0; i < this.adjMatrix.length; i++) {
            console.log(`${i}| ` + this.adjMatrix[i].join("  "));
        }
    }
}

module.exports = Graph;