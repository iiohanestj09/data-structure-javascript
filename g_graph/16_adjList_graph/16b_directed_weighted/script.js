/* Graph dengan Adjacency List versi directed dan weighted
-> directed (berarah) = 1 arah
-> weighted (berbobot) = adjList akan menyimpan vertex ketetanggannya saja tanpa menyimpan value 1 atau 0 */

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        if (!this.adjList.has(v)) this.adjList.set(v, []);
    }

    addEdge(source, destination, weight) {
        if (!this.adjList.has(source)) this.addVertex(source);
        if (!this.adjList.has(destination)) this.addVertex(destination);

        this.adjList.get(source).push({ node: destination, weight: weight });  // directed = 1 arah
    }

    removeEdge(source, destination) {
        if (this.adjList.has(source)) this.adjList.set(source, this.adjList.get(source).filter(x => x.node !== destination));
    }

    removeVertex(v) {
        if (this.adjList.has(v)) this.adjList.delete(v);
        // memisahkan for di luar agar menutup kemungkinan kalau ada edge yg menunjuk ke 'v'
        for (let [vertex, neighbors] of this.adjList) this.adjList.set(vertex, neighbors.filter(x => x.node !== v));
    }

    display() {
        for (let [vertex, neighbors] of this.adjList) {
            let list = neighbors.map(e => `${e.node}(${e.weight})`).join(" -> ");
            console.log(`[${vertex}]: ${list}`);
        }
    }
}

module.exports = Graph;