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
    let temp = this.get(index);
    while (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value); // If value we're supposed to insert is at first index then can easily use shortcut of unshift method
    if (index === this.length) return this.push(value); // Same as unshift, if value has to be inserted at end of LL then use push method

    const newNode = new Node(value); // Will pass in value so new node is created witholding it
    let temp = this.get(index - 1); // Will get behind asked index through get method shortcut so we can insert value at the asked index 
    newNode.next = temp.next; // Now for new value, will first make it's next same as temp's so they're pointing to same next
    temp.next = newNode; // Now will change temp's next to newNode. Now temp is pointing to new value and that new value is pointing to it's next value which was formally pointed by temp so it's easily squeezed b/w 2
    this.length++; // Increase length of LL
    return this; // Return LL
  }
}
const myLinkedList = new LinkedList(53);
myLinkedList.push(24);
myLinkedList.push(21);
myLinkedList.push(6);
myLinkedList.insert(1, 9);
