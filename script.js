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
    let pre;
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
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for(let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    if(index < 0 || index >= this.length) return false;
    let temp = this.head;
    for(let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.value = value;
    return true;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    const newNode = new Node(value);
    let temp = this.head;
    let pre;
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
    if(index === this.length - 1) return this.pop();
    let temp = this.head;
    let pre;
    for(let i = 0; i < index; i++) {
      pre = temp;
      temp = temp.next;
    }
    temp = temp.next;
    pre.next = temp;
    this.length--;
  }
  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    while(temp){
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;  
    }
    return this;
  }
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.value;
  }
  hasLoop() {
    let fast = this.head;
    let slow = this.head;
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) return true;
    }
    return false;
  }
}

let myLinkedList = new LinkedList(12);
myLinkedList.push(24);
myLinkedList.push(36);
// myLinkedList.unshift(35);
// console.log(myLinkedList);
// console.log(myLinkedList.get(1));
// myLinkedList.set(1, 36);
// myLinkedList.insert(1, 15);
// myLinkedList.remove(1);
console.log(myLinkedList.hasLoop());
