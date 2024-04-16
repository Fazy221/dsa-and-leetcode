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
    if (!this.head) {
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
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
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
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index); // Instead of rewriting get method, will just use it there to get value at asked index
    if (temp) {
      temp.value = value; // If value is found on given index then temp.value is changed with asked value and return true otherwise false
      return true;
    }
    return false;
  }
  // Reason why we do undefined/return list in get method and true/false in set method bcuz in get method,
  // My Method
  // insert(index, value) {
  //   if (index === 0) return this.unshift(value);
  //   if (index === this.length) return this.push(value);
  //   if (index < 0 || index > this.length) return false;
  //   const newNode = new Node(value);
  //   let temp = this.get(index - 1);
  //   let exTempNext = temp.next;
  //   temp.next = newNode;
  //   newNode.next = exTempNext;
  //   this.length++;
  //   return true;
  // }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let before = this.get(index-1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null; 
    this.length--;
  }
}
let myLinkedList = new LinkedList(53);
myLinkedList.push(42);
myLinkedList.push(52);
myLinkedList.push(17);
myLinkedList.push(23);
myLinkedList.pop();
myLinkedList.shift();
myLinkedList.unshift(4);
// myLinkedList.set(0, 14);
myLinkedList.insert(1, 92);
console.log(myLinkedList);
// console.log(myLinkedList.get(0).value);
