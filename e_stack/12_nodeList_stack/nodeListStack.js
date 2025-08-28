class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++; 
    }

    pop() {
        if (this.top === null) {
            console.log("Gagal pop, Stack kosong");
            return null;
        }
        else {
            let removedValue = this.top.value;     // (opsional) kalau perlu simpan value hasil pop
            this.top = this.top.next;
            this.length--;      
            return removedValue;
            /* Tidak perlu free memory sebuah Node, 
            Di bahasa pemorgraman tingkat tinggi (JS, Python, Java, dll) punya Garbage Collector (GC),
            yg mana 'Ketika sebuah objek(node) sudah tidak direferensikan lagi maka akan dianggap sampah (garbage) dan nanti akan dibersihkan oleh GC'  */ 
        }
    }

    peek() {
        if (this.top === null) return null;
        else return this.top.value;
    }

    display() {
        let current = this.top;
        let result = "[ ";

        while (current !== null) {
            result += `${current.value} -> `;
            current = current.next; 
        }
        result += "null ]";
        console.log(result);
    }
}

module.exports = Stack;