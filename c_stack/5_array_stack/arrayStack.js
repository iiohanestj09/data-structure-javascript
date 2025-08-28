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
        if (this.items.length === 0) console.log("Gagal pop, Stack kosong");
        else this.items.pop();
    }

    // Peek: lihat elemen paling atas (top)
    peek() {
        if (this.items.length === 0) console.log("Gagal peek, Stack kosong");
        else console.log(`Top: ${this.items[this.items.length - 1]}`);
    }

    // Size: mengembalikkan ukuran Stack
    size() {
        return this.items.length;
    }
    
    // Display: tampilkan isi stack
    display() {
        if (this.items.length === 0) console.log("Gagal dipslay, Stack kosong");
        else console.log("[ " + this.items.slice().reverse().join(" -> ") + " ]")
        // .slice() -> bikin salinan array supaya .reverse() dan .join() tidak mengubah objek asli
        // .slice() -> sering dipakai buat console.log utk menampilkan operasi sementara tanpa mengubah objek asli
    }
}

module.exports = Stack;