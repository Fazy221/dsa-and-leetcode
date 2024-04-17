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
}
const myLinkedList = new LinkedList(53);
myLinkedList.push(24);
myLinkedList.push(21);
myLinkedList.push(6);
myLinkedList.insert(1, 9);

/* 
Reason why when returning true in if/else block, it isn't limited to that particular scope only: 
In the set method you provided for a LinkedList in JavaScript, if the if condition if (temp) evaluates to true, then the code inside the if block is executed, the value at the specified index is updated, and true is returned. Once a return statement is encountered in a function, the function immediately exits, and no further code in that function is executed. Therefore, if the if condition is true, the function returns true and does not reach the return false statement.

If the if condition is false, meaning temp is undefined (indicating that the index is out of bounds), then the if block is skipped, and the function reaches the return false statement, which returns false to indicate that the value was not set because the index was invalid.
*/
