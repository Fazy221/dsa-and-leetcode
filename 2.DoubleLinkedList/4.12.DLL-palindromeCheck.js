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

  // WRITE THE ISPALINDROME METHOD HERE //
  //                                    //
  //                                    //
  //                                    //
  //                                    //
  ////////////////////////////////////////
  isPalindrome() {
    // If the list has 0 or 1 nodes, it's a palindrome
    if (this.length <= 1) return true;

    // Initialize forwardNode at the head and backwardNode at the tail
    let forwardNode = this.head;
    let backwardNode = this.tail;

    // Iterate through half of the list
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      // If forwardNode value is not equal to backwardNode value,
      // it's not a palindrome
      if (forwardNode.value !== backwardNode.value) return false;

      // Move forwardNode to the next node and backwardNode to the previous node
      forwardNode = forwardNode.next;
      backwardNode = backwardNode.prev;
    }

    // If all pairs match, it's a palindrome
    return true;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(1);

console.log("List 1:");
myDoublyLinkedList.printList();
console.log("Is List 1 a palindrome? " + myDoublyLinkedList.isPalindrome());

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);

console.log("\nList 2:");
myDoublyLinkedList2.printList();
console.log("Is List 2 a palindrome? " + myDoublyLinkedList2.isPalindrome());

/*
    EXPECTED OUTPUT:
    ----------------
    List 1:
    1
    2
    3
    2
    1
    Is List 1 a palindrome? true

    List 2:
    1
    2
    3
    4
    5
    Is List 2 a palindrome? false
*/

/* 
Instructor's explanation
The isPalindrome() method determines whether the doubly linked list is a palindrome, meaning the values of the nodes read the same forward and backward.

Here's a step-by-step explanation of the logic:


    If the length of the list is less than or equal to 1, return true, as the list is considered a palindrome by default.

    Initialize two pointers: forwardNode, pointing to the head of the doubly linked list, and backwardNode, pointing to the tail of the list. These pointers will be used to traverse the list from both ends.

    Use a for loop to iterate through half of the list, stopping at the middle node. The loop iterates Math.floor(this.length / 2) times, which ensures that it covers half of the list, regardless of whether the list has an even or odd number of nodes.

    Inside the loop, compare the values of the nodes pointed to by forwardNode and backwardNode. If the values are not equal, return false, as the list is not a palindrome.

    If the values are equal, update the forwardNode pointer to point to the next node, and update the backwardNode pointer to point to the previous node. This step allows the loop to continue comparing the node values from both ends of the list.

    After the loop, return true, as all pairs of nodes have been compared and their values are equal, meaning the list is a palindrome.



*/
