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
    if (index < 0 || index > this.length) return false;
    let temp = this.get(index);
    temp.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let temp = this.get(index);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // If index at 0 then remove value through shift method
    if (index === this.length-1) return this.pop(); // If index at end then remove value through pop method. We're doing this.length-1 obviously bcuz LL is 0-based so counting starts from 0. If LL is [12,32,14] then last index is 2 {counting starts from 0,1,2} while length is 3

    let before = this.get(index - 1); // Will use get method and substract it by 1 to reach previous index
    let temp = before.next; // Instead of using get method again which comes under O(n) and iterates, can simply have it's value as before's next which is technically our index
    before.next = temp.next; // Now will change pointer of our before's next to temp's next so before ignores temp
    temp.next = null; // Will then simply remove temp's next so it's taken out of LL entirely
    this.length--; // Will decrease the length of LL after value's removal
    return this;
  }
}

const myLinkedList = new LinkedList(53);
myLinkedList.push(24);
myLinkedList.push(21);
myLinkedList.push(6);
myLinkedList.insert(1, 9);
myLinkedList.remove(0);
console.log(myLinkedList);
