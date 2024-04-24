class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        // Addition of prev pointer which points to previous value in list
        this.prev = null;
    }
}
class DoubleLinkedList {
    // Constructor remains exactly same
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}