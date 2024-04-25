class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  // WRITE THE POP METHOD HERE //
  //                           //
  //                           //
  //                           //
  //                           //
  ///////////////////////////////
  pop() {
    // If the stack is empty, return null
    if (this.isEmpty()) return null;
    // Otherwise, remove and return the top element of the stack
    return this.stackList.pop();
  }
}
