class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        // Only difference is this.head and this.tail renamed there
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
}

let myQueue = new Queue(23);
console.log(myQueue);