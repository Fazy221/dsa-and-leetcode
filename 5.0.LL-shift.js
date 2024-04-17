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
if (this.length === 0) {
this.head = null;
this.tail = null;
}
this.length--;
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
let temp = this.head; // As we want to return what value is supposed to be removed (first item of LL in this case) so store in variable
this.head = this.head.next; // Will now assign head to the next value so formal value remain only assigned to temp
this.length--; // Decrease length so if there was 1 value in LL for which above all rules also apply same, length will decrease to 0 and below method happen
if (this.length === 0) {
this.tail = null; // this.tail is set to null so it points to same value as this.head as defined in og constructer
}
temp.next = null; // To break off pointer connection with new head, will make next as null
return temp;
}
}

const myLinkedList = new LinkedList(5);
myLinkedList.push(4);
myLinkedList.shift();
console.log(myLinkedList);
