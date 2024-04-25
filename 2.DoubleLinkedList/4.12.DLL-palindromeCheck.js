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



GPT4-Turbo Explanation
Explaining the isPalindrome Method in a Doubly Linked List

The isPalindrome method in the DoublyLinkedList class checks whether the sequence of values stored in the list reads the same forward and backward. A doubly linked list's structure, which includes pointers to both the next and previous nodes, makes this check particularly efficient. Here's a detailed breakdown of how the method works:

Step 1: Base Case Check

    If the list has zero or one node, it is automatically considered a palindrome. This is because a single element or no element reads the same in both directions.

    if (this.length <= 1) return true;


Step 2: Initialize Pointers

    Two pointers are initialized: forwardNode starts at the head of the list, and backwardNode starts at the tail. These pointers will move towards each other, comparing the values of the nodes they point to.

    let forwardNode = this.head;
    let backwardNode = this.tail;


Step 3: Loop Through Half of the List

    The function uses a loop to traverse half of the list (Math.floor(this.length / 2) iterations). The loop ensures that each element from the start is compared to its corresponding element from the end.

    for (let i = 0; i < Math.floor(this.length / 2); i++) {


Step 4: Compare Node Values

    Within the loop, the values of the nodes pointed to by forwardNode and backwardNode are compared. If any pair of values does not match, the function immediately returns false, indicating that the list is not a palindrome.

    if (forwardNode.value !== backwardNode.value) return false;


Step 5: Move the Pointers

    If the current pair of nodes has matching values, forwardNode is moved to the next node in the list (towards the center), and backwardNode is moved to the previous node (also towards the center).

    forwardNode = forwardNode.next;
    backwardNode = backwardNode.prev;


Step 6: Final Determination

    After the loop completes without finding any mismatches, the function returns true, as it confirms that the list is a palindrome.

    return true;


Practical Example Execution

    Consider a doubly linked list with values [1, 2, 3, 2, 1]:
        The loop will iterate twice (half of the list length which is 5).
        First iteration: Compare 1 (head) with 1 (tail) - they match. Move forwardNode to 2 and backwardNode to the second 2.
        Second iteration: Compare 2 with 2 - they match again. Move inside.
        No mismatches found, hence the list is confirmed as a palindrome and true is returned.


This method efficiently utilizes the double-link nature of the list, allowing for an effective and straightforward palindrome check by simultaneously moving in from both ends of the list.

*/
