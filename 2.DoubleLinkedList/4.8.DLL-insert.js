class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
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
      if (this.length === 0) return undefined;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
      }
      this.length--;
      return temp;
    }
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    shift() {
      if (!this.head) return undefined;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      } else {
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
      }
      this.length--;
      return temp;
    }
    get(index) {
      if (index < 0 || index >= this.length) return undefined;
      let temp = this.head;
      if (index < this.length / 2) {
        for (let i = 0; i < index; i++) {
          temp = temp.next;
        }
      } else {
        temp = this.tail;
        for (let i = this.length - 1; i > index; i++) {
          temp = temp.prev;
        }
      }
      return temp;
    }
    set(index, value) {
      let temp = this.get(index);
      if (temp) {
        temp.value = value;
        return true;
      }
      return false;
    }
    // Nothing much different except for after being added so it's previous could be connected with new Node
    insert(index, value) {
      if (index < 0 || index > this.length) return undefined;
      if (index === 0) return this.unshift(value);
      if (index === this.length) return this.push(value);
      const newNode = new Node(value);
      let before = this.get(index - 1);
      let after = before.next;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
      after.prev = newNode;
      this.length++;
      return this;
    }
  }
  