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
      this.tail = null;
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
      // If head is pointing to null (empty LL) then will make it point to new node, same with tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Will make the head of LL as new node's next. This'll put it before LL's head
      this.head = newNode; // Will make the head point to new node so that becomes the new starting point
    }
    this.length++;
    return this;
  }
}
const myLinkedList = new LinkedList(7);
myLinkedList.unshift(3);
myLinkedList.unshift(5);
// myLinkedList.unshift(9);
// myLinkedList.pop();

console.log(myLinkedList);
