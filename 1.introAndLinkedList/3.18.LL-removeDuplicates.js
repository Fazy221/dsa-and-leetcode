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

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REMOVEDUPLICATES METHOD HERE //
  //                                        //
  //                                        //
  //                                        //
  //                                        //
  ////////////////////////////////////////////
  removeDuplicates() {
    // Create a Set to store unique values
    const values = new Set();
    // Initialize previous pointer as null
    let previous = null;
    // Initialize current pointer at head
    let current = this.head;

    // Iterate through the list
    while (current !== null) {
      // If value already exists in the set
      if (values.has(current.value)) {
        // Remove the duplicate node by updating previous' next
        previous.next = current.next;
        // Decrement list length
        this.length -= 1;
      } else {
        // Add unique value to the set
        values.add(current.value);
        // Update previous pointer to current node
        previous = current;
      }
      // Move current pointer to the next node
      current = current.next;
    }
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/

/*
Instructor's explanation
The removeDuplicates() function is used to remove duplicate nodes from a linked list. The function traverses the list and removes nodes with duplicate values while maintaining the relative order of the remaining nodes.

Here's a step-by-step explanation of the logic:


    Create a Set named values to store the unique values of the linked list nodes.

    Initialize two pointers: previous, initially set to null, and current, pointing to the head of the linked list.

    Iterate through the linked list using a while loop that continues as long as current is not null: a. Check if values contains the current node's value. If it does, it means the node is a duplicate. Update previous.next to point to current.next (skipping the current node) and decrement the list length by 1. b. If values does not contain the current node's value, add the value to the set and update previous to point to the current node. c. Move the current pointer to the next node.


The function has a time complexity of O(n), where n is the number of nodes in the list, as it traverses the list only once. The space complexity is also O(n), as it uses a set to store unique node values.

*/

/* 
ChatGPT's explanation
 Let's use the provided linked list [42, 213, 213, 52, 36, 52, 95] and demonstrate how the removeDuplicates() method will process it:

    Initialization:
        Initially, the linked list looks like this: 42 -> 213 -> 213 -> 52 -> 36 -> 52 -> 95 -> null.
        The values Set is empty.
        The previous and current pointers are both null.

    Iterate through the linked list:

        Step 1: Process the first node (42):
            values Set: {42}
            previous: null, current: 42 -> 213 -> 213 -> 52 -> 36 -> 52 -> 95 -> null

        Step 2: Process the second node (213):
            values Set: {42, 213}
            previous: 42, current: 213 -> 213 -> 52 -> 36 -> 52 -> 95 -> null

        Step 3: Process the third node (213):
            Duplicate found (213 already exists in values).
            Remove 213 from the linked list by updating previous.next to current.next, skipping over the duplicate.
            Decrement the length of the linked list (this.length -= 1).
            values Set: {42, 213}
            previous: 42, current: 213 -> 52 -> 36 -> 52 -> 95 -> null

        Step 4: Process the fourth node (52):
            values Set: {42, 213, 52}
            previous: 213, current: 52 -> 36 -> 52 -> 95 -> null

        Step 5: Process the fifth node (36):
            values Set: {42, 213, 52, 36}
            previous: 52, current: 36 -> 52 -> 95 -> null

        Step 6: Process the sixth node (52):
            Duplicate found (52 already exists in values).
            Remove 52 from the linked list by updating previous.next to current.next, skipping over the duplicate.
            Decrement the length of the linked list (this.length -= 1).
            values Set: {42, 213, 52, 36}
            previous: 36, current: 52 -> 95 -> null

        Step 7: Process the seventh node (95):
            values Set: {42, 213, 52, 36, 95}
            previous: 52, current: 95 -> null

        Step 8: End of the linked list. Return the modified linked list.

    Result:
        After removing duplicates, the linked list becomes: 42 -> 213 -> 52 -> 36 -> 95 -> null.

This process ensures that duplicate nodes are removed from the linked list, leaving only unique values.

*/
