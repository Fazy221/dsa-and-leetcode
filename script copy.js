/*
class Node {
  constructor(value) {
    this.value = value;
    this.next =  null;
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
    return temp
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
    if(index < 0 || index >= this.length) return undefined;
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    let temp = this.get(index);
    let next = temp.next;
    const newNode = new Node(value);
    temp.next = newNode;
    newNode.next = next;
    this.length++;
    return this;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;
    while(temp !== null) {
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
    return slow;
  }
  hasLoop() {
    let fast = null;
    let slow = null;
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) return true;
    }
    return false;
  }
  findKthNode(k) {
    let fast = this.head;
    let slow = this.head;
    for(let i = 0; i < k; i++) {
      if(fast === null) return null;
      fast = fast.next;
    }
    while(fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  removeDuplicates() {
    let values = new Set();
    let temp = this.head;
    let prev = null;
    while(temp!==null) {
      if(values.has(temp.value)){
        prev.next = temp.next;
        this.length-=1;
      } else {
        values.add(temp.value);
        prev = temp;
      }
      temp = temp.next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(12);
myLinkedList.push(24);
myLinkedList.push(36);
myLinkedList.push(36);
myLinkedList.push(36);
myLinkedList.push(48);
myLinkedList.push(72);
// myLinkedList.pop();
// myLinkedList.unshift(9);
// myLinkedList.shift();
// myLinkedList.set(2,38);
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.findMiddleNode());
// console.log(myLinkedList.findKthNode(2));
// console.log(myLinkedList.hasLoop());
// console.log(myLinkedList.reverse());
console.log(myLinkedList.removeDuplicates());
*/
/*
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
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
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
      this.head.prev = newNode;
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
    this.head.prev = null;
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
    if(index < this.length / 2) {
      for(let i = 0; i < index; i++) {
        temp = temp.next;
      } 
    } else {
      temp = this.tail;
      for(let i = this.length; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
    if(index < 0 || index >= this.length) return false;
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    const newNode = new Node(value);
    let curr = this.get(index);
    let after = curr.next;
    curr.next = newNode;
    newNode.prev = curr;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let curr = this.get(index);
    let bef = curr.prev;
    let aft = curr.next;
    bef.next = aft;
    aft.prev = bef;
    curr.prev = null;
    curr.next = null;
    this.length--;
    return curr;
  }
  swapFirstAndLast() {
    let temp = this.head;
    this.head.value = this.tail.value;
    this.tail.value = temp.value;
    return this;
  }
  reverse() {
     let curr = this.head;
     let temp = null;
     while(temp !== null) {
     temp = curr.prev;
     curr.prev = curr.next;
     curr.next = temp;
     curr = temp;
     }
     temp = this.head;
     this.head = this.tail;
     this.tail = temp;
}
  palindrome(){
    if(this.length < 2) return true;
    let forwardNode = this.head;
    let backwardNode = this.tail;
    for(let i = 0; i < Math.floor(this.length/2); i++){
      if(forwardNode.value !== backwardNode.value) return false;
      forwardNode = forwardNode.next;
      backwardNode = backwardNode.prev;
    }
    return true;
  }
}
  */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  } 
  push(value) {
    const newNode = new Node(value);
    if(this.length===0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length===0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}