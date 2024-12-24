class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
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
    this.length --;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
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
    };
    return temp;
  }
  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.head; 
    for(let i = 0; i < this.length; i++) {
      if(i === index) return temp;
      temp = temp.next;
    }
    }
  set(index, value) {
    if(index < 0 || index >= this.length) return undefined;
    let prevVal = this.get(index);
    if(prevVal) {
      prevVal.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
  if(index < 0 || index > this.length) return undefined;
  if(index === 0) {
    this.unshift(value);
  }
  if(index === this.length) {
    this.push(value);
  }
  let newNode = new Node(value);
  let temp = this.head;
  for(let i = 0; i < this.length; i++) {
    if(this.get(temp) === index) {
      newNode.next = temp.next;
      temp.next = newNode;
    }
    temp = temp.next;
  }
  this.length++;
  return this;
  }
}

const myLinkedList = new LinkedList(12);
// console.log(myLinkedList);  
myLinkedList.push(32);
// console.log(myLinkedList);  
myLinkedList.push(69);
myLinkedList.unshift(428);
myLinkedList.unshift(23);
myLinkedList.unshift(13);
myLinkedList.unshift(86);
myLinkedList.pop();
myLinkedList.shift();
myLinkedList.insert(1,3131031);
console.log(myLinkedList);  
// console.log(myLinkedList.get(0));
// console.log(myLinkedList.set(0, 69));