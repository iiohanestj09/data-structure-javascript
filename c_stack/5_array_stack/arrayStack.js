/* Stack = struktur data dengan prinsip LIFO (Last In, First Out
elemen Terakhir yg masuk adalah yg pertama keluar.  */

class Stack {
    constructor() {
        this.items = [];
    }

    // Push: tambah elemen ke atas stack
    push(value) {
        this.items.push(value);
    }

    // Pop: hapus elemen paling atas
    pop() {
        if (this.items.length === 0) return "Gagal pop, Stack Kosong";
        else this.items.pop();
    }

    // Peek: lihat elemen paling atas (top)
    peek() {
        if (this.items.length === 0) return "Gagal peek, Stack Kosong";
        else console.log(`Top: ${this.items[this.items.length - 1]}`);
    }

    // Display: tampilkan isi stack
    display() {
        console.log(this.items);
    }
}

module.exports = Stack;