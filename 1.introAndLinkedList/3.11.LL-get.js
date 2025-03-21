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
    const temp = this.head;
    const pre = this.head;
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
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined; // If we're asking for index which don't exist then return err. Reason why we're doing >= length because length starts counting from 1 same as arr
    let temp = this.head; // Will set temp same as this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next; // if we put index 2, it'll move temp 2 times from this.head to the right
    }
    return temp; // This will return the temp which is the value temp is pointing to after for loop has ended it's run
  }
}
let myLinkedList = new LinkedList(32);
myLinkedList.push(54);
myLinkedList.push(21);
console.log(myLinkedList);
console.log(myLinkedList.get(2).value);
console.log(myLinkedList.get(1).value);
console.log(myLinkedList.get(0).value);
console.log(myLinkedList.get(3));

/* Reason why we do index >= this.length and not index > length:
In the get method you've provided for a LinkedList in JavaScript, the condition index >= this.length is used to handle cases where the index is out of bounds of the LinkedList. If the index is less than 0 or greater than or equal to the length of the LinkedList, it means the index is invalid, and the method returns undefined.

For example, if the length of the LinkedList is 5 and you try to access the element at index 5 (which is the last index in a zero-based index), you should get the element at the last index, which is valid. In this case, index >= this.length ensures that index 5 is considered valid because it is equal to the length of the LinkedList.

If you were to use index > this.length instead, accessing the element at the last index would actually be considered invalid because index would be greater than this.length. This would result in undefined being returned for a valid access to the last element.

In summary, using index >= this.length allows the get method to correctly handle cases where the index is within the bounds of the LinkedList, including accessing the element at the last index.
*/
