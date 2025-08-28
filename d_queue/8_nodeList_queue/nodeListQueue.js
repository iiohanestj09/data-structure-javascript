class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.rear === null) this.front = this.rear = newNode;
        else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length++;
        }
    }

    dequeue() {
        if (this.rear === null) {
            console.log("Gagal dequeue, Queue kosong");
            return null;
        } else {
            let removedValue = this.front.value;        // (opsional) kalau hasil dequeue diperlukan
            this.front = this.front.next;
            if (this.front === null) this.rear = null;  // kalau queue baru punya 1 node lalu dequeue
            this.length--;
            return removedValue
        }
    }

    peek() {
        if (this.rear === null) return null;
        else return this.front.value;
    }

    display() {
        let current = this.front;
        let result = "[ ";

        while (current !== null) {
            result += `${current.value}`;
            if (current.next !== null) result += " <- ";
            current = current.next;
        }
        result += " ]";
        console.log(result);
    }
}

module.exports = Queue;