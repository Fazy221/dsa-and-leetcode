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
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
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
    if(index < this.length / 2) {
      for(let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for(let i = this.length; i > index; i--) {
        temp =  temp.prev;
      }
    }
    return temp;
  }
  set(index,value) {
    let val = this.get(index);
    if(val) {
      val.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    const newNode = new Node(value);
    let pre = this.get(index);
    let aft = pre.next;
    newNode.prev = pre;
    pre.next = newNode;
    aft.prev = newNode;
    newNode.next = aft;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let before = this.get(index - 1); // 1: 24 (before index)
    let temp = before.next; // 2: 28 (original index)
    let after = temp.next; // 3: 36 (after index)
    before.next = after; // 1: 24 before link with 3: 36 after
    after.prev = before; // 3: 36 after link with 1:24 before
    temp.prev = null; // 2: 28 link prev removed
    temp.next = null; // 2: 28 link next removed
    this.length--;
    return temp;
  }
  swapFirstAndLast() {
    if(this.length < 2) return false;
    let temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp;
  }
  reverse() {
    let current = this.head;
    let temp = null;

    while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

const myDoubleLinkedList = new DoubleLinkedList(12);
myDoubleLinkedList.push(24);
myDoubleLinkedList.push(36);
myDoubleLinkedList.push(48);
myDoubleLinkedList.push(72);
myDoubleLinkedList.push(96);
myDoubleLinkedList.push(105);
// myDoubleLinkedList.unshift(6);
// console.log(myDoubleLinkedList);
// console.log(myDoubleLinkedList.get(1));
// myDoubleLinkedList.set(1,25)
// myDoubleLinkedList.insert(2,28);
// myDoubleLinkedList.remove(2);
myDoubleLinkedList.swapFirstAndLast();

console.log(myDoubleLinkedList);
