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
    if (!this.head) return undefined; // we could also say !this.tail or this.length === 0 like instructor
    // Since we've prev available now, we don't need to go O(n) path of iterating throughout LL to get value previous to this.tail. Will simply use prev for it to make this.tail point to that then cut off connection by declaring null from both ends.
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  /* 
// We can also use this method if want because it does the same thing
  if(this.length === 0) return undefined;
  if(this.length === 1) {
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
  */
}
