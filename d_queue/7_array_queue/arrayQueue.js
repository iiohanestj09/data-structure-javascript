/* Queue = struktur data dengan prinsip FIFO (First In, First Out
Elemen Pertama yg masuk adalah yg Pertama Keluar.  */

class Queue {
    constructor() {
        this.items =[];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.items.length === 0) {
            console.log("Gagal dequeue, Queue kosong");
            return null;
        } else return this.items.shift();
    }

    peek() {
        if (this.items.length === 0) return null;
        else return this.items[0];
    }

    display() {
        console.log("[ " + this.items.join(" <- ") + " ]");
    }
}

module.exports = Queue;