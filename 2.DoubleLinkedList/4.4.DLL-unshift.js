class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  class DoubleLinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) return undefined;
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode; // Only difference is this particular line in which we've to make head's previous point to new value
        this.head = newNode;
      }
      this.length++;
      return this;
    }
}