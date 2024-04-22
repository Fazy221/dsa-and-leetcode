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
        // As this.head means head is pointing to sth, !this.head mean it point to falsy value like null then make both head and tail point to new node. Reason why we don't set this.tail to this.head like in construct because we're not initializing linked list but instead, adding new node. 
        this.head = newNode;
        this.tail = newNode;
        } else {
        this.tail.next = newNode; // As tail is pointing to last item {value:7, next:null}; we'll set next to new Node so it'll be like {value:7, next:{value:4, next:null}};
        this.tail = newNode; // Then we can set tail to the new node
        }
        this.length++; // Increase length of LL
        return this; // Return complete linkedlist
    }
    }
    let LinkedLis = new LinkedList(7);
    console.log(LinkedLis.push(4));

// Reason why it's "this.head = newNode; this.tail = newNode;" in if block of push method and "this.head = newNode; this.head = this.tail" in the construct because in the constructor, it's setting up the initial state of the linked list, while in the push method, it's handling the case where a new node is added to an empty linked list.