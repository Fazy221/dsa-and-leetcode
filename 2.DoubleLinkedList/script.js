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
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev;
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
    return newNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
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
    if (temp === Math.floor(this.length / 2)) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let before = this.get(index - 1);
    let after = before.next;
    const newNode = new Node(value);
    newNode.next = after;
    after.prev = newNode;
    before.next = newNode;
    newNode.prev = before;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  swapFirstAndLast() {
    let temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp.value;
    return this;
  }
  reverse() {
    let temp = null;
    let curr = this.head;
    while(curr !== null) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.next;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
  palindromeCheck() {
    if (this.length <= 1) return true;
    let backwardNode = this.tail;
    let forwardNode = this.head;
    for (let i = 0; i < Math.floor(this.length / 1); i++) {
      if (forwardNode.value !== backwardNode.value) return false;
      forwardNode = forwardNode.next;
      backwardNode = backwardNode.prev;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}
