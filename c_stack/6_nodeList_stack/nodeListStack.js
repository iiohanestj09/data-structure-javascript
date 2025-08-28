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
        if (this.top === null) console.log("Gagal pop, Stack kosong");
        else {
            this.top = this.top.next;
            this.length--;      
            /* Tidak perlu free memory sebuah Node, 
            Di bahasa pemorgraman tingkat tinggi (JS, Python, Java, dll) punya Garbage Collector (GC),
            yg mana 'Ketika sebuah objek(node) sudah tidak direferensikan lagi maka akan dianggap sampah (garbage) dan nanti akan dibersihkan oleh GC'  */ 
        }
    }

    peek() {
        if (this.top === null) console.log("Gagal peek, Stack kosong!");
        else console.log(`Top: [${this.top.value}]`);
    }

    size() {
        return this.length;
    }

    display() {
        if (this.top === null) console.log("Gagal display, Stack kosong!");
        else {
            let current = this.top;
            let result = "";

            while (current !== null) {
                result += `[${current.value}] -> `;
                current = current.next; 
            }
            result += "null";
            console.log(result);
        }
    }
}

module.exports = Stack;