class Node {
  constructor(value, next) {
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
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let temp = this.head;
    for(let i = 0; i < this.length; i++) {
      if(temp.next === this.tail) break;
      temp = temp.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
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
    return temp;
  }
  get(index) {
    if(index < 0 || index >= this.length) return false;
    let temp = this.head;
    for(let i = 0; i <= index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index,value) {
    if(index < 0 || index >= this.length) return false;
    let temp = this.head;
    for(let i = 0; i <= index; i++) {
      temp = temp.next;
    }
    temp.value = value;
    return this;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) this.unshift(value);
    if(index === this.length) this.push(value);
    const newNode = new Node(value);
    let temp = this.head;
    let pre;
    for(let i = 0; i <= index; i++) {
      pre = temp;
      temp = temp.next;
    }
    
    while(temp <= index) {
      pre = temp;
      temp = temp.next;
    }
    newNode.next = temp;
    pre.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) this.shift(value);
    if(index === this.length) this.pop(value);
    let temp = this.head;
    let pre;
    while(temp <= index) {
      pre = temp;
      temp = temp.next;
    }
    let del = temp;
    temp = temp.next;
    pre.next = temp;
    this.length--;
    return del;
  }
}