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
      if (index === 0) return this.unshift(value);
      if (index === this.length) return this.push(value);
  
      const newNode = new Node(value);
      let temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return this;
    }
    remove(index) {
      if (index < 0 || index > this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length) return this.pop();
  
      let before = this.get(index - 1);
      let temp = before.next;
      before.next = temp.next;
      temp.next = null;
      this.length--;
      return this;
    }
    reverse() {
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let next = temp.next;
      let prev = null;
      for (let i = 0; i < this.length; i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
      }
    }
  
    // My Solution
    /*
    // For 9 length which is odd & gives result of 4.5, should do rounding up to 5. For 8 length, which give result of 4 on division by 2, should get 5 bcuz higher priority
  
    findMiddleNode() {
      if (!this.head) return null;
      let temp = this.head;
      let pre = this.head;
      let length = 1;
      while (temp.next) {
        temp = temp.next;
        length++;
      }
      for (let i = 0; i <= length / 2 - 1; i++) {
        pre = pre.next;
        // console.log(`index ${i} and pre is ${pre.value}`);
      }
      return pre;
    }
    */
    findMiddleNode() {
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  }
  // Odd (1 value)
  /*
  let myLinkedList = new LinkedList(42);
  myLinkedList.push(78);
  myLinkedList.push(68);
  myLinkedList.push(97);
  myLinkedList.push(23); // middle
  myLinkedList.push(47);
  myLinkedList.push(72);
  myLinkedList.push(14);
  myLinkedList.push(24);
  */
  
  // Even (2 values so round up)
  // /*
  let myLinkedList = new LinkedList(42);
  myLinkedList.push(78);
  myLinkedList.push(68);
  myLinkedList.push(97); // middle
  myLinkedList.push(23); // middle (high priority)
  myLinkedList.push(47);
  myLinkedList.push(72);
  myLinkedList.push(14);
  // */
  
  console.log(myLinkedList.findMiddleNode());
  
  /* Instructor's explanation
  
      Initialize two pointers, slow and fast, both pointing to the head of the linked list.
  
      Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node faster's pointer (faster.next) is pointing to after the current fast's node).
  0
      Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).
  
      Since the fast pointer moves twice as fast as the slow pointer, by the time the fast pointer reaches the end of the list or goes beyond it, the slow pointer will be at the middle node.
  
      When the loop terminates, return the slow pointer, which now points to the middle node.
  
  
  In the case of an even number of nodes, the fast pointer will reach the end of the list, while the slow pointer will point to the first middle node (the one closer to the head). For an odd number of nodes, the fast pointer will go beyond the end of the list, and the slow pointer will point to the exact middle node.
  
  */
  