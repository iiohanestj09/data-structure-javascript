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
        if (this.items.length === 0) {
            console.log("Gagal pop, Stack kosong");
            return null;
        }
        else return this.items.pop();
    }

    // Peek: lihat elemen paling atas (top)
    peek() {
        if (this.items.length === 0) return null;
        else return this.items[this.items.length - 1];
    }
    
    // Display: tampilkan isi stack
    display() {
        if (this.items.length === 0) console.log("[ null ]");
        else console.log("[ " + this.items.slice().reverse().join(" -> ") + " -> null ]")
        // .slice() -> bikin salinan array supaya .reverse() dan .join() tidak mengubah objek asli
        // .slice() -> sering dipakai buat console.log utk menampilkan operasi sementara tanpa mengubah objek asli
    }
}

module.exports = Stack;