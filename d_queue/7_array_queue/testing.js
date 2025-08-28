const Queue = require("./arrayQueue");

const que = new Queue();

que.dequeue();
console.log(que.peek());

que.enqueue(10);
que.enqueue(20);
que.enqueue(30);

que.dequeue();
que.enqueue(40);

console.log(que.peek());
console.log(que.items.length);

que.display();