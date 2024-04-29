class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return null;
    }
    let temp = this.head;
    while (true) {
      if (newNode.value === temp.value) return false;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
        }
        temp = temp.right;
      }
      return false;
    }
  }
  contains(value) {
    if (this.root === null) return undefined;
    let temp = this.head;
    while (temp) {
      if (value < temp.value) {
        if (value === temp.left) {
          return this;
        }
        temp = temp.left;
      } else {
        if (value === temp.right) {
          return this;
        }
        temp = temp.right;
      }
    }
    return true;
  }
}
