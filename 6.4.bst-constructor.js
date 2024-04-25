class Node {
  constructor(value) {
    this.value = value;
    // Will have left and right when new node is created
    this.left = null;
    this.right = null;
  }
}

// One method (create node at time of initialization)
class BST {
  constructor(value) {
    const newNode = new Node(value);
    // Since everywhere, pointers are used like this.head and this.tail in LL, we need to have something pointing to parent so it could be newNode
    this.root = newNode;
  }
}

// Second method (can initialize tree without creating node along and this way will be used further in course)
class BST {
  constructor() {
    this.root = null;
  }
}

// Using second method now
let myTree = new BST();
myTree;
