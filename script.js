class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while(temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if(!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if(index < 0 || index >= this.length) return false;
    let temp = this.head;
    for(let i = 0; i < index; i++) { 
      temp = temp.next;
    }
    return temp.value;
  }
  set(index, val)  {
    if(index < 0 || index >= this.length) return false;
    let temp = this.head;
    for(let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.value = val;
    return this;
  }
  insert(index, val) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
    const newNode = new Node(val);
    let temp = this.head;
    let pre = this.head;
    for(let i = 0; i < index; i++) {
      pre = temp;
      temp = temp.next;
    }
    newNode.next = temp;
    pre.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let temp = this.head;
    let pre = this.head;
    let del = this.head;
    for(let i = 0; i < index; i++) {
      pre = temp;
      temp = temp.next;
    }
    del = temp;
    temp = temp.next;
    pre.next = temp;
    del.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
const myLinkedList = new LinkedList(32);
myLinkedList.push(45);
myLinkedList.push(50);
// myLinkedList.pop();
// myLinkedList.unshift(20);
// myLinkedList.shift(20);

console.log(myLinkedList.reverse());