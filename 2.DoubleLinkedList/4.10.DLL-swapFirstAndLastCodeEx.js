class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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

  // WRITE THE SWAPFIRST METHOD HERE //
  //                                 //
  //                                 //
  //                                 //
  //                                 //
  /////////////////////////////////////
  /*
    swapFirstLast(){
        if(!this.head) return undefined;
        let headVal = this.head.value;
        this.head.value = this.tail.value;
        this.tail.value = headVal;
    } */
  swapFirstLast() {
    // If the list has less than two nodes, do nothing
    if (this.length < 2) return;
    // Store the head value in a temporary variable
    const temp = this.head.value;
    // Set head value to the value of the tail node
    this.head.value = this.tail.value;
    // Set tail value to the stored value of the head node
    this.tail.value = temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original list:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapFirstLast();
console.log("\nList after swapping first and last elements:");
myDoublyLinkedList.printList();

// Create a new list with an even number of elements
let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal list 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapFirstLast();
console.log("\nList 2 after swapping first and last elements:");
myDoublyLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after swapping first and last elements:
    5
    2
    3
    4
    1
    Original list 2:
    1
    2
    3
    4
    5
    6
    List 2 after swapping first and last elements:
    6
    2
    3
    4
    5
    1
*/

/* 
Instructor's explanation:
The swapFirstLast() method swaps the values of the first and last nodes. The method only swaps the values, not the nodes themselves.

Here's a step-by-step explanation of the logic:


    Check if the length of the doubly linked list is less than 2. If it is, there's no need to swap any nodes, so return immediately.

    If the length is 2 or more, create a temporary variable called temp, and assign the value of the head node to it. This variable will be used to store the value of the first node temporarily while swapping the values.

    Update the value of the head node to be the value of the tail node. This effectively swaps the value of the first node with the value of the last node.

    Update the value of the tail node to be the value stored in the temp variable. This completes the swapping of the first and last node values.

*/
