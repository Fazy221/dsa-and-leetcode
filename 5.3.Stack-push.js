class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    // Now we'll use push method which looks pretty similar to shift method from LL since we're putting in start
    push(value) {
      const newNode = new Node(value);
      if(this.length === 0) { // same as using if(!this.top) like in Ll (!this.head)
        this.top = newNOde;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length++;
      return this;
    }
}

let myStack = new Stack(2);
myStack.push(13);
myStack.push(92); // latest
console.log(myStack);