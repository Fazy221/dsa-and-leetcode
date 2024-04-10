    "use strict";

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
        this.tail = null;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined; // If head is pointing to null then it should return undefined
        let temp = this.head; // Temp will be head
        let pre = this.head; // Pre will be head
        while (temp.next) { // While temp is pointing to next value which isn't null...
        pre = temp; // Keep pre as temp
        temp = temp.next; // Keep temp as it's next value so loop can continue
        }
        this.tail = pre; // At end when temp.next = null, pre will be at 2nd last item pointing to last item so we can easily set tail for it
        this.tail.next = null; // As we set new tail, it's next will be set as null thus removing temp value
        this.length--; // length of linkedlist will be reduced by 1
        if (this.length === 0) { // In case if pop called so many times, it resulted in no node...
        this.head = null; // Will set head as null
        this.tail = null; // Will set tail as null
        }
        return temp; // Will return value which was put out instead of returning whole list like temp
    }
    }
    const myLinkedList = new LinkedList(7);
    myLinkedList.push(8);
    myLinkedList.pop();

    console.log(myLinkedList)

    <!-- This is O(n) {linear time complexity} since while loop is used to iterate through arr -->
