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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
  }

  // WRITE THE FINDKTFROMEND METHOD HERE //
  //                                     //
  //                                     //
  //                                     //
  //                                     //
  /////////////////////////////////////////

  findKthFromEnd(k) {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Move fast pointer k steps ahead
    for (let i = 0; i < k; ++i) {
      // If fast reaches null, k is out of range
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    // Iterate until fast reaches the end
    while (fast !== null) {
      // Move slow and fast pointers one step
      slow = slow.next;
      fast = fast.next;
    }

    // When fast reaches end, slow is at kth from end
    return slow;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/

/*
Explanation through ChatGPT's help:
Let's say you have a linked list with the following nodes: `1 -> 2 -> 3 -> 4 -> 5 -> null`, and you want to find the 4th node from the end (k = 4).

1. **Initialization**:
   - Initially, `slow` and `fast` point to the head of the linked list, which is the node with value 1.

2. **Move `fast` pointer 4 steps forward**:
   - The `for` loop runs for i = 0 to i = 3, moving the `fast` pointer 4 steps forward.
   - After the loop, `fast` points to the node with value 4.

3. **Traverse the linked list**:
   - Now, the `while` loop starts, and both `slow` and `fast` move forward simultaneously.
   - In the first iteration, `slow` moves to the node with value 1, and `fast` moves to the node with value 4.
   - In the second iteration, `slow` moves to the node with value 2, and `fast` moves to the node with value 5.
   - In the third iteration, `slow` moves to the node with value 3, and `fast` moves to `null`, as there is no next node after the node with value 5.

4. **Termination of the loop**:
   - The loop terminates when `fast` becomes `null`, indicating that it has reached the end of the linked list.

5. **Return the result**:
   - Since `slow` is now pointing to the 4th node from the end, which is the node with value 3, the function will return the node with value 3.

So, in this example, the `findKthFromEnd(4)` function would return the node with value 3.

*/