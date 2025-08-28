class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* Class Node merepresentasikan satu elemen dalam Struktur Data berbasis linked list.
- Setiap Node menyimpan seubah nilai (value) dan referensi ke Node berikutnya.
- Dengan menghubungkan beberapa Node, kita bisa membentuk struktur seperti:
    + Singly Linked List
    + Stack (dengan NodeList)
    + Queue (dengan NodeList)  */

// Contoh penggunaan dasar:
const firstNode = new Node(10);
const secondNode = new Node(20);
const thirdNode = new Node(30);
firstNode.next = secondNode;
secondNode.next = thirdNode;

/* Struktu data di atas membentuk rantai:
[10] -> [20] -> [30] -> null  */

/* Keuntungan menggunakan NodeList:
    - Dinamis: tidak perlu menentukan ukuran awal seperti Array
    - Efisien untuk operasi insert/delete di awal/tengah  
    - Cocok untuk simulasi antrian, undo/redo, traversal data  */ 